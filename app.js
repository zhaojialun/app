var appDb = $.localStorage ;
var appModel = {
		
};
var app = {
		
};
var appUI = {
    initialize : function() {
    		$("#clearBtn").click(function() {
        	    appUI.clear() ;
    		});
    		$("#sayBtn").click(function() {
    			text = $("#userText").val() ;
    			texr = $("#userText").val() ;
        	    appUI.say(text) ;
        	    appUI.reply(texr);
        	    
    		});
    },
    say : function(text) {
    		dialog = $("#dialog").html() ;
    		$("#dialog").html(dialog + "</br>" +"我："+ text) ;
    		return text;
    },
    replymsg : function(text) {
        		dialog = $("#dialog").html() ;
        		$("#dialog").html(dialog + "</br>" +"小绿鸡:"+ text) ;
    },
    clear : function() {
    		$("#dialog").text("") ;
    },
    reply : function(texr){
    	if(texr=="123") 
    		appUI.replymsg("456")
    	else if(texr=="456") 
    		appUI.replymsg("4562")
    	else if(texr=="你是谁？") 
    		appUI.replymsg("你是我至尊无上宇宙无敌最美丽妖艳的主人(跪拜)。")
    	else if(texr=="你是男的？") 
    		appUI.replymsg("我是一只小鸡啊")
    	else if(texr=="吃什么那？") 
    		appUI.replymsg("翠花上酸菜。")
    	else if(texr=="jokeme") 
    		appUI.replymsg("一男子在闹市骑摩托撞昏了一个陌生的老汉！ 男子惊吓的不知所措！围观群众越来越多！突然，该男抱住老汉，声泪俱下的喊道：“爹，你等着我，我这就去给你找医生！”说后，就跑掉了。。。老汉挣扎着愤怒的喊道：“给老子回来！”众人纷纷感慨：“这儿子当的真孝顺！” ")
    	else if(texr=="你的理想是什么？") 
    		appUI.replymsg("众里寻她千百度，那人却在灯火阑珊处。")
    	else if(texr=="bipt") 
    		appUI.replymsg("是你家啊？")
    		else if(texr=="么么哒") 
    		appUI.replymsg("么么哒")
    		else if(texr=="你家在哪里") 
    		appUI.replymsg("我家在北京")
    		else if(texr=="你在哪里") 
    		appUI.replymsg("我在火星")
    		else if(texr=="How are you？") 
    		appUI.replymsg("I'm fine!")
    		else if(texr=="快结课了") 
    		appUI.replymsg("真好啊")
    	else if(texr=="北京") 
    		appUI.replymsg("我爱首都天安门！")
    	else if(texr=="心理暗示") {
    		appUI.replymsg("接下来的题目有很强心理暗示作用。。。 很神奇！接下来 请用自己最快的速度心算下面各题 ")
    		setTimeout(function(){appUI.replymsg("2+2＝? ")},4000)
    		setTimeout(function(){appUI.replymsg("4+4＝?  ")},6000)
    		setTimeout(function(){appUI.replymsg("8+8＝?  ")},8000)
    		setTimeout(function(){appUI.replymsg("16+16＝?  ")},10000)
    		setTimeout(function(){appUI.replymsg("快！随便在12跟5的中间挑一个数字！ ")},12000)
    		setTimeout(function(){appUI.replymsg("挑了吗？ 现在我们继续 ")},14000)
    		setTimeout(function(){appUI.replymsg("你挑的数字是 7 ，对吧！ ")},16000)
    		setTimeout(function(){appUI.replymsg("继续作下一个实验！跟着下列叙述并且快速回答问题！算算看 啰！  ")},22000)
    		setTimeout(function(){appUI.replymsg("1+5")},26000)
    		setTimeout(function(){appUI.replymsg("2+4")},28000)
    		setTimeout(function(){appUI.replymsg("3+3")},30000)
    		setTimeout(function(){appUI.replymsg("4+2")},32000)
    		setTimeout(function(){appUI.replymsg("5+1")},34000)
    		setTimeout(function(){appUI.replymsg("现在持续默念 6 这个数字15秒，然后往下卷动画面！ ")},36000)
    		setTimeout(function(){appUI.replymsg("快！想一个蔬菜的名字！然后继续往下卷动作！ ")},51000)
    		setTimeout(function(){appUI.replymsg("*你想的是大白菜，对吧！如果不是，你是占2%可以在正常情形下 还可以有余力思考别的事的少数人口，98%的人会回答大白菜。诡异哦！听说这个测验 是从爱丽丝梦游仙境中兔子国翻译的…… ")},58000)
    	} 
    	else{appUI.replymsg("I am sorry 我不知道你在说什么 ")}}
};
$(document).ready(function() {
	appUI.initialize() ;
});
