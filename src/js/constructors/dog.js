function Dog (options) {
	options = options || {};
	this.color = options.color;
	this.status = options.status || "normal";
	if (options.hungry === false){this.hungry = false} else {this.hungry=true};
}

export { Dog };
