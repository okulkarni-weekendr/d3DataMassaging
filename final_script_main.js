'use strict';

var svg, tooltip, biHiSankey, path, defs, finalData, colorScale, highlightColorScale, isTransitioning;

// finalData = yy();

//-------------------------------------------->>myCOde<<---------------------------//
var links = [{"fromNode":"01-0000137425","fromCustomer":"ALAN MARELLO","toNode":"01-0000297549","toCustomer":"CURT RESER","date":"2015-12-01T05:00:00.238+0000","currencyAmount":1218903,"edgeTypeCode":"R "},{"fromNode":"01-0000137425","fromCustomer":"ALAN MARELLO","toNode":"01-0000297549","toCustomer":"CURT RESER","date":"2015-12-01T05:00:00.238+0000","currencyAmount":1942302,"edgeTypeCode":"U "},{"fromNode":"01-0000137425","fromCustomer":"ALAN MARELLO","toNode":"02-0000177498","toCustomer":"DOUGLAS LICHTENBERG","date":"2015-12-01T05:00:00.238+0000","currencyAmount":274754,"edgeTypeCode":"R "},{"fromNode":"01-0000137425","fromCustomer":"ALAN MARELLO","toNode":"01-0000214113","toCustomer":"LEON MCLAUGHLIN","date":"2015-12-01T05:00:00.238+0000","currencyAmount":753846,"edgeTypeCode":"R "},{"fromNode":"01-0000137425","fromCustomer":"ALAN MARELLO","toNode":"01-0000072984","toCustomer":"LINDA NEESE","date":"2015-12-01T05:00:00.239+0000","currencyAmount":260379,"edgeTypeCode":"U "},{"fromNode":"01-0000137425","fromCustomer":"ALAN MARELLO","toNode":"02-0000177498","toCustomer":"MAX LICHTENBERG","date":"2015-12-01T05:00:00.239+0000","currencyAmount":274754,"edgeTypeCode":"R "},{"fromNode":"01-0000137425","fromCustomer":"ALAN MARELLO","toNode":"03-0000202652","toCustomer":"PAUL MIKELSON","date":"2015-12-01T05:00:00.239+0000","currencyAmount":938132,"edgeTypeCode":"R "},{"fromNode":"01-0000137425","fromCustomer":"ALAN MARELLO","toNode":"02-0000177498","toCustomer":"RICK LICHTENBERG","date":"2015-12-01T05:00:00.239+0000","currencyAmount":274754,"edgeTypeCode":"R "},{"fromNode":"01-0000137425","fromCustomer":"ALAN MARELLO","toNode":"02-0000177498","toCustomer":"RICK LICHTENBERG","date":"2015-12-01T05:00:00.239+0000","currencyAmount":672134,"edgeTypeCode":"U "},{"fromNode":"01-0000137425","fromCustomer":"ALAN MARELLO","toNode":"02-0000177498","toCustomer":"STEVE LICHTENBERG","date":"2015-12-01T05:00:00.239+0000","currencyAmount":274754,"edgeTypeCode":"R "},{"fromNode":"01-0000137425","fromCustomer":"ALAN MARELLO","toNode":"03-0000202652","toCustomer":"SUSAN DIMLING","date":"2015-12-01T05:00:00.240+0000","currencyAmount":938132,"edgeTypeCode":"R "},{"fromNode":"01-0000297549","fromCustomer":"CURT RESER","toNode":"01-0000041546","toCustomer":"DEBBIE COMEAU","date":"2015-12-01T05:00:00.241+0000","currencyAmount":899568,"edgeTypeCode":"R "},{"fromNode":"01-0000297549","fromCustomer":"CURT RESER","toNode":"02-0000100520","toCustomer":"JUERGEN WEGE","date":"2015-12-01T05:00:00.241+0000","currencyAmount":334329,"edgeTypeCode":"R "},{"fromNode":"01-0000297549","fromCustomer":"CURT RESER","toNode":"02-0000100520","toCustomer":"JUERGEN WEGE","date":"2015-12-01T05:00:00.241+0000","currencyAmount":1435495,"edgeTypeCode":"U "},{"fromNode":"01-0000297549","fromCustomer":"CURT RESER","toNode":"04-0000021837","toCustomer":"MCDONALDS FAMILY RESTAURANT","date":"2015-12-01T05:00:00.241+0000","currencyAmount":1091100,"edgeTypeCode":"U "},{"fromNode":"01-0000297549","fromCustomer":"CURT RESER","toNode":"01-0000117824","toCustomer":"MICHAEL RIOPEL","date":"2015-12-01T05:00:00.241+0000","currencyAmount":497293,"edgeTypeCode":"R "},{"fromNode":"01-0000041546","fromCustomer":"DEBBIE COMEAU","toNode":"03-0000074803","toCustomer":"EVON BROWNLEE","date":"2015-12-01T05:00:00.241+0000","currencyAmount":1547816,"edgeTypeCode":"R "},{"fromNode":"01-0000041546","fromCustomer":"DEBBIE COMEAU","toNode":"01-0000197278","toCustomer":"JOETTA COOPER","date":"2015-12-01T05:00:00.241+0000","currencyAmount":560620,"edgeTypeCode":"R "},{"fromNode":"01-0000041546","fromCustomer":"DEBBIE COMEAU","toNode":"03-0000074803","toCustomer":"JULIE DI GIROLAMO","date":"2015-12-01T05:00:00.242+0000","currencyAmount":1547816,"edgeTypeCode":"R "},{"fromNode":"01-0000041546","fromCustomer":"DEBBIE COMEAU","toNode":"03-0000281199","toCustomer":"KAREN WILSON","date":"2015-12-01T05:00:00.242+0000","currencyAmount":156083,"edgeTypeCode":"R "},{"fromNode":"01-0000041546","fromCustomer":"DEBBIE COMEAU","toNode":"03-0000281199","toCustomer":"KEVIN PAPPAS","date":"2015-12-01T05:00:00.243+0000","currencyAmount":156083,"edgeTypeCode":"R "},{"fromNode":"02-0000030303","fromCustomer":"FRED MANUEL","toNode":"02-0000311710","toCustomer":"BRIAN HANDLEY","date":"2015-12-01T05:00:00.243+0000","currencyAmount":932313,"edgeTypeCode":"R "},{"fromNode":"02-0000030303","fromCustomer":"FRED MANUEL","toNode":"03-0000115813","toCustomer":"CAROL MOEHRING","date":"2015-12-01T05:00:00.243+0000","currencyAmount":596020,"edgeTypeCode":"U "},{"fromNode":"02-0000030303","fromCustomer":"FRED MANUEL","toNode":"03-0000115813","toCustomer":"CAROL MOEHRING","date":"2015-12-01T05:00:00.243+0000","currencyAmount":859898,"edgeTypeCode":"R "},{"fromNode":"02-0000030303","fromCustomer":"FRED MANUEL","toNode":"02-0000045520","toCustomer":"CHRIS BLAXTON","date":"2015-12-01T05:00:00.243+0000","currencyAmount":901013,"edgeTypeCode":"U "},{"fromNode":"02-0000030303","fromCustomer":"FRED MANUEL","toNode":"02-0000300773","toCustomer":"JAMES A ALLEN","date":"2015-12-01T05:00:00.243+0000","currencyAmount":371444,"edgeTypeCode":"U "},{"fromNode":"02-0000030303","fromCustomer":"FRED MANUEL","toNode":"03-0000115813","toCustomer":"JANET WHEATLEY","date":"2015-12-01T05:00:00.243+0000","currencyAmount":859898,"edgeTypeCode":"R "},{"fromNode":"02-0000030303","fromCustomer":"FRED MANUEL","toNode":"03-0000011880","toCustomer":"JOLAIN NIEPOKOJ","date":"2015-12-01T05:00:00.244+0000","currencyAmount":857047,"edgeTypeCode":"R "},{"fromNode":"02-0000030303","fromCustomer":"FRED MANUEL","toNode":"03-0000011880","toCustomer":"RICHARD MANOS","date":"2015-12-01T05:00:00.244+0000","currencyAmount":709259,"edgeTypeCode":"U "},{"fromNode":"02-0000030303","fromCustomer":"FRED MANUEL","toNode":"03-0000011880","toCustomer":"RICHARD MANOS","date":"2015-12-01T05:00:00.244+0000","currencyAmount":857047,"edgeTypeCode":"R "},{"fromNode":"01-0000194809","fromCustomer":"GREG FIELDS","toNode":"02-0000311710","toCustomer":"BRIAN HANDLEY","date":"2015-12-01T05:00:00.245+0000","currencyAmount":1764451,"edgeTypeCode":"U "},{"fromNode":"01-0000194809","fromCustomer":"GREG FIELDS","toNode":"03-0000115813","toCustomer":"CAROL MOEHRING","date":"2015-12-01T05:00:00.245+0000","currencyAmount":662592,"edgeTypeCode":"R "},{"fromNode":"01-0000194809","fromCustomer":"GREG FIELDS","toNode":"02-0000045520","toCustomer":"CHRIS BLAXTON","date":"2015-12-01T05:00:00.245+0000","currencyAmount":764348,"edgeTypeCode":"U "},{"fromNode":"01-0000194809","fromCustomer":"GREG FIELDS","toNode":"02-0000045520","toCustomer":"CHRIS BLAXTON","date":"2015-12-01T05:00:00.245+0000","currencyAmount":820586,"edgeTypeCode":"R "},{"fromNode":"01-0000194809","fromCustomer":"GREG FIELDS","toNode":"02-0000300773","toCustomer":"JAMES A ALLEN","date":"2015-12-01T05:00:00.245+0000","currencyAmount":600018,"edgeTypeCode":"R "},{"fromNode":"01-0000194809","fromCustomer":"GREG FIELDS","toNode":"02-0000300773","toCustomer":"JAMES A ALLEN","date":"2015-12-01T05:00:00.246+0000","currencyAmount":611558,"edgeTypeCode":"U "},{"fromNode":"01-0000194809","fromCustomer":"GREG FIELDS","toNode":"03-0000115813","toCustomer":"JANET WHEATLEY","date":"2015-12-01T05:00:00.246+0000","currencyAmount":662592,"edgeTypeCode":"R "},{"fromNode":"01-0000194809","fromCustomer":"GREG FIELDS","toNode":"02-0000300773","toCustomer":"JOHN ALLEN","date":"2015-12-01T05:00:00.246+0000","currencyAmount":600018,"edgeTypeCode":"R "},{"fromNode":"01-0000194809","fromCustomer":"GREG FIELDS","toNode":"03-0000011880","toCustomer":"JOLAIN NIEPOKOJ","date":"2015-12-01T05:00:00.246+0000","currencyAmount":933634,"edgeTypeCode":"R "},{"fromNode":"01-0000194809","fromCustomer":"GREG FIELDS","toNode":"02-0000300773","toCustomer":"JULIANN ALLEN","date":"2015-12-01T05:00:00.246+0000","currencyAmount":600018,"edgeTypeCode":"R "},{"fromNode":"01-0000194809","fromCustomer":"GREG FIELDS","toNode":"03-0000011880","toCustomer":"RICHARD MANOS","date":"2015-12-01T05:00:00.247+0000","currencyAmount":933634,"edgeTypeCode":"R "},{"fromNode":"01-0000194809","fromCustomer":"GREG FIELDS","toNode":"02-0000300773","toCustomer":"YVONNE ALLEN","date":"2015-12-01T05:00:00.247+0000","currencyAmount":600018,"edgeTypeCode":"R "},{"fromNode":"01-0000197278","fromCustomer":"JOETTA COOPER","toNode":"02-0000311710","toCustomer":"BRIAN HANDLEY","date":"2015-12-01T05:00:00.247+0000","currencyAmount":138264,"edgeTypeCode":"R "},{"fromNode":"01-0000197278","fromCustomer":"JOETTA COOPER","toNode":"03-0000115813","toCustomer":"CAROL MOEHRING","date":"2015-12-01T05:00:00.247+0000","currencyAmount":541426,"edgeTypeCode":"U "},{"fromNode":"01-0000197278","fromCustomer":"JOETTA COOPER","toNode":"02-0000045520","toCustomer":"CHRIS BLAXTON","date":"2015-12-01T05:00:00.248+0000","currencyAmount":347803,"edgeTypeCode":"R "},{"fromNode":"01-0000197278","fromCustomer":"JOETTA COOPER","toNode":"02-0000045520","toCustomer":"CHRIS BLAXTON","date":"2015-12-01T05:00:00.248+0000","currencyAmount":755281,"edgeTypeCode":"U "},{"fromNode":"01-0000197278","fromCustomer":"JOETTA COOPER","toNode":"02-0000300773","toCustomer":"JAMES A ALLEN","date":"2015-12-01T05:00:00.248+0000","currencyAmount":1043114,"edgeTypeCode":"R "},{"fromNode":"01-0000197278","fromCustomer":"JOETTA COOPER","toNode":"02-0000300773","toCustomer":"JOHN ALLEN","date":"2015-12-01T05:00:00.248+0000","currencyAmount":1043114,"edgeTypeCode":"R "},{"fromNode":"01-0000197278","fromCustomer":"JOETTA COOPER","toNode":"02-0000300773","toCustomer":"JULIANN ALLEN","date":"2015-12-01T05:00:00.248+0000","currencyAmount":1043114,"edgeTypeCode":"R "},{"fromNode":"01-0000197278","fromCustomer":"JOETTA COOPER","toNode":"03-0000011880","toCustomer":"RICHARD MANOS","date":"2015-12-01T05:00:00.248+0000","currencyAmount":522290,"edgeTypeCode":"U "},{"fromNode":"01-0000197278","fromCustomer":"JOETTA COOPER","toNode":"02-0000300773","toCustomer":"YVONNE ALLEN","date":"2015-12-01T05:00:00.249+0000","currencyAmount":1043114,"edgeTypeCode":"R "},{"fromNode":"02-0000100520","fromCustomer":"JUERGEN WEGE","toNode":"02-0000030303","toCustomer":"ANNETTE MANUEL","date":"2015-12-01T05:00:00.249+0000","currencyAmount":1128919,"edgeTypeCode":"R "},{"fromNode":"02-0000100520","fromCustomer":"JUERGEN WEGE","toNode":"02-0000030303","toCustomer":"FRED MANUEL","date":"2015-12-01T05:00:00.249+0000","currencyAmount":108812,"edgeTypeCode":"U "},{"fromNode":"02-0000100520","fromCustomer":"JUERGEN WEGE","toNode":"02-0000030303","toCustomer":"FRED MANUEL","date":"2015-12-01T05:00:00.250+0000","currencyAmount":1128919,"edgeTypeCode":"R "},{"fromNode":"02-0000100520","fromCustomer":"JUERGEN WEGE","toNode":"01-0000197278","toCustomer":"JOETTA COOPER","date":"2015-12-01T05:00:00.250+0000","currencyAmount":536223,"edgeTypeCode":"U "},{"fromNode":"02-0000100520","fromCustomer":"JUERGEN WEGE","toNode":"01-0000197278","toCustomer":"JOETTA COOPER","date":"2015-12-01T05:00:00.250+0000","currencyAmount":880475,"edgeTypeCode":"R "},{"fromNode":"02-0000100520","fromCustomer":"JUERGEN WEGE","toNode":"02-0000030303","toCustomer":"LAURA MANUEL","date":"2015-12-01T05:00:00.250+0000","currencyAmount":1128919,"edgeTypeCode":"R "},{"fromNode":"03-0000074803","fromCustomer":"JULIE DI GIROLAMO","toNode":"02-0000311710","toCustomer":"BRIAN HANDLEY","date":"2015-12-01T05:00:00.250+0000","currencyAmount":765961,"edgeTypeCode":"R "},{"fromNode":"03-0000074803","fromCustomer":"JULIE DI GIROLAMO","toNode":"03-0000115813","toCustomer":"CAROL MOEHRING","date":"2015-12-01T05:00:00.250+0000","currencyAmount":915526,"edgeTypeCode":"U "},{"fromNode":"03-0000074803","fromCustomer":"JULIE DI GIROLAMO","toNode":"02-0000045520","toCustomer":"CHRIS BLAXTON","date":"2015-12-01T05:00:00.250+0000","currencyAmount":235157,"edgeTypeCode":"R "},{"fromNode":"03-0000074803","fromCustomer":"JULIE DI GIROLAMO","toNode":"02-0000300773","toCustomer":"JAMES A ALLEN","date":"2015-12-01T05:00:00.251+0000","currencyAmount":1045883,"edgeTypeCode":"U "},{"fromNode":"03-0000074803","fromCustomer":"JULIE DI GIROLAMO","toNode":"03-0000011880","toCustomer":"RICHARD MANOS","date":"2015-12-01T05:00:00.251+0000","currencyAmount":623251,"edgeTypeCode":"U "},{"fromNode":"03-0000281199","fromCustomer":"KAREN WILSON","toNode":"02-0000045520","toCustomer":"CHRIS BLAXTON","date":"2015-12-01T05:00:00.252+0000","currencyAmount":951551,"edgeTypeCode":"U "},{"fromNode":"03-0000281199","fromCustomer":"KAREN WILSON","toNode":"02-0000300773","toCustomer":"JAMES A ALLEN","date":"2015-12-01T05:00:00.252+0000","currencyAmount":1556915,"edgeTypeCode":"U "},{"fromNode":"03-0000281199","fromCustomer":"KAREN WILSON","toNode":"03-0000011880","toCustomer":"RICHARD MANOS","date":"2015-12-01T05:00:00.252+0000","currencyAmount":302729,"edgeTypeCode":"U "},{"fromNode":"01-0000214113","fromCustomer":"LEON MCLAUGHLIN","toNode":"01-0000041546","toCustomer":"DEBBIE COMEAU","date":"2015-12-01T05:00:00.252+0000","currencyAmount":802802,"edgeTypeCode":"U "},{"fromNode":"01-0000214113","fromCustomer":"LEON MCLAUGHLIN","toNode":"02-0000100520","toCustomer":"JUERGEN WEGE","date":"2015-12-01T05:00:00.252+0000","currencyAmount":439814,"edgeTypeCode":"R "},{"fromNode":"01-0000214113","fromCustomer":"LEON MCLAUGHLIN","toNode":"02-0000100520","toCustomer":"JUERGEN WEGE","date":"2015-12-01T05:00:00.252+0000","currencyAmount":647554,"edgeTypeCode":"U "},{"fromNode":"01-0000214113","fromCustomer":"LEON MCLAUGHLIN","toNode":"04-0000021837","toCustomer":"MCDONALDS FAMILY RESTAURANT","date":"2015-12-01T05:00:00.253+0000","currencyAmount":666013,"edgeTypeCode":"R "},{"fromNode":"01-0000214113","fromCustomer":"LEON MCLAUGHLIN","toNode":"02-0000030165","toCustomer":"STU SCHICOFF","date":"2015-12-01T05:00:00.253+0000","currencyAmount":1505957,"edgeTypeCode":"R "},{"fromNode":"01-0000072984","fromCustomer":"LINDA NEESE","toNode":"02-0000100520","toCustomer":"JUERGEN WEGE","date":"2015-12-01T05:00:00.254+0000","currencyAmount":1140772,"edgeTypeCode":"R "},{"fromNode":"01-0000072984","fromCustomer":"LINDA NEESE","toNode":"04-0000021837","toCustomer":"MCDONALDS FAMILY RESTAURANT","date":"2015-12-01T05:00:00.254+0000","currencyAmount":519529,"edgeTypeCode":"R "},{"fromNode":"04-0000021837","fromCustomer":"MCDONALDS FAMILY RESTAURANT","toNode":"02-0000030303","toCustomer":"ANNETTE MANUEL","date":"2015-12-01T05:00:00.254+0000","currencyAmount":942766,"edgeTypeCode":"R "},{"fromNode":"04-0000021837","fromCustomer":"MCDONALDS FAMILY RESTAURANT","toNode":"02-0000030303","toCustomer":"FRED MANUEL","date":"2015-12-01T05:00:00.254+0000","currencyAmount":365777,"edgeTypeCode":"U "},{"fromNode":"04-0000021837","fromCustomer":"MCDONALDS FAMILY RESTAURANT","toNode":"02-0000030303","toCustomer":"FRED MANUEL","date":"2015-12-01T05:00:00.254+0000","currencyAmount":942766,"edgeTypeCode":"R "},{"fromNode":"04-0000021837","fromCustomer":"MCDONALDS FAMILY RESTAURANT","toNode":"01-0000194809","toCustomer":"GREG FIELDS","date":"2015-12-01T05:00:00.254+0000","currencyAmount":1293781,"edgeTypeCode":"R "},{"fromNode":"04-0000021837","fromCustomer":"MCDONALDS FAMILY RESTAURANT","toNode":"03-0000074803","toCustomer":"JULIE DI GIROLAMO","date":"2015-12-01T05:00:00.254+0000","currencyAmount":1174057,"edgeTypeCode":"U "},{"fromNode":"04-0000021837","fromCustomer":"MCDONALDS FAMILY RESTAURANT","toNode":"02-0000030303","toCustomer":"LAURA MANUEL","date":"2015-12-01T05:00:00.255+0000","currencyAmount":942766,"edgeTypeCode":"R "},{"fromNode":"04-0000021837","fromCustomer":"MCDONALDS FAMILY RESTAURANT","toNode":"01-0000194809","toCustomer":"PEGGY FIELDS","date":"2015-12-01T05:00:00.255+0000","currencyAmount":1293781,"edgeTypeCode":"R "},{"fromNode":"01-0000117824","fromCustomer":"MICHAEL RIOPEL","toNode":"02-0000030303","toCustomer":"FRED MANUEL","date":"2015-12-01T05:00:00.255+0000","currencyAmount":138414,"edgeTypeCode":"U "},{"fromNode":"01-0000117824","fromCustomer":"MICHAEL RIOPEL","toNode":"01-0000194809","toCustomer":"GREG FIELDS","date":"2015-12-01T05:00:00.256+0000","currencyAmount":805695,"edgeTypeCode":"R "},{"fromNode":"01-0000117824","fromCustomer":"MICHAEL RIOPEL","toNode":"01-0000194809","toCustomer":"GREG FIELDS","date":"2015-12-01T05:00:00.256+0000","currencyAmount":1074814,"edgeTypeCode":"U "},{"fromNode":"01-0000117824","fromCustomer":"MICHAEL RIOPEL","toNode":"03-0000074803","toCustomer":"JULIE DI GIROLAMO","date":"2015-12-01T05:00:00.256+0000","currencyAmount":958597,"edgeTypeCode":"U "},{"fromNode":"01-0000117824","fromCustomer":"MICHAEL RIOPEL","toNode":"03-0000281199","toCustomer":"KAREN WILSON","date":"2015-12-01T05:00:00.256+0000","currencyAmount":774634,"edgeTypeCode":"U "},{"fromNode":"01-0000117824","fromCustomer":"MICHAEL RIOPEL","toNode":"01-0000194809","toCustomer":"PEGGY FIELDS","date":"2015-12-01T05:00:00.256+0000","currencyAmount":805695,"edgeTypeCode":"R "},{"fromNode":"03-0000202652","fromCustomer":"PAUL MIKELSON","toNode":"01-0000041546","toCustomer":"DEBBIE COMEAU","date":"2015-12-01T05:00:00.256+0000","currencyAmount":439796,"edgeTypeCode":"U "},{"fromNode":"03-0000202652","fromCustomer":"PAUL MIKELSON","toNode":"02-0000100520","toCustomer":"JUERGEN WEGE","date":"2015-12-01T05:00:00.257+0000","currencyAmount":611244,"edgeTypeCode":"U "},{"fromNode":"03-0000202652","fromCustomer":"PAUL MIKELSON","toNode":"04-0000021837","toCustomer":"MCDONALDS FAMILY RESTAURANT","date":"2015-12-01T05:00:00.257+0000","currencyAmount":320410,"edgeTypeCode":"U "},{"fromNode":"03-0000202652","fromCustomer":"PAUL MIKELSON","toNode":"01-0000117824","toCustomer":"MICHAEL RIOPEL","date":"2015-12-01T05:00:00.257+0000","currencyAmount":634341,"edgeTypeCode":"R "},{"fromNode":"03-0000202652","fromCustomer":"PAUL MIKELSON","toNode":"02-0000030165","toCustomer":"STU SCHICOFF","date":"2015-12-01T05:00:00.257+0000","currencyAmount":1846990,"edgeTypeCode":"R "},{"fromNode":"02-0000177498","fromCustomer":"RICK LICHTENBERG","toNode":"04-0000021837","toCustomer":"MCDONALDS FAMILY RESTAURANT","date":"2015-12-01T05:00:00.258+0000","currencyAmount":536718,"edgeTypeCode":"U "},{"fromNode":"02-0000177498","fromCustomer":"RICK LICHTENBERG","toNode":"02-0000030165","toCustomer":"STU SCHICOFF","date":"2015-12-01T05:00:00.258+0000","currencyAmount":366877,"edgeTypeCode":"R "},{"fromNode":"02-0000177498","fromCustomer":"RICK LICHTENBERG","toNode":"02-0000030165","toCustomer":"STU SCHICOFF","date":"2015-12-01T05:00:00.258+0000","currencyAmount":814911,"edgeTypeCode":"U "},{"fromNode":"02-0000030165","fromCustomer":"STU SCHICOFF","toNode":"02-0000030303","toCustomer":"FRED MANUEL","date":"2015-12-01T05:00:00.258+0000","currencyAmount":941136,"edgeTypeCode":"U "},{"fromNode":"02-0000030165","fromCustomer":"STU SCHICOFF","toNode":"01-0000197278","toCustomer":"JOETTA COOPER","date":"2015-12-01T05:00:00.259+0000","currencyAmount":948329,"edgeTypeCode":"R "},{"fromNode":"02-0000030165","fromCustomer":"STU SCHICOFF","toNode":"01-0000197278","toCustomer":"JOETTA COOPER","date":"2015-12-01T05:00:00.259+0000","currencyAmount":1742391,"edgeTypeCode":"U "},{"fromNode":"02-0000030165","fromCustomer":"STU SCHICOFF","toNode":"03-0000074803","toCustomer":"JULIE DI GIROLAMO","date":"2015-12-01T05:00:00.259+0000","currencyAmount":158949,"edgeTypeCode":"U "}];  				
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

	var TYPES = _.uniq(_.map(targetNodes, function(obj){return obj.type;}), false, function(obj){return obj;});
	var TYPE_COLORS = [];
	for(var j = 0; j < TYPES.length; j++){TYPE_COLORS[j] = '#' + Math.floor(Math.random()*16777215).toString(16);}
	var TYPE_HIGHLIGHT_COLORS = TYPE_COLORS;
	
