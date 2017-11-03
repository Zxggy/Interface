

$(function(){

$('#console').append('console boot-up');

var MyMonth = 'month';
var MyYear = 'year';
var MyDay = 'day';

$('li').on('click', function() {
	//$(this).click('month');

	$('#console').append('<br>' + $(this).text());

	//what did they click on?
	var pickedClass = $(this).attr('class');
	if (pickedClass == 'month') {
		//are thye click on month...how to identify 
		MyMonth = $(this).text(); 
	}
	else if(pickedClass == 'year') {
		MyYear = $(this).text(); 
	} 
	else if(pickedClass == 'day'){
		MyDay = $(this).text();
	}
	
	$('#console').append('<br>' + 'MyMonth = ' + MyMonth );
	$('#console').append('<br>' + 'MyYear = ' + MyYear );
	$('#console').append('<br>' + 'MyDay = ' + MyDay );

	/*
	when a user clicks ANY li...we get it in the console.
	now, we want to STORE what they click in a VAR.
	then...we can combine all those VARS and write out the complete date. 
	SO - how do we do it 
		if  $(this).c == 'month' THEN
			myMonth = $(this).text(); 
		else if same = 'day' ThEN 
			myDay 
	
*/
	

});

});