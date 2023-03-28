// const { CAREPROVIDER } = require("../../cyglera-client/src/helpers/UserRoles");
const models = require("../models");

const User = models.User;
const Dietician = models.Dietician;
const Client = models.Client;
const Trainer = models.Trainer;
const Physician = models.Physician;
const CareProvider = models.CareProvider;
// const CareProvider = models.CareProvider;


const ProfileController = async (req, res) => {

    console.log("inside profiel controller");
    
    // Define the fields to update on user table
    const fieldsToUpdateUserTable = ['firstName', 'lastName', 'email','address','addressLine2','city','country','province','postalCode','phone','gender'];
    // Create empty object for user table update
    const tableUserUpdates = {};
    let updateRole;

    const {email, userRole} = req.body;
    try {
            const userFound = await User.findOne({ where: { email } });
            if (!userFound) {
                return res
                .status(400)
                .send({ type: "error", msg: "No User Found....check credentials" });
            }
            console.log(userRole);
            if (userRole != "CLIENT") {
                 const userId = userFound.dataValues.id;
                 console.log(userId);
                 const fieldsToUpdateUserRoleTable = ['UserId', 'title', 'middleName', 'martialStatus','familyPhysician', 'yearsOfExperience', 'areaOfFocus', 'professionalSummary','professionalApproach', 'availableSlots','billingAddressLine1', 'billingAddressLine2', 'billingCity','billingCountry', 'billingProvince', 'billingPostalCode', 'billingPhone','shippingAddressLine1','shippingAddressLine2','shippingCity','shippingCountry','shippingProvince','shippingPostalCode','shippingPhone'];
                 const tableUserRoleUpdates = {};
                 
                 // Iterating to find fields need to updated from client
                 for (const field in req.body) {
                    if (fieldsToUpdateUserTable.includes(field)) {
                        tableUserUpdates[field] = req.body[field];
                    }
                    if (fieldsToUpdateUserRoleTable.includes(field)) {
                        tableUserRoleUpdates[field] = req.body[field];
                    }
                }

                if(userRole == "DIETICIAN")
                {
                        updateRole = await Dietician.update(
                        tableUserRoleUpdates,
                        {
                        where: {
                            UserId: userId,
                        },
                        }
                    );
                } else if(userRole == "TRAINER"){
                        updateRole = await Trainer.update(
                        tableUserRoleUpdates,
                        {
                        where: {
                            UserId: userId,
                        },
                        }
                    );
                }
                else if(userRole == "PHYSICIAN") {
                        updateRole = await Physician.update(
                        tableUserRoleUpdates,
                        {
                        where: {
                            UserId: userId,
                        },
                        }
                    );
                    console.log(updateRole);
                }
                
                else if(userRole == "CAREPROVIDER"){
                        updateRole = await CareProvider.update(
                        tableUserRoleUpdates,
                        {
                        where: {
                            UserId: userId,
                        },
                        }
                    );
                }
                let updatedUser = await User.update(
                    tableUserUpdates,
                    {
                        where: {
                            id: userId,
                        },
                    }
                );
                console.log(updatedUser);

                if (updatedUser && updateRole) {
                    await res.send(true);
                }
                else{
                    await res.send(false);
                }
               }
               else {
                const userId = userFound.dataValues.id;
                const fieldsToUpdateClientTable = ['UserId', 'title', 'middleName', 'martialStatus','familyPhysician', 'billingAddressLine1', 'billingAddressLine2', 'billingCity','billingCountry', 'billingProvince', 'billingPostalCode', 'billingPhone','shippingAddressLine1','shippingAddressLine2','shippingCity','shippingCountry','shippingProvince','shippingPostalCode','shippingPhone'];
                const tableClientUpdates = {};
                
                // Iterating to find fields need to updated from client
                for (const field in req.body) {
                   if (fieldsToUpdateUserTable.includes(field)) {
                       tableUserUpdates[field] = req.body[field];
                   }
                   if (fieldsToUpdateClientTable.includes(field)) {
                        tableClientUpdates[field] = req.body[field];
                   }
               }
               let updatedClient = await Client.update(
                    tableClientUpdates,
                   {
                     where: {
                       UserId: userId,
                     },
                   }
                 );

                 let updatedUser = await User.update(
                   tableUserUpdates,
                   {
                     where: {
                       id: userId,
                     },
                   }
                 );

                 if (updatedUser && updatedClient) {
                       await res.send(true);
                   }
                   else{
                       await res.send(false);
                   }
              }  
    }
    catch (err) {
        res.status(500).send({ msg: err.message, type: "error" });
      }
}

module.exports = ProfileController;