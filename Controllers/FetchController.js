const models = require("../models");

const User = models.User;
const Dietician = models.Dietician;
const Client = models.Client;
const Trainer = models.Trainer;
const Physician = models.Physician;
const CareProvider = models.CareProvider;

const FetchProfileController = async (req, res) => {
    const {email, userRole} = req.body;
    let userInfo;

    try {
        console.log("above User Found ");
        const userFound = await User.findOne({ where: { email } });
        const userId = userFound.dataValues.id;
        if (!userFound) {
            return res
            .status(400)
            .send({ type: "error", msg: "No User Found....check credentials" });
        }
        if(userRole == "DIETICIAN")
        {
            console.log("above Dietcian Found ");
             userInfo = await Dietician.findOne({ where: { UserId: userId } });
             console.log("above Dietcian Found ");
        }else if(userRole == "Trainer"){
             userInfo = await Trainer.findOne({ where: { UserId: userId } });
        }
        else if(userRole == "PHYSICIAN"){
             userInfo = await Physician.findOne({ where: { UserId: userId } });
        }
        else if(userRole == "CAREPROVIDER"){
             userInfo = await CareProvider.findOne({ where: { UserId: userId } });
             console.log(userInfo);
        }
        else{
            userInfo = await Client.findOne({ where: { UserId: userId } });
             console.log(userInfo);
        }
        userdata = {userFound, userInfo};
        console.log(userdata);
        res.send(userdata);
    }
    catch (err) {
        res.status(500).send({ msg: err.message, type: "error" });
    }

}

module.exports = FetchProfileController;