<p align="center">
  <img src="src/assets/images/logo.png" height="100" />
</p>

Github repository for the ecodash project, a state of the art dashboard designed for CHIBB.

Features:
* [Vue.js 2](https://github.com/vuejs/vue)
* [Vue Router 2](https://github.com/vuejs/vue-router)
* [Axios](https://github.com/mzabriskie/axios)
* [Animate.css](https://github.com/daneden/animate.css)
* [Babel](https://babeljs.io/)
* [Bootstrap 4](https://v4-alpha.getbootstrap.com/)
* [BrowserSync](https://www.browsersync.io/)
* [ESLint](http://eslint.org/)
* [Font Awesome](http://fontawesome.io/)
* [SASS](http://sass-lang.com/)
* [Webpack 2](https://webpack.js.org/)
* [Yarn](https://yarnpkg.com/en/docs/install)
* [Velocity](http://velocityjs.org/)
* [Vuex](https://github.com/vuejs/vuex)
* [Vue2 Google Maps](https://github.com/xkjyeah/vue-google-maps)

<p align="center">
  <img src="http://i.imgur.com/KZ8W4uA.png" height="600" />
</p>

## Getting started

1. Install [Yarn](https://yarnpkg.com/en/docs/install) globally.
2. Run `yarn` from the project root to install all dependencies.
3. While Yarn is installing everything, create your constants file. See the template below.
3. Run `yarn start` to run the project.

## Constants file
In order to run this project, you need to have a constants file. The path to this file should be `src/config/constants.js`. Here is an example of the content of this file.
Note that all these constants are required.

```javascript
export const API_BASE = 'http://address.to/your/api';  
export const MAPS_KEY = 'API key for Google Maps';  
export const LS_NAMESPACE = 'ecodash_';
```