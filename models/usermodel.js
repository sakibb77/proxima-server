const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

//password requirements massege
const passRequirementsMessage = () => {
  return `<div>
      <p>
        Your password is invalid. For security reasons, please choose a
        stronger password that meets the following requirements:
      </p>
      <ul>
        <li>Must be at least 8 characters long</li>
        <li>Must contain a combination of uppercase and lowercase letters</li>
        <li>
          Must include at least one number and one special character (e.g.
          !,@,#,$,%)
        </li>
      </ul>

      <p>Please try again with a stronger password.</p>
    </div>`;
};

userSchema.statics.signup = async function (email, password) {
  //validation
  if (!email && !password) {
    throw Error("All Fields Must Be Filled");
  }

  //check if email is valid
  if (!validator.isEmail(email)) {
    throw Error("Invalid Email ");
  }

  //lowercase, Uppercase, Number, Symble, 8+ chars
  if (!validator.isStrongPassword(password)) {
    throw Error(passRequirementsMessage());
  }

  const exist = await this.findOne({ email });

  if (exist) {
    throw Error("Email Already Used");
  }

  //encript password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  //create user
  const user = await this.create({ email, password: hash });

  return user;
};

module.exports = mongoose.model("User", userSchema);
