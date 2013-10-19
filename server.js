var im = require('imagemagick'), fs = require('fs'), http = require('http'), url = require('url'), logger = require('util');

var octoArr = [
	{"id":1,"img":"original.png","name":"Original"},
	{"id":2,"img":"class-act.png","name":"Class Act"},
	{"id":3,"img":"octobiwan.jpg","name":"Octobi Wan Catnobi"},
	{"id":4,"img":"puppeteer.png","name":"Puppeteer"},
	{"id":5,"img":"scottocat.jpg","name":"Scottocat"},
	{"id":6,"img":"benevocats.png","name":"Benevocats"},
	{"id":7,"img":"forktocat.jpg","name":"Forktocat"},
	{"id":8,"img":"repo.png","name":"Repo"},
	{"id":9,"img":"setuptocat.jpg","name":"Setuptocat"},
	{"id":10,"img":"socialite.jpg","name":"Socialite"},
	{"id":11,"img":"drupalcat.jpg","name":"Druplacat"},
	{"id":12,"img":"pythocat.png","name":"Pythocat"},
	{"id":13,"img":"founding-father.jpg","name":"Founding Father"},
	{"id":14,"img":"bouncercat.png","name":"Bouncer"},
	{"id":15,"img":"octonaut.jpg","name":"Octonaut"},
	{"id":16,"img":"trekkie.png","name":"Trekkie"},
	{"id":17,"img":"monroe.jpg","name":"Monroe"},
	{"id":18,"img":"hubot.jpg","name":"Hubot"},
	{"id":19,"img":"dolla-dolla-bill-yall.jpg","name":"Dolla Dolla Bill, Y'all"},
	{"id":20,"img":"drunktocat.jpg","name":"Drunktocat"},
	{"id":21,"img":"swagtocat.png","name":"Swagtocat"},
	{"id":22,"img":"wilson.jpg","name":"Wilson"},
	{"id":23,"img":"spocktocat.png","name":"Spocktocat"},
	{"id":24,"img":"jean-luc-picat.jpg","name":"Jean-Luc Picat"},
	{"id":25,"img":"inspectocat.jpg","name":"Inspectocat"},
	{"id":26,"img":"ironcat.jpg","name":"IronCat"},
	{"id":27,"img":"agendacat.png","name":"Agendacat"},
	{"id":28,"img":"octoclark-kentocat.jpg","name":"Octoclark Kentocat"},
	{"id":29,"img":"okal-eltocat.jpg","name":"Okal-Eltocat"},
	{"id":30,"img":"pacman-ghosts.jpg","name":"Blinktocat, Pinktocat, Inktocat, and Clyde"},
	{"id":31,"img":"total-eclipse-of-the-octocat.jpg","name":"Total Eclipse of the Octocat"},
	{"id":32,"img":"constructocat2.jpg","name":"Constructocat"},
	{"id":33,"img":"collabocats.jpg","name":"Collabocats"},
	{"id":34,"img":"supportcat.png","name":"Supportcat"},
	{"id":35,"img":"cherryontop-o-cat.png","name":"Cherryontop-o-cat"},
	{"id":36,"img":"chellocat.jpg","name":"Chellocat"},
	{"id":37,"img":"xtocat.jpg","name":"X-tocat"},
	{"id":38,"img":"jenktocat.jpg","name":"Jenktocat"},
	{"id":39,"img":"poptocat.png","name":"Poptocat"},
	{"id":40,"img":"scarletteocat.jpg","name":"Scarletteocat"},
	{"id":41,"img":"cloud.jpg","name":"Cloud"},
	{"id":42,"img":"dodgetocat.jpg","name":"Dodge, Duck, Dip, Dive, Dodgetocat"},
	{"id":43,"img":"notocat.jpg","name":"Not Octocat"},
	{"id":44,"img":"andycat.jpg","name":"Andycat"},
	{"id":45,"img":"bear-cavalry.png","name":"Bear Cavalry"},
	{"id":46,"img":"spectrocat.png","name":"Spectrocat"},
	{"id":47,"img":"octdrey-catburn.jpg","name":"Octdrey Catburn"},
	{"id":48,"img":"nyantocat.gif","name":"Nyantocat"},
	{"id":49,"img":"shoptocat.png","name":"Shoptocat"},
	{"id":50,"img":"oktobercat.png","name":"Oktobercat"},
	{"id":51,"img":"visionary.jpg","name":"Visionary"},
	{"id":52,"img":"riddlocat.png","name":"Riddlocat"},
	{"id":53,"img":"hipster-partycat.jpg","name":"Hipster Partycat"},
	{"id":54,"img":"waldocat.png","name":"Where's Waldocat"},
	{"id":55,"img":"father_timeout.jpg","name":"Father Timeout"},
	{"id":56,"img":"grim-repo.jpg","name":"Grim Repo"},
	{"id":57,"img":"octocat-de-los-muertos.jpg","name":"Octocat De Los Muertos"},
	{"id":58,"img":"baracktocat.jpg","name":"Baracktocat"},
	{"id":59,"img":"octotron.jpg","name":"Octotron"},
	{"id":60,"img":"plumber.jpg","name":"Plumber"},
	{"id":61,"img":"linktocat.jpg","name":"Linktocat"},
	{"id":62,"img":"megacat.jpg","name":"Megacat"},
	{"id":63,"img":"thanktocat.png","name":"Thanktocat"},
	{"id":64,"img":"orderedlistocat.png","name":"Ordered Listocat"},
	{"id":65,"img":"saint-nicktocat.jpg","name":"Saint Nicktocat"},
	{"id":66,"img":"herme-t-crabb.png","name":"Nemesis"},
	{"id":67,"img":"defunktocat.png","name":"Defunktocat"},
	{"id":68,"img":"dojocat.jpg","name":"Dojocat"},
	{"id":69,"img":"doctocat-brown.jpg","name":"Doctocat Brown"},
	{"id":70,"img":"adventure-cat.png","name":"Adventure Cat"},
	{"id":71,"img":"strongbadtocat.png","name":"Strongbadtocat"},
	{"id":72,"img":"codercat.jpg","name":"Codercat"},
	{"id":73,"img":"aidorucat.png","name":"Aidorucat"},
	{"id":74,"img":"electrocat.png","name":"Electrocat"},
	{"id":75,"img":"snowoctocat.png","name":"Snow Octocat"},
	{"id":76,"img":"front-end-conftocat.png","name":"Front-End Conftocat"},
	{"id":77,"img":"momtocat.png","name":"Momtocat"},
	{"id":78,"img":"twenty-percent-cooler-octocat.png","name":"20% Cooler Octocat"},
	{"id":79,"img":"red-polo.png","name":"Red Polo"},
	{"id":80,"img":"heisencat.png","name":"Heisencat"},
	{"id":81,"img":"octofez.png","name":"Octofez"},
	{"id":82,"img":"droidtocat.png","name":"Droidtocat"},
	{"id":83,"img":"minion.png","name":"Minion"},
	{"id":84,"img":"homercat.png","name":"Homercat"},
	{"id":85,"img":"murakamicat.png","name":"Murakamicat"},
	{"id":86,"img":"deckfailcat.png","name":"Deckfailcat"},
	{"id":87,"img":"pusheencat.png","name":"Pusheencat"},
	{"id":88,"img":"stormtroopocat.png","name":"Stormtroopocat"},
	{"id":89,"img":"dodgetocat_v2.png","name":"Dodgetocat v2"},
	{"id":90,"img":"megacat-2.png","name":"Megacat v2"},
	{"id":91,"img":"spidertocat.png","name":"Spidertocat"},
	{"id":92,"img":"droctocat.png","name":"Dr.Octocat"},
	{"id":93,"img":"gangnamtocat.png","name":"Gangnamtocat"},
	{"id":94,"img":"skitchtocat.png","name":"Skitchtocat"},
	{"id":95,"img":"motherhubbertocat.png","name":"Motherhubbertocat"},
	{"id":96,"img":"FIRSTocat.png","name":"FIRSTocat"},
	{"id":97,"img":"goretocat.png","name":"goretocat"},
	{"id":98,"img":"Professortocat_v2.png","name":"professortocat_v2"},
	{"id":99,"img":"kimonotocat.png","name":"Kimonotocat"},
	{"id":100,"img":"Mardigrastocat.png","name":"Mardigrastocat"},
	{"id":101,"img":"poptocat_v2.png","name":"Poptocat v2"},
	{"id":102,"img":"foundingfather_v2.png","name":"Founding Father v2"},
	{"id":103,"img":"daftpunktocat-guy.gif","name":"Daftpunktocat-Guy"},
	{"id":104,"img":"daftpunktocat-thomas.gif","name":"Daftpunktocat-Thomas"},
	{"id":105,"img":"femalecodertocat.png","name":"Femalecodertocat"},
	{"id":106,"img":"octoliberty.png","name":"OctoLiberty"}
];


