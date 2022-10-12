import mongodb from "mongodb"

const Object_ID=mongodb.ObjectId

let parking_lot

//lot_id -an id after adding to a slot,user_id -users id

export default class ParkingLotDAO{








	static async injectDB(conn){

		if(parking_lot){
			return
		}
		try{

			parking_lot=await conn.db(process.env.PARKING_LOT_NS).collection("ParkingLot")

		}
		catch(e){

				console.log(`There was an error during injectDB ${e}`)
		}


	}


	static async addToSlot(pl_ID,user,lotDetails,date,vehicleType,slotType){


		try{

			const parkingLotDetails={
				//enter users details from user having .name and ._id attribute
				name:user.name,
				user_id:user._id,
				date:date,
				text:lotDetails,
				vehicleType:vehicleType,
				SlotType:slotType,

				//create an id for the slot
				Parking_Lot_Id:Object_ID(pl_ID),

			}
			console.log(`values are ${JSON.stringify(parkingLotDetails)}`)
			return await parking_lot.insertOne(parkingLotDetails)
		}

		catch(e){

			console.log(`Cannot insert a new value due to the error ${e}`)

		}

	}

	
	static async updateSlot(lot_Id,user_Id,text,date,vehicleType,slotType){

		try{
			
			//serarches for a user_id and _id
			const updateResponse= await parking_lot.updateOne({

				_id:Object_ID(lot_Id),
				user_id:user_Id


			},
			{

				$set:{text:text,date:date,vehicleType:vehicleType,slotType:slotType}
			},

			)
			
			return updateResponse
		}
		catch (e){

			console.log(`There was an error in updating the parking lot details due to ${e}`)
			return{error:e}
		}

	}

	static async removeSlot(lot_id,user_Id){

			try{

				const deleteResponse=await parking_lot.deleteOne(
						{
							_id:Object_ID(lot_id),
							user_id:user_Id,
						}
					)

				return deleteResponse

			}
			catch(e){

				console.log(`There was an error in deleting a review ${e}`)
				return {error:e}
			}

		}


}