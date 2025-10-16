import { Routes } from "react-router";
import { Route } from "react-router";
import { LoginPage } from "./practice/UseActionExample";
import Users from "./practice/DerivedState";
import { UserLinks } from "./User Crud/UserLink";
import { userRoutes } from "./User Crud/UserRoutes";


export const AppRoute = [
    <Route path="/" element={<h2>Home Page</h2>} />,
    <Route path="/loginpage" element={<LoginPage />} />,
    <Route path="/users" element={<Users />} />,
    <Route path="/user-link" element={<UserLinks />} />,
    ...userRoutes,
    <Route path="*" element={<h2>Page Not Found</h2>} />
];
