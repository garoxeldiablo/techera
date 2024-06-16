import { query } from "../config/db.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import createUsersTable from "../models/UserModel.js";

export const getUsers = async(req,res) => {
    try {
        const result = await query("SELECT id, name, email FROM users");
        return res.status(200).json({data: result});
    } catch (error) {
        console.log(error);
    }
}

// tampilkan semua data teknisi
export const getTeknisi = async (req, res) => {
    try {
        const qTeknisi = await query("SELECT * FROM teknisi");
        
        // Map through each teknisi to convert image to base64
        const teknisiWithBase64 = qTeknisi.map(teknisi => {
            if (teknisi.imgteknisi) {
                // Convert Buffer image to base64 string
                const base64String = teknisi.imgteknisi.toString('base64');
                // Return teknisi data with base64 image string
                return { ...teknisi, imgteknisi: base64String };
            } else {
                return teknisi;
            }
        });

        return res.status(200).json({ data: teknisiWithBase64 });
    } catch (error) {
        console.log("teknisi tidak tampil", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}



export const register = async (req, res) => {
    const { name, email, password, confPassword } = req.body;
    if (password !== confPassword) return res.status(400).json({ msg: "Password and Confirm Password do not match" });

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    const insertUserQuery = `
        INSERT INTO users (name, email, password)
        VALUES (?, ?, ?);
    `;

    try {
        await query(insertUserQuery, [name, email, hashPassword]);
        res.json({ msg: "Registration Successful" });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    const findUserQuery = `
        SELECT * FROM users WHERE email = ?;
    `;

    const updateUserTokenQuery = `
        UPDATE users SET refresh_token = ? WHERE id_user = ?;
    `;

    try {
        const [user] = await query(findUserQuery, [email]);

        if (!user) return res.status(404).json({ msg: "Email not found" });

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(400).json({ msg: "Wrong Password" });

        const userId = user.id_user;
        const name = user.name;
        const imgU = user.img_user;

        const imgBase64 = imgU.toString('base64')

        const accessToken = jwt.sign({ userId, name, email }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '20s'
        });

        const refreshToken = jwt.sign({ userId, name, email }, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        });

        await query(updateUserTokenQuery, [refreshToken, userId]);

        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });

        res.json({ accessToken, name, imgU : imgBase64 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

export const logout = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(204);

    const findUserByTokenQuery = `
        SELECT * FROM users WHERE refresh_token = ?;
    `;

    const [user] = await query(findUserByTokenQuery, [refreshToken]);

    if (!user) return res.sendStatus(204);

    const userId = user.id;

    const updateUserTokenQuery = `
        UPDATE users SET refresh_token = NULL WHERE id = ?;
    `;

    try {
        await query(updateUserTokenQuery, [userId]);
        res.clearCookie('refreshToken');
        return res.sendStatus(200);
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
};