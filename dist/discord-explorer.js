({283:function(){var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function s(e){try{c(r.next(e))}catch(e){a(e)}}function i(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}c((r=r.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var n,r,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){s.label=a[1];break}if(6===a[0]&&s.label<o[1]){s.label=o[1],o=a;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(a);break}o[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},n=this,r=[{id:"727912383833702411",name:"general"},{id:"793448224353550346",name:"mind-is-tree"}],o={},a=0;function s(e){var t=null,n=new XMLHttpRequest;return n.open("GET",e,!1),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.send(),200==n.status&&(t=n.responseText),t}function i(e){var t,n,r,s=o.data[e],i=document.createElement("div");i.setAttribute("class","chunk"),i.setAttribute("id","chunk-"+e),$("#chatlog").append(i);for(var u=0,l=s;u<l.length;u++)t=l[u],n=i,r=void 0,(r=document.createElement("div")).setAttribute("class","message-card"),r.setAttribute("id","msg-"+t.id),r.innerText=t.content,n.appendChild(r),$("#progress").html("Rendering "+s.length+" messages");a+=1,c(),console.log("Finished rendering chunk "+e+" ("+s.length+" messages)"),$("#progress").hide()}function c(){$("#left-menu").css("height",window.innerHeight.toString()+"px"),$("#chatlog").css("height",(window.innerHeight-40).toString()+"px")}$((function(){$(window).on("resize",c),function(){$("#left-menu").append($('<div id="channels"></div>'));for(var a=0,s=r;a<s.length;a++){var c=s[a],u=$('\n            <div class="sidebar-item">\n                <a class="channel-label" href="#"> '+c.name+" </a>\n            </div>\n        ");u[0].dataset.channelId=c.id,$("#channels").append(u)}$(".sidebar-item").on("click",(function(r){var a;$(".sidebar-item[selected]").attr("selected",null),a=r.target.parentElement.dataset.channelId.toString(),e(n,void 0,void 0,(function(){var r,s,c;return t(this,(function(u){switch(u.label){case 0:return $("#chatlog").html("").scrollTop(0),$("body").css("cursor","wait"),o.id=a,r=performance.now(),[4,$.getJSON("assets/"+a+".json")];case 1:return s=u.sent(),c=performance.now()-r,console.log("Getting and parsing the JSON took "+Math.round(c)+"ms"),l=s.messages,e(n,void 0,void 0,(function(){var e,n,r;return t(this,(function(t){if(e=[],l.length>=100){for(n=Math.ceil(l.length/100),r=0;r<n;r++)e.push(l.slice(100*r,100*r+100));console.log("Split "+l.length+" messages into "+e.length+" chunks")}else e=[l];return o.data=e,e[0],i(0),$("#chatlog").show(),[2]}))})),$("body").css("cursor",""),[2]}var l}))})),r.target.parentElement.setAttribute("selected","")}))}()}));var u=function(){var e=[],t=JSON.parse(s("https://rocky-castle-55647.herokuapp.com/https://status.mojang.com/check"));"green"!=t[0]["minecraft.net"]&&e.push("minecraft.net"),"green"!=t[1]["session.minecraft.net"]&&e.push("session.minecraft.net"),"green"!=t[2]["account.mojang.com"]&&e.push("account.mojang.com"),"green"!=t[3]["authserver.mojang.com"]&&e.push("authserver.mojang.com"),"green"!=t[5]["api.mojang.com"]&&e.push("api.mojang.com"),"green"!=t[6]["textures.minecraft.net"]&&e.push("textures.minecraft.net"),"green"!=t[7]["mojang.com"]&&e.push("mojang.com");var n=JSON.parse(s("https://kctbh9vrtdwd.statuspage.io/api/v2/status.json"));return"major"==n.status.indicator&&e.push("github.com"),"operational"!=(n=JSON.parse(s("https://kctbh9vrtdwd.statuspage.io/api/v2/components.json"))).components[8].status&&e.push("github.io"),e}();0!=u.length&&console.warn("One or more services are reporting degraded performance or an outage.",u);var l=!1;$("#chatlog").on("scroll",(function(){a>=o.data.length||$("#chatlog").scrollTop()/(document.getElementById("chatlog").scrollHeight-$("#chatlog").height())*100>=95&&!l&&(l=!0,i(a),setTimeout((function(){l=!1}),10))}))}})[283]();