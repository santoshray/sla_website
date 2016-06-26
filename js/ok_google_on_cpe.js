var section_name_array= ["Account_Information","Flashing_CPE","HotwordEnrollment","Enabling_OKGoogle","Enabling_Logs","Ramdump_App","CPE_crash","Verified_Images"];

var	Account_Information_content = $("#Account_Information").html();
var Flashing_CPE_content =$("#Flashing_CPE").html();
var HotwordEnrollment_content  = $("#HotwordEnrollment").html();
var Enabling_OKGoogle_content = $("#Enabling_OKGoogle").html();
var Enabling_Logs_content  = $("#Enabling_Logs").html();
var Ramdump_App_content = $("#Ramdump_App").html();
var CPE_crash_content = $("#CPE_crash").html();
var Verified_Images_content = $("#Verified_Images").html();

var i =0;
for(i =0;i< section_name_array.length;i++)
{
	$("#"+section_name_array[i]).html("");
}

var section_object = {
	"Account_Information" : Account_Information_content ,
	"Flashing_CPE":Flashing_CPE_content,
	"HotwordEnrollment":HotwordEnrollment_content,
	"Enabling_OKGoogle":Enabling_OKGoogle_content,
	"Enabling_Logs":Enabling_Logs_content,
	"Ramdump_App":Ramdump_App_content,
	"CPE_crash":CPE_crash_content,
	"Verified_Images":Verified_Images_content
}

var sound_trigger_mixer_path_1 ="\
&nbsp;&lt;path&nbsp;name=&quot;listen-cpe-handset-mic&quot;&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;MADONOFF&nbsp;Switch&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;TX13&nbsp;INP&nbsp;MUX&quot;&nbsp;value=&quot;CPE_TX_PP&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;AIF4_MAD&nbsp;Mixer&nbsp;SLIM&nbsp;TX13&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;MAD&nbsp;Input&quot;&nbsp;value=&quot;DMIC0&quot;&nbsp;/&gt;<br>\
+&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;CPE&nbsp;AFE&nbsp;MAD&nbsp;Enable&quot;&nbsp;value=&quot;1&quot;/&gt;<br>\
&nbsp;&lt;/path&gt;<br>\
";

var st_paltform_info1 = "\
-&nbsp;&nbsp;&nbsp;&lt;vendor_uuid&nbsp;value=&quot;68ab2d40-e860-11e3-95ef-0002a5d5c51b&quot;&nbsp;app_type=&quot;2&quot;&nbsp;library=&quot;libsmwrapper.so&quot;&gt;<br>\
+&nbsp;&nbsp;&nbsp;&nbsp;&lt;vendor_uuid&nbsp;value=&quot;68ab2d40-e860-11e3-95ef-0002a5d5c51b&quot;&nbsp;app_type=&quot;2&quot;&nbsp;library=&quot;none&quot;&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!--&nbsp;format:&nbsp;&quot;ADPCM_packet&quot;&nbsp;or&nbsp;&quot;PCM_packet&quot;&nbsp;!--&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!--&nbsp;transfer_mode:&nbsp;&quot;FTRT&quot;&nbsp;or&nbsp;&quot;RT&quot;&nbsp;--&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;!--&nbsp;&nbsp;kw_duration&nbsp;is&nbsp;in&nbsp;milli&nbsp;seconds.&nbsp;It&nbsp;is&nbsp;valid&nbsp;only&nbsp;for&nbsp;FTRT&nbsp;transfer&nbsp;mode&nbsp;--&gt;<br>\
-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;capture_keyword&nbsp;format=&quot;PCM_packet&quot;&nbsp;transfer_mode=&quot;RT&quot;&nbsp;kw_duration=&quot;2000&quot;&nbsp;/&gt;<br>\
+&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;capture_keyword&nbsp;format=&quot;PCM_packet&quot;&nbsp;transfer_mode=&quot;FTRT&quot;&nbsp;kw_duration=&quot;2000&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;param_type&nbsp;name=&quot;load_sound_model&quot;&nbsp;module_id=&quot;0x00012C0D&quot;&nbsp;param_id=&quot;0x00012C14&quot;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;param_type&nbsp;name=&quot;unload_sound_model&quot;&nbsp;module_id=&quot;0x00012C0D&quot;&nbsp;param_id=&quot;0x00012C15&quot;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.&nbsp;.&nbsp;.&nbsp;.<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/vendor_uuid&gt;<br>\
";

function show_element_id_content()
{
	$("#st_mixer_path1").append(sound_trigger_mixer_path_1);
	$("#st_platform_info1").append(st_paltform_info1);

}

