what is? 
- useRef
A mechanism which allows:
    - persistence between renders 
    - storage of a mutable value that will not trigger re-renders when mutated
    - to use you assign the result of useRef to a variable. You can then access the value
    via the `current` property on that variable.
    ```jsx
        const myRef = useRef(0);
        myRef.current = 1;
        myRef.current = myReff.current + 1; 
    ```
    - why would we want to store a value in useRef? updating the value would trigger a re-render, one that we may not want. For exmple storing the previous value of some input. we can attach the old value to a useRef that is updated on the back of a useState update without triggering two re-renders
    - interacting with external objects that shouldn't trigger react lifecycle updates
    - attaching to DOM elements that don't need to trigger re-renders 

- useMemo

- useState
