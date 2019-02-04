var ondataexportclick = function() {
			console.log("so you want to export something!!");
}
var onundoselectionclick = function() {
			console.log("so you want to undo something!!");
}

var onviztypechanged = function() {
    var select = document.getElementById('select-viz-type');
    var selected = select.options[select.selectedIndex];
    var key = selected.value;
    var value = selected.textContent;
    console.log(key+","+value);
}

var onrefreshintervalclick = function() {
	console.log("so you want to change refresh interval!!");
}