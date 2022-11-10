const jwt = require('jsonwebtoken');


module.exports = {
  ensureAuthenticated: function (req, res, next) {
    const jsontoken = JSON.stringify(req.cookies.xauth);
    if (!jsontoken) {
      // req.flash("error_msg", "You need to login to continue");
      // res.redirect('/student/login');
      return res.status(403).json({ msg: "Authentication failed!" })
    }
    else {
      try {
        const token = JSON.parse(jsontoken);
        const decoded = jwt.verify(token, process.env.jwtprivatekey);
        req.user = decoded._doc;
        next();
      } catch {
        // req.flash("error_msg", "You need to login to continue");
        // res.redirect('/student/login');
        return res.status(403).json({ msg: "Authentication failed!" })
      }
    }
  },

  studentAuthenticated: function (req, res, next) {
    const jsontoken = JSON.stringify(req.cookies.xauth);
    if (!jsontoken) {
      // req.flash("error_msg", "You need to login to continue");
      // res.redirect('/student/login');
      return res.status(403).json({ msg: "Authentication failed!" })
    }
    else {
      try {
        const token = JSON.parse(jsontoken);
        const decoded = jwt.verify(token, process.env.jwtprivatekey);
        if (decoded._doc.role === 'student') {
          req.user = decoded._doc;
          next();
        } else {
          req.flash("error_msg", "You need to login to continue");
          res.redirect('/student/login');
        }
      } catch {
        // req.flash("error_msg", "You need to login to continue");
        // res.redirect('/student/login');
        return res.status(403).json({ msg: "Authentication failed!" })
      }
    }
  },

  adminAuthenticated: function (req, res, next) {
    const jsontoken = JSON.stringify(req.cookies.xauth);
    if (!jsontoken) {
      // req.flash("error_msg", "You need to login to continue");
      // res.redirect('/admin/login');
      return res.status(403).json({ msg: "Authentication failed!" })
    }
    else {
      try {
        const token = JSON.parse(jsontoken);
        const decoded = jwt.verify(token, process.env.jwtprivatekey);
        if (decoded._doc.role === 'admin') {
          req.user = decoded._doc;
          next();
        } else {
          // req.flash("error_msg", "You need to login to continue");
          // res.redirect('/admin/login');
          return res.status(403).json({ msg: "Authentication failed!" });
        }
      } catch {
        // req.flash("error_msg", "You need to login to continue");
        // res.redirect('/admin/login');
        return res.status(403).json({ msg: "Authentication failed!" })
      }
    }
  },
}