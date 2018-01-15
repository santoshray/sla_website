
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


/*
var annotated_log = 
      '<p> \
          <input type="button"  class = "hover log-buttons" hinttext="%LOG_NAME%" value=" log %LOG_NUM%  " onClick="request_log(\'%LOG_NAME%\')"> \
      </p>';
*/


var annotated_log = '<option value="%LOG_NAME%">%LOG_NAME%</option>'

sla_output_obj_array = kernel_logs;
//The code is coomnted out so that the  log button are not shown
for(var i =0 ; i < sla_output_obj_array.length; i++ )
{
  annotated_log_mod =  annotated_log.replace('%LOG_NAME%',sla_output_obj_array[i]["jsonfile"]);
  annotated_log_mod =  annotated_log_mod.replace('%LOG_NAME%',sla_output_obj_array[i]["logfile"]);
//  annotated_log_mod =  annotated_log_mod.replace("%LOG_NUM%",(i+1).toString())
 // $("#log_name_buttons").append(annotated_log_mod);
 $("#logfilelist").append(annotated_log_mod);
}



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
load_log();

function load_log()
{

  var script = '<script src="%LOG_JSON%"></script>';
var src_root_link ="";
  var logMessage =
  '<div id="Log" class="%Module%  %SubModule% %Loglevel% row"> \
      <div id="checkBox" class = \'col-md-1 \'> \
        <form><input type="checkbox" name="c1" onclick="showMe(\'%MsgId%\', this)"></form> \
      </div> \
      <div id = "classmd11Log" class = " col-md-11">%Log%</div> \
  </div> \
  <div  class=\'row\'  id = "%MsgId%" style="display:none" > \
    <div class=\'col-md-1\'> </div>  \
    <div class=\'col-md-11\'>  %Comment%  <br> \
      Link: <a name=\'click here\' href=\'%Link%\' target="_blank">file : %File% line : %Line%</a>  \
    </div> \
  </div>'; 

  $('#LogMessage').html('');


  var nonaudio_logMessage =
  '<div id="Log" class="%Module%  %SubModule% %Loglevel% row"> \
      <div  class = \'col-md-1\'> \
      </div> \
      <div id = "classmd11Log" class = "col-md-11">%Log%</div> \
  </div>'; 
  
  $('#Log_file_name').html('');
  $('#Log_file_name').append("adm_faillogs_txt.json");


  script_mod  =  script.replace('%LOG_JSON%',"adm_faillogs_txt.json");
  $('#LogMessage').html('');
  $("#Script").append(script_mod);

  //console.log(logMessage);
  var kmsg = kernel_logs["KernelLog"];
  for (var i = 0 ; i < kernel_logs["KernelLog"].length ; i++)
  {
    var msgid = 'msg' + i.toString();
    if (kmsg[i]["module"] == "non-audio"){
      logMessage_mod = nonaudio_logMessage.replace('%Module%',kmsg[i]["module"]);
      logMessage_mod = logMessage_mod.replace('%SubModule%',kmsg[i]["sub_module"]);
      logMessage_mod = logMessage_mod.replace('%Loglevel%',kmsg[i]["log_level"]);
      logMessage_mod = logMessage_mod.replace('%Log%',kmsg[i]["log"]);
    }
    else
    {
      logMessage_mod = logMessage.replace('%Module%',kmsg[i]["module"]);
      logMessage_mod = logMessage_mod.replace('%SubModule%',kmsg[i]["sub_module"]);
      logMessage_mod = logMessage_mod.replace('%MsgId%',msgid);
      logMessage_mod = logMessage_mod.replace('%Loglevel%',kmsg[i]["log_level"]);
      logMessage_mod = logMessage_mod.replace('%Log%',kmsg[i]["log"]);
      logMessage_mod = logMessage_mod.replace('%MsgId%',msgid);
      var comment = kmsg[i]["comment"];
      comment_mod  =  comment.replace("\n","<br>");
      logMessage_mod = logMessage_mod.replace('%Comment%',comment_mod);

      var link_to_log =  src_root_link+kmsg[i]["link"]+'#'+kmsg[i]["line"];
      logMessage_mod = logMessage_mod.replace('%Link%',link_to_log);
      logMessage_mod = logMessage_mod.replace('%File%',kmsg[i]["file"]);
      logMessage_mod = logMessage_mod.replace('%Line%',kmsg[i]["line"]);
    }

    $("#LogMessage").append(logMessage_mod);
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



function showMe (it, box) {
  var vis = (box.checked) ? "block" : "none";
  document.getElementById(it).style.display = vis;
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
