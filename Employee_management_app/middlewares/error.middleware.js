module.exports = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send(
        '<h2 style = "color: red; text-align: center; margin-top: 50px;">Something went wrong! Please try again later.</h2>'
    );
}   