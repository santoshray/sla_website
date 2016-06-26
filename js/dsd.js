var section_name_array= ["1","2","2_1","2_2","3","3_1","3_2","3_3","4","5","6","7","8","9","10","11","12","13","14"];

var	section_1_content = $("#1").html();
var section_2_content =$("#2").html();
var section_2_1_content =$("#2_1").html();
var section_2_2_content =$("#2_2").html();
var section_3_content  = $("#3").html();
var section_3_1_content  = $("#3_1").html();
var section_3_2_content  = $("#3_2").html();
var section_3_3_content  = $("#3_3").html();
var section_4_content = $("#4").html();
var section_5_content  = $("#5").html();
var section_6_content = $("#6").html();
var section_7_content = $("#7").html();
var section_8_content = $("#8").html();
var section_9_content = $("#9").html();
var section_10_content = $("#10").html();
var section_11_content = $("#11").html();
var section_12_content = $("#12").html();
var section_13_content = $("#13").html();
var section_14_content = $("#14").html();

var i =0;
for(i =0;i< section_name_array.length;i++)
{
	$("#"+section_name_array[i]).html("");
}

var section_object = {
	"1":section_1_content ,
	"2":section_2_content,
	"2_1":section_2_1_content,
	"2_2":section_2_2_content,
	"3":section_3_content,
	"3_1":section_3_1_content,
	"3_2":section_3_2_content,
	"3_3":section_3_3_content,
	"4":section_4_content,
	"5":section_5_content,
	"6":section_6_content,
	"7":section_7_content,
	"8":section_8_content,
	"9":section_9_content,
	"10":section_10_content,
	"11":section_11_content,
	"12":section_12_content,
	"13":section_13_content,
	"14":section_14_content
}


var mbhc_cal ="static void *def_tasha_mbhc_cal(void)<br>\
{<br>\
&nbsp;&nbsp;&nbsp;&nbsp;void *tasha_wcd_cal;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;struct wcd_mbhc_btn_detect_cfg *btn_cfg;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;u16 *btn_high;<br>\
<br>\
&nbsp;&nbsp;&nbsp;&nbsp;tasha_wcd_cal = kzalloc(WCD_MBHC_CAL_SIZE(WCD_MBHC_DEF_BUTTONS,<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WCD9XXX_MBHC_DEF_RLOADS), GFP_KERNEL);<br>\
&nbsp;&nbsp;&nbsp;&nbsp;if (!tasha_wcd_cal) {<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pr_err(&quot;%s: out of memory\n&quot;, __func__);<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return NULL;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;}<br>\
<br>\
#define S(X, Y) ((WCD_MBHC_CAL_PLUG_TYPE_PTR(tasha_wcd_cal)-&gt;X) = (Y))<br>\
&nbsp;&nbsp;&nbsp;&nbsp;S(v_hs_max, 1500);<br>\
#undef S<br>\
#define S(X, Y) ((WCD_MBHC_CAL_BTN_DET_PTR(tasha_wcd_cal)-&gt;X) = (Y))<br>\
&nbsp;&nbsp;&nbsp;&nbsp;S(num_btn, WCD_MBHC_DEF_BUTTONS);<br>\
#undef S<br>\
<br>\
&nbsp;&nbsp;&nbsp;&nbsp;btn_cfg = WCD_MBHC_CAL_BTN_DET_PTR(tasha_wcd_cal);<br>\
&nbsp;&nbsp;&nbsp;&nbsp;btn_high = ((void *)&btn_cfg-&gt;_v_btn_low) +<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(sizeof(btn_cfg-&gt;_v_btn_low[0]) * btn_cfg-&gt;num_btn);<br>\
<br>\
&nbsp;&nbsp;&nbsp;&nbsp;<b>btn_high[0] = 75;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;btn_high[1] = 150;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;btn_high[2] = 237;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;btn_high[3] = 500;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;btn_high[4] = 500;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;btn_high[5] = 500;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;btn_high[6] = 500;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;btn_high[7] = 500;</b><br>\
<br>\
&nbsp;&nbsp;&nbsp;&nbsp;return tasha_wcd_cal;<br>\
}";

var mbhc_log = "\
adb shell &quot;echo file wcd-mbhc-v2.c +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br> \
adb shell &quot;echo file wcd9335.c +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br> \
adb shell &quot;echo file wcd9xxx-common-v2.c +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br> \
adb shell &quot;echo file wcd9xxx-resmgr-v2.c +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br> \
adb shell &quot;echo file wcdcal-hwdep.c +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br> \
adb shell &quot;echo file msm8996.c +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br> \
adb shell &quot;echo file soc-dapm.c func dapm_seq_run +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br> \
adb shell &quot;echo file wcd9xxx-core.c +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br> \
<br> \
adb shell cat /proc/kmsg  | tee kernel.txt<br> \
";


function show_element_id_content()
{
	$("#mbhc_cal").append(mbhc_cal);
	$("#mbhc_log").append(mbhc_log);
}
