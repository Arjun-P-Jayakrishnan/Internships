import axios from "axios";



















const instance=axios.create();
instance.defaults.baseURL="http://localhost:5000/api/v1/parking_lots/"


// export default axios.create({

// 	baseURL:"http://localhost:5000/api/v1/parking_lots/",
// 	headers:{
// 		"Content-type":"application/x-www-form-urlencoded"
// 	}

// });

export default instance