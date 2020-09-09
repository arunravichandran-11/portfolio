import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './app.js';

import BookShelfLoader from './components/Loaders/book-shelf-loader';

const appRoutes = (
  <Router>
    <Suspense
      fallback={
        <div>
          <BookShelfLoader />
        </div>
      }
    >
      <App />
    </Suspense>
  </Router>
);

export default appRoutes;
