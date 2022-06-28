
const signupHandler = (req,res,next) =>{
    const {userName, password, firstName, lastName, subscribeToNewsletter} = req.body;

    let msg = `Hello ${firsName} ${lastName}, Thank you for signing up. Your account is now
    created. You would be receiving our periodic newsletters to your email: ${userName}`
    if(subscribeToNewsletter){
    }

};

module.exports= {
    signupHandler
};