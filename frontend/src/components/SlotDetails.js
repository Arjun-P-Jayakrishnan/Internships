import React,{useRef,useState,useEffect} from "react";
import prkSlotDataServices from "../services/parkingSlot.js";
import {Link,useLocation} from "react-router-dom";


import  "../styling/addToSlot.css";














const SlotDetails=props=> {


  const location=useLocation();

  const dataChange=location.state

   let prkSlotInitailState={
    name:dataChange.name?dataChange.name:"",
    user_id:dataChange.id?dataChange.id:"",
    vehicleType:dataChange.vehicleType?dataChange.vehicleType:"scooter",
    slotType:dataChange.slotType?dataChange.slotType:"scooter",
    Parking_Lot_Id:dataChange.Parking_Lot_Id?dataChange.Parking_Lot_Id:"",
  };
  //update or not
  let editing = false

  const [editSlot,setEditSlot] = useState(prkSlotInitailState);
  const [submitted,setSubmitted] = useState(false);

  console.log(`props value ${JSON.stringify(location.state)}  data ${JSON.stringify(prkSlotInitailState)}`)

 const handleInputChange = event =>{

  const value=event.target.value

  setEditSlot({
    ...editSlot,
    [event.target.name]:value,
  });
  console.log(`the values being changed is ${JSON.stringify(editSlot)}`)



 }

 const saveSlot = ()=>{

    var data={
      name:editSlot.name,
      user_id:editSlot.user_id,
      vehicleType:editSlot.vehicleType,
      slotType:editSlot.slotType,
      date:new Date(),
      Parking_Lot_Id:editSlot.Parking_Lot_Id,

    };

    console.log(`data being submitted ${JSON.stringify(data)} ${data.vehicleType}`)

     if(!editing){

      console.log(`data to be updated ${JSON.stringify(data)}`)
      prkSlotDataServices.updateSlot(data)

      .then(response=>{
        setSubmitted(true);
        console.log(response.data);
      })

      .catch(e=>{
        console.log(e);
      });


     }
 };




  return (
     <div className="submitForm">           
      <div className="submitFormDesign">

        <label className="user_name form_label" htmlFor="description">user-Name</label>
        <input
          type="text"
          className="user_name form_input"
          id="text"
          required
          value={editSlot.name}
          onChange={handleInputChange}
          name="name"

        />
        <label className="form_label" htmlFor="description">user-Id</label>
        <input
          type="text"
          className="form_input"
          id="text"
          required
          value={editSlot.user_id}
          onChange={handleInputChange}
          name="user_id"

        />
        <label className="form_label" htmlFor="description">vehicle-Type</label> 

        <div className="form_input">
            <select required value={editSlot.vehicleType} onChange={handleInputChange} name="vehicleType">
              <option value='scooter'>scooter</option>
              <option value='car'>car</option>
              <option value='bus'>bus</option>
            </select>
        </div>

        <label className="form_label" htmlFor="description">slot-Type</label>
         <div className="form_input">
            <select required value={editSlot.slotType} onChange={handleInputChange} name="slotType">
              <option value='scooter'>scooter</option>
              <option value='car'>car</option>
              <option value='bus'>bus</option>
            </select>
        </div>

      </div>

      <input className="form_label" htmlFor="description" 

      style={{display:"none"}} 
      id="text"
      required
      value={editSlot.Parking_Lot_Id}
      onChange={handleInputChange}
      name="Parking_Lot_Id"
      />

      <button onClick={saveSlot} className="Button_submit">
      Submit
      </button>
    </div>


    );
}

export default SlotDetails;
