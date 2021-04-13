import IRoute from "../interfaces/route";
import RegisterPage from "../pages/auth/register";
import HomePage from "../pages/home";




const routes: IRoute[] = [
    {
        path: '/',
        exact: true,
        component: HomePage,
        name: 'Home Page',
        protected: true
    },

    {
        path: '/register',
        exact: true,
        component: RegisterPage,
        name: 'Register Page',
        protected: false
    },
]

export default routes