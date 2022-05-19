import type { History } from 'history';
import { observer } from 'mobx-react';
import type { FC } from 'react';
import React from 'react';
import { Router } from 'react-router';

interface IAppBrowserRouter {
  history: History;
}

export const AppBrowserRouter: FC<IAppBrowserRouter> = observer(({ history, children }) => {
  const [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  });

  React.useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router location={state.location} navigationType={state.action} navigator={history}>
      {children}
    </Router>
  );
});
