import './App.css'
import { RecoilRoot } from 'recoil'
import { createBrowserRouter, RouteObject, RouterProvider, Outlet, ScrollRestoration } from 'react-router-dom'
import { Top } from './Top'
import { Profile } from './Profile'
import { Opponent } from './Opponent'
import { Battle } from './Battle'
import { FC } from 'react'

const Layout:FC = () => {
  return (
    <div>
      <Outlet />
      <footer className="padding_top_10">
        <span className="little_font_size color_gray">© 2024 y74h1116.com</span>
      </footer>
      <ScrollRestoration />
    </div>
  );
};

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Top/> },
      { path: "/profile", element: <Profile/>},
      { path: "/opponent", element: <Opponent/>},
      { path: "/battle", element: <Battle/>},
      { path: "/*", element: <Top/>},
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  )
};

export default App