//----------------------endOfMyScript-------------------------------------------

var OPACITY = {
    NODE_DEFAULT: 0.9,
    NODE_FADED: 0.1,
    NODE_HIGHLIGHT: 0.8,
    LINK_DEFAULT: 0.6,
    LINK_FADED: 0.05,
    LINK_HIGHLIGHT: 0.9
  },
  // TYPES = ["Asset", "Expense", "Revenue", "Equity", "Liability"],
  // TYPE_COLORS = ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d"],
  // TYPE_HIGHLIGHT_COLORS = ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494"],
  LINK_COLOR = "#b3b3b3",
  INFLOW_COLOR = "#2E86D1",
  OUTFLOW_COLOR = "#D63028",
  NODE_WIDTH = 36,
  COLLAPSER = {
    RADIUS: NODE_WIDTH / 2,
    SPACING: 2
  },
  OUTER_MARGIN = 10,
  MARGIN = {
    TOP: 2 * (COLLAPSER.RADIUS + OUTER_MARGIN),
    RIGHT: OUTER_MARGIN,
    BOTTOM: OUTER_MARGIN,
    LEFT: OUTER_MARGIN
  },
  TRANSITION_DURATION = 400,
  HEIGHT = 1000 - MARGIN.TOP - MARGIN.BOTTOM,
  WIDTH = 960 - MARGIN.LEFT - MARGIN.RIGHT,
  LAYOUT_INTERATIONS = 32,
  REFRESH_INTERVAL = 7000;

