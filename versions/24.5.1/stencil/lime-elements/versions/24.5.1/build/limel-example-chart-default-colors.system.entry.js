System.register(["./core-e7aed7d8.system.js"],(function(t){"use strict";var e,a;return{setters:[function(t){e=t.r;a=t.h}],execute:function(){var s=t("limel_example_chart_default_colors",function(){function t(t){e(this,t);this.labels=["A","B"];this.datasets=[{label:"Turquoise",data:[5,3]},{label:"Magenta",data:[5,3]},{label:"Yellow",data:[5,3]},{label:"Green",data:[5,3]},{label:"Red",data:[5,3]},{label:"Orange",data:[5,3]},{label:"Repeat",data:[5,3]}];this.type="bar";this.options={scales:{yAxes:[{ticks:{beginAtZero:true}}]}}}t.prototype.render=function(){return a("limel-chart",{type:this.type,labels:this.labels,datasets:this.datasets,options:this.options})};return t}())}}}));