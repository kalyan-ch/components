# Components

A react app that shows different UI components. Project from udemy course

## React hooks

## Misc

1. get path of the current URL with `window.location.pathname`.
2. Navigate to a path without refreshing the window - `window.history.pushState({}, '', '/new-path')`.
3. How to better manage navigation link clinks - 
    1. Define a new component called link with a prop `to`
    2. define a handleClick function to prevent page refreshes with `event.preventdefault()`
    3. Have the component return `<a></a>` JSX tag.
4. When `history.pushState` is used, the window object emits a `popstate` event which can be used to get the pathname of the current page.