var formatNumber = function (d) {
  var numberFormat = d3.format(",.0f"); // zero decimal places
  return "$" + numberFormat(d);
},

formatFlow = function (d) {
  var flowFormat = d3.format(",.0f"); // zero decimal places with sign
  return "$" + flowFormat(Math.abs(d)) + (d < 0 ? " CR" : " DR");
},

// Used when temporarily disabling user interractions to allow animations to complete
disableUserInterractions = function (time) {
  isTransitioning = true;
  setTimeout(function(){
    isTransitioning = false;
  }, time);
},

hideTooltip = function () {
  return tooltip.transition()
    .duration(TRANSITION_DURATION)
    .style("opacity", 0);
},

showTooltip = function () {
  return tooltip
    .style("left", d3.event.pageX + "px")
    .style("top", d3.event.pageY + 15 + "px")
    .transition()
      .duration(TRANSITION_DURATION)
      .style("opacity", 1);
};

colorScale = d3.scale.ordinal().domain(TYPES).range(TYPE_COLORS),
highlightColorScale = d3.scale.ordinal().domain(TYPES).range(TYPE_HIGHLIGHT_COLORS),

svg = d3.select("#chart").append("svg")
        .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
        .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
      .append("g")
        .attr("transform", "translate(" + MARGIN.LEFT + "," + MARGIN.TOP + ")");

