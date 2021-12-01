import axios from "axios";
import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";

const API_URL = 'https://localhost:44342/People'; 

const PersonDetails = (props) =>{

    const[person,setPerson]= useState({});
    useEffect(async()=> {

        await axios.get(API_URL + '/' + props.id).then((response) => { 
            console.log("RESPONSE: ", response);
            if(response.status === 200){
                setPerson(response.data);
            }

        } );
    });


    return(
        <div className="card">
            <div className='card-header bg-primary '>
                Information
             </div>
             <div className='card-body'>
                 <h1 className='card-title'>

                     {person.id}
                 </h1>
                 <p>
                     id:{person.id}
                 </p>
                 <p>
                     Name:{person.firstName} {person.lastName}
                 </p>
                 <p>
                     Email: {person.email}
                 </p>


             </div>
             <div className='card-footer bg-dark'>

                 <Link className='btn btn-outline-danger' to='/crud'>Back</Link>

             </div>

        </div>
    )
}
export default PersonDetails;