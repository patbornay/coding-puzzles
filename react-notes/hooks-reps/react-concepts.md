source: https://www.youtube.com/watch?v=wIyHSOugGGw 

# Index
1. Components
2. Props
3. Children Prop
4. Component composition
5. Rendering
6. State management 
7. Controller components
8. Hooks
9. Purity
10. Strict mode
11. Portals
12. Suspense
13. Error boundaries

# Components
1. they are all js functions `const thing = () => {}`
2. they return jsx 
    - can use dynamic value `{someVariable}` unlike static html
3. Empty react components are called react fragements
    - useful bc JS only allows functions to return one thing

# Props
1. properties of an object, each component comes with props
    - typically with TS one can define what props are expected for an obj
    - used for passing data to components 

# Children Prop
1. `props.children` to access child components of a component if it ever wraps components 

# Component composition 
1. Building complex UIs by combining smaller, reusable components together rather than creating monolithic components.
2. Parent and child props can allow for logical separations of concerns and build maintainable component trees

# Rendering
- Virtual DOM (vdom): what the DOM will look like when state changes 
- DOM: the actual (document object model) html that we see
- React compares the two and if there are changes it will update the DOM 
1. State: Has state changed? Then update the VDOM
2. Diffing: React "Diffs" the VDOM against the DOM
3. Reconciliation: React updates the DOM

# State management 
1. this is how react triggers the rerendering cycle
2. some libraries like react-query have 'reactive state' which basically means it will trigger a rerender

# Controller componets
- uses a useState value and has a predictable value
- typically how we manage an input in react
- setting the `value` prop to `undefined` will confused the component into thinking it is uncontroleld and then controlled again when the value is not `undefined`

# Hooks (main ones)
1. State hookes: useState / useReducer (manage state)
2. Context hooks: useContext (use data passed via context) avoid prop drilling 
3. Ref hooks: useRef reference html, pass the ref to an element and when needing to update the html directly you can do it via the ref
4. Effect hooks: connect with external systems and trigger behaviours that are depended on external systems
5. Performance hooks: useMemo / useCallback

# Purity
- how react components should work
- the same input should always return the same output
1. only return JSX
2. not change any variables that existed before rendering 

Impure example (dont do)
```jsx
let count = 0;
const Cup = () => {
    count = count + 1;
    return <div>{count}</count>
}
```

# Strict mode
- component that tells about mistakes or bad practice while developing 

# Portals 
- ideal for modals, dropdowns, tooltips
- move react components in to any selected html element
- for components that cant be displayed properly bc of the parents styling (modals, dropdowns, etc)
```jsx
<div>
    <p> I'm in the parent div.</p>
    {createPortal(
        <p>I'm in the document body</p>,
        document.body
    )}
</div>
```

# Suspense 
- component for loading states 
- use full for lazy-loading components 
```jsx
const Component = lazy(
    () => import('./Component')
)

<Suspense fallback={<Loading />}>
    <Component />
</Suspense>
```

# Error boundaries 
- catch app breaking errors and show a fallback component that something went wrong
```jsx
<ErrorBoundary FallbackComponent={Fallback}>
    <App />
</ErrorBoundary>
```