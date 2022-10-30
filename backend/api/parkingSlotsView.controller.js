import SlotDetailsDAO from "../DAO/PrkSlots.js"

let SlotsDetails

export default class SlotDetailCtrl{









	static async apiGetSlots(req,res,next){

		const SlotsPerPage=req.query.slotsPerPage?parseInt(req.query.slotsPerPage,10):20
		const page=req.query.page?parseInt(req.query.page,10):0

		let filters={}

		if(req.query.name){

			filters.name=req.query.name
		}
		else if(req.query.vehicleType){
			filters.vehicleType=req.query.vechicleType
		}

		const {SlotsList,totalNumSlots}=await SlotDetailsDAO.getPrkLotDetails({
			filters,
			page,
			SlotsPerPage,
		}) 


		let response={

			Slots:SlotsList,
			page:page,
			filters:filters,
			entries_per_page:SlotsPerPage,
			total_results:totalNumSlots,


		}

		res.json(response)


	}

	static async Slot_Details(req,res,next){

		const Slots=await SlotDetailsDAO.getPrkLotDetails()

	 	res.json(Slots)

 	}






}