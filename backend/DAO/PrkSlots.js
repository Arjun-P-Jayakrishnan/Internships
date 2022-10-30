import {query} from "express"
import mongodb from "mongodb"

let PrkLotDetails

export default class PrkLotsDAO{
	









	static async injectDB(conn){

		if(PrkLotDetails){

			return

		}

		try{

		PrkLotDetails=await conn.db(process.env.PARKING_LOT_NS).collection("ParkingLot")

		}

		catch(e){

			console.log(`The database couldnt be connected as ${e}`)

		}


	}

	static async getPrkLotDetails({
	filters=null,
	page=0,
	SlotsPerPage=20
	}={})
	{
			let query={}
			// if(filters){

			// 	if("name" in filters){

			// 		query={$text:{$search:filters["name"]}}

			// 	}
			// 	else if("vehicleType" in filters){

			// 		query={vehicleType:{$eq:filters["vehicleType"]}}

			// 	}

			// }
			// query={vehicleType:"car"};


			let cursor
			try{
				// console.log(`${JSON.stringify(query)}`)
				cursor = await PrkLotDetails.find(query);

				// if((await cursor.count())==0){
				// 	console.log(`No documents found`);
				// }

				// await cursor.forEach(console.dir);

			}

			catch(e){

				console.log(`Error to get details due to ${e}`)
				return {prkLot:[],numOfLots:0}

			}

			const displayCursor=cursor.limit(SlotsPerPage).skip(SlotsPerPage*page)

			try{

				const SlotLists=await displayCursor.toArray()
				const totalNumSlots=await PrkLotDetails.countDocuments(query)
				
				return {SlotLists,totalNumSlots}

			}
			catch(e){

				console.log(`unabe to convert to array or problem in counting pages ${e}`)
				return {SlotLists:[],totalNumSlots:0}

			}


				
	}

	static async getSlotInfo(filters=null){

		let query

		if(filters){

			if("slotType" in filters){

				query={slotType:{$eq:filters["slotType"]}}

			}

		}

		const Slots_type_num=new Array(3);

		for(var i=0;i<3;i++){

				let request

				if(i==0){

					request={SlotType:"scooter"}

				}
				else if(i==1){

					request={SlotType:"car"}

				}
				else{

					request={SlotType:"bus"}
				}

				let cursor

				try{
					console.log(`value of req ${JSON.stringify(request)}`)
					cursor=await PrkLotDetails.find(request)

					let Slots_num=await cursor.count(request)
					console.log(`req ${JSON.stringify(request)} values is ${Slots_num}`)
					Slots_type_num.push(Slots_num)
				}
				catch(e){

					console.log(`Cant retrive value from server due to ${e}`)

				}

		}

		return Slots_type_num
	}
	


}