import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import RootLayout from './layouts/Rootlayout.jsx';
import PlantInfo from './pages/PlantInfo.jsx';
import axios from 'axios';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: ()=>fetch('https://openapi.programming-hero.com/api/plants'),
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: 'plant/:id',
        element: <PlantInfo/>,
        loader: ({params})=> axios(`https://openapi.programming-hero.com/api/plant/${params.id}`)
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
  {
    path: '*',
    element: <h1 className='text-2xl'>404: Page doesn't exist</h1>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
