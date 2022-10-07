import express from "express";
import {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getSingleUser
} from "../controllers/users.js";

const router = express.Router();

// router.get("/", getUser);
// router.post("/", createUser);
// router.get("/:id",getSingleUser);
// router.delete("/:id",deleteUser);
// router.put("/:id",updateUser);

router.route('/').get(getUser).post(createUser);
router.route('/:id').get(getSingleUser).delete(deleteUser).put(updateUser);

export default router;
