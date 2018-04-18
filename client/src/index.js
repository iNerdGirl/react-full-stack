import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Books from './Books';
import Authors from './Authors';
import NewBook from './NewBook';

import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return <BrowserRouter>
      <div>
        <Route path="/home" component={App} />
        <Route path="/books" component={Books} />
        <Route path="/authors" component={Authors} />
        <Route path="/newbook" component={NewBook} />
      </div>
    </BrowserRouter>;
}

render(<Root />, document.getElementById('root'));
registerServiceWorker();
