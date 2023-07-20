import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Root from '../root/Root';
import routeList from './Routes.config'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Root />}>
                    {
                        routeList.map((route, i) => {
                            return (
                                <Route
                                    path={route.path}
                                    element={route.element}
                                    key={i}
                                />
                            )
                        })
                    }
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;