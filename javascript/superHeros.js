// making sure the page is loaded before any action takes place
$(document).ready(function() {
	// initializin parameters on the page load
	var wins = 0;
	var losses =0;
	var heroLock = false;
	var firstSelected = false;
	var secondSelected = false;
	var message = "";
	var atkCount = 0;
	var score = 0;
	var atkrScore ;
	var dfndrScore ; 
	var gameOver = false;
	var fightCount = 0;


		
	// }

	var hero1 = {
		name : "Spider man",
		healthPoint	: 110,
		life: 3,
		defeat : 8,
		image: '<img src="assets/images/SpiderMan.jpeg" id="SM">',
	};
	var hero2 = {
		name : "Batman",
		healthPoint	: 180,
		life: 4,
		defeat : 10,
		image: '<img src="assets/images/BatMan2.jpeg" id="BM">'
	};
	var hero3 = {
		name : "Iron man",
		healthPoint	: 120,
		life: 6,
		defeat : 5,
		image: '<img src="assets/images/IronMan.jpeg" id="IM">'
	};
	var hero4 = {
		name : "Wonder woman",
		healthPoint	: 140,
		life: 8,
		defeat : 12,
		image: '<img src="assets/images/WonderWoman.jpeg" id="WW">'
	};

	var attacker = {
		name : "",
		healthPoint	: 0,
		life: 0,
		defeat : 0,
		image: '<img>'
	};

	var defender = {
		name : "",
		healthPoint	: 0,
		life: 0,
		defeat : 0,
		image: '<img>'
	};
	// put all objects in an array
	var allHeros = [hero1,hero2,hero3,hero4];

	// show the objects on the display
	var touchedObj = {
		isTouched : [false , false, false, false],
		resetDisplay : function() {
			$("#charPlatform").empty();	
			for (var i = 0 ; i < allHeros.length ; i++){
				if (this.isTouched [i] === false) {
					console.log(allHeros[i].name);
					var tmp = $("<div>");
					tmp.html('<div class="hero" style="margin-left:10%" style="margin-right:10%" value =' + i + '>'+ allHeros[i].image + '</div>');
					$("#charPlatform").append(tmp);
				}
			}

		}

	};



	//function to initialize or reset the game
	function reset() {
		message = "choose your FIGHTER to start a battle!";
		console.log(message);
		heroLock = false;
		firstSelected = false;
		secondSelected = false;
		message = "";
		atkCount = 0;
		score = 0;
		atkrScore ;
		dfndrScore ; 
		gameOver = false;
		fightCount = 0;
		touchedObj.isTouched = [false , false, false, false];
		touchedObj.resetDisplay();

	}

	$(document).on('click', "#resetId", function() {
		if(gameOver){

			message = "choose your FIGHTER to start a battle!";
			console.log(message);
			heroLock = false;
			firstSelected = false;
			secondSelected = false;
			message = "";
			atkCount = 0;
			score = 0;
			atkrScore ;
			dfndrScore ; 
			gameOver = false;
			fightCount = 0;
			touchedObj.isTouched = [false , false, false, false];
			touchedObj.resetDisplay();
			attack.hideBtn();
			$("#attackArea").empty();
			$("#defenceArea").empty();
			$("#dfndScore").empty();
			$("#atkScore").empty();

		}
	});



	//send message to the page
	function command (str){
		$("#commandId").html(str);
	}


	//create an object for Attack: 
	var attack = {
		// image : '<img src="">'
		displayBtn : function(){
			// $("#attackId").html(this.image);
			$("#attackId").text("ATTACK");
		},
		hideBtn : function(){
			$("#attackId").empty();
		}
	};



	touchedObj.resetDisplay();


	$(document).on('click', ".hero", function() {
		console.log("fs", firstSelected)
		console.log("SS", secondSelected)

		if (!firstSelected){
			// var msg = "select the FIGHTER to start a battle!";
			console.log("in the process of selecting first worrior");
			firstSelected = true;

			var invokedObj = allHeros[parseInt($(this).attr("value"))];
			console.log("you just invoked     " + invokedObj.name);


			attacker.name = invokedObj.name;
			attacker.healthPoint = invokedObj.healthPoint;
			attacker.life = invokedObj.life;
			attacker.defeat = invokedObj.defeat;
			attacker.image = invokedObj.image;
			
			atkrScore = attacker.healthPoint ;
			$("#atkScore").text(atkrScore);
			

			console.log("attacker name is     " + attacker.name);
			$("#attackArea").html(attacker.image);
			command("Now select the second character to battle against!"); 

			
			touchedObj.isTouched[parseInt($(this).attr("value"))] = true;
			touchedObj.resetDisplay();

		} else if (!secondSelected){
			
			fightCount++; 
			console.log("in the process of selecting defender worrior");

			secondSelected = true;
			console.log($(this));

			console.log(parseInt($(this).attr("value")));

			var invokedObj = allHeros[parseInt($(this).attr("value"))];
			console.log("you just invoked     " + invokedObj.name);
			
			defender.name = invokedObj.name;
			defender.healthPoint = invokedObj.healthPoint;
			defender.life = invokedObj.life;
			defender.defeat = invokedObj.defeat;
			defender.image = invokedObj.image;

			dfndrScore = defender.healthPoint; 
			$("#dfndScore").text(dfndrScore);


			console.log("defender name is     " + defender.name);
			$("#defenceArea").html(defender.image);
			command("You shall start your battle now, May evil forces be with you!"); 

			touchedObj.isTouched[parseInt($(this).attr("value"))] = true;
			touchedObj.resetDisplay();

			//display attack button;
			attack.displayBtn();


		}

	});

	$(document).on('click', "#attackId", function() {
		if(!gameOver){
			atkCount++;
			atkrScore -=  defender.defeat ;
			dfndrScore -= (attacker.life * atkCount); 

			$("#atkScore").text(atkrScore);
			$("#dfndScore").text(dfndrScore);

			console.log("atkrScore. :  " + atkrScore);
			console.log("dfndrScore. :  " + dfndrScore);
			if (atkrScore <= 0) {
				//reset the game; you lost
				console.log("You lost; reset the game");
				//update losses
				losses++;
				$("#lossId").text(losses);
				gameOver = true;
			} else if (dfndrScore <= 0){
				//choose a new apponent
				if (fightCount == 3){
					command("Good Job, YOU ACTUALLY WON!"); 
					wins++;
					$("#winId").text(wins);
					gameOver = true;
					attack.hideBtn();

				} else {
					command("Good Job, choose another opponent!"); 
					secondSelected = false;
					attack.hideBtn();

				}

			}
		}
	});

});