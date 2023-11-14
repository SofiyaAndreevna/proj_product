import { useTheme } from 'app/providers/ThemeProvider';
import React from 'react'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames';
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string;
}

export const Navbar = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <div className={classNames(cls.navbar)}>
    <Link to={'/'}>MAIN</Link>
    <Link to={'/about'}>About</Link></div>
  )
}
