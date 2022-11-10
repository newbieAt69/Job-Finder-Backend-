module.exports = async (user) => {
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
};