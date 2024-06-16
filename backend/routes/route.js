import express from "express";
import { getTeknisi, getUsers, login, logout, register } from '../controller/Users.js';
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controller/RefreshToken.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', register);
router.post('/login', login);
router.get('/token', refreshToken);
router.get('/teknisi', getTeknisi)
router.delete('/logout', logout);

export default router;