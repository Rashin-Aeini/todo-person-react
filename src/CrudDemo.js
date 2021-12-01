import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import PersonDetails from "./PersonDetails";
import Table from "./Table";


const API_URL = 'https://localhost:44342/People'; 

 const CrudDemo =() =>{

    const params = useParams();
    console.log(params);
    const [persons,setPersons] = useState([]);
    const { register, handleSubmit, formState: {errors} }= useForm();
    const saveData = async (data) =>{ 
        await axios.post(API_URL , data ).then((response) => { 
            console.log("RESPONSE: ", response);
            if(response.status === 201){
                setReload(!reload);
            }

        } );

    };
    const[reload,setReload] = useState(false);

    
    useEffect(async() => {

        if(params.id===0)
        {
            await axios.get(API_URL).then((response) => { 
                console.log("RESPONSE: ", response);
                if(response.status === 200){
                    setPersons(response.data);
                }
    
            } );
        }
        
    } , [reload] ); 


    console.log(useParams());


    if(params.id===0){

    

    return (
        
        <div>
            <div className='mb-3'>
                <form onSubmit={handleSubmit(saveData)}>
                    <div className='row mt-3'>
                        <div className="col-6">
                            <input type="text" className="form-control" {...register("firstName", {required: true} )} placeholder="Enter FirstName" />
                            {errors.firstName && <span className="text-danger">FirstName is Required!</span>}
                        </div>
                        <div className="col-6">
                            <input type="text" className="form-control" {...register("lastName", {required: true} )} placeholder="Enter LastName" />
                            {errors.lastName && <span className="text-danger">LastName is Required!</span>}
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className="col">
                            <input type="text" className="form-control" {...register("email", {required: true} )} placeholder="Enter Email" />
                            {errors.email && <span className="text-danger">Email is Required!</span>}
                        </div>
                        
                    </div>
                    <div className='row mt-3'>
                        <div className="col">
                            <input type="text" className="form-control" {...register("title", {required: true} )} placeholder="Enter title" />
                            {errors.title && <span className="text-danger">Title is Required!</span>}
                        </div>
                        
                    </div>
                    <div className='row mt-3'>
                        <div className="col">
                            <button className='btn btn-success'type='submit'>Add</button>
                            <button className='btn btn-danger ms-3' type='reset'>Reset</button>
                        </div>
                        
                    </div>

                </form>

            </div>
        <Table persons={persons}/>
        </div>
    )
    }else
    {
        return(
           <PersonDetails id={params.id}/>
        )
    }

};
 export default CrudDemo;