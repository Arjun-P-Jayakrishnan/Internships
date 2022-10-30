import React,{useRef,useState,useEffect} from "react";
import prkSlotDataServices from "../services/parkingSlot.js";
import {Link} from "react-router-dom";



import  "../styling/addToSlot.css";
















const AddToSlot_UI=props=>{
 
  let prkSlotInitailState={
    name:"",
    user_id:"1",
    vehicleType:"scooter",
    slotType:"scooter",
  };
  //update or not
  let editing = false

  const [addSlot,setAddSlot] = useState(prkSlotInitailState);
  const [submitted,setSubmitted] = useState(false);

 const handleInputChange = event =>{

  const value=event.target.value

  setAddSlot({
    ...addSlot,
    [event.target.name]:value,
  });
  console.log(`the values being changed is ${JSON.stringify(addSlot)}`)



 }

 const saveSlot = ()=>{

    var data={
      name:addSlot.name,
      user_id:addSlot.user_id,
      vehicleType:addSlot.vehicleType,
      slotType:addSlot.slotType,
      date:new Date(),
      Parking_Lot_Id:"5eb3d668b31de5d588f4292",

    };

    console.log(`data being submitted ${JSON.stringify(data)} ${data.vehicleType}`)

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
      <div className="submitFormDesign">

        <label className="user_name form_label" htmlFor="description">user-Name</label>
        <input
          type="text"
          className="user_name form_input"
          id="text"
          required
          value={addSlot.name}
          onChange={handleInputChange}
          name="name"

        />
        <label className="form_label" htmlFor="description">user-Id</label>
        <input
          type="text"
          className="form_input"
          id="text"
          required
          value={addSlot.user_id}
          onChange={handleInputChange}
          name="user_id"

        />
        <label className="form_label" htmlFor="description">vehicle-Type</label> 

        <div className="form_input">
            <select required value={addSlot.vehicleType} onChange={handleInputChange} name="vehicleType">
              <option value='scooter'>scooter</option>
              <option value='car'>car</option>
              <option value='bus'>bus</option>
            </select>
        </div>

        <label className="form_label" htmlFor="description">slot-Type</label>
         <div className="form_input">
            <select required value={addSlot.slotType} onChange={handleInputChange} name="slotType">
              <option value='scooter'>scooter</option>
              <option value='car'>car</option>
              <option value='bus'>bus</option>
            </select>
        </div>

      </div>

      <button onClick={saveSlot} className="Button_submit">
      Submit
      </button>
    </div>


  );



}

export default AddToSlot_UI;
