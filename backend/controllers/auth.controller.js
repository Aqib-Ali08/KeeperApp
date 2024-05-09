import User from "../models/user.model.js";
import Bcrypt from 'bcryptjs'
import generateTokenAndSetCookie from "../utils/webtoken.js";


export const signup = async (req, res) => {
    try {
        const { fullname, username, password, confirmPassWord } = req.body;
        if (password !== confirmPassWord) {
            return res.status(400).json({ error: "Passwords don't match" });
        }
        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ error: "Username already exists" });
        }
        // Hashed Password
        const salt = await Bcrypt.genSalt(10)
        const hashedPassword = await Bcrypt.hash(password, salt)

        const newUser = new User({
            fullname,
            username,
            password: hashedPassword
        })
        if (newUser) {
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullname,
                username: newUser.username,
                password: newUser.password
            })
        }
    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username })
        const isPasswordCorrect = await Bcrypt.compare(password, user?.password || "");
        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Check Login Credentials" });
        }
        generateTokenAndSetCookie(user._id, res);
        res.status(200).json({
            _id: user._id,
            fullName: user.fullname,
            username: user.username,
        });
    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }

}

const logout = async (req,res) => {
    try {
        // console.log(res);
        res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export { login, logout }