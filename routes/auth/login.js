const router = require("express").Router();
const mongoose = require("mongoose");
const JobSeeker = require("../../model/JobSeeker/JobSeeker");
const { INVALID_LOGIN_CREDENTIALS, NO_USER_EXISTS, INVALID_CREDENTIALS, INVALID_TOKEN_GENERATION, LOGIN } = require("../../constantData/error");
const { compare_password, generate_token } = require("../../helpers/helpers");

router.post("/login", async (req, res, next) => {
  try {
    const { logUser, logPassword } = req.body;
    if (!logUser || !logUser.trim() || !logPassword || !logPassword.trim()) {
      next(new Error(INVALID_LOGIN_CREDENTIALS))
    } else {
      const user = await JobSeeker.findOne({ email: logUser });
      if (!user) {
        next(new Error(NO_USER_EXISTS))
      } else {
        const result = await compare_password(logPassword, user);
        if (!result) {
          next(new Error(INVALID_CREDENTIALS))
        } else {
          const token = await generate_token(user);
          if (!token) {
              next(new Error(INVALID_TOKEN_GENERATION))
            } else {
              return res.status(201).json({ msg: LOGIN, user: user, token: token });
            }
        }
      }
    }
  } catch (error) {
    next(new Error(error))
  }
});

module.exports = router