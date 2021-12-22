import React from "react";
import { Route, Routes } from "react-router-dom";
import CategoriesPage from "../views/CategoriesPage";
import HomePage from "../views/HomePage";
import ItemsPage from "../views/ItemsPage";
import ProfilePage from "../views/ProfilePage";

function Router({ user, setUser, phoroURL }) {
    return (
        <Routes>
            <Route path="/" element={<HomePage user={user} setUser={setUser} />} />
            <Route path="/items" element={<ItemsPage user={user} setUser={setUser} />} />
            <Route path="/categories" element={<CategoriesPage user={user} setUser={setUser} />} />
            <Route path="/profile" element={<ProfilePage user={user} setUser={setUser} />} />
        </Routes>
    );
};

export default Router;