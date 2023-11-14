// import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { Suspense } from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
// import AboutPageAsync from 'pages/AboutPage';
// import { MainPage } from 'pages/MainPage';

const App = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={() => toggleTheme()}>Toggle</button>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
