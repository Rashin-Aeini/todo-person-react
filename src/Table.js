import React from "react";

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
    return(
        <div>
            <button className='btn btn-primary'>Details</button>
            <button className='btn btn-danger'>Delete</button>
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


 const Table =(props) =>{
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