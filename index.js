
// Promise 1
let myPromise = new Promise (function (resolve, reject) {
	setTimeout(function() {
		console.log("Async operation is complete");
	},5000)
	resolve(new Error("Async operation failed"));
} );

// Promise 2


let myPromise2 = new Promise (function (resolve, reject) {
	setTimeout(function() {
		console.log("Async operation is complete");
	},10000)
	resolve(new Error("Async operation failed"));
} );