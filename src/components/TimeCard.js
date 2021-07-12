import React,{useState, useEffect} from 'react';
import firebase from '../utilities/firebase';

export default function TimeCard({empId}) {

    const [zikList,setzikList]=useState([]);

    useEffect(()=>{
        const clockRef=firebase.database().ref("name").child(empId);
        clockRef.on('value',(snapshopt)=>{
          const zikies=snapshopt.val();
          const zikList=[];
          for(let id in zikies){
            zikList.push(zikies[id]);
          }
          setzikList(zikList);
        });
        
  },[]);

    return (
        <div className="text-center">
            {/* <h3>{sik}h : {lik}m : {zik}s</h3> */}
           {zikList.map((item)=><h3>{item.hour} h : {item.minute} m : {item.second} s</h3>)}
        </div>
    )
}
