import { ProtectedAnonymous } from "../components/protectedAnonymous/ProtectedAnonymous";
import { ProtectedLoggedIn } from "../components/protectedLoggedIn/ProtectedLoggedIn";
import { ProtectedLoggedInAndAnon } from "../components/protectedLoggedInAndAnon/ProtectedLoggedInAndAnon";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";
import RootPage from "../pages/root/RootPage";
import SignUpPage from "../pages/signup/SignUpPage";

const NotFound = () => {
    return (
        <h1>Seems like you are lost...</h1>
    )
}

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
        element: <ProtectedLoggedInAndAnon Component={NotFound} />
    }
]

export default routeList;