function Person (options) {

	options = options || {};
	if (options.cool === true){this.cool = true} else {this.cool=false};
};

Person.prototype.pet = function(target){
		target.status = "happy";
	}

Person.prototype.feed = function(target){
		target.hungry = false;
	}

export { Person };
