
function showall()
{
	var i =0;
	for(i =0 ; i < section_name_array.length ;i ++)
	{
		$('#section_'+section_name_array[i]).addClass('btn-info').removeClass('btn-danger');
	}

	for (i =0; i< section_name_array.length ;i++)
	{
		$("#"+section_name_array[i]).html(section_object[section_name_array[i]]);
	}

    show_element_id_content();
}

function showandhide(section_name ,obj) {

	var content  = '';
	console.log(section_name);
	var i = 0 ;
	for(i =0 ; i < section_name_array.length ;i ++)
	{
		$('#section_'+section_name_array[i]).addClass('btn-info').removeClass('btn-danger');
	}
	$('#section_'+section_name).addClass('btn-danger').removeClass('btn-info');

	content = section_object[section_name];
	for(i =0;i< section_name_array.length;i++)
	{
		$("#"+section_name_array[i]).html("");
	}

  	$("#"+section_name).html(content);

    show_element_id_content();
}

