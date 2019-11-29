import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import  DocumentTitle from 'react-document-title';

import store from './reducer';
import Page from './pages/layout/page';
import strings from './components/strings';

render(
    <Provider store={store}>
      <DocumentTitle title={strings.title}>
        <Page />
      </DocumentTitle>
    </Provider>,
    document.getElementById('root'),
  );
