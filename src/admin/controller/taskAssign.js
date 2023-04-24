const { userModel, taskAssignModel } = require("../../models");

exports.getAssignedTask = async (req, res) => {
  try {
    const user = req.session.username;
    const data = await taskAssignModel.aggregate([
      {
        '$lookup': {
          'from': 'users',
          'let': {
            'userId': '$employee_Id'
          },
          'pipeline': [
            {
              '$match': {
                '$expr': {
                  '$eq': [
                    '$_id', '$$userId'
                  ]
                }
              }
            }
          ],
          'as': 'result'
        }
      }, {
        '$unwind': {
          'path': '$result'
        }
      }, {
        '$project': {
          'employee_Name': '$result.name',
          'task': 1,
          'status': 1,
          'Work_Hour': 1,
          'start_Date': 1,
          'end_Date': 1
        }
      }
    ]);
    const users = await userModel.find();
    res.render("taskAssign", { user, users, data });
  } catch (error) {
    throw error;
  };
};

exports.assignTask = async (req, res) => {
  try {
    const userData = req.session.username;
    if (userData.role && userData.role == 'ADMIN') {
      const data = await taskAssignModel.create(req.body);
      res.redirect("back");
    } else res.redirect("back");
  } catch (error) {
    console.log(error);
    throw error;
  };
};
