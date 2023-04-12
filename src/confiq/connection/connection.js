const mongoose = require("mongoose")

// const connection = async () => {
//     try {
//    console.log("mongodb connection successfull ");
//    return db;
//     } catch (error) {
//         return { message: `Error: ${e.toString()}` };
//     }
// }

const connectDB = async () => {
    try {
      const uri = `mongodb://localhost:27017/timeTable`;
      const db = await mongoose.connect(uri);

      console.log(`Database connected `);
      return db;
    } catch (e) {
      return { message: `Error: ${e.toString()}` };
    }
  };
  
module.exports = connectDB ;
