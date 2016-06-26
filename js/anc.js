var section_name_array= ["1","2","2_1","2_2","3","3_1","3_2","3_3","4","5","6","7","8"];

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
	"8":section_8_content
}

var aanc_log_8996 ="\
adb shell &quot;echo file q6afe.c +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br>\
adb shell &quot;echo file msm-pcm-routing-v2.c +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br>\
adb shell &quot;echo file wcd9xxx-resmgr.c +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br>\
adb shell &quot;echo file wcd9xxx-core.c +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br>\
adb shell &quot;echo file wcd9335.c +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br>\
adb shell &quot;echo file msm8996.c +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br>\
adb shell &quot;echo file soc-dapm.c func dapm_seq_run +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br>\
adb shell cat /proc/kmsg | tee kernel.txt\
";

var aanc_log_8994 ="\
adb shell &quot;echo file q6afe.c +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br>\
adb shell &quot;echo file msm-pcm-routing-v2.c +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br>\
adb shell &quot;echo file wcd9xxx-resmgr.c +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br>\
adb shell &quot;echo file wcd9xxx-core.c +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br>\
adb shell &quot;echo file wcd9330.c +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br>\
adb shell &quot;echo file msm8994.c +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br>\
adb shell &quot;echo file soc-dapm.c func dapm_seq_run +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br>\
adb shell cat /proc/kmsg | tee kernel.txt\
";

var aanc_log_fusion4x ="\
adb shell &quot;echo file q6afe.c +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br>\
adb shell &quot;echo file msm-pcm-routing-v2.c +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br>\
adb shell &quot;echo file wcd9xxx-resmgr.c +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br>\
adb shell &quot;echo file wcd9xxx-core.c +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br>\
adb shell &quot;echo file wcd9330.c +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br>\
adb shell &quot;echo file apq8084.c +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br>\
adb shell &quot;echo file soc-dapm.c func dapm_seq_run +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br>\
adb shell cat /proc/kmsg | tee kernel.txt\
";

var aanc_log_8974 ="\
adb shell &quot;echo file q6afe.c +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br>\
adb shell &quot;echo file msm-pcm-routing-v2.c +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br>\
adb shell &quot;echo file wcd9xxx-resmgr.c +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br>\
adb shell &quot;echo file wcd9xxx-core.c +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br>\
adb shell &quot;echo file wcd9320.c +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br>\
adb shell &quot;echo file msm8974.c +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br>\
adb shell &quot;echo file soc-dapm.c func dapm_seq_run +p &gt; /sys/kernel/debug/dynamic_debug/control&quot;<br>\
adb shell cat /proc/kmsg | tee kernel.txt\
";


var anc_handset ="\
&nbsp;&nbsp;&lt;path&nbsp;name=&quot;anc-handset&quot;&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ANC&nbsp;Function&quot;&nbsp;value=&quot;ON&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;SLIM&nbsp;RX0&nbsp;MUX&quot;&nbsp;value=&quot;AIF_MIX1_PB&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;SLIM_0_RX&nbsp;Channels&quot;&nbsp;value=&quot;One&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;RX&nbsp;INT0_1&nbsp;MIX1&nbsp;INP0&quot;&nbsp;value=&quot;RX0&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;RX&nbsp;INT0&nbsp;DEM&nbsp;MUX&quot;&nbsp;value=&quot;CLSH_DSM_OUT&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;RX0&nbsp;Digital&nbsp;Volume&quot;&nbsp;value=&quot;81&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ANC&nbsp;Slot&quot;&nbsp;value=&quot;6&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ADC&nbsp;MUX10&quot;&nbsp;value=&quot;DMIC&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;DMIC&nbsp;MUX10&quot;&nbsp;value=&quot;DMIC3&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ANC0&nbsp;FB&nbsp;MUX&quot;&nbsp;value=&quot;ANC_IN_EAR&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ANC&nbsp;EAR&nbsp;Enable&nbsp;Switch&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&lt;/path&gt;\
";
var aanc_handset_mic="\
&lt;path&nbsp;name=&quot;aanc-handset-mic&quot;&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;AIF1_CAP&nbsp;Mixer&nbsp;SLIM&nbsp;TX6&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;AIF1_CAP&nbsp;Mixer&nbsp;SLIM&nbsp;TX8&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;AIF1_CAP&nbsp;Mixer&nbsp;SLIM&nbsp;TX9&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;SLIM_0_TX&nbsp;Channels&quot;&nbsp;value=&quot;Three&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;AANC_SLIM_0_RX&nbsp;MUX&quot;&nbsp;value=&quot;SLIMBUS_0_TX&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;SLIM&nbsp;TX6&nbsp;MUX&quot;&nbsp;value=&quot;DEC6&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ADC&nbsp;MUX6&quot;&nbsp;value=&quot;DMIC&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;DMIC&nbsp;MUX6&quot;&nbsp;value=&quot;DMIC0&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;SLIM&nbsp;TX8&nbsp;MUX&quot;&nbsp;value=&quot;DEC8&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ADC&nbsp;MUX8&quot;&nbsp;value=&quot;DMIC&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;DMIC&nbsp;MUX8&quot;&nbsp;value=&quot;DMIC3&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;SLIM&nbsp;TX9&nbsp;MUX&quot;&nbsp;value=&quot;DEC7&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ADC&nbsp;MUX7&quot;&nbsp;value=&quot;DMIC&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;DMIC&nbsp;MUX7&quot;&nbsp;value=&quot;DMIC2&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;IIR0&nbsp;INP0&nbsp;MUX&quot;&nbsp;value=&quot;DEC6&quot;&nbsp;/&gt;<br>\
&lt;/path&gt;<br>\
";

