import { createBrowserRouter } from 'react-router-dom';
import { ROUTES_PATH } from '../constants/routes';
import App from '../App';
import { lazy } from 'react';
import Landing from '../pages/Landing';

const CreateAction = lazy(() => import('../pages/CreateAction'));
const ActionProgress = lazy(() => import('../pages/ActionProgress'));
const Retrospect = lazy(() => import('../pages/Retrospect'));
const ActionRecord = lazy(() => import('../pages/ActionRecord'));

const router = createBrowserRouter([
  {
    path: ROUTES_PATH.landing,
    element: <App />,
    errorElement: <>Error</>,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: ROUTES_PATH.create,
        element: <CreateAction />,
      },
      {
        path: `${ROUTES_PATH.inAction}/:actionId`,
        element: <ActionProgress />,
      },
      {
        path: `${ROUTES_PATH.retrospect}/:actionId`,
        element: <Retrospect />,
      },
      {
        path: ROUTES_PATH.record,
        element: <ActionRecord />,
      },
    ],
  },
]);

export default router;
