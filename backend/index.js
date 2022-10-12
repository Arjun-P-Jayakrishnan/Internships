
import mongodb from "mongodb"
import dotenv from "dotenv"
import prkFunctionDAO from "./DAO/parkinglotFunctions.js"
import prkSlotsDAO from "./DAO/PrkSlots.js"


dotenv.config()

app=require('./server.js')

const MongoClient=mongodb.MongoClient

const port=process.env.PORT||8000



//connect(url,[options],callback)
MongoClient.connect(

	process.env.PARKING_LOT_DB_URI,
	{
		maxpoolSize:50,
		wtimeout:2500,
		useNewURLParser:true,
	},

	)
//Using Promises (value is eventually recieved) using .then() which is asynchronous

.catch(err=>{
	console.error(err.stack)
	process.exit(1)
	}
)

.then(async client=>{

	await prkSlotsDAO.injectDB(client)
	await prkFunctionDAO.injectDB(client)

	//connect to server
	app.listen(port,()=>{
			
			console.log(`Connecting to Port ${port}`)
		}
	)

}
)