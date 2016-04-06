var links = [{"fromNode":"01-0000137425","fromCustomer":"ALAN MARELLO","toNode":"01-0000297549","toCustomer":"CURT RESER","date":"2015-12-01T05:00:00.238+0000","currencyAmount":1218903,"edgeTypeCode":"R "},
	  				{"fromNode":"01-0000137425","fromCustomer":"ALAN MARELLO","toNode":"01-0000297549","toCustomer":"CURT RESER","date":"2015-12-01T05:00:00.238+0000","currencyAmount":1942302,"edgeTypeCode":"U "},
	  				{"fromNode":"01-0000137425","fromCustomer":"ALAN MARELLO","toNode":"02-0000177498","toCustomer":"DOUGLAS LICHTENBERG","date":"2015-12-01T05:00:00.238+0000","currencyAmount":274754,"edgeTypeCode":"R "},
	  				{"fromNode":"01-0000137425","fromCustomer":"ALAN MARELLO","toNode":"01-0000214113","toCustomer":"LEON MCLAUGHLIN","date":"2015-12-01T05:00:00.238+0000","currencyAmount":753846,"edgeTypeCode":"R "},
	  				{"fromNode":"01-0000137425","fromCustomer":"ALAN MARELLO","toNode":"01-0000072984","toCustomer":"LINDA NEESE","date":"2015-12-01T05:00:00.239+0000","currencyAmount":260379,"edgeTypeCode":"U "},
	  				{"fromNode":"01-0000137425","fromCustomer":"ALAN MARELLO","toNode":"02-0000177498","toCustomer":"MAX LICHTENBERG","date":"2015-12-01T05:00:00.239+0000","currencyAmount":274754,"edgeTypeCode":"R "},
	  				{"fromNode":"01-0000137425","fromCustomer":"ALAN MARELLO","toNode":"03-0000202652","toCustomer":"PAUL MIKELSON","date":"2015-12-01T05:00:00.239+0000","currencyAmount":938132,"edgeTypeCode":"R "}]; 


yy = function()
{
	 
	//creating the links dataset with only source, target and value
	var targetLinks = _.map(links, function(obj){ return { source: obj.fromNode, target: obj.toNode, value: obj.currencyAmount / 10000 };});

	//create a nodes array with distinct values from the links array
	var nodesArray = [];
	var len = links.length;

	for(i = 0; i < len; i++){
		for(var key in links[i]){
			if(key == 'fromNode' || key =='toNode' || key == 'fromCustomer' || key == 'toCustomer'){
				nodesArray.push(links[i][key]);
			}
		}
	}

	//create an object array with parent

	var count = 0;
	var index = 1;

	var combinedArray = function(network){             
	  var newArray = [];
	  
	  	do{
	         newArray.push({
	  			id: network[count],
	  			parent: network[count+1],
	  		});
	        	count += 2;
	  	}while(count < network.length);
	  
	      return newArray;
	};

	//final array.
	//we will add and append this array with the parents
	var nodesDistinctArray = _.uniq(combinedArray(nodesArray), false, function(obj){return obj.id, obj.parent;});

	//this array will be used only to map the indices of the elements of nodes to links
	var nodesArrayForIndexing = _.map(nodesDistinctArray, function(obj){return obj.id;});

	//need to add a parent property to each object in this array
	var nodesIndexed = _.map(nodesDistinctArray, function(obj, index){return { id: index,
	                                                                           parent: obj.parent,
	                                                                           name: obj.id};});


	//creating an array with only parents
	var nodeswithParentsandID = _.map(nodesDistinctArray,function(obj){return {
		type: obj.parent.concat('P'),
		id: obj.id.concat(obj.parent).replace(/\s/g, ''),
		parent: null,
		name: obj.parent};});


	//this section will give us the final nodesArray:
	for(var i = 0; i < nodesIndexed.length; i++){
		for(var j = 0; j < nodeswithParentsandID.length; j++){
			if(nodesIndexed[i].parent == nodeswithParentsandID[j].name){
				nodesIndexed[i].parent = nodeswithParentsandID[j].id;
				nodesIndexed[i].type = nodeswithParentsandID[j].type;
			}
		}
	}

	//-------------------------------final datasets------------------------------------->>
	//append the array which contains parent elements and rest of the array:
	var targetNodes = nodeswithParentsandID.concat(nodesIndexed);

	//substituting the source and target values of targetLinks with the respective index:
	for(var i = 0; i < targetLinks.length; i++){
		targetLinks[i].source = nodesArrayForIndexing.indexOf(targetLinks[i].source);
		targetLinks[i].target = nodesArrayForIndexing.indexOf(targetLinks[i].target);
	}

	types = _.uniq(_.map(targetNodes, function(obj){return obj.type;}), false, function(obj){return obj;});
	var type_colors = [];
	for(var j = 0; j < types.length; j++){type_colors[j] = '#' + Math.floor(Math.random()*16777215).toString(16);}
	var type_highlight_colors = type_colors;

	return {targetNodes: targetNodes, 
	        targetLinks: targetLinks, 
	        types:types, 
	        type_highlight_colors: type_highlight_colors,
	        type_colors: type_colors
			};
};
