const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    first_name: { type: String, required: true, maxlength: 20, minlength: 3},
    last_name: { type: String,required: true, maxlength: 20, minlength: 3},
    password: { type: String,required: true},
    dof: {Date},
    gender: { type: String, enum: ["m", "f"]},
    email: {type: String, required: true, match: /.+@.+\..+/,unique: true, index: true},
    phone: {type: String, maxlength: 11, minlength: 11}
  });

UserSchema.methods.getFullName = function getFullName (){
    return this.first_name + " " + this.last_name
}

UserSchema.statics.getUsersByGender = function getUsersByGender(gender,cb) {
        this.find({gender: gender,}, cb);
}

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;