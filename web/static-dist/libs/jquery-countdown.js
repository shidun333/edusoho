!function(t){function e(n,o){if(s[n])return s[n].exports;var i={i:n,l:!1,exports:{}};return 0!=o&&(s[n]=i),t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var s={};e.m=t,e.c=s,e.d=function(t,s,n){e.o(t,s)||Object.defineProperty(t,s,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(s,"a",s),s},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/static-dist/",e(e.s=16)}({16:function(t,e,s){t.exports=s("bb4ea8938542cb619753")},bb4ea8938542cb619753:function(t,e,s){"use strict";!function(t){!function(t){function e(t){if(t instanceof Date)return t;if(String(t).match(a))return String(t).match(/^[0-9]*$/)&&(t=Number(t)),String(t).match(/\-/)&&(t=String(t).replace(/\-/g,"/")),new Date(t);throw new Error("Couldn't cast `"+t+"` to a date object.")}function s(t){var e=t.toString().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return new RegExp(e)}function n(t){return function(e){var n=e.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(n)for(var i=0,a=n.length;i<a;++i){var r=n[i].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),h=s(r[0]),c=r[1]||"",u=r[3]||"",f=null;r=r[2],l.hasOwnProperty(r)&&(f=l[r],f=Number(t[f])),null!==f&&("!"===c&&(f=o(u,f)),""===c&&f<10&&(f="0"+f.toString()),e=e.replace(h,f.toString()))}return e=e.replace(/%%/,"%")}}function o(t,e){var s="s",n="";return t&&(t=t.replace(/(:|;|\s)/gi,"").split(/\,/),1===t.length?s=t[0]:(n=t[0],s=t[1])),Math.abs(e)>1?s:n}var i=[],a=[],r={precision:100,elapse:!1,defer:!1};a.push(/^[0-9]*$/.source),a.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),a.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),a=new RegExp(a.join("|"));var l={Y:"years",m:"months",n:"daysToMonth",d:"daysToWeek",w:"weeks",W:"weeksToMonth",H:"hours",M:"minutes",S:"seconds",D:"totalDays",I:"totalHours",N:"totalMinutes",T:"totalSeconds"},h=function(e,s,n){this.el=e,this.$el=t(e),this.interval=null,this.offset={},this.options=t.extend({},r),this.instanceNumber=i.length,i.push(this),this.$el.data("countdown-instance",this.instanceNumber),n&&("function"==typeof n?(this.$el.on("update.countdown",n),this.$el.on("stoped.countdown",n),this.$el.on("finish.countdown",n)):this.options=t.extend({},r,n)),this.setFinalDate(s),!1===this.options.defer&&this.start()};t.extend(h.prototype,{start:function(){null!==this.interval&&clearInterval(this.interval);var t=this;this.update(),this.interval=setInterval(function(){t.update.call(t)},this.options.precision)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},toggle:function(){this.interval?this.stop():this.start()},pause:function(){this.stop()},resume:function(){this.start()},remove:function(){this.stop.call(this),i[this.instanceNumber]=null,delete this.$el.data().countdownInstance},setFinalDate:function(t){this.finalDate=e(t)},update:function(){if(0===this.$el.closest("html").length)return void this.remove();var e,s=void 0!==t._data(this.el,"events"),n=new Date;e=this.finalDate.getTime()-n.getTime(),e=Math.ceil(e/1e3),e=!this.options.elapse&&e<0?0:Math.abs(e),this.totalSecsLeft!==e&&s&&(this.totalSecsLeft=e,this.elapsed=n>=this.finalDate,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToWeek:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToMonth:Math.floor(this.totalSecsLeft/60/60/24%30.4368),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),weeksToMonth:Math.floor(this.totalSecsLeft/60/60/24/7)%4,months:Math.floor(this.totalSecsLeft/60/60/24/30.4368),years:Math.abs(this.finalDate.getFullYear()-n.getFullYear()),totalDays:Math.floor(this.totalSecsLeft/60/60/24),totalHours:Math.floor(this.totalSecsLeft/60/60),totalMinutes:Math.floor(this.totalSecsLeft/60),totalSeconds:this.totalSecsLeft},this.options.elapse||0!==this.totalSecsLeft?this.dispatchEvent("update"):(this.stop(),this.dispatchEvent("finish")))},dispatchEvent:function(e){var s=t.Event(e+".countdown");s.finalDate=this.finalDate,s.elapsed=this.elapsed,s.offset=t.extend({},this.offset),s.strftime=n(this.offset),this.$el.trigger(s)}}),t.fn.countdown=function(){var e=Array.prototype.slice.call(arguments,0);return this.each(function(){var s=t(this).data("countdown-instance");if(void 0!==s){var n=i[s],o=e[0];h.prototype.hasOwnProperty(o)?n[o].apply(n,e.slice(1)):null===String(o).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(n.setFinalDate.call(n,o),n.start()):t.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,o))}else new h(this,e[0],e[1])})}}($)}()}});