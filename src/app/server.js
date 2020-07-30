const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
//create new database
mongoose.connect("mongodb+srv://admin-dixon:TheGerman88@cluster0.apw55.mongodb.net/usersDB", {useNewUrlParser: true});
const userSchema = new mongoose.Schema ({
  firstName: String,
  email: String,
  mobile: String
});
const User = mongoose.model('Fruit', userSchema);

app.post('/src/app', function(req, res){
  const { firstName, email, mobile } = req.body;
  // storedata on database
  User.findOne({ firstName, email, mobile }, function (err, users){
  users.save();
    }
  });
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
