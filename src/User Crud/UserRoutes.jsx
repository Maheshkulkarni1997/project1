import { Route } from "react-router";
import { AddUser } from "./AddUser";
import { EditUser } from "./EditUser";

export const userRoutes = [

    // <Route path="/userdata" element={<UserData isActive={true} />} />,
    <Route path="/adduser" element={<AddUser />} />,
    <Route path="/edit/:id" element={<EditUser />} />

]
