import { ElementType, lazy, Suspense } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen';
import useAuth from '../hooks/useAuth';
import MainLayout from '../layouts/main';

const Loadable = (Component: ElementType) =>
  function Loader(props: any) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { pathname } = useLocation();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isAuthenticated } = useAuth();

    const isDashboard = pathname.includes('/dashboard') && isAuthenticated;

    return (
      <Suspense fallback={<LoadingScreen isDashboard={isDashboard} />}>
        <Component {...props} />
      </Suspense>
    );
  };

export default function Router() {
  return useRoutes([
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'register',
          element: <Register />,
        },
      ],
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          element: <HomePage />,
          index: true,
        },
      ],
    },
    // {
    //   path: 'products',
    //   element: <ProductLayout />,
    //   children: [
    //     { element: <ProductPage />, index: true },
    //     { path: 'new', element: <Chat /> },
    //     { path: ':conversationKey', element: <Chat /> },
    //   ],
    // },
  ]);
}

// MAIN
const HomePage = Loadable(lazy(() => import('../pages/Home')));
// AUTH
const Login = Loadable(lazy(() => import('../pages/Login')));
const Register = Loadable(lazy(() => import('../pages/Register')));
