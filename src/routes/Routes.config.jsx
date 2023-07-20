import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";
import SignUpPage from "../pages/signup/SignUpPage";

const routeList = [
    {
        path: 'home',
        element: <HomePage />
    },
    {
        path: 'login',
        element: <LoginPage />
    },
    {
        path: 'signup',
        element: <SignUpPage />
    },
    {
        path: '*',
        element: <h1>Seems like you are lost...</h1>
    }
]

export default routeList;