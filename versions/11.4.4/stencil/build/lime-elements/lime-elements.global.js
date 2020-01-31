/*! Built with http://stenciljs.com */
(function(namespace,resourcesUrl){"use strict";
(function(resourcesUrl){const e=new class{constructor(){this.iconPath=""}};var t=(()=>e)();const a=new class{constructor(){this.cache={},this.resolveFunctions={}}async get(e,t=""){return this.cache[e]||(this.cache[e]=await this.getIcon(e,t)),this.cache[e]}getIcon(e,t){return new Promise(a=>{this.resolveFunctions[e]||(this.resolveFunctions[e]=[],this.fetchData(e,t)),this.resolveFunctions[e].push(a)})}async fetchData(e,t){let a=t||"";t&&!t.endsWith("/")&&(a=`${t}/`);const r=await fetch(`${a}assets/icons/${e}.svg`);let n=await r.text();if(n=n.replace(/#000000/g,"currentColor"),!this.validSvg(n))throw new Error("Invalid SVG");this.resolvePromises(e,n)}validSvg(e){return"svg"===(new DOMParser).parseFromString(e,"image/svg+xml").documentElement.tagName.toLowerCase()}resolvePromises(e,t){this.resolveFunctions[e].forEach(e=>{e(t)}),this.resolveFunctions[e]=null}};var r=(()=>a)();const n={da:{"date-picker.month.heading":"Måned","date-picker.quarter.heading":"Kvartal","date-picker.year.heading":"År"},en:{"date-picker.month.heading":"Month","date-picker.quarter.heading":"Quarter","date-picker.year.heading":"Year"},fi:{"date-picker.month.heading":"Kuukausi","date-picker.quarter.heading":"Vuosineljännes","date-picker.year.heading":"Vuosi"},no:{"date-picker.month.heading":"Måned","date-picker.quarter.heading":"Kvartal","date-picker.year.heading":"År"},sv:{"date-picker.month.heading":"Månad","date-picker.quarter.heading":"Kvartal","date-picker.year.heading":"År"}},i=new class{get(e,t="en"){return n[t][e]}};var s=(()=>i)();Context.config=t,Context.iconCache=r,Context.translations=s;
})(resourcesUrl);
})("LimeElements");