var express = require('express');
const stripe = require('stripe')('sk_test_BdavkaT4hXelQXTZa7NzhS4k');
var app = express();

app.listen(3000, function () {
    console.log("server running");
});
