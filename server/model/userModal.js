const crypto = require("crypto");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    eKYF: {
        type: String,
    },
    file: {
        type: String,
    },
    role: {
        type: String,
        enum: ["Farmer", "User", "Admin"],
    },
    Products: [
        
    ]
});

userSchema.pre('save', async function (next) {
    const user = this;

    if (!user.isModified('password')) return;
    console.log(user.password);

    const saltRound = 10;
    let hashPassword;
    try {
        hashPassword = await bcrypt.hash(user.password, saltRound);
        this.password = hashPassword;
    } catch (err) {
        //! return
        console.log(chalk.red(`Error in hashing password: ${err}`));
    }
    next();
});
// Checks if the USER password and saved are password are SAME OR NOT :
userSchema.methods.correctPassword = async function (
    candidatePassword,
    userPassword,
) {
    return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changePasswordAfter = function (JWTTimeStamp) {
    if (this.passwordChangedAt) {
        const userTime = this.passwordChangedAt.getTime() / 1000;

        return userTime > JWTTimeStamp;
    }

    return false;
};

userSchema.methods.createPasswordResetToken = function () {
    const resetToken = crypto.randomBytes(32).toString("hex");

    this.passwordResetToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");

    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

    return resetToken;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
