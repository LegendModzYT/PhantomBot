!function(){function o(o,e,n){return e=1e3*e+$.systemTime(),i?(s.push({command:o,time:e}),void $.consoleDebug("pushed "+o+" to global cooldown.")):void($.inidb.exists("cooldown",o)&&(s.push({command:o,time:e,user:n}),$.consoleDebug("pushed "+o+" to user cooldown.")))}function e(e,n){var a,r;if(i){for(r in s)if(s[r].command.equalsIgnoreCase(e)){if(a=s[r].time-$.systemTime(),a>0)return!d&&$.isMod(n)?0:parseInt(a);s.splice(r,1)}return void o(e,l)}for(r in s)if(s[r].command.equalsIgnoreCase(e)&&s[r].user.equalsIgnoreCase(n)){if(a=s[r].time-$.systemTime(),a>0)return!d&&$.isMod(n)?0:parseInt(a);s.splice(r,1)}o(e,parseInt($.inidb.get("cooldown",e)),n)}function n(o){var e;for(e in s)if(s[e].command.equalsIgnoreCase(o))return void s.splice(e,1)}var i=$.inidb.exists("cooldown","globalCooldown")?$.getIniDbBoolean("cooldown","globalCooldown"):!1,l=$.inidb.exists("cooldown","globalCooldownTime")?parseInt($.inidb.get("cooldown","globalCooldownTime")):90,d=$.inidb.exists("cooldown","modCooldown")?$.getIniDbBoolean("cooldown","modCooldown"):!1,s=[];$.bind("command",function(o){var e=o.getSender().toLowerCase(),l=o.getCommand(),s=o.getArgs(),a=s[0];if(time=parseInt(s[1]),l.equalsIgnoreCase("coolcom")||l.equalsIgnoreCase("cooldown"))return $.isAdmin(e)?a&&time?-1==time?($.inidb.del("cooldown",a),n(a),void $.say($.whisperPrefix(e)+$.lang.get("cooldown.removed",a))):($.inidb.set("cooldown",a,time),void $.say($.whisperPrefix(e)+$.lang.get("cooldown.set",a,time))):void $.say($.whisperPrefix(e)+$.lang.get("cooldown.set.usage")):void $.say($.whisperPrefix(e)+$.adminMsg);if(l.equalsIgnoreCase("toggleglobalcooldown")){if(!$.isAdmin(e))return void $.say($.whisperPrefix(e)+$.adminMsg);i=!i,$.setIniDbBoolean("cooldown","globalCooldown",i),$.say($.whisperPrefix(e)+$.lang.get("cooldown.global.toggle",i?$.lang.get("common.enabled"):$.lang.get("common.disabled")))}if(l.equalsIgnoreCase("globalcooldown")){if(!$.isAdmin(e))return void $.say($.whisperPrefix(e)+$.adminMsg);if(!a)return void $.say($.whisperPrefix(e)+$.lang.get("cooldown.global.usage"));$.inidb.set("cooldown","globalCooldownTime",parseInt(a)),$.say($.whisperPrefix(e)+$.lang.get("cooldown.global.set",a))}if(l.equalsIgnoreCase("togglemodcooldown")){if(!$.isAdmin(e))return void $.say($.whisperPrefix(e)+$.adminMsg);d=!d,$.setIniDbBoolean("cooldown","modCooldown",d),$.say($.whisperPrefix(e)+$.lang.get("cooldown.set.togglemodcooldown",d?$.lang.get("common.enabled"):$.lang.get("common.disabled")))}}),$.bind("initReady",function(){$.bot.isModuleEnabled("./core/commandCoolDown.js")&&($.registerChatCommand("./core/commandCoolDown.js","coolcom",1),$.registerChatCommand("./core/commandCoolDown.js","cooldown",1),$.registerChatCommand("./core/commandCoolDown.js","globalcooldown",1),$.registerChatCommand("./core/commandCoolDown.js","toggleglobalcooldown",1),$.registerChatCommand("./core/commandCoolDown.js","togglemodcooldown",1))}),$.coolDown={set:o,get:e}}();
