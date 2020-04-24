import React from 'react';
import BubblePage from './BubblePage'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => {

    if(localStorage.getItem('token')){
        return <Route component={BubblePage} />
    } else {
        return <Redirect to="/login" />
    }
}

export default PrivateRoute;