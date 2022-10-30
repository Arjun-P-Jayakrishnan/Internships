import http from "../http-common.js";
import axios from "axios";






















class prkSlotDataServices{

	getAllSlot(){
		return http.get('/listSlot');
	}








	createSlot(data){
		console.log(`data in post ${JSON.stringify(data)}`)

		// const formData=new FormData()
		// Object.keys(data).forEach((key)=>{
		// 	formData.append(key,data[key])
		// })

		var dataDB={
			name:data.name,
			user_id:data.user_id,
			date:data.date,
			vehicleType:data.vehicleType,
			slotType:data.slotType,
			Parking_Lot_Id:data.Parking_Lot_Id
		}

		return http.post("prkSlot",data)
	}

	updateSlot(data){

		console.log(`The update data to be sent ${JSON.stringify(data)}`)
		return http.put("prkSlot",data)

	}

	deleteSlot(data){
		console.log(`delete data ${JSON.stringify(data)}`)
		return http.delete(`prkSlot?id=${data.Parking_Lot_Id}`)

	}

}

export default new prkSlotDataServices();