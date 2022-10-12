import React,{useState,useEffect} from "react";
import prkSlotDataServices from "../services/parkingSlot.js";
import {Link} from "react-router-dom";
















const AddToSlot_UI=props=>{
 
  let prkSlotInitailState=""

  //update or not
  let editing = false


  const [addSlot,setAddSlot] = useState(prkSlotInitailState);
  const [submitted,setSubmitted] = useState(false);

 const handleInputChange = event =>{

  setAddSlot(event.target.value);

 }

 const saveSlot = ()=>{

    var data={

      text:addSlot,
      name:props.user.name,
      user_id:props.user.id,
      Parking_Lot_Id:"",

    };

     if(!editing){

      prkSlotDataServices.createSlot(data)

      .then(response=>{
        setSubmitted(true);
        console.log(response.data);
      })

      .catch(e=>{
        console.log(e);
      });


     }
 };







 return(

   <div className="submitForm">
 

                      <h1>Hi</h1>

                

    </div>


  );



}

export default AddToSlot_UI;
