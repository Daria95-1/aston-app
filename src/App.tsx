import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Footer } from "@components";
import { ROUTES } from "@constants";
import { Authorization, Registration, MainPage } from "@pages";
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
            <Routes>
                <Route path={ROUTES.REGISTER} element={<Registration />} />
                <Route path={ROUTES.LOGIN} element={<Authorization />} />
                <Route path={ROUTES.MAIN_PAGE} element={<MainPage />} />
                <Route path={ROUTES.NOT_FOUND} element={<div>Ошибка</div>} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
