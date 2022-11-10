const router = require("express").Router();
const mongoose = require("mongoose");
const JobSeeker = require("../../model/JobSeeker/JobSeeker");
const { INVALID_PARAMS, USER_EXISTS, INVALID_PASSWORD, INVALID_TOKEN_GENERATION } = require("../../constantData/error");
const { hashPassword, generate_token } = require("../../helpers/helpers");
const { REGISTER } = require("../../constantData/Message");

router.post("/register", async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !password.trim()) {
      next(new Error(INVALID_PARAMS));
    } else {
      const user = await JobSeeker.findOne({ email: email });
      if (user) {
        next(new Error(USER_EXISTS));
      } else {
        const newPassword = await hashPassword(password);
        if (!newPassword) {
          next(new Error(INVALID_PASSWORD))
        } else {
          const newUser = JobSeeker({
            _id: new mongoose.Types.ObjectId(),
            firstName, lastName, email, password: newPassword
          });
          var savedUser = await newUser.save();

          try {
            const token = await generate_token(savedUser);
            if (!token) {
              next(new Error(INVALID_TOKEN_GENERATION))
            } else {
              return res.status(201).json({ msg: REGISTER, user: newUser, token: token });
            }
          } catch (error) {
            next(new Error(error))
          }
        }
      }
    }
  } catch (error) {
    console.log(error)
    next(new Error(error))
  }
});

module.exports = router;