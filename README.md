# React Conditionals

Decalrative and performant conditional statements for React.

## Components

### If

The most basic component is the `If` component. The `If` component can be used in isolation to render a component if a condition is truthy.

#### Using Boolean Conditions

```tsx
import { If } from '@jerrywithaz/react-conditionals';

const Component = () => {
    return (
        <If condition={userIsActive}>
            <UserIsActiveHeader/>
        </If>
    );
}
```

#### Using With Objects

The `If` component accepts a data prop that can be used in combination with the
`render` prop. Using `data` instead of `condition` is useful for ensuring that
some set of data is available before rendering your component.

```tsx
import { If } from '@jerrywithaz/react-conditionals';

const Component = () => {
    return (
        <If data={userData} render={(userData) => (
            <User data={userData}/>
        )}/>
    );
}
```

### Control Flow

The `ControlFlow` component is for managing the control flow of a series of control statements i.e. if, elseif and else.
In order to use `ElseIf` or `Else` you must wrap them in a `ControlFlow` for them to work correctly.

```jsx
import { ControlFlow, If, ElseIf, Else } from '@jerrywithaz/react-conditionals';

const NumberDisplayer = () => (
    <ControlFlow>
        <If condition={number == 0}>
            <div>Number was 0</div>
        </If>
        <ElseIf condition={number > 0 && number <= 30}>
            <div>Number was greater than 0 and less than or equal to 30</div>
        </ElseIf>
        <ElseIf condition={number > 30 && number <= 60}>
            <div>Number was greater than 30 and less than or equal to 60</div>
        </ElseIf>
        <ElseIf condition={number > 60 && number < 100}>
            <div>Number was greater than 60 and less than 100</div>
        </ElseIf>
        <Else>
            <div>Number was 100.</div>
        </Else>
    </ControlFlow>
);
```
