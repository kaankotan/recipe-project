import React from 'react'
import { BrowserRouter, Route, RouteComponentProps, Switch } from 'react-router-dom'
import routes from './config/routes';
import AuthRoute from './components/AuthRoute';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) =>
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(routeProps: RouteComponentProps<any>) => {
                if (route.protected)
                  return <AuthRoute><route.component  {...routeProps} /></AuthRoute>;

                return <route.component  {...routeProps} />;
              }}
            />)}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
