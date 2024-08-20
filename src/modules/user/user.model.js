const mongoose = require("mongoose");

//One Time Password
const OTPSchema = new mongoose.Schema({
    code: {type: String, required: false, default: undefined},
    expiresIn: {type: Number, required: false, default: 0}
});


const UserSchema = new mongoose.Schema({
    fullName: {type: String, required: false},
    mobile: {type: String, unique: true, required: true},
    otp: {type: OTPSchema},
    verifiedMobile: {type: Boolean, required: true, default: false}
}, {timestamps: true});

module.exports = {
    UserModel : mongoose.model("user", UserSchema)
}