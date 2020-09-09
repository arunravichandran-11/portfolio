import React from 'react';
import ReactDOM from 'react-dom';
import routes from './app.routing';

const elementToRender = document.getElementById('app-root');
const componentToRender = routes;

ReactDOM.render(componentToRender, elementToRender);

/**
 * Below code is comment for oflline - will be enabled later
 */
// if (process.env.NODE_ENV === 'production') {
//   const runtime = require('offline-plugin/runtime');

//   runtime.install({
//     onUpdateReady() {
//       runtime.applyUpdate();
//     },
//     onUpdated() {
//       window.location.reload();
//     },
//   });
// }
