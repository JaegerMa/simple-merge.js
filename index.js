const unique = require('array-unique');

function simpleMerge()
{
	let args = Array.from(arguments);

	if(args.length === 0)
		return undefined;
	if(args.length === 1)
		return args[0];
	
	let merged = args[0];
	for(let i = 1; i < args.length; ++i)
		merged = merge(merged, args[i]);

	return merged;
}

function merge(obj1, obj2)
{
	if(!isMergeable(obj2))
	{
		if(obj2 !== undefined)
			return obj2;
		return obj1;
	}
	if(!isMergeable(obj1))
		return obj2;


	let keys = unique(Object.keys(obj1).concat(Object.keys(obj2)));
	let merged = {};
	for(let key of keys)
		merged[key] = merge(obj1[key], obj2[key]);

	return merged;
}

function isMergeable(obj)
{
	return obj !== null && typeof(obj) === 'object' && !Array.isArray(obj);
}

module.exports = simpleMerge;