var anc_headphones ="\
&lt;path&nbsp;name=&quot;anc-headphones&quot;&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;COMP1&nbsp;Switch&quot;&nbsp;value=&quot;0&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;COMP2&nbsp;Switch&quot;&nbsp;value=&quot;0&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ANC&nbsp;Function&quot;&nbsp;value=&quot;ON&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ANC&nbsp;Slot&quot;&nbsp;value=&quot;0&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ADC&nbsp;MUX10&quot;&nbsp;value=&quot;AMIC&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;AMIC&nbsp;MUX10&quot;&nbsp;value=&quot;ADC3&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ADC&nbsp;MUX12&quot;&nbsp;value=&quot;AMIC&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;AMIC&nbsp;MUX12&quot;&nbsp;value=&quot;ADC4&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ANC0&nbsp;FB&nbsp;MUX&quot;&nbsp;value=&quot;ANC_IN_HPHL&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ANC1&nbsp;FB&nbsp;MUX&quot;&nbsp;value=&quot;ANC_IN_HPHR&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ADC3&nbsp;Volume&quot;&nbsp;value=&quot;8&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ADC4&nbsp;Volume&quot;&nbsp;value=&quot;8&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;SLIM&nbsp;RX0&nbsp;MUX&quot;&nbsp;value=&quot;AIF_MIX1_PB&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;SLIM&nbsp;RX1&nbsp;MUX&quot;&nbsp;value=&quot;AIF_MIX1_PB&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;SLIM_0_RX&nbsp;Channels&quot;&nbsp;value=&quot;Two&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;RX&nbsp;INT1_1&nbsp;MIX1&nbsp;INP0&quot;&nbsp;value=&quot;RX0&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;RX&nbsp;INT2_1&nbsp;MIX1&nbsp;INP0&quot;&nbsp;value=&quot;RX1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;RX&nbsp;INT1&nbsp;DEM&nbsp;MUX&quot;&nbsp;value=&quot;CLSH_DSM_OUT&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;RX&nbsp;INT2&nbsp;DEM&nbsp;MUX&quot;&nbsp;value=&quot;CLSH_DSM_OUT&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;RX1&nbsp;Digital&nbsp;Volume&quot;&nbsp;value=&quot;81&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;RX2&nbsp;Digital&nbsp;Volume&quot;&nbsp;value=&quot;81&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ANC&nbsp;HPHL&nbsp;Enable&nbsp;Switch&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ANC&nbsp;HPHR&nbsp;Enable&nbsp;Switch&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;HPHL&nbsp;Volume&quot;&nbsp;value=&quot;20&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;HPHR&nbsp;Volume&quot;&nbsp;value=&quot;20&quot;&nbsp;/&gt;<br>\
&lt;/path&gt;<br>\
";
var speaker_and_anc_headphones="\
&lt;path&nbsp;name=&quot;speaker-and-anc-headphones&quot;&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;path&nbsp;name=&quot;anc-headphones&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;RX&nbsp;INT7_1&nbsp;MIX1&nbsp;INP0&quot;&nbsp;value=&quot;RX0&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;RX&nbsp;INT8_1&nbsp;MIX1&nbsp;INP0&quot;&nbsp;value=&quot;RX1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;SpkrLeft&nbsp;COMP&nbsp;Switch&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;SpkrRight&nbsp;COMP&nbsp;Switch&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;SpkrLeft&nbsp;BOOST&nbsp;Switch&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;SpkrRight&nbsp;BOOST&nbsp;Switch&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;SpkrLeft&nbsp;VISENSE&nbsp;Switch&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;SpkrRight&nbsp;VISENSE&nbsp;Switch&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;SpkrLeft&nbsp;SWR&nbsp;DAC_Port&nbsp;Switch&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;SpkrRight&nbsp;SWR&nbsp;DAC_Port&nbsp;Switch&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&lt;/path&gt;<br>\
";
var anc_fb_headphones="\
&lt;path&nbsp;name=&quot;anc-fb-headphones&quot;&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;path&nbsp;name=&quot;anc-headphones&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ANC&nbsp;Slot&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&lt;/path&gt;<br>\
";
var speaker_and_anc_fb_headphones="\
&lt;path&nbsp;name=&quot;speaker-and-anc-fb-headphones&quot;&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;path&nbsp;name=&quot;anc-fb-headphones&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;RX&nbsp;INT7_1&nbsp;MIX1&nbsp;INP0&quot;&nbsp;value=&quot;RX0&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;RX&nbsp;INT8_1&nbsp;MIX1&nbsp;INP0&quot;&nbsp;value=&quot;RX1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;SpkrLeft&nbsp;COMP&nbsp;Switch&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;SpkrRight&nbsp;COMP&nbsp;Switch&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;SpkrLeft&nbsp;BOOST&nbsp;Switch&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;SpkrRight&nbsp;BOOST&nbsp;Switch&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;SpkrLeft&nbsp;VISENSE&nbsp;Switch&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;SpkrRight&nbsp;VISENSE&nbsp;Switch&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;SpkrLeft&nbsp;SWR&nbsp;DAC_Port&nbsp;Switch&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;SpkrRight&nbsp;SWR&nbsp;DAC_Port&nbsp;Switch&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&lt;/path&gt;<br>\
";

