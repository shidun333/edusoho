webpackJsonp(["app/js/classroom/thread-list/index"],{"541df869df909d376fb8":function(e,t,c){"use strict";$("[name=access-intercept-check]").length>0&&$(".topic-list").on("click",".title",function(e){var t=$(this);e.preventDefault(),$.get($("[name=access-intercept-check]").val(),function(e){if(e)return void(window.location.href=t.attr("href"));$(".access-intercept-modal").modal("show")},"json")})}},["541df869df909d376fb8"]);