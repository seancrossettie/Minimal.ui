import React from "react";
import { Route, Routes } from "react-router-dom";
import CategoriesPage from "../views/CategoriesPage";
import HomePage from "../views/HomePage";
import ItemsPage from "../views/ItemsPage";

function Router({ user, setUser }) {
    return (
        <Routes>
            <Route path="/" element={<HomePage user={user} setUser={setUser} />} />
            <Route path="/items" element={<ItemsPage user={user} setUser={setUser} />} />
            <Route path="/categories" element={<CategoriesPage user={user} setUser={setUser} />} />
        </Routes>
    );
};

export default Router;