import React,{useState, useEffect} from 'react';
import firebase from '../utilities/firebase';
import Cards from './Cards';

export default function EmployeesList() {
    const [nameList,setNameList]=useState();

  useEffect(()=>{
        const clockRef=firebase.database().ref("name");
        clockRef.on('value',(snapshopt)=>{
          const names=snapshopt.val();
          const nameList=[];
          for(let id in names){
            nameList.push({id,...names[id]});
          }
          setNameList(nameList);
        });
        
  },[]);
  
    return (
        <div>
             {nameList ? nameList.map((name,index)=> <Cards name={name} key={index}/>) : ''}
        </div>
    )
}