svg.append("g").attr("id", "links");
svg.append("g").attr("id", "nodes");
svg.append("g").attr("id", "collapsers");

tooltip = d3.select("#chart").append("div").attr("id", "tooltip");

tooltip.style("opacity", 0)
    .append("p")
      .attr("class", "value");

biHiSankey = xx();

// Set the biHiSankey diagram properties
biHiSankey
  .nodeWidth(NODE_WIDTH)
  .nodeSpacing(10)
  .linkSpacing(4)
  .arrowheadScaleFactor(0.5) // Specifies that 0.5 of the link's stroke WIDTH should be allowed for the marker at the end of the link.
  .size([WIDTH, HEIGHT]);

path = biHiSankey.link().curvature(0.45);

defs = svg.append("defs");

defs.append("marker")
  .style("fill", LINK_COLOR)
  .attr("id", "arrowHead")
  .attr("viewBox", "0 0 6 10")
  .attr("refX", "1")
  .attr("refY", "5")
  .attr("markerUnits", "strokeWidth")
  .attr("markerWidth", "1")
  .attr("markerHeight", "1")
  .attr("orient", "auto")
  .append("path")
    .attr("d", "M 0 0 L 1 0 L 6 5 L 1 10 L 0 10 z");

defs.append("marker")
  .style("fill", OUTFLOW_COLOR)
  .attr("id", "arrowHeadInflow")
  .attr("viewBox", "0 0 6 10")
  .attr("refX", "1")
  .attr("refY", "5")
  .attr("markerUnits", "strokeWidth")
  .attr("markerWidth", "1")
  .attr("markerHeight", "1")
  .attr("orient", "auto")
  .append("path")
    .attr("d", "M 0 0 L 1 0 L 6 5 L 1 10 L 0 10 z");

