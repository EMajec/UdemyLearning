var movieDatabase = [
	{
	 name: "In Bruges",
	 rating: 5,
	 watched: true
	},
	{
	 name: "Frozen",
	 rating: 4.5,
	 watched: false
	},
	{
	 name: "Mad Max Fury Road",
	 rating: 5,
	 watched: true
	},
	{
	 name: "Les Miserables",
	 rating: 3.5,
	 watched: false
	}
]

movieDatabase.forEach(function(movie){
	var results = "You have ";
	if(movieDatabase.watched){
		results += "watched ";
	}
	else{
		results += "not watched ";
	}
	results += "\"" +movieDatabase.name + "\"";
	results += " - " + movieDatabase.rating + " stars";
	console.log(results)
});