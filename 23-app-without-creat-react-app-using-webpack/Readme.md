# Create a react app without create-react-app

We will need react and react-dom.
Then for webpack:
Webpack bundles/compiled all assets together into one javascript file.
webpack-dev-server library is used for live reloading app.
webpack-cli is used for creating build scripts.
Babel will be used for React uses es6 import, classes like stuff, so to transpile code to browser friendly code.

start command:
webpack-dev-server --mode development --open --hot

--open for opening the server when starting
--hot for hot reloading for reload when a file is modified and saved