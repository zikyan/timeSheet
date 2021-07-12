import React,{useState} from 'react';
import firebase from '../utilities/firebase';

export default function AddEmployee() {

    const cssStyle={
        margin:"10px 0 0 0 "
    }

   

    const [title,setTitle]=useState('');

    const handleChange=(e)=>{
        setTitle(e.target.value);
    }

    const handleClick=()=>{
        const clockRef=firebase.database().ref("name");
        const titleObject={
            title,
            
        }
        if(title){
            clockRef.push(titleObject);
        }
    }
    
    const submit=(e)=>{
        e.preventDefault();
        if(!title){
            alert("Name cannot be empty");
        }
        setTitle("");
    }
    return (
        <div className="container my-3">
            <form onSubmit={submit}>
                <h3>Add Employee</h3>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Your Name</label>
                    <input type="name" value={title} onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <button onClick={handleClick} className="btn btn-sm btn-primary">Add Employee</button>
            </form>
            <h3 style={cssStyle}>Employees List</h3>
            <hr />
        </div>
    )
}
