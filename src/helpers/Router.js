import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import CategoriesPage from "../views/CategoriesPage";
import firebase from "firebase/compat/app";
import ItemsPage from "../views/ItemsPage";
import ProfilePage from "../views/ProfilePage";
import { HomePage } from "../views/HomePage";
import LoginPage from "../views/LoginPage";
import { NotFound } from "../views/NotFound";

function Router({ user, setUser, phoroURL }) {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage user={user} setUser={setUser} />} />
            <Route 
                path="/"
                element={
                     <PrivateRoute>
                        <HomePage user={user} setUser={setUser} />
                    </PrivateRoute>
                }
            />
            <Route 
                path="/items" 
                element={
                    <PrivateRoute>
                        <ItemsPage user={user} setUser={setUser} />
                    </PrivateRoute>
                }>
            </Route>
            <Route 
                path="/categories" 
                element={
                    <PrivateRoute>
                        <CategoriesPage user={user} setUser={setUser} />
                    </PrivateRoute>
                }>
            </Route>
            <Route 
                path="/profile" 
                element={
                    <PrivateRoute>
                        <ProfilePage user={user} setUser={setUser} />
                    </PrivateRoute>
                 }>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

const PrivateRoute = ({ children }) => {
    const user = firebase.auth().currentUser;
    return user ? children : <Navigate to="/login" />
};

export default Router;