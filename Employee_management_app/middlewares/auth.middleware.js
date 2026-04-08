module.exports = (req, res, next) => {
  if (!req.cookies.user) {
    return res.redirect('/login')
  }
  next()
}