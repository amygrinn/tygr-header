# Tygr Header

[Demo](https://tygr.info/download/@tygr/header/lib/demo)

This is a react component packaged for three environments: node, browser, and standalone.

- Node is reccommended. It does not package any dependencies into the code and will rely on you to install react and react-dom separately.

- Browser is for fast prototyping in the browser. You can add this component via a script tag. The react and react-dom script tags must be placed before the component script.

- Standalone is for projects that do not use react in any other component. It exposes the `mount` function, which takes an HTML element, and react and react-dom are built in and don't need to be installed separatey.

## Node

Installation:

```cmd
npm i --save-dev @tygr/header
```

Usage (jsx):

```jsx
import Header from '@tygr/header';

// Import styles. Make sure there is a style loader specified in your
// webpack config
import '@tygr/header/lib/tygr-header.min.css';

export default function MyComponent() {
  return (
    <div>
      <h1>Header usage example</h1>
      <Header />
    </div>
  );
}
```

## Browser

Usage:

When included via script tag, the component is exposed as a window library named 'TygrHeader'

```html
<html>
  <head>
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script src="https://tygr.info/download/@tygr/header/lib/tygr-header.min.js"></script>
    <link
      rel="stylesheet"
      href="https://tygr.info/download/@tygr/header/lib/tygr-header.min.css"
    />
  </head>
  <body>
    <div id="app"></div>

    <script type="text/babel">
      ReactDOM.render(<TygrHeader />, document.getElementById('app'));
    </script>
  </body>
</html>
```

## Standalone

Installation:

```cmd
npm i --save-dev @tygr/header
```

Usage:

```js
import header from '@tygr/header/lib/standalone';

const el = document.getElementById('app');

Header.mount(el);
```

You should not use the standalone version if you have multiple react components in your project.

## Customizing styles

Sass variables can be overridden if you accept responsibility for transpiling it into css. You can see an example of this setup in the `webpack.config.demo.js` configuration named `sass`.

Make sure to reassign the sass variables before importing the sass file:

```scss
$accent-1: white;
$accent-2: yellow;

@import '@tygr/header/lib/main';
```
