const path = require("path");

var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/friends", function(req, res) {
        res.json(friends);
    })

    app.post("/friends", function(req, res) {

        var input = req.body;

        var compareResponses = input.scores;

        var matchName = "";
        var matchImg = "";

        var difference = 1000;

        for (var i = 0; i < friend.length; i++) {

            var lowDifference = 0;
            
            for (var j = 0; j < compareResponses.length; j++) {
                lowDifference += Math.abs(friends[i].scores[j] - compareResponses[i]);
            }

            if (lowDifference < difference) {
                difference = lowDifference;
                matchName = friends[i].name;
                matchImg = friend[i].photo;
            }
        }

        friends.push(input);

        res.json({status: 200, matchName: matchName, matchImg: matchImg});

    })
}