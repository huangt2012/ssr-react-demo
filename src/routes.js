import React from "react";
import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/home';
import Personal from "./pages/personal";

const RoutesList = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>首页</Link>
        </li>
        <li>
          <Link to='/mine'>个人中心</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/mine" element={<Personal />} />
      </Routes>
    </div>
  )
}

export const routeConfig = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/mine',
    component: Personal
  }
]

export default RoutesList