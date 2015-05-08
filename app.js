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
        	    text==""
    		});
    },
    say : function(text) {
    		dialog = $("#dialog").html() ;
    		$("#dialog").html(dialog + "</br>" + text) ;
    },
    clear : function() {
    		$("#dialog").text("") ;
    },
    reply : function(texr){
    	if(texr==123) {appUI.say("小绿鸡：456")}
    	else if(texr==jokeme) {appUI.say("小绿鸡：789")}
    	
    	
    	
    }
};
$(document).ready(function() {
	appUI.initialize() ;
});
