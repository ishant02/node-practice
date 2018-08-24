var square = (x) => x*x;
console.log(square(8));


var user = {
	name: "Ishant",
	sayHi : () => {
		console.log(arguments);
		console.log(`Hi, I'm ${this.name}`);
	},
	sayHiAlt () {
		console.log(arguments);
		console.log(`Hi, I'm ${this.name}`);
	}
};

console.log(user.sayHi(1,2,3));