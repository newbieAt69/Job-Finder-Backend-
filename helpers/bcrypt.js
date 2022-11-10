module.exports = async (password) => {
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
};