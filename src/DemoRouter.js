import Header from './Header';
import React,{Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CrudDemo from './CrudDemo';


const DemoRouter =() => {
    return (
        <Fragment>
            <div className='container'>
              <Router>
                <Header/>
                   <Switch> 
                           <Route exact path="/" component={Welcome} /> 
                           <Route  path="/home" component={Home} /> 
                           <Route  path="/person" component={Person} />     
                           <Route  path="/about" component={AboutUs} />   
                           <Route  path="/crud/:id" component={CrudDemo} />  
                   </Switch>
            
                </Router>
             </div>
        </Fragment>
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