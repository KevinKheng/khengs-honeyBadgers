<script>
var count = 0;
$("#btnAjaxCall").click(function(){
	fetchDataAndDisplay();
	var d = new Date();
	document.getElementById("time").innerHTML = d;
});
window.setInterval(function(){
  fetchDataAndDisplay();
  var d = new Date();
  document.getElementById("time").innerHTML = d;
}, 1800000);
var links = ["https://softwareengineeringgabe.azurewebsites.net/my-information.json","https://softwareengineeringgabe.azurewebsites.net/kevin.json","https://softwareengineeringgabe.azurewebsites.net/juan.json","https://softwareengineeringgabe.azurewebsites.net/alex.json", "https://softwareengineeringgabe.azurewebsites.net/louie.json"];
function fetchDataAndDisplay(){
	$(".display-data").empty();
	for(i=0;i<=4;i+=1){
		$.ajax({
		url:links[i],
		method:"GET",
		cache: true
	}).done(function(data){
		//var start = count > 0 ? 5 * count : count;
		//var end = start + 5;
		var str = "";
		console.log(data);
			str += '<div class="item-details">' + 
					'First Name is:  ' + data.FirstName + '<br />' +
					'Last Name is:  ' + data.LastName + '<br />' +
					'Preferred Name is:  ' + data.PreferredName + '<br />' +
					'Team Name is:  ' + data.TeamName + '<br />' +
					'Seat Location is:  ' + data.SeatLocation + '<br />' +
					'</div>';
		count++;
		$(".display-data").append(str);
	});
	}
}
</script>