import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/styles/app.scss';
import configureStore from './store/configureStore';
import ErrorBoundary from './utils/ErrorBoundary';
import {sampleRoute} from "./features/sample/sampleRoutes"
// import Page404 from './shared_elements/Page404'

const store = configureStore();
function App() {
  return (
    <div className="">
      <Provider store={store}>
        <Router>
          <ErrorBoundary>
            <Switch>
            { sampleRoute.map(({path, component, key}, index) =>
                  <Route exact path={path} component={component} key={key} />
                )}
            </Switch>
          </ErrorBoundary>
        </Router>
      </Provider>
    </div>
  );
}
export default App;
