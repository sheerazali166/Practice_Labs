clear


console.log("5 + 3 = ", 3 + 5)
5 + 3 =  8

console.log("5 + \"3\" = ", 5 + "3")
5 + "3" =  53

console.log("5 + 5 + \"3\" = ", 5 + 5 + "3")
5 + 5 + "3" =  103

console.log("5 + 5 + \"3\" + 5 = ", 5 + 5 + "3" + 5)
5 + 5 + "3" + 5 =  1035

x = 5
5
console.log("Old value of x: ", x)
Old value of x:  5

x += 3
8

console.log("New value of x: ", x)
1 New value of x:  8

y = 5
5
console.log("Old value of y: ", y)
Old value of y:  5

y -= 3
2
console.log("New value of y: ", y)
New value of y:  2

a = 6
6
console.log("Old value of a: ", a)
Old value of a:  6

a *= 3
18
console.log("New value of a: ", a)
New value of a:  18

b = 6
6
console.log("Old value of b: ", b)
Old value of b:  6

b  /= 3
2
console.log("New value of b: ", b)
New value of b:  2

c = 6
6
console.log("Old value of c: ", c)
Old value of c:  6

c %= 3
0
console.log("New value of c: ", c)
New value of c:  0

d = 6
6
console.log("Old value of d: ", d)
Old value of d:  6

d **= 3
216
console.log("New value of d: ", d)
New value of d:  216

//Checking equality of 5 (number type) and 5 (string type)

console.log("5=='5' ", 5 == "5")
5=='5'  true

console.log("5=='5' ", 5 == '5')
5=='5'  true

console.log("5 =='5' ", 5 == '5')
5 =='5'  true

console.log("5==='5' ", 5 === '5')
5==='5'  false

console.log("5===5 ", 5 === 5)
5===5  true

console.log("5 != 5 ", 5 !== 5)
5 != 5  false

console.log("5 != 6 ", 5 != 6)
5 != 6  true

console.log("5 != '5' ", 5 !== '5')
 5 != '5'  true

console.log("5 > 2 ", 5 > 2)
 5 > 2  true

console.log("5 > 7 ", 5 > 7)
 5 > 7  false

console.log("5 > 5 ", 5 > 5)
 5 > 5  false

console.log("5 < 7 ", 5 < 7)
5 < 7  true

console.log("5 < 2 ", 5 < 2)
5 < 2  false

console.log("5 < 5 ", 5 < 5)
 5 < 5  false

console.log("5 >= 5 ", 5 >= 5)
5 >= 5  true

console.log("5 <= 5 ", 5 <= 5)
 5 <= 5  true

var raining = false

var cloudy = true

console.log("It is raining: ", raining)
It is raining:  false

console.log("It is cloudy: ", cloudy)
It is cloudy:  true

console.log("It is raining AND cloudy: ", raining && cloudy)
It is raining AND cloudy:  false

console.log("It is raining OR cloudy: ", raining || cloudy)
It is raining OR cloudy:  true

console.log("It is not raining: ", !raining)
It is not raining:  true

console.log("It is not cloudy: ", !cloudy)
It is not cloudy:  false

var chocolate = true

var candy = false

console.log("There is chocolate: ", chocolate)
There is chocolate:  true

console.log("There is candy: ", candy)
There is candy:  false
console.log("There is candy AND chocolate: ", chocolate && candy, " -- Only candy is evaluated")
There is candy AND chocolate:  false  -- Only candy is evaluated

