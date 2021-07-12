import React from 'react'
import { Link } from 'react-router-dom';
import firebase from '../utilities/firebase';

export default function Cards({name}) {
    const buttonStyle={
        margin:"0 0 20px 0px"
    };
    const buttonStyle1={
        margin:"0 0 20px 15px"
    }
    const deleteMe= ()=>{
        const clockRef=firebase.database().ref("name").child(name.id);
        clockRef.remove();
    }
    
    

    return (
        <div className="container my-3">
            <h4>{name.title}</h4>
            <button className="btn btn-sm btn-danger" onClick={deleteMe} style={buttonStyle}>Delete</button>
            { <Link to={{pathname:"/clock", state:{empName:name.title,empId:name.id}}}><button className="btn btn-sm btn-success" style={buttonStyle1}>Get In</button></Link> }
            {/* {<Clock name={title}/>} */}
            <hr />
        </div>
    )
}
