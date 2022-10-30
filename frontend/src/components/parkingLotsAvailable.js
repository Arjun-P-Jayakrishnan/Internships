import React,{useState,setState} from "react";
import prkSlotDataServices from "../services/parkingSlot.js";
import {Link,useNavigate} from "react-router-dom";


import "../styling/parkingLotsAvailable.css"
import {FaExternalLinkAlt} from "react-icons/fa"


















const SlotsAvailable=props=> {

  let slotInitialState={
    _id:"",
    name:"",
    time:new Date(),
    vehicleType:"",
    slotType:"",
  }
  let totalNumSlots

  const [SlotsList,setSlots]=useState(slotInitialState);
  const [loaded,setLoaded]=useState(false);



  const location={
    pathname:"/prkLot/UpdateSlot",
    state:{id:'1234'}
  }





  prkSlotDataServices.getAllSlot()

      .then(response=>{

         let SlotsListed=response.data.SlotLists
         if(!loaded){
          updateState(SlotsListed)
          setLoaded(true)
          }
          totalNumSlots=response.data.totalNumSlots
      })
      .catch(e=>{
        console.log(e);
      });


  const updateState=(SlotsListed)=>{
      const newState=SlotsListed.map(obj=>{
        return obj;
      });

      setSlots(newState)

  }

  

  const navigate=useNavigate();

  const dataEdit=(props)=>{
    navigate('/prkLot/UpdateSlot',{state:{name:props.name,id:props._id,vehicleType:props.vehicleType,slotType:props.SlotType,Parking_Lot_Id:props.Parking_Lot_Id}})
  }


  const deleteSlot=(props)=>{
        prkSlotDataServices.deleteSlot(props)
  }




 return loaded ?(<div >

    <ul className="Slot_Lists">

      {SlotsList.map(obj=>{

        return (

          <div className="base-item-style" key={obj.id}>

            <ul>

              <li>name:{obj.name}</li>
              <li>id:{obj._id}</li>
              <li>vehicleType:{obj.vehicleType}</li>
              <li>slotType:{obj.SlotType}</li>
              <li>Parking_Lot_Id:{obj.Parking_Lot_Id}</li>
              <li><FaExternalLinkAlt/></li>

            </ul>
            <div className="Edit_Button_and_Delete_Button">
                <button> 
                    <a onClick={()=>{dataEdit({name:obj.name,_id:obj._id,vehicleType:obj.vehicleType,SlotType:obj.SlotType,Parking_Lot_Id:obj.Parking_Lot_Id})}}>Edit{obj.name}</a>
                </button>
                <button onClick={()=>{deleteSlot({_id:obj._id,Parking_Lot_Id:obj.Parking_Lot_Id})}}>
                  Delete
                </button>
            </div>
          </div>

          );


      })}

    </ul>


  </div>) :(<div>
  <h1>Loading</h1>
  </div>);

}

export default SlotsAvailable;
