import React,{useState, useEffect} from 'react';
import firebase from '../utilities/firebase';
import TimeCard from './TimeCard';
 import {
     Link, useLocation
   } from "react-router-dom";

export default function Clock() {
    const location=useLocation();
    const {empName}=location.state;
    const {empId}=location.state;

    const buttonStyle1={
        margin:"10px 0 20px 15px"
    }
    
   
        const [hour, setHour] = useState(0);
        const [minute, setMinute] = useState(0);
        const [second, setSecond] = useState(0);
        const [stop, setStop]= useState(true);
        //const [log,setLog] = useState(false);
        // const [zik,setZik]=useState();
        // const [lik,setLik]=useState();
        // const [sik,setSik]=useState();

        const handleLog=()=>{
            // setZik(second);
            // setLik(minute);
            // setSik(hour);
            setStop(true);
            //setLog(true);

            //const clockRef=firebase.database().ref("time");
            const clockRef=firebase.database().ref("name").child(empId);
        const titleObject={
            hour,
            minute,
            second,
        }
            clockRef.push(titleObject);
       
        
        }

        
   
        

    const ClockIn=()=>{
        setStop(false);
    }


    const ClockOut=()=>{
        setStop(true);
    }

    
    useEffect(()=>{
        let interval=null;
        if(!stop){
            interval=setInterval(()=>{
                if(minute>1){
                    setHour(hour+1);
                    setMinute(0);
                    clearInterval(interval);
                }
                if(second>59){
                    setMinute(minute+1);
                    setSecond(0);
                    clearInterval(interval);
                }
                if(second<=59){
                    setSecond(second+1);
                }
            },1000);
        }
        else{
            clearInterval(interval);
        }
        
        
        return ()=>{
            clearInterval(interval);
        }

    });
    
    return (
        <div className="text-center">
            <Link to="/"><button className="btn btn-sm btn-success" style={buttonStyle1}>Back</button></Link>
            <hr />
            <h3 style={buttonStyle1}>{empName}</h3>
            <h2 style={buttonStyle1}>{hour} : {minute} : {second}</h2>
            <button className="btn btn-sm btn-success" onClick={ClockIn} style={buttonStyle1}>Clock In</button>
            {/* <button className="btn btn-sm btn-danger" onClick={ClockOut} style={buttonStyle1}>Clock Out</button> */}
            <Link to="/"><button className="btn btn-sm btn-danger" onClick={handleLog} style={buttonStyle1}>Clock Out</button></Link>
            <button className="btn btn-sm btn-warning" onClick={handleLog} style={buttonStyle1}>Break</button>
          {/* { log ?  <h3>{sik}h : {lik}m : {zik}s</h3> : <p></p>} */}
          { <TimeCard empId={empId} key={'index'}/>}
          
          
            
        </div>
    )
}