defs.append("marker")
  .style("fill", INFLOW_COLOR)
  .attr("id", "arrowHeadOutlow")
  .attr("viewBox", "0 0 6 10")
  .attr("refX", "1")
  .attr("refY", "5")
  .attr("markerUnits", "strokeWidth")
  .attr("markerWidth", "1")
  .attr("markerHeight", "1")
  .attr("orient", "auto")
  .append("path")
    .attr("d", "M 0 0 L 1 0 L 6 5 L 1 10 L 0 10 z");

function update () {
  var link, linkEnter, node, nodeEnter, collapser, collapserEnter;

  function dragmove(node) {
    node.x = Math.max(0, Math.min(WIDTH - node.width, d3.event.x));
    node.y = Math.max(0, Math.min(HEIGHT - node.height, d3.event.y));
    d3.select(this).attr("transform", "translate(" + node.x + "," + node.y + ")");
    biHiSankey.relayout();
    svg.selectAll(".node").selectAll("rect").attr("height", function (d) { return d.height; });
    link.attr("d", path);
  }

  function containChildren(node) {
    node.children.forEach(function (child) {
      child.state = "contained";
      child.parent = this;
      child._parent = null;
      containChildren(child);
    }, node);
  }

  function expand(node) {
    node.state = "expanded";
    node.children.forEach(function (child) {
      child.state = "collapsed";
      child._parent = this;
      child.parent = null;
      containChildren(child);
    }, node);
  }

  function collapse(node) {
    node.state = "collapsed";
    containChildren(node);
  }

  function restoreLinksAndNodes() {
    link
      .style("stroke", LINK_COLOR)
      .style("marker-end", function () { return 'url(#arrowHead)'; })
      .transition()
        .duration(TRANSITION_DURATION)
        .style("opacity", OPACITY.LINK_DEFAULT);

    node
      .selectAll("rect")
        .style("fill", function (d) {
          d.color = colorScale(d.type.replace(/ .*/, ""));
          return d.color;
        })
        .style("stroke", function (d) {
          return d3.rgb(colorScale(d.type.replace(/ .*/, ""))).darker(0.1);
        })
        .style("fill-opacity", OPACITY.NODE_DEFAULT);

    node.filter(function (n) { return n.state === "collapsed"; })
      .transition()
        .duration(TRANSITION_DURATION)
        .style("opacity", OPACITY.NODE_DEFAULT);
  }

  function showHideChildren(node) {
    disableUserInterractions(2 * TRANSITION_DURATION);
    hideTooltip();
    if (node.state === "collapsed") { expand(node); }
    else { collapse(node); }

    biHiSankey.relayout();
    update();
    link.attr("d", path);
    restoreLinksAndNodes();
  }

  function highlightConnected(g) {
    link.filter(function (d) { return d.source === g; })
      .style("marker-end", function () { return 'url(#arrowHeadInflow)'; })
      .style("stroke", OUTFLOW_COLOR)
      .style("opacity", OPACITY.LINK_DEFAULT);

    link.filter(function (d) { return d.target === g; })
      .style("marker-end", function () { return 'url(#arrowHeadOutlow)'; })
      .style("stroke", INFLOW_COLOR)
      .style("opacity", OPACITY.LINK_DEFAULT);
  }

  function fadeUnconnected(g) {
    link.filter(function (d) { return d.source !== g && d.target !== g; })
      .style("marker-end", function () { return 'url(#arrowHead)'; })
      .transition()
        .duration(TRANSITION_DURATION)
        .style("opacity", OPACITY.LINK_FADED);

    node.filter(function (d) {
      return (d.name === g.name) ? false : !biHiSankey.connected(d, g);
    }).transition()
      .duration(TRANSITION_DURATION)
      .style("opacity", OPACITY.NODE_FADED);
  }

  link = svg.select("#links").selectAll("path.link")
    .data(biHiSankey.visibleLinks(), function (d) { return d.id; });

  link.transition()
    .duration(TRANSITION_DURATION)
    .style("stroke-WIDTH", function (d) { return Math.max(1, d.thickness); })
    .attr("d", path)
    .style("opacity", OPACITY.LINK_DEFAULT);


  link.exit().remove();


  linkEnter = link.enter().append("path")
    .attr("class", "link")
    .style("fill", "none");

  linkEnter.on('mouseenter', function (d) {
    if (!isTransitioning) {
      showTooltip().select(".value").text(function () {
        if (d.direction > 0) {
          return d.source.name + " --> " + d.target.name + "\n" + formatNumber(d.value);
        }
        return d.target.name + " <-- " + d.source.name + "\n" + formatNumber(d.value);
      });

      d3.select(this)
        .style("stroke", LINK_COLOR)
        .transition()
          .duration(TRANSITION_DURATION / 2)
          .style("opacity", OPACITY.LINK_HIGHLIGHT);
    }
  });

  linkEnter.on('mouseleave', function () {
    if (!isTransitioning) {
      hideTooltip();

      d3.select(this)
        .style("stroke", LINK_COLOR)
        .transition()
          .duration(TRANSITION_DURATION / 2)
          .style("opacity", OPACITY.LINK_DEFAULT);
    }
  });

  linkEnter.sort(function (a, b) { return b.thickness - a.thickness; })
    .classed("leftToRight", function (d) {
      return d.direction > 0;
    })
    .classed("rightToLeft", function (d) {
      return d.direction < 0;
    })
    .style("marker-end", function () {
      return 'url(#arrowHead)';
    })
    .style("stroke", LINK_COLOR)
    .style("opacity", 0)
    .transition()
      .delay(TRANSITION_DURATION)
      .duration(TRANSITION_DURATION)
      .attr("d", path)
      .style("stroke-WIDTH", function (d) { return Math.max(1, d.thickness); })
      .style("opacity", OPACITY.LINK_DEFAULT);


  node = svg.select("#nodes").selectAll(".node")
      .data(biHiSankey.collapsedNodes(), function (d) { return d.id; });


  node.transition()
    .duration(TRANSITION_DURATION)
    .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; })
    .style("opacity", OPACITY.NODE_DEFAULT)
    .select("rect")
      .style("fill", function (d) {
        d.color = colorScale(d.type.replace(/ .*/, ""));
        return d.color;
      })
      .style("stroke", function (d) { return d3.rgb(colorScale(d.type.replace(/ .*/, ""))).darker(0.1); })
      .style("stroke-WIDTH", "1px")
      .attr("height", function (d) { return d.height; })
      .attr("width", biHiSankey.nodeWidth());


  node.exit()
    .transition()
      .duration(TRANSITION_DURATION)
      .attr("transform", function (d) {
        var collapsedAncestor, endX, endY;
        collapsedAncestor = d.ancestors.filter(function (a) {
          return a.state === "collapsed";
        })[0];
        endX = collapsedAncestor ? collapsedAncestor.x : d.x;
        endY = collapsedAncestor ? collapsedAncestor.y : d.y;
        return "translate(" + endX + "," + endY + ")";
      })
      .remove();


  nodeEnter = node.enter().append("g").attr("class", "node");

  nodeEnter
    .attr("transform", function (d) {
      var startX = d._parent ? d._parent.x : d.x,
          startY = d._parent ? d._parent.y : d.y;
      return "translate(" + startX + "," + startY + ")";
    })
    .style("opacity", 1e-6)
    .transition()
      .duration(TRANSITION_DURATION)
      .style("opacity", OPACITY.NODE_DEFAULT)
      .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; });

  nodeEnter.append("text");
  nodeEnter.append("rect")
    .style("fill", function (d) {
      d.color = colorScale(d.type.replace(/ .*/, ""));
      return d.color;
    })
    .style("stroke", function (d) {
      return d3.rgb(colorScale(d.type.replace(/ .*/, ""))).darker(0.1);
    })
    .style("stroke-WIDTH", "1px")
    .attr("height", function (d) { return d.height; })
    .attr("width", biHiSankey.nodeWidth());

  node.on("mouseenter", function (g) {
    if (!isTransitioning) {
      restoreLinksAndNodes();
      highlightConnected(g);
      fadeUnconnected(g);

      d3.select(this).select("rect")
        .style("fill", function (d) {
          d.color = d.netFlow > 0 ? INFLOW_COLOR : OUTFLOW_COLOR;
          return d.color;
        })
        .style("stroke", function (d) {
          return d3.rgb(d.color).darker(0.1);
        })
        .style("fill-opacity", OPACITY.LINK_DEFAULT);

      tooltip
        .style("left", g.x + MARGIN.LEFT + "px")
        .style("top", g.y + g.height + MARGIN.TOP + 15 + "px")
        .transition()
          .duration(TRANSITION_DURATION)
          .style("opacity", 1).select(".value")
          .text(function () {
            var additionalInstructions = g.children.length ? "\n(Double click to expand)" : "";
            return g.name + "\nNet flow: " + formatFlow(g.netFlow) + additionalInstructions;
          });
    }
  });

  node.on("mouseleave", function () {
    if (!isTransitioning) {
      hideTooltip();
      restoreLinksAndNodes();
    }
  });

  node.filter(function (d) { return d.children.length; })
    .on("dblclick", showHideChildren);

  // allow nodes to be dragged to new positions
  node.call(d3.behavior.drag()
    .origin(function (d) { return d; })
    .on("dragstart", function () { this.parentNode.appendChild(this); })
    .on("drag", dragmove));

  // add in the text for the nodes
  node.filter(function (d) { return d.value !== 0; })
    .select("text")
      .attr("x", -6)
      .attr("y", function (d) { return d.height / 2; })
      .attr("dy", ".35em")
      .attr("text-anchor", "end")
      .attr("transform", null)
      .text(function (d) { return d.name; })
    .filter(function (d) { return d.x < WIDTH / 2; })
      .attr("x", 6 + biHiSankey.nodeWidth())
      .attr("text-anchor", "start");


  collapser = svg.select("#collapsers").selectAll(".collapser")
    .data(biHiSankey.expandedNodes(), function (d) { return d.id; });


  collapserEnter = collapser.enter().append("g").attr("class", "collapser");

  collapserEnter.append("circle")
    .attr("r", COLLAPSER.RADIUS)
    .style("fill", function (d) {
      d.color = colorScale(d.type.replace(/ .*/, ""));
      return d.color;
    });

  collapserEnter
    .style("opacity", OPACITY.NODE_DEFAULT)
    .attr("transform", function (d) {
      return "translate(" + (d.x + d.width / 2) + "," + (d.y + COLLAPSER.RADIUS) + ")";
    });

  collapserEnter.on("dblclick", showHideChildren);

  collapser.select("circle")
    .attr("r", COLLAPSER.RADIUS);

  collapser.transition()
    .delay(TRANSITION_DURATION)
    .duration(TRANSITION_DURATION)
    .attr("transform", function (d, i) {
      return "translate("
        + (COLLAPSER.RADIUS + i * 2 * (COLLAPSER.RADIUS + COLLAPSER.SPACING))
        + ","
        + (-COLLAPSER.RADIUS - OUTER_MARGIN)
        + ")";
    });

  collapser.on("mouseenter", function (g) {
    if (!isTransitioning) {
      showTooltip().select(".value")
        .text(function () {
          return g.name + "\n(Double click to collapse)";
        });

      var highlightColor = highlightColorScale(g.type.replace(/ .*/, ""));

      d3.select(this)
        .style("opacity", OPACITY.NODE_HIGHLIGHT)
        .select("circle")
          .style("fill", highlightColor);

      node.filter(function (d) {
        return d.ancestors.indexOf(g) >= 0;
      }).style("opacity", OPACITY.NODE_HIGHLIGHT)
        .select("rect")
          .style("fill", highlightColor);
    }
  });

  collapser.on("mouseleave", function (g) {
    if (!isTransitioning) {
      hideTooltip();
      d3.select(this)
        .style("opacity", OPACITY.NODE_DEFAULT)
        .select("circle")
          .style("fill", function (d) { return d.color; });

      node.filter(function (d) {
        return d.ancestors.indexOf(g) >= 0;
      }).style("opacity", OPACITY.NODE_DEFAULT)
        .select("rect")
          .style("fill", function (d) { return d.color; });
    }
  });

  collapser.exit().remove();

}


biHiSankey
  .nodes(targetNodes)
  .links(targetLinks)
  .initializeNodes(function (node) {
    node.state = node.parent ? "contained" : "collapsed";
  })
  .layout(LAYOUT_INTERATIONS);

disableUserInterractions(2 * TRANSITION_DURATION);

update();