const jwt = require("jsonwebtoken");
const { User } = require("../schema/UserModel");
const {Unauthorized} = require("http-errors");
const {JWT_SECRET} = process.env;

const authenticate = async(req, res, next) => {
    const { authorization = ""}  = req.headers;
    const [bearer, token] = authorization.split(" ");
    if(bearer !== "Bearer") {
        next(new Unauthorized("Not authorized"))
    };
    if(!token){
        next(new Unauthorized("Not authorized"))
    };
    try {
        const {id} = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(id);

        if(!user || !user.token) {
            throw new Unauthorized("Not authorized")
        }
        req.user = user;
        next()
    } catch (error) {
        if(error.message === "Invalid signature"){
            error.status = 401;           
        };
        next(error);
        
    }
};

module.exports = authenticate;
