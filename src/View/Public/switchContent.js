import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Register from './login/register';
import Login from './login/login';
import Inicio from './cie/cie';
class Content extends React.Component{
    render(){
        return(
        <Switch>
            <Route exact path="/cie" component={Inicio}></Route>
            <Route exact path="/signup" component={Login}></Route>
            <Route exact path="/signin" component={Register}></Route>
        </Switch>     
        );
    }
}


export default Content;