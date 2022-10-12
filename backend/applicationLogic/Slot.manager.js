import prkSlotCtrl from "../api/parkingSlotsView.controller.js"
import prkSlotsDAO from "../DAO/PrkSlots.js"














export default class prkSlotManager{

	static async SlotInfo_check(){

		const Slots=await prkSlotsDAO.getSlotInfo(null)

	 	console.log(Slots)

 	}
	

}