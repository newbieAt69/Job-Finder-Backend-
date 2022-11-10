const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class HelperFunc  {
  constructor() {
    console.log("Helper init!!")
  }

  async hashPassword(password) {
    try {
      if (!password.trim()) {
      return false; 
  } else {
    const hash = await bcrypt.hash(password, 10);
    try {
        return hash;
      } catch (error) {
        return false;
      }
    }
    } catch (error) {
      return false;
    }
  }

  async generate_token(user) {
    try {
      if (!user) {
      return false;
    } else {
      var token = await jwt.sign({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      }, process.env.SECRET_KEY, { expiresIn: "30d" });

        console.log(token)
        return token;
    }
    } catch (error) {
      console.log(error)
      return false;
    }
  }

  async compare_password(password, user) {
    if (!password || !user) {
      return false;
    } else {
      var result = await bcrypt.compare(password, user.password);
      try {
        return result
      } catch (error) {
        return false;
      }
    }
  }
}


module.exports = new HelperFunc();