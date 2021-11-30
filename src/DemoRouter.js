import Header from './Header';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const DemoRouter =() => {
    return (
        <Router>
            <Header/>
            <div className='container '>
                <Switch> 
                <Route exact path="/" component={Welcome} /> 
                <Route  path="/home" component={Home} /> 
                <Route  path="/person" component={Person} />     
                <Route exact path="/about" component={AboutUs} />             

                </Switch>
            </div>
        </Router>
    )
};


const Welcome =()=> {
    return(<p>welcome </p>)
};

const Home =()=> {
    return(<p> Home</p>)
};

const Person =()=> {
   
    return(<p> Person </p>)
};

const AboutUs =()=> {
    return(<p> About</p>)
};


export default DemoRouter;