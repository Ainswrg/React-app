import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";

const AppRouter = () => {
    const isAuth = true;
    return (
        isAuth
            ? <Switch>
                {privateRoutes.map(route =>
                    <Route component={route.component} path={route.path} exact={route.exact}/>
                )}
                <Redirect to='/posts' />
            </Switch>
            : <Switch>
                {publicRoutes.map(route =>
                    <Route component={route.component} path={route.path} exact={route.exact}/>
                )}
                <Redirect to='/posts' />
            </Switch>

    );
};

export default AppRouter;