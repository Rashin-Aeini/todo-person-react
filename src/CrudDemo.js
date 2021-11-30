import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "./Table";


const API_URL = 'https://localhost:44342/People'; 

const CrudDemo =() =>{

    const [persons,setPersons] = useState([]);
    const [person,setPerson] = useState({});
    const [display,setDisplay] = useState('');
    const [id,setId] = useState(0);

    useEffect(async() => {
        await axios.get(API_URL).then((response) => { 
            console.log("RESPONSE: ", response);
            if(response.status === 200){
                
               
                setPersons(response.data);
            }else {
               
              
            }
            

        } );
    }); 

    return (
        <Table persons={persons}/>
    )

};
 export default CrudDemo;