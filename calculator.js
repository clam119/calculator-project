// Top Section - Importing the Express Framework, bodyParser package (Used to parse info from requests so that it's usable)
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({
    extended: true
}));
const port = 3000


//Root GET Requests
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

//Root POST Requests
app.post('/', function (req, res) {
    let firstUserNumber = Number(req.body.firstUserNumber);
    let secondUserNumber = Number(req.body.secondUserNumber);
    let result = Number(firstUserNumber + secondUserNumber);
    res.send("The result of the calculation is " + result);
});

//BMI Calculator GET Requests
app.get('/bmiCalculator', function (req, res) {
    res.sendFile(__dirname + '/bmiCalculator.html');
})

//BMI Calculator POST Requests
app.post('/bmiCalculator', function (req, res) {
    let height = parseFloat(req.body.height);
    let weight = parseFloat(req.body.weight);
    let heightSquared = Math.pow(height, 2);
    let bmiResult = weight / heightSquared;
    res.send("Your BMI is " + bmiResult.toFixed(1));
})

//Listening to Ports
app.listen(port, function () {
    console.log('Calculator Application listening on port ${port}')
})