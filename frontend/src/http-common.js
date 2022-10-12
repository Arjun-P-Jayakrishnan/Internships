import axios from "axios";

export default axios.create({

	baseURL:"https://localhost:5000/api/v1/parking_lots",
	headers:{
		"Content-type":"application/json"
	}

});