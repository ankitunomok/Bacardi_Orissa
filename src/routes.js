import { Navigate, useRoutes } from "react-router-dom";
import Congratulations from "./views/Congratulations";
import Login from "./views/Login";
import Otp from "./views/Otp";
import TermConditions from "./views/TermConditions";

export const AppRoutes = () =>
    useRoutes([
        { path: "/", element: <Login /> },
        {
            path: "/",
            children: [
                { path: "otp", element: <Otp /> },
                { path: "term_conditions", element: <TermConditions /> },
                { path: "congratulations", element: <Congratulations /> },
            ],
        },
        { path: "*", element: <Navigate to="/" replace /> },
    ]);
