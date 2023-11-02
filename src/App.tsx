import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MainAsync } from './pages/MainPage.async';
import { AboutPageAcync } from './pages/AboutPage.async';
import { Suspense } from 'react';
import { useTheme } from './theme/useTheme';
import './styles/index.scss';
import { classNames } from './helpers/classNames/classNames';

const App = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={() => toggleTheme()}>Toggle</button>
      <Link to={'/'}>MAIN</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainAsync />} />
          <Route path={'/about'} element={<AboutPageAcync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
