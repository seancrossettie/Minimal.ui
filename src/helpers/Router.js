import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../views/HomePage";

function Router({ user, setUser }) {
    return (
        <Routes>
            <Route path="/" element={<HomePage user={user} setUser={setUser} />} />
        </Routes>
    );
};

export default Router;