var server = http.createServer(function(req, res){
  //console.log("req:",req);
  logger.log("req.headers: " + logger.inspect(req.headers, { showHidden: true, depth: null }));
  var query = url.parse(req.url, true).query;
  if (Number(query.id) === NaN || query.id > octoArr.length || query.id === 0) {
  	logger.log("Bad Request");
  	res.writeHead(404, {'Content-Type': 'text/plain'});
  	res.end("Bad ID value!");
  }
  else  {
  	var id;
  	if (!query.id) {
  		logger.log("No ID specified");
	  	id = Math.floor(Math.random() * (octoArr.length)); //Math.floor(Math.random() * (max - min + 1)) + min;
	}
	else {
		logger.log("Octocat ID specified");
		id = Number(query.id) - 1;
	}
	logger.log("Octocat ID: " + id);
  	var octocat = octoArr[id];
    fs.readFile('img/' + octocat.img, function(err, img) {
    	if (err) {
    		throw new Error (err);
    		res.writeHead(400,{'Content-Type': 'text/plain'});
    		res.end("Server error occured.");
    	}
    	else {
    		res.writeHead(200, {'Content-Type': 'image/gif'});
    		if (query.x || query.y) {
    			logger.log("Octocat to be resized");
    			var imgConversionSettings = {	
	    			srcData: img,
					format: 'png'
				}
	    		
	    		if (query.x) {
	    			imgConversionSettings.width = Number(query.x);
	    			logger.log("Octocat.x = " + imgConversionSettings.width);
	    		}
	    		if (query.y) {
					imgConversionSettings.height = Number(query.y);
					logger.log("Octocat.y = " + imgConversionSettings.height);
	    		}

				im.resize(imgConversionSettings, function(err, stdout, stderr) {
				  	if (err) {
				  		logger.log("stderr:",stderr);
				  		throw err;
				  	}
					res.end(stdout, 'binary');
				});
	    	}
    		else
	    		res.end(img, 'binary');
    	}
    });
  }
});

server.listen(3000, function () {
	logger.log('Server running at http://127.0.0.1:3000');
});