var voice_anc_headphones="\
&lt;path&nbsp;name=&quot;voice-anc-headphones&quot;&gt;<br>\
&lt;ctl&nbsp;name=&quot;COMP1&nbsp;Switch&quot;&nbsp;value=&quot;0&quot;&nbsp;/&gt;<br>\
&lt;ctl&nbsp;name=&quot;COMP2&nbsp;Switch&quot;&nbsp;value=&quot;0&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ANC&nbsp;Function&quot;&nbsp;value=&quot;ON&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ANC&nbsp;Slot&quot;&nbsp;value=&quot;0&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ADC&nbsp;MUX10&quot;&nbsp;value=&quot;AMIC&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;AMIC&nbsp;MUX10&quot;&nbsp;value=&quot;ADC3&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ADC&nbsp;MUX12&quot;&nbsp;value=&quot;AMIC&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;AMIC&nbsp;MUX12&quot;&nbsp;value=&quot;ADC4&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ANC0&nbsp;FB&nbsp;MUX&quot;&nbsp;value=&quot;ANC_IN_HPHL&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ANC1&nbsp;FB&nbsp;MUX&quot;&nbsp;value=&quot;ANC_IN_HPHR&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ADC3&nbsp;Volume&quot;&nbsp;value=&quot;8&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ADC4&nbsp;Volume&quot;&nbsp;value=&quot;8&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;SLIM&nbsp;RX0&nbsp;MUX&quot;&nbsp;value=&quot;AIF_MIX1_PB&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;SLIM&nbsp;RX1&nbsp;MUX&quot;&nbsp;value=&quot;AIF_MIX1_PB&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;SLIM_0_RX&nbsp;Channels&quot;&nbsp;value=&quot;Two&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;RX&nbsp;INT1_1&nbsp;MIX1&nbsp;INP0&quot;&nbsp;value=&quot;RX0&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;RX&nbsp;INT2_1&nbsp;MIX1&nbsp;INP0&quot;&nbsp;value=&quot;RX1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;RX&nbsp;HPH&nbsp;Mode&quot;&nbsp;value=&quot;CLS_H_LP&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;IIR0&nbsp;Enable&nbsp;Band1&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;IIR0&nbsp;Enable&nbsp;Band2&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;IIR0&nbsp;Enable&nbsp;Band3&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;IIR0&nbsp;Enable&nbsp;Band4&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;IIR0&nbsp;Enable&nbsp;Band5&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;IIR0&nbsp;INP0&nbsp;Volume&quot;&nbsp;value=&quot;54&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;RX&nbsp;INT1&nbsp;DEM&nbsp;MUX&quot;&nbsp;value=&quot;CLSH_DSM_OUT&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;RX&nbsp;INT2&nbsp;DEM&nbsp;MUX&quot;&nbsp;value=&quot;CLSH_DSM_OUT&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;RX1&nbsp;Digital&nbsp;Volume&quot;&nbsp;value=&quot;81&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;RX2&nbsp;Digital&nbsp;Volume&quot;&nbsp;value=&quot;81&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ANC&nbsp;HPHL&nbsp;Enable&nbsp;Switch&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ANC&nbsp;HPHR&nbsp;Enable&nbsp;Switch&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;HPHL&nbsp;Volume&quot;&nbsp;value=&quot;20&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;HPHR&nbsp;Volume&quot;&nbsp;value=&quot;20&quot;&nbsp;/&gt;<br>\
&lt;/path&gt;<br>\
";

