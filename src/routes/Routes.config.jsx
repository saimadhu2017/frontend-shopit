import { ProtectedAnonymous } from "../components/protectedAnonymous/ProtectedAnonymous";
import { ProtectedLoggedIn } from "../components/protectedLoggedIn/ProtectedLoggedIn";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";
import SignUpPage from "../pages/signup/SignUpPage";

const routeList = [
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
        element: <h1>Seems like you are lost...</h1>
    }
]

export default routeList;