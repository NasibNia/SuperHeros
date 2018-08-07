<!-- Put the name of the project after the # -->
<!-- the # means h1  -->
# Nasib in the jQuery Battle Land!

<!-- Put a description of what the project is -->

This fun project is all about diving deeper into see of javaScript and jQuery to create dynamic websites!

Using the sweet language of javascript and the rich library of jQuery and its powerful built-in functions, I created this battle game in which DOM is manipulated in real-time and interacts dynamically with the user.
 

# Link to deployed site
<!-- make a link to the deployed site --> 
<!-- [What the user will see](the link to the deployed site) -->

[NASIB in jQuery Battle Land](https://nasibnia.github.io/SuperHeros/.)


# Images
<!-- take a picture of the image and add it into the readme  -->
<!-- ![image title](path or link to image) -->
![wire frame](assets/images/IMG_1662.JPG)



# technology used
<!-- make a list of technology used -->
<!-- what you used for this web app, like html css -->

<!-- 
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item. 
-->
- HTML
- css
- Bootstrap
- jquery
- javascript



# code snippets
<!-- put snippets of code inside ``` ``` so it will look like code -->
<!-- if you want to put blockquotes use a > -->

```
var touchedObj = {
		isTouched : [false , false, false, false],
		resetDisplay : function() {
			$("#charPlatform").empty();	
			for (var i = 0 ; i < allHeros.length ; i++){
				if (this.isTouched [i] === false) {
					console.log(allHeros[i].name);
					$("#charPlatform").append('<div class="hero" style="margin-left:10%" style="margin-right:10%" value =' + i + '>'+ allHeros[i].image + '</div>');
				}
			}

		}

	};

$(document).on('click', "#attackId", function() {
		if(!gameOver){
			atkCount++;
			atkrScore -=  defender.defeat ;
			dfndrScore -= (attacker.life * atkCount); 

			$("#atkScore").text(atkrScore);
			$("#dfndScore").text(dfndrScore);

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


```


# Learning points
<!-- Learning points where you would write what you thought was helpful -->
- html
- css
- Bootstrap
- event listening functions
- on-click events
- jquery
- javascript
- DOM manipulation




# Author 
<!-- make a link to the deployed site and have your name as the link -->
Nasibeh Nourbakhshnia
(www.linkedin.com/in/nasibehnourbakhshnia)

# License