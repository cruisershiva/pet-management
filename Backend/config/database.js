const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectDatabase = () => {
  mongoose
    .connect("mongodb+srv://sathvikvmaiya:savesath@online-pet-management.j2ub5jd.mongodb.net/online-pet-management?retryWrites=true&w=majority",{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
};

module.exports = connectDatabase;