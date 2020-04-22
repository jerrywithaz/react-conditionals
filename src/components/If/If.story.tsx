import React from 'react';
import randomNumber from 'lodash/random';
import If from '.';

export default { 
    title: "If", 
    component: If 
};

const number = randomNumber(0, 100);

const data = number > 50 ? {
    number: number
} : null;

export const withBooleanConditions = (): JSX.Element => (
    <React.Fragment>
        <If condition={number == 0}>
            <div>Number was 0</div>
        </If>
        <If condition={number > 0 && number <= 30}>
            <div>Number was greater than 0 and less than or equal to 30</div>
        </If>
        <If condition={number > 30 && number <= 60}>
            <div>Number was greater than 30 and less than or equal to 60</div>
        </If>
        <If condition={number > 60 && number < 100}>
            <div>Number was greater than 60 and less than 100</div>
        </If>
        <If condition={number === 100}>
            <div>Number was 100.</div>
        </If>
    </React.Fragment>
);

export const withOpionalData = (): JSX.Element => (
    <React.Fragment>
        <If data={data} render={data => (
            <div>Number was {data.number}</div>
        )}/>
        <If condition={!data}>
            <div>Number was greater than 50</div>
        </If>
    </React.Fragment>
);