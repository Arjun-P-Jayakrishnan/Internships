import prkLotDAO from "../DAO/parkinglotFunctions.js";

export default class prkLotCtrl{
	

	//this page takes info send through net and sends to parkingLotFunctions to send to database











	static async apiPost_ParkSlot(req,res,next){
		try{

			//take values from the post request and make an object of the specified model

			const lotID=req.body.Parking_Lot_ID
			const parkInfo=req.body.text
			const userInfo={
				
				name:req.body.name,
				_id:req.body.user_id
				}
			const vehicleType=req.body.vehicleType
			const slotType=req.body.slotType

			const date=new Date()

			const SlotResponse=await prkLotDAO.addToSlot(
					lotID,
					userInfo,
					parkInfo,
					date,
					vehicleType,
					slotType,
				)
			res.json(`Successfully obtained values from the request`)


		}

		catch(e){

			console.log(`Error in obtaining value from the request ${e}`)

		}


	}


	static async apiUpdateSlotDetails(req,res,next){


		try{

				const lotID=req.body.Parking_Lot_ID
				const parkInfo=req.body.text
				const userInfo={
					name:req.body.name,
					_id:req.body.user_id
				}
				const date=new Date()
				const vehicleType=req.body.vehicleType
				const slotType=req.body.slotType


				const SlotResponse =await prkLotDAO.updateSlot(
					lotID,
					userInfo._id,
					parkInfo,
					date,
					vehicleType,
					slotType)

				var {error}=SlotResponse

				if(error){
					res.status(400).json({error})

				}

				if(SlotResponse.modified==0){

					throw new Error(
						"unable to post the request-the user may not be the original user"
						)

				}

		}

		catch(e){

			res.status(400).json({error:e.message})
			console.log(`An error occured while Updating value from net ${e}`)

		}

	}


	static async apiRemoveSlot(req,res,next){

		try{

			const lotId=req.query.id
			const user_id=req.body.user_id

			const slotResponse=await prkLotDAO.removeSlot(
				lotId,
				user_id
				)
			res.json({status:"success"})

		}
		catch(e){

			res.status(500).json({error:e.message})

		}


	}

}