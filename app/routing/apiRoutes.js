// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends");


// ===============================================================================

// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  	// Add new friend entry
	app.post('/api/friends', function(req, res) {
		// Capture the user input object
		var newInfo = req.body;
		console.log('New Information = ' + JSON.stringify(newInfo));

    	var scoresArray = [];
    	var friendCount = 0;
    	var bestMatch = 0;


    	//runs through all current friends in list
		for(var i=0; i<friends.length; i++) {
			var scoresDiff = 0;
		}
			
		 //after all friends are compared, find best match
		for (var j = 0; j < newInfo.length; j++) {
				scoresDiff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(newInfo[j])));

				scoresArray.push(scoresDiff);
		}
			

		// If lowest difference, record the friend match
		for(var i=0; i<scoresArray.length; i++){
  			if(scoresArray[i] <= scoresArray[bestMatch]){
    			
    			bestMatch = i;
  			}
		}

	 	//return bestMatch data
	    var bestMatch = friends[bestMatch];
	    res.json(bestMatch);

	    //pushes new submission into the friends array
	    friends.push(req.body);
	});
};