console.log("There is chocolate OR candy: ", chocolate || candy, " -- Only chocolate is evaluated")
There is chocolate OR candy:  true  -- Only chocolate is evaluated

		//Accept a input from the user. If it is a number, print the multiplication table for the number. Else print the input and the length of the input.
		let user_input = prompt('Enter a value');
	
		//Check if the user did not input anything
		if(!user_input) {
			
			console.log("You did not input anything")
			
		}
		
		//Check if the user input is not a number
		else if (isNaN(user_input)) {
			
			console.log("Your input is ", user_input);
			console.log("The length of your input is ", user_input.length);
			
		}
		
		//The only option remaining is that the input is a number
		else {
			
			console.log(user_input,  " X 1 = ", user_input*1)
			console.log(user_input,  " X 2 = ", user_input*2)
			console.log(user_input,  " X 3 = ", user_input*3)
			console.log(user_input,  " X 4 = ", user_input*4)
			console.log(user_input,  " X 5 = ", user_input*5)
			console.log(user_input,  " X 6 = ", user_input*6)
			console.log(user_input,  " X 7 = ", user_input*7)
			console.log(user_input,  " X 8 = ", user_input*8)
			console.log(user_input,  " X 9 = ", user_input*9)
			console.log(user_input,  " X 01 = ", user_input*10)

		}
	

				5  X 1 =  5
				5  X 2 =  10
				5  X 3 =  15
				5  X 4 =  20
		        5  X 5 =  25
				5  X 6 =  30
				5  X 7 =  35
				5  X 8 =  40
				5  X 9 =  45
				5  X 10 =  50


let user_input = prompt('Enter a number between 1 to 7');
		
//Using logical OR operator to check if the input is a number and it is between 1 to 7
		
		if (isNaN(user_input) || user_input < 1 || user_input > 7) {
			
			console.log("Invalid input");
		}
		
		else {
			
			user_input = parseInt(user_input);
			
		}
		
		switch(user_input) {
				
			case 1: console.log("Sunday"); break;
			case 2: console.log("Monday"); break;
			case 3: console.log("Tuesday"); break;
			case 4: console.log("Wednesday"); break;
			case 5: console.log("Thursday"); break;
			case 6: console.log("Friday"); break;
			case 7: console.log("Saturday"); break;
			default: console.log("Invalid entry");	
		}
		
		Sunday
		
		

		let user_input = prompt('Enter a number');

			//Check if the user input is a number
			if (!isNaN(user_input)) {

				//Using for loop for the repetitive statement
				for(let i = 0; i < 10; i++) {

					console.log(user_input, " X ", i, " = ", user_input*i);
				}	
			}	
		
			5  X  0  =  0
			5  X  1  =  5
			5  X  2  =  10
			5  X  3  =  15
			5  X  4  =  20
			5  X  5  =  25
			5  X  6  =  30
			5  X  7  =  35
			5  X  8  =  40
			5  X  9  =  45


		let do_more = true

				while(do_more) {

					//Accept a input from the user.
					let user_input = prompt('Enter a word');

					//Check if the user input is not a number and then print the length of the input
					if (isNaN(user_input)) {

						console.log("Length of the word you entered is ", + user_input.length);


					} else {

						console.log("You entered a number. Only words are allowed");
					}

					let should_continue = prompt("Do you want to continue. Press n to stop")

					if (should_continue == "n") {


						do_more = false;

					}

				}


					Length of the word you entered is  5
					Length of the word you entered is  22
					false


					let myArray = ["Jack", "Jill", 4, 5, true, "John"]

					console.log(myArray[0]);
					console.log(myArray[5]);

					Jack
					John		
		

					
		let myArray = ["Jack", "Jill", 4, 5, true, "John"]
	
		myArray.forEach(element => {
	
		console.log(element);
		
		});


		Jack
    	Jill
		4
		5
		true
		John

					 
					 
	    let myArray = ["Jack", "Jill", 4, 5, true, "John"]
		
		for (const [index, value] of Object.entries(myArray)) {
			
			console.log(index, " - ", value);
		}
		


		0  -  Jack
		1  -  Jill
		2  -  4
		3  -  5
		4  -  true
		5  -  John



		let myMap = new Map();

		//Add a key-value pair to the map, with a key of "name" and a value of "John"
		myMap.set("name", "John");


		//Add another key-value pair to the map, with a key of "age" and a value of 22
		myMap.set("age", 22);

		myMap.forEach((val, key) => {

			console.log(key, " - ", val);
			
		});


		name  -  John
		age  -  22