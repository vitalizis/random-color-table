	$(document).ready(function () {
 // ваш код
     $('#ChangeColor').click( function () {
     	if($("tr").is(".m0")){
			$("tr").remove()
		}
// var i;
var m = $("#m").val()
var n = $("#n").val();
for (i = 0; i < m; i++) {
       $('.tableColor').append('<tr>');
      $('tr').last().addClass('m'+i);
      // var j;
       for (j = 0; j < n; j++) 
       {
       	 $('tr').last().append('<td>');
       	 // var color = 4;
       	 var max = 255;
       	 var min = 0; 
       	 var a = Math.floor(Math.random() * (max - min + 1)) + min;
       	 var b = Math.floor(Math.random() * (max - min + 1)) + min;
       	 var c = Math.floor(Math.random() * (max - min + 1)) + min;
         var color = 'rgb'+'('+a+','+b+','+c+')';
      $('td').last().addClass('n'+j).css({'background': color,'border':'none'});
       }//--end loop
}//--end loop
 $('td').addClass('cell');
    });

});