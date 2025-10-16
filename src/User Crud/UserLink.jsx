import React, { useState, useEffect } from "react";
import { UserData } from "./UserData";
import { AddUser } from "./AddUser";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export function UserLinks() {
    const [userData, setUserData] = useState([]);
    const [activeTab, setActiveTab] = useState("userList");
    const [editingUser, setEditingUser] = useState(null); // <-- Added
    const url = "http://localhost:3000/users";

    const fetchUserData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.error("Failed to fetch users:", error);
        }
    };

    // Called from UserData component when Edit is clicked
    const handleEditUser = (user) => {
        setEditingUser(user);
        setActiveTab("addUser");
    };

    useEffect(() => {
        if (activeTab === 'userList') {
            fetchUserData();
            setEditingUser(null); // Reset editing state when switching back
        }
    }, [activeTab]);

    return (
        <Tabs
            activeKey={activeTab}
            onSelect={(key) => setActiveTab(key)}
            id="fill-tab-example"
            className="mb-3"
            fill
        >
            <Tab eventKey="userList" title="User List">
                <UserData
                    userData={userData}
                    url={url}
                    setUserData={setUserData}
                    onEditUser={handleEditUser} // <-- Pass callback
                />
            </Tab>

            <Tab eventKey="addUser" title={editingUser ? 'Edit User' : 'Add User'}>
                <AddUser
                    user={editingUser}
                    setActiveTab={setActiveTab}
                    setEditingUser={setEditingUser}
                />
                {/* Pass user data if editing */}
            </Tab>
        </Tabs>
    );
}
