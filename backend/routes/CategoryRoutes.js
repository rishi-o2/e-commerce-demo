import express from "express"
import { isAdmin, requireSignIn } from "../middleware/middleware.js";
import {CategoryController, categoryControlller, deleteCategoryCOntroller, singleCategoryController, updateCategoryController} from "../controllers/CategoryController.js"

const router = express.Router()

router.post('/create-category',requireSignIn,isAdmin,CategoryController)
//update category
router.put(
    "/update-category/:id",
    requireSignIn,
    isAdmin,
    updateCategoryController
  );
  //getALl category
router.get("/get-category", categoryControlller);
//single category
router.get("/single-category/:slug", singleCategoryController);
//delete category
router.delete(
    "/delete-category/:id",
    requireSignIn,
    isAdmin,
    deleteCategoryCOntroller
  );

export default router