var voice_anc_fb_headphones="\
&lt;path&nbsp;name=&quot;voice-anc-fb-headphones&quot;&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;COMP1&nbsp;Switch&quot;&nbsp;value=&quot;0&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;COMP2&nbsp;Switch&quot;&nbsp;value=&quot;0&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ANC&nbsp;Function&quot;&nbsp;value=&quot;ON&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ANC&nbsp;Slot&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ADC&nbsp;MUX10&quot;&nbsp;value=&quot;AMIC&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;AMIC&nbsp;MUX10&quot;&nbsp;value=&quot;ADC3&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ADC&nbsp;MUX12&quot;&nbsp;value=&quot;AMIC&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;AMIC&nbsp;MUX12&quot;&nbsp;value=&quot;ADC4&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ANC0&nbsp;FB&nbsp;MUX&quot;&nbsp;value=&quot;ANC_IN_HPHL&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ANC1&nbsp;FB&nbsp;MUX&quot;&nbsp;value=&quot;ANC_IN_HPHR&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ADC3&nbsp;Volume&quot;&nbsp;value=&quot;8&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ADC4&nbsp;Volume&quot;&nbsp;value=&quot;8&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;SLIM&nbsp;RX0&nbsp;MUX&quot;&nbsp;value=&quot;AIF_MIX1_PB&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;SLIM&nbsp;RX1&nbsp;MUX&quot;&nbsp;value=&quot;AIF_MIX1_PB&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;SLIM_0_RX&nbsp;Channels&quot;&nbsp;value=&quot;Two&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;RX&nbsp;INT1_1&nbsp;MIX1&nbsp;INP0&quot;&nbsp;value=&quot;RX0&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;RX&nbsp;INT2_1&nbsp;MIX1&nbsp;INP0&quot;&nbsp;value=&quot;RX1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;RX&nbsp;HPH&nbsp;Mode&quot;&nbsp;value=&quot;CLS_H_LP&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;IIR0&nbsp;Enable&nbsp;Band1&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;IIR0&nbsp;Enable&nbsp;Band2&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;IIR0&nbsp;Enable&nbsp;Band3&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;IIR0&nbsp;Enable&nbsp;Band4&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;IIR0&nbsp;Enable&nbsp;Band5&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;IIR0&nbsp;INP0&nbsp;Volume&quot;&nbsp;value=&quot;62&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;RX&nbsp;INT1&nbsp;DEM&nbsp;MUX&quot;&nbsp;value=&quot;CLSH_DSM_OUT&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;RX&nbsp;INT2&nbsp;DEM&nbsp;MUX&quot;&nbsp;value=&quot;CLSH_DSM_OUT&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;RX1&nbsp;Digital&nbsp;Volume&quot;&nbsp;value=&quot;81&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;RX2&nbsp;Digital&nbsp;Volume&quot;&nbsp;value=&quot;81&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ANC&nbsp;HPHL&nbsp;Enable&nbsp;Switch&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;ANC&nbsp;HPHR&nbsp;Enable&nbsp;Switch&quot;&nbsp;value=&quot;1&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;HPHL&nbsp;Volume&quot;&nbsp;value=&quot;14&quot;&nbsp;/&gt;<br>\
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ctl&nbsp;name=&quot;HPHR&nbsp;Volume&quot;&nbsp;value=&quot;14&quot;&nbsp;/&gt;<br>\
&lt;/path&gt;<br>\
";


function show_element_id_content()
{
	$("#aanc_log_8996").append(aanc_log_8996);
	$("#aanc_log_8974").append(aanc_log_8974);
	$("#aanc_log_fusion4x").append(aanc_log_fusion4x);
	$("#aanc_log_8994").append(aanc_log_8994);

	$("#anc-headphones").append(anc_headphones);
	$("#speaker-and-anc-headphones").append(speaker_and_anc_headphones);
	$("#anc-fb-headphones").append(anc_fb_headphones);
	$("#speaker-and-anc-fb-headphones").append(speaker_and_anc_fb_headphones);
	$("#voice-anc-headphones").append(voice_anc_headphones);
	$("#voice-anc-fb-headphones").append(voice_anc_fb_headphones);
	$("#aanc-handset-mic").append(aanc_handset_mic);
	$("#anc-handset").append(anc_handset);

}

