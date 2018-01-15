
/*
var ModuleAndSubModuleHTML = '<div id="Log" class="%Module%  %SubModule% row"> </div>';
var fomattedModule  = ModuleAndSubModuleHTML.replace('%Module%','audio');
var fomattedModuleAndSubModule  = fomattedModule.replace('%SubModule%','adm');

var divcheckBoxHTML = '<div id="checkBox" class = \'col-md-1\'></div>';
var checkBoxHTML = '<form><input type="checkbox" name="c1" onclick="showMe(\'%MsgId%\', this)"></form>';
var formattedcheckBox = checkBoxHTML.replace('%MsgId%','msg1');

var divClassMessageHTML='<div id="Message" class = \'col-md-11\'>%Log%</div>'
var formattedMessageLog = divClassMessageHTML.replace("%Log%",' This is the log message from ADM');

var divClassrowCommentHTML = '<div class=\'row\'  id = %MsgId% style="display:none" > %Comment% </div>';
var formattedComment_msgId = divClassrowCommentHTML.replace('%MsgId%','msg1');
var formattedComment = formattedComment_msgId.replace('%Comment%','This is the comment for ADM message');
*/
(function() {
    
    
    document.getElementById('showVal').onclick = function () {
        var sel = document.forms['demoForm'].elements['category'];
        request_log(sel.value);
      
//        alert( sel.value );
    }
/*
    document.getElementById('showTxt').onclick = function () {
        var sel = document.forms['demoForm'].elements['category'];
        // access text property of selected option
        var val = sel.options[sel.selectedIndex].text;
        console.log(val);
//        request_log(val);
//        alert( val );
    }
*/  
    // disable submission of all forms on this page
    for (var i=0, len=document.forms.length; i<len; i++) {
        document.forms[i].onsubmit = function() { return false; };
    }
    
}());


var annotated_log = '<option value="%LOG_NAME%">%LOG_NAME%</option>'

sla_output_obj_array = sla_output_info["sla_output_config"]
//The code is coomnted out so that the  log button are not shown
for(var i =0 ; i < sla_output_obj_array.length; i++ )
{
  annotated_log_mod =  annotated_log.replace('%LOG_NAME%',sla_output_obj_array[i]["jsonfile"]);
  annotated_log_mod =  annotated_log_mod.replace('%LOG_NAME%',sla_output_obj_array[i]["logfile"]);
  console.log(annotated_log_mod);
//  annotated_log_mod =  annotated_log_mod.replace("%LOG_NUM%",(i+1).toString())
 // $("#log_name_buttons").append(annotated_log_mod);
 $("#logfilelist").append(annotated_log_mod);
}
/*
var annotated_log = 
      '<p> \
          <input type="button"  class = "hover log-buttons" hinttext="%SRC_FILE_NAME%" value=" source %SRC_FILE_NUM%  " onClick="request_log(\'%SRC_FILE_NAME%\')"> \
      </p>';

for(var i =0 ; i < src_json_files["src_json_files"].length; i++ )
{

  annotated_log_mod =  annotated_log.replace('%SRC_FILE_NAME%',src_json_files["src_json_files"][i]);
  annotated_log_mod =  annotated_log_mod.replace('%SRC_FILE_NAME%',src_json_files["src_json_files"][i]);
  annotated_log_mod =  annotated_log_mod.replace("%SRC_FILE_NUM%",(i+1).toString())
  $("#file_name_buttons").append(annotated_log_mod);
}
*/


$(document).ready(function() {
 $('.hover').mousemove(function(e){ 
       var hovertext = $(this).attr('hinttext');  
         $('#hintbox').text(hovertext).show();
         $('#hintbox').text(hovertext).show();
    $('#hintbox').css('top',e.clientY).css('left',e.clientX+60);
  })
     .mouseout(function(){
    $('#hintbox').hide();
 });
}); 


function request_log(filename)
{
  console.log(filename);
  var url_link = 'http://localhost/' + filename;
  console.log(url_link);
  $('input:checkbox').removeAttr('checked');

  $("#Processing_status").html("");
  $("#Processing_status").append("Loading . . . Please wait");

  $.ajax({url:url_link,
          async:true,
          //data_type:jsonp,
          complete:function( jqXHR, status){
            console.log("status");
            load_log(filename);
            $("#Processing_status").html("");
            $("#Processing_status").append("Loaded");
          }

        });
}

