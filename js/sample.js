var section_name_array= ["1","2","3","4","5","6","7","8"];

var	section_1_content = $("#1").html();
var section_2_content =$("#2").html();
var section_3_content  = $("#3").html();
var section_4_content = $("#4").html();
var section_5_content  = $("#5").html();
var section_6_content = $("#6").html();
var section_7_content = $("#7").html();
var section_8_content = $("#8").html();

var i =0;
for(i =0;i< section_name_array.length;i++)
{
	$("#"+section_name_array[i]).html("");
}

var section_object = {
	"1":section_1_content ,
	"2":section_2_content,
	"3":section_3_content,
	"4":section_4_content,
	"5":section_5_content,
	"6":section_6_content,
	"7":section_7_content,
	"8":section_8_content
}


function show_element_id_content()
{

}

