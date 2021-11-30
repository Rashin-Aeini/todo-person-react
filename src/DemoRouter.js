import Header from './Header';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CrudDemo from './CrudDemo';

const DemoRouter =() => {
    return (
        <Router>
            <Header/>
            <div className='container '>
                <Switch> 
                <Route exact path="/" component={Welcome} /> 
                <Route  path="/home" component={Home} /> 
                <Route  path="/person" component={Person} />     
                <Route  path="/about" component={AboutUs} />   
                <Route  path="/crud" component={CrudDemo} />            

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