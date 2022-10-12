import http from "../http-common.js"

class prkSlotDataServices{

	getAll(){
		return http.get('/manageSlot');
	}








	createSlot(data){
		return http.post("/prkSlot",data)
	}


}

export default new prkSlotDataServices();