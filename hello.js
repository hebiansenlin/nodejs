/**
 * 定义模块
 */
module.exports = function() 
{
	var name
	
	this.setName = function(thyName) 
	{
		name = thyName; 
	}
	
	this.sayHello = function() 
	{
		console.log('Hello ' + name); 
	}
} 