import React, {useState } from 'react';
import Home from '../pages/home';
import AddBook from '../book/addBook';
import SignUp from '../auth/signUp';
import Login from '../auth/login';

const routes = {
    '/': () => <Home />,
    '/add': () => <AddBook request={'add'}/>,
    '/signup' : () => <SignUp />,
    '/login' : () => <Login />
}

export default routes;