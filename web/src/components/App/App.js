// React
import React, { lazy, Suspense, useCallback, useEffect } from 'react';

// Router
import { Redirect, Route, Switch } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';

// Material
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  // Should be fixed in v5 release. See https://bit.ly/2Ali8Ak.
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';

// Components
import Layout from '../Layout';
import Main from '../Main';

// Store
import { getStats, getThemeMode, getToken, setThemeMode } from '../../store/actions';

// Styles
import { LazyProgress } from './App-styles';

// Code Splitting
const lazyComp = {
  Terms: lazy(() => {
    return import('../Terms');
  }),
  Activate: lazy(() => {
    return import('../Activate');
  }),
  SignUp: lazy(() => {
    return import('../SignUp');
  }),
};

const App = () => {
  // Variables
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.data.token !== null);
  const isAuthInit = useSelector((state) => state.auth.isInit);
  const palette = useSelector((state) => state.theme.palette);
  const theme = createMuiTheme({ palette });

  // Handlers
  const handleThemeModeChange = useCallback(
    (event) => {
      const theme = event.matches ? 'dark' : 'light';
      dispatch(setThemeMode(theme));
    },
    [dispatch]
  );

  // Hooks
  useEffect(() => {
    dispatch(getToken());
    dispatch(getThemeMode());
    dispatch(getStats());
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', handleThemeModeChange);
    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', handleThemeModeChange);
    };
  }, [dispatch, handleThemeModeChange]);

  // JSX
  let routes = (
    <Switch>
      <Route path="/activate/:token" component={lazyComp.Activate} />
      <Route path="/signup" component={lazyComp.SignUp} />
      <Route path="/terms" component={lazyComp.Terms} />
      <Route path="/" component={Main} exact />
      <Redirect to="/" />
    </Switch>
  );

  if (isAuth) {
    routes = (
      <Switch>
        <Route path="/terms" component={lazyComp.Terms} />
        <Route path="/" component={Main} exact />
        <Redirect to="/" />
      </Switch>
    );
  }

  let layout = <LazyProgress />;
  if (isAuthInit) {
    layout = (
      <Layout>
        <Suspense fallback={<LazyProgress />}>{routes}</Suspense>
      </Layout>
    );
  }

  const view = (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {layout}
    </ThemeProvider>
  );
  return view;
};

export default App;
