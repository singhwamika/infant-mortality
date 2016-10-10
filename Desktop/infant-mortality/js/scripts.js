console.log (json);
//create an empty dataArray for our converted json
var dataArray= [];
//create headers for dataArray
var headers= ["year","total","boys","girls"];
//push the headers to the dataArray
dataArray.push(headers);
//loop through the json, converting each object into an appropriate array
json.forEach(function(d){
  dataArray.push([d.year.toString(),d.total,d.boys,d.girls]);
});
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart(){

  var data = google.visualization.arrayToDataTable(dataArray);

  var options = {
    chartArea:{
      left:50,
      top:20,
      bottom:50,
      right:100,
    },
    colors:["#888","#2b8cbe","#de2d26"],
    focusTarget: "category",
    hAxis:{
      title: "year"
    },
    vAxis:{
      title:"Infant mortality rate"
    },

  };

  var chart = new google.visualization.LineChart(document.getElementById('chart'));

  chart.draw(data, options);
}
