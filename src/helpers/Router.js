import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import CategoriesPage from "../views/CategoriesPage";
import firebase from "firebase/compat/app";
import ItemsPage from "../views/ItemsPage";
import ProfilePage from "../views/ProfilePage";
import { HomePage } from "../views/HomePage";
import LoginPage from "../views/LoginPage";
import { NotFound } from "../views/NotFound";
import CategoryItemsPage from "../views/CategoryItemsPage";
import RemovedItemsPage from "../views/RemovedItemsPage";
import FiveMostUselessPage from "../views/FiveMostUselessPage";

function Router({ user, setUser, photoURL, userCategories, setUserCategories, userItems, setUserItems }) {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage user={user} setUser={setUser} />} />
            <Route 
                path="/"
                element={
                    <PrivateRoute>
                        <HomePage 
                            user={user}
                            userCategories={userCategories}
                            setUserCategories={setUserCategories}
                            userItems={userItems}
                            setUserItems={setUserItems} />
                    </PrivateRoute>
                }
            />
            <Route 
                path="/items" 
                element={
                    <PrivateRoute>
                        <ItemsPage 
                            user={user}
                            setUser={setUser}
                            userItems={userItems}
                            setUserItems={setUserItems} />
                    </PrivateRoute>
                }>
            </Route>
            <Route 
                path="/items/removed" 
                element={
                    <PrivateRoute>
                        <RemovedItemsPage 
                            user={user}
                            setUser={setUser}
                            userItems={userItems}
                            setUserItems={setUserItems} />
                    </PrivateRoute>
                }>
            </Route>
            <Route
                path="/items/:categoryId"
                element={
                    <PrivateRoute>
                        <CategoryItemsPage
                            user={user}
                            setUser={setUser}
                            userItems={userItems}
                            setUserItems={setUserItems} />
                    </PrivateRoute>
                }>
            </Route>
            <Route
                path="/five-most-useless"
                element={
                    <PrivateRoute>
                        <FiveMostUselessPage
                            user={user}
                            setUser={setUser}
                            userItems={userItems}
                            setUserItems={setUserItems} />
                    </PrivateRoute>
                }>
            </Route>
            <Route 
                path="/categories" 
                element={
                    <PrivateRoute>
                        <CategoriesPage 
                            user={user}
                            userCategories={userCategories}
                            setUserCategories={setUserCategories} />
                    </PrivateRoute>
                }>
            </Route>
            <Route 
                path="/profile" 
                element={
                    <PrivateRoute>
                        <ProfilePage 
                            user={user} 
                            setUser={setUser} 
                            photoURL={photoURL}
                        />
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