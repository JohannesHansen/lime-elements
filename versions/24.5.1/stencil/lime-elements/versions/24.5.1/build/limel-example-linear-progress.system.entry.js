System.register(["./core-e7aed7d8.system.js"],(function(e){"use strict";var t,n;return{setters:[function(e){t=e.r;n=e.h}],execute:function(){var i=100;var r=e("limel_example_linear_progress",function(){function e(e){t(this,e);this.value=.7;this.onChange=this.onChange.bind(this)}e.prototype.render=function(){return[n("limel-input-field",{label:"Value",value:(this.value*i).toFixed(0),onChange:this.onChange}),n("p",null,n("limel-linear-progress",{value:this.value}))]};e.prototype.onChange=function(e){this.value=+e.detail/i};return e}())}}}));