import React from 'react';
import { IfProps } from '../If';
import invariant from 'invariant';
import getConditionResult from '../../utils/getConditionResult';
import { ElseIfProps } from '../ElseIf';

function validateDecisionStructure(
    childType: React.ComponentType, 
    index: number,
    numberOfChildren: number
): void {
    const displayName = childType.displayName;
    const ifFirstChild = index === 0;
    const isMiddleChild = index > 0 && index < numberOfChildren - 1;
    const isLastChild = index === numberOfChildren - 1;
    const firstChildIsNotIfStatement = ifFirstChild ? displayName === "If" : true;
    const allOtherChildrenExceptLastAreElseIf = isMiddleChild ? displayName === "ElseIf" : true;
    const lastChildShouldBeElseOrElseIf = isLastChild ? displayName === "ElseIf" || displayName === "Else" : true;
    
    
    invariant(firstChildIsNotIfStatement, "The first child of a `Decision` should be an `If`.");
    invariant(allOtherChildrenExceptLastAreElseIf, "All children in a `Decision` after the first `If` should be an `ElseIf`.");
    invariant(lastChildShouldBeElseOrElseIf, "The last child of a `Decision` should be either an `ElseIf` or an `Else`.");

}

export function getDecisionComponent(children: React.ReactNode): React.ReactNode {

    const numberOfChildren = React.Children.count(children);

    let childToRender: React.ReactNode | null = null;
    
    React.Children.forEach(children, (child, index) => {

        if (!React.isValidElement(child)) {
            return;
        }

        if (child.type instanceof Function && "displayName" in child.type) {

            const childType = child.type as React.ComponentType;

            validateDecisionStructure(childType, index, numberOfChildren);

            if (childType.displayName === "If" || childType.displayName === "ElseIf") {

                const props = child.props as IfProps | ElseIfProps;

                const conditionResult = getConditionResult({
                    data: props.data,
                    condition: props.condition
                });
                
                if (conditionResult) {
                    childToRender = child;
                }
                
            }
            else {
                if (childToRender === null) {
                    childToRender = child;
                }
            }

        }
        
    });

    return childToRender;

}