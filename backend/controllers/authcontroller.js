import express from 'express';
import JWT from 'jsonwebtoken';
import { hashpassword, comparepassword } from '../helper/authHelper.js';
import usermodel from '../models/usermodel.js';

const app = express();
app.use(express.json());

export const registercontroller = async (req, res) => {
    try {
        console.log(req.body);
        const { name, email, password, phone, address, answer } = req.body;
        if (!name) {
            return res.send({ message: 'Name is required' });
        }
        if (!email) {
            return res.send({ message: 'Email is required' });
        }
        if (!password) {
            return res.send({ message: 'Password is required' });
        }
        if (!phone) {
            return res.send({ message: 'Phone is required' });
        }
        if (!address) {
            return res.send({ message: 'Address is required' });
        }
        if(!answer)
        {
            return res.send({message:"answer is required"});
        }

        // Check if the user already exists
        const existingUser = await usermodel.findOne({ email });

        // If existing user
        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: 'Email already exists',
            });
        }

        // Register user
        const hashedpassword = await hashpassword(password);

        // Save user and await the save operation
        const user = await new usermodel({ name, email, password: hashedpassword, phone, address, answer}).save();

        res.status(201).send({
            success: true,
            message: 'User successfully registered',
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in registration',
            error,
        });
    }
};

export const logincontroller = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: 'Enter email or password',
            });
        }

        const user = await usermodel.findOne({ email });

        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Email is not registered',
            });
        }

        const match = await comparepassword(password, user.password);

        if (!match) {
            // Password does not match, send error response
            return res.status(200).send({
                success: false,
                message: 'Invalid Password',
            });
        }

        // Token generation for successful login
        const token = await JWT.sign({ _id: user._id }, 'rishiraj07794', {
            expiresIn: '7d',
        });

        // Send successful login response
        res.status(200).send({
            success: true,
            message: 'Login successfully',
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role:user.role
            },
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Login',
            error,
            
        });
    }
};
export const testcontroller = (req,res)=>{
    res.send("Protected");
};
//forgot password
export const forgotpasswordcontroller = async(req,res)=>{
    try{
        const {email,answer,newPassword}= req.body
        if(!email)
        {
            res.status(400).send({message:'Email is required'})
        }
        if(!answer)
        {
            res.staus(400).send({message:"Answer is required"})
        }
        if(!newPassword)
        {
            res.status(400).send({messgae:"new password is required"})
        }
        const user = await usermodel.findOne({email,answer})
        if(!user)
        {
            return res.status(400).send({
                success:false,
                message:"Wrong email or Answer"
            })
        }
        const hashedpassword= await hashpassword(newPassword);
        await usermodel.findByIdAndUpdate(user._id,{password:hashedpassword})


    }catch(error)
    {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Something went wrong",
            error

        })
    }
}
//update profile
export const updateProfileController = async (req, res) => {
    try {
      const { name, email, password, address, phone } = req.body;
      const user = await usermodel.findById(req.user._id);
      //password
    //   if (password && password.length < 6) {
    //     return res.json({ error: "Passsword is required and 6 character long" });
    //   }
      const hashedPassword = password ? await hashpassword(password) : undefined;
      const updatedUser = await usermodel.findByIdAndUpdate(
        req.user._id,
        {
          name: name || user.name,
          password: hashedPassword || user.password,
          phone: phone || user.phone,
          address: address || user.address,
        },
        { new: true }
      );
      res.status(200).send({
        success: true,
        message: "Profile Updated SUccessfully",
        updatedUser,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        success: false,
        message: "Error WHile Update profile",
        error,
      });
    }
  };


