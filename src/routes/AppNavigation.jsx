import { useRoutes } from 'react-router-dom'
import AppIndex from './AppIndex'
import SignUp from '../Components/SignUp'
import Home from '../Components/Home'
import SignUpp from '../Components/SignUpp'

function AppNavigation() {
  let element = useRoutes([
    {
      path: '/',
      element: <SignUpp />,
      children: [{ index: true }],
    },
    {
      element: <AppIndex />,
      children: [
        { index: true, element: <AppIndex /> },
        {
          path: '/home',
          element: <Home />,
        },
      ],
    },
    // {
    //   path: '/register',
    //   element: <Register />,
    // },
  ])
  return element
}
export default AppNavigation
