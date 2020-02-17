import React from 'react';
import Home from './Views/Home';
import About from './Views/About';
import Menu from './Views/Menu';
import NoMatch from './Views/NoMatch';
import './Views/Home/home.css';
import NavBar from './Components/Header';
import {Route, Switch, Redirect} from 'react-router-dom';

import Contact from './Views/Contact';
import Event from './Events/index';


export const Routes = () => {
return (
<div className="fullBody">
<NavBar/>
<Switch>
    <Route exact path="/Home" component={Home}/>
    <Route exact path="/">
        <Redirect to="/Home"/>
    </Route>
    <Route exact path="/About" component={About}/>
    <Route exact path="/Menu" component={Menu}/>
    <Route exact path="/Contact" component={Contact}/>
    <Route exact path="/Event" component={Event}/>
    {/* <Route exact path="/Topics" component={TopicList}/>
    <Route exact path="/Topics/:topicId" component={TopicList}/> */}
    <Route component ={NoMatch} />
</Switch>

</div>
)
}