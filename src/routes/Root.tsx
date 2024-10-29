import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Acceuil from '../pages/Acceuil';
import ErrorPage from '../pages/ErrorPage';
import CompteursListe from '../components/CompteursListe';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Acceuil />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/compteurs',
        element: <CompteursListe />
      }
    ],
  },
  
])

export default function Root() {
  return <RouterProvider router={router} />
}


