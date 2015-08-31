function Gatekeeper(req, res, next) {
    // grab the user from DB to populate permissions and add it to the req object
    var user = getUserFromDB(req.username);

    req.loggedInUser = user;
    next();
}