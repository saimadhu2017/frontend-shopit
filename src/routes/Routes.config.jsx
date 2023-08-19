import { ProtectedAnonymous } from "../components/protectedAnonymous/ProtectedAnonymous";
import { ProtectedLoggedIn } from "../components/protectedLoggedIn/ProtectedLoggedIn";
import { ProtectedLoggedInAndAnon } from "../components/protectedLoggedInAndAnon/ProtectedLoggedInAndAnon";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";
import NotFoundPage from "../pages/notFound/NotFoundPage";
import RootPage from "../pages/root/RootPage";
import SignUpPage from "../pages/signup/SignUpPage";

const routeList = [
    {
        path: '',
        element: <ProtectedLoggedInAndAnon Component={RootPage} />
    },
    {
        path: 'home',
        element: <ProtectedLoggedIn Component={HomePage} />
    },
    {
        path: 'login',
        element: <ProtectedAnonymous Component={LoginPage} />
    },
    {
        path: 'signup',
        element: <ProtectedAnonymous Component={SignUpPage} />
    },
    {
        path: '*',
        element: <ProtectedLoggedInAndAnon Component={NotFoundPage} />
    }
]

export default routeList;