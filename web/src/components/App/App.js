import React, { useEffect, Suspense, useCallback } from 'react';

import { Route, Navigate, Routes } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Main from '../Main';
import Layout from '../Layout';

import { retrieveThemeMode, setThemeMode } from '../../store/theme';
import { retrieveToken } from '../../store/auth';

import LazyProgress from '../LazyProgress';

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.token !== null);
  const isAuthInit = useSelector((state) => state.auth.isInit);
  const palette = useSelector((state) => state.theme.palette);
  const theme = createTheme({ palette: palette });

  const handleThemeModeChange = useCallback(
    (event) => {
      const theme = event.matches ? 'dark' : 'light';
      dispatch(setThemeMode(theme));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(retrieveToken());
    dispatch(retrieveThemeMode());
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', handleThemeModeChange);
    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', handleThemeModeChange);
    };
  }, [dispatch, handleThemeModeChange]);

  let routes = (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/" element={<Navigate replace to="/" />} />
    </Routes>
  );

  if (isAuth) {
    routes = (
      <Routes>
        <Route path="/" component={<Main />} />
        <Route path="/" element={<Navigate replace to="/" />} />
      </Routes>
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
