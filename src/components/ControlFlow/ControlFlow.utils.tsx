import React from 'react';
import invariant from 'invariant';
import getConditionResult from '../../utils/getConditionResult';
import { IfProps } from '../If';
import { ElseIfProps } from '../ElseIf';

/**
 * Validates a control flow component and ensures that it is in the correct position.
 * @param childType The current `React Component`.
 * @param index The index of the current child.
 * @param numberOfChildren The number of children.
 */
function validateDecisionStructure(
    childType: React.ComponentType, 
    index: number,
    numberOfChildren: number
): void {

    const displayName = childType.displayName;

    const ifFirstChild = index === 0;
    const isMiddleChild = index > 0 && index < numberOfChildren - 1;
    const isLastChild = index === numberOfChildren - 1;

    const firstChildIsNotIfComponent = ifFirstChild ? displayName === "If" : true;
    const middleChildAreNotElseIfComponents = isMiddleChild ? displayName === "ElseIf" : true;
    const lastChildShouldBeElseOrElseIfComponent = isLastChild ? displayName === "ElseIf" || displayName === "Else" : true;
    
    
    invariant(firstChildIsNotIfComponent, "The first child of a `ControlFlow` should be an `If` components.");
    invariant(middleChildAreNotElseIfComponents, "All middle children of a `ControlFlow` should be `ElseIf` components.");
    invariant(lastChildShouldBeElseOrElseIfComponent, "The last child of a `ControlFlow` should be either an `ElseIf` or an `Else`.");

}

/**
 * Evaluates each control statement component and returns the one that should be rendered.
 * @param children The `React` children to use.
 */
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