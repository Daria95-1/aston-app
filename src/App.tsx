import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Header, Footer } from '@components'
import { ROUTES } from "@constants";
import {
    Authorization,
    Registration,
    MainPage,
    Favorites,
    ErrorPage,
} from '@pages'
import { setUser } from "@slices/user-slice";

function App() {
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        const currentUserDataJSON = sessionStorage.getItem("userData");

        if (!currentUserDataJSON) {
            return;
        }

        const currentUserData = JSON.parse(currentUserDataJSON);

        dispatch(setUser({ ...currentUserData, roleId: Number(currentUserData.roleId) }));
    }, [dispatch]);

    return (
        <>
            <Header />
            <Routes>
                <Route path={ROUTES.REGISTER} element={<Registration />} />
                <Route path={ROUTES.LOGIN} element={<Authorization />} />
                <Route path={ROUTES.MAIN_PAGE} element={<MainPage />} />
                <Route path={ROUTES.FAVORITES} element={<Favorites />} />
                <Route path={ROUTES.NOT_FOUND} element={<ErrorPage />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App;