function load_log(filename)
{

  var src_root_link = sla_config["source_root_link"];

  var script = '<script src="%SRC_FILE_JSON%"></script>';


  var LogMessage_info = 
  // Function name 
  //   log message 1  info 
  //   log message 2  info
  //   log message 3  info
    '<div class="row" id="%FUNC_NAME%">\
      <div class = "col-md-2"><b>function</b></div>\
      <div class = "col-md-6"><em>%FUNC_NAME%</em></div>\
      <div id="checkBox" class = \'col-md-1\'> \
        <form><input type="checkbox" name="c1" onclick="showMe(\'%FUNC_NAME%\', this)"></form> \
      </div> \
    </div>';

var LogMessage = 
    '<div class="row %FUNC_NAME% Logmessage">\
      <div class = "col-md-1">  </div>\
      <div class = "col-md-1"> log </div>\
      <div class = "col-md-9">%LOG_MESSAGE%</div>\
    </div>\
    <div class="row %FUNC_NAME%  Comment">\
      <div class = "col-md-1"> </div>\
      <div class = "col-md-1">Comment</div>\
      <div class = "col-md-9"><textarea ></textarea></div>\
    </div>\
    <div class="row  %FUNC_NAME% Submit">\
      <div class = "col-md-2"> </div>\
      <div class = "col-md-1">\
        <input type="submit" value="Submit">\
      </div>\
    </div>';
  
  $('#FunctionNames').html('');

  script_mod  =  script.replace('%SRC_FILE_JSON%',filename);
  $("#Script").append(script_mod);

  //console.log(logMessage);
  var Log_information = Loginfo["function"];
  console.log(Log_information);
  for (var i = 0 ; i < Log_information.length ; i++)
  {
    var msgid = 'msg' + i.toString();
    concatenated_message = '';
    LogMessage_info_mod = LogMessage_info.replace('%FUNC_NAME%',Log_information[i]["name"]);
    LogMessage_info_mod = LogMessage_info_mod.replace('%FUNC_NAME%',Log_information[i]["name"]);
    LogMessage_info_mod = LogMessage_info_mod.replace('%FUNC_NAME%',Log_information[i]["name"]);
    concatenated_message  =  concatenated_message +LogMessage_info_mod;
    Log_array = Log_information[i]["log"];
    Functionnameid = '#' + Log_information[i]["name"];
    console.log(Functionnameid);
    for(var j=0; j < Log_array.length ; j++ )
    {
      LogMessage_mod = LogMessage.replace('%FUNC_NAME%',Log_information[i]["name"]);
      LogMessage_mod = LogMessage_mod.replace('%LOG_MESSAGE%',Log_array[j]["logmessage"]);
      LogMessage_mod = LogMessage_mod.replace('%FUNC_NAME%',Log_information[i]["name"]);
      LogMessage_mod = LogMessage_mod.replace('%FUNC_NAME%',Log_information[i]["name"]);
      
      concatenated_message = concatenated_message + LogMessage_mod;
      //console.log(LogMessage_mod);
    }
    $("#FunctionNames").append(concatenated_message);
    HideClassName(Log_information[i]["name"]);

  }
}




//$ ("#LogMessage").append(fomattedModuleAndSubModule);
/*
<div id="Log" class="%Module%  %SubModule% row"> </div>
*/
//$ ("#Log").append(divcheckBoxHTML);
/*
<div id="Log" class="%Module%  %SubModule% row">
    <div id="checkBox" class = \'col-md-1\'> </div>
</div>
*/

//$ ("#checkBox").append(formattedcheckBox);
/*
<div id="Log" class="%Module%  %SubModule% row">
    <div id="checkBox" class = \'col-md-1\'> 
      <form><input type="checkbox" name="c1" onclick="showMe(\'%MsgId%\', this)"></form>
    </div>

</div>
*/

//$ ("#Log").append(formattedMessageLog);
/*
<div id="Log" class="%Module%  %SubModule% row">
    <div id="checkBox" class = \'col-md-1\'> 
      <form><input type="checkbox" name="c1" onclick="showMe(\'%MsgId%\', this)"></form>
    </div>
    <div id="Message" class = \'col-md-11\'>%Log%</div>    
</div>
*/

//$ ("#LogMessage").append(formattedComment);
/*
<div id="Log" class="%Module%  %SubModule% row">
    <div id="checkBox" class = \'col-md-1\'> 
      <form><input type="checkbox" name="c1" onclick="showMe(\'%MsgId%\', this)"></form>
    </div>
    <div id="Message" class = \'col-md-11\'>%Log%</div>    
</div>
<div class=\'row\'  id = %MsgId% style="display:none" > %Comment% </div>
*/


function HideClassName (classname)
{
  //document.getElementById(it).style.display = vis;
  div_array = $("."+classname);
  console.log(classname);
  console.log(div_array);

  for(var i = 0; i < div_array.length; i++)
  {
    div_array[i].style.display = "none";
  }

}

function showMe (classname, box)
{
  var showhide = (box.checked) ? "block" : "none";
  //document.getElementById(it).style.display = vis;
  div_array = $("."+classname);
  console.log(classname);
  console.log(div_array);

  for(var i = 0; i < div_array.length; i++)
  {
    div_array[i].style.display = showhide;
  }

}
//-->
/*
function getElementsByClass( searchClass, domNode, tagName) {
  if (domNode == null) domNode = document;
  if (tagName == null) tagName = '*';
  var el = new Array();
  var tags = domNode.getElementsByTagName(tagName);
  var tcl = " "+searchClass+" ";
  for(i=0,j=0; i<tags.length; i++) {
    var test = " " + tags[i].className + " ";
  if (test.indexOf(tcl) != -1)
    el[j++] = tags[i];
  }
  return el;
}
*/

function showandhide(classname,box) {

  var showhide  = (box.checked) ? "none":"block";
  console.log(box);
  console.log(box.checked);

  $("#Processing_status").html("");
  $("#Processing_status").append("<b> Processing . . . Please wait</b>");


  //var div_array = getElementsByClass(classname, null, "div");
  div_array = $("."+classname);

  for(var i = 0; i < div_array.length; i++)
  {
    div_array[i].style.display = showhide;
  }

  $("#Processing_status").html("");
  $("#Processing_status").append("<b> Processed</b>");

}
