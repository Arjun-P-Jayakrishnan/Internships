import express from "express"
import prkLotCtrl from "./parkingLot.controller.js"
import prkDetails from "./parkingSlotsView.controller.js"
import slotManager from "../applicationLogic/Slot.manager.js"


const router=express.Router()








router.route("/listSlot").get(prkDetails.apiGetSlots)
router.route("/manageSlot").get(slotManager.SlotInfo_check)

router
	.route("/prkSlot")
	.post(prkLotCtrl.apiPost_ParkSlot)
	.put(prkLotCtrl.apiUpdateSlotDetails)
	.delete(prkLotCtrl.apiRemoveSlot)




export default router