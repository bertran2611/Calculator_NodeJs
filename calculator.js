// jshint esversion:6

const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));


// Calculator
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var result = num1 + num2;

    res.send("The result of that calculation is " + result);
});


// BMI Calculator
app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
  });
  
app.post('/bmicalculator', (req, res) => {

    var h = parseFloat(req.body.height);
    var w = parseFloat(req.body.weight);

    var bmi = w / Math.pow(h, 2);

    if(bmi < 16){
        res.send("Your BMI is " + bmi + " You Severe Thinness");
    }else if(bmi > 16 && bmi < 17){
        res.send("Your BMI is " + bmi + " You Moderate Thinness");
    }else if(bmi > 17 && bmi < 18.5){
        res.send("Your BMI is " + bmi + " You Mild Thinness");
    }else if(bmi > 18.5 && bmi < 25){
        res.send("Your BMI is " + bmi + " You Normal");
    }else if(bmi > 25 && bmi < 30){
        res.send("Your BMI is " + bmi + " You Overweight");
    }else{
        res.send("Your BMI is " + bmi + " You Obese");
    };

});


// listen
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});