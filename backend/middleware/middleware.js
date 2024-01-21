import JWT from 'jsonwebtoken'
import usermodel from '../models/usermodel.js'

export const requireSignIn = async(req,res,next)=>{
    try {
        
            const decode = JWT.verify(
                req.headers.authorization,'rishiraj07794');
            req.user=decode;
            next();
        
    }catch(error)
    {
        console.log(error);
        console.log("Token galat h");
    }
};
export const isAdmin = async(req,res,next) =>{
    try{
        const user = await usermodel.findById(req.user._id)
        if(user.role!==1)
        {
            return res.status(401).send({
                success:false,
                message:"Unauthorised Access"

            })
        }else{
            next();
        }
    }catch(error)
    {
        console.log(error)
    }
}