
const validator = (req,res, next ) => {
        const { userName, password} = req.body;
        if(userName.trim().length ===0 || password.trim().length === 0){
            console.log('Please provide UserName or Password');
        }
        next();
};

module.exports = {
    validator
}