import { useRoutes } from "react-router-dom";
import AppIndex from "./AppIndex";
// import SignUp from "../Components/SignUp";
import Home from "../Components/Home";
import SignUpp from "../Components/SignUpp";
import PublishRide from "../Components/PublishRide";
import Profile from "../Components/Profile";
import SearchResults from "../Components/SearchResults";
import RideDetails from "../Components/RideDetails";
import RideRequests from "../Components/RideRequests";
import RiderProfile from "../Components/RiderProfile";
import ReportRide from "../Components/ReportRide";
import BookRide from "../Components/BookRide";
import WriteReport from "../Components/WriteReport";
import PaymentMethod from "../Components/PaymentMethod";

function AppNavigation() {
  let element = useRoutes([
    {
      path: "/",
      element: <SignUpp />,
      children: [{ index: true }],
    },
    {
      element: <AppIndex />,
      children: [
        { index: true, element: <AppIndex /> },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/publish-ride",
          element: <PublishRide />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/search-results",
          element: <SearchResults />,
        },
        {
          path: "/ride-details",
          element: <RideDetails />,
        },
        {
          path: "/ride-requests",
          element: <RideRequests />,
        },
        {
          path: "/rider-profile",
          element: <RiderProfile />,
        },
        {
          path: "/report-ride",
          element: <ReportRide />,
        },
        {
          path: "/book-ride",
          element: <BookRide />,
        },
        {
          path: "/write-report",
          element: <WriteReport />,
        },
        {
          path: "/payment-method",
          element: <PaymentMethod />,
        },
      ],
    },
    // {
    //   path: '/register',
    //   element: <Register />,
    // },
  ]);
  return element;
}
export default AppNavigation;
