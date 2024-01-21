import express from "express"
import {registercontroller,logincontroller,testcontroller, updateProfileController} from '../controllers/authcontroller.js'
import { requireSignIn, isAdmin } from "../middleware/middleware.js"
import { forgotpasswordcontroller } from "../controllers/authcontroller.js"

const router = express.Router()
router.post('/register',registercontroller)
//LOGIN || POST
router.post('/login',logincontroller)
//controlled
router.get('/test',requireSignIn,isAdmin,testcontroller)
//protected auth route
router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true})
})
//protected admin auth
router.get("/admin-auth",requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
})
//forgeot password
router.post("/forgot-password", forgotpasswordcontroller)

//update profile
router.put('/profile',requireSignIn,updateProfileController)
export default router
