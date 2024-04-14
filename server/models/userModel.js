import { Schema, model } from "mongoose";
import JWT from "jsonwebtoken";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "name is required"],
      trim: true,
      minLength: [5, "name must be atleast 5 characters"],
      maxLength: [30, "name must be less than 30 characters"],
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: [true, "email already in use"],
      lowecase: true,
      maxLength: [30, "email must be less than 30 characters"],
    },
    password: {
      type: String,
      select: false,
      required: [true, "password is required"],
      minLength: [6, "password must be at least 6 characters"],
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
    avatar: {
      public_id: {
        type: String,
      },
      secure_url: {
        type: String,
      },
    },
    forgotPasswordToken: String,
    forgotPasswordExpiryDate: Date,
    // subscription:{
    //   id : String ,
    //   status : String

    // }
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods = {
  comparePassword: async function (plainPassword) {
    return await bcrypt.compare(plainPassword, this.password);
  },

  generateAuthToken: async function () {
    return await JWT.sign(
      { id: this._id, role: this.role, subscription: this.subscription },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRY,
      }
    );
  },

//   generatePasswordResetToken : async function () {
//     const resetToken = crypto.randomBytes(20).toString("hex");
//     this.forgotPasswordToken = crypto
//       .createHash("sha256")
//       .update(resetToken)
//       .digest("hex");

//     this.forgotPasswordExpiryDate = Date.now() + 15 * 60 * 1000; //15 min reset timer

//     return resetToken;
//   },
};


const User = model("User", userSchema);

export default User;
