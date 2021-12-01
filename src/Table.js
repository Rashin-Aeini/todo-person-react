import React, { useState } from "react";
import { Link } from "react-router-dom";


 const Table =(props) =>{

    const TableHeader =() =>{ 
        return(
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
        )
    };
    
    const TableAction =(props) =>{
        const Details ='/crud/'+ props.id;
        return(
            <div>
                <Link className='btn btn-primary' to={Details} >Details</Link>
                <button className='btn btn-danger mx-3'>Delete</button>
                <button className='btn btn-warning'>Edit</button>
            </div>
        )
      
    };
    const TableRow =(props) =>{
        return(
            <tr>
                <td> {props.person.id}</td>
                <td>{props.person.firstName} {props.person.lastName}</td>
                <td>{props.person.email}</td>
               <td> <TableAction id={props.person.id}/> </td>
    
            </tr>
        )
      
    };
    const [action,setAction]= useState('');
    


     return (
         <table className='table table-strip table-hover'>
             <TableHeader/>
             <tbody>
                 {props.persons.map((item) => ( <TableRow person={item} />) )}
             </tbody>

         </table>
     )
  
 };

 

 export default Table;