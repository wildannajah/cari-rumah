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
      path: '*',
      // element: <LogoOnlyLayout />,
      children: [
        { path: 'landing', element: <Landing /> },
        // { path: 'coming-soon', element: <ComingSoon /> },
        // { path: 'maintenance', element: <Maintenance /> },
        // { path: 'pricing', element: <Pricing /> },
        // { path: 'payment', element: <Payment /> },
        // { path: '500', element: <Page500 /> },
        // { path: '404', element: <NotFound /> },
        // { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          element: <Home />,
          index: true,
        },
        {
          path: 'search',
          element: <Search />,
        },
        {
          path: 'liked',
          element: <Liked />,
        },
        {
          path: 'profile',
          element: <Profile />,
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
const Home = Loadable(lazy(() => import('../pages/Home')));
const Search = Loadable(lazy(() => import('../pages/Search')));
const Liked = Loadable(lazy(() => import('../pages/Liked')));
const Profile = Loadable(lazy(() => import('../pages/Profile')));
// AUTH
const Login = Loadable(lazy(() => import('../pages/Login')));
const Landing = Loadable(lazy(() => import('../pages/Landing')));
const Register = Loadable(lazy(() => import('../pages/Register')));
