# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React Js is a javascript library used to build resuable UI components. React trys to solve problems with state by use of reacts virtual DOM.

1. What does it mean to think in react?

I imagine it means to try and think through your code in the way react works by passing information down through compinents children? First time I've heard this term.

1. Describe state.

State is any portion of code that changes by user interaction or timed events or any other means of changing the value or "state" of an objects property.

1. Describe props.

Props are properties that are passed down from a parrent components to a child component. 

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect is a method that will envoke a function after all components are rendered. The method will also envoke the function after any state changes. To get the side effect to only envoke the function once, we can add an empty array to the methods second paramiter. To envoke the function only when a certan state or prop changes we put that state or prop variable in the second parameter.  
