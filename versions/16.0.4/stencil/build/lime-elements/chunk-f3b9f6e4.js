const n={animationstart:{noPrefix:"animationstart",webkitPrefix:"webkitAnimationStart",styleProperty:"animation"},animationend:{noPrefix:"animationend",webkitPrefix:"webkitAnimationEnd",styleProperty:"animation"},animationiteration:{noPrefix:"animationiteration",webkitPrefix:"webkitAnimationIteration",styleProperty:"animation"},transitionend:{noPrefix:"transitionend",webkitPrefix:"webkitTransitionEnd",styleProperty:"transition"}},i={animation:{noPrefix:"animation",webkitPrefix:"-webkit-animation"},transform:{noPrefix:"transform",webkitPrefix:"-webkit-transform"},transition:{noPrefix:"transition",webkitPrefix:"-webkit-transition"}};function t(t,e){if(!function(n){return void 0!==n.document&&"function"==typeof n.document.createElement}(t)||!function(t){return t in n||t in i}(e))return e;const r=e in n?n:i,o=t.document.createElement("div");return r===n?function(n,i,t){return i[n].styleProperty in t.style?i[n].noPrefix:i[n].webkitPrefix}(e,r,o):r[e].noPrefix in o.style?r[e].noPrefix:r[e].webkitPrefix}const e=["transform","WebkitTransform","MozTransform","OTransform","MSTransform"];function r(n,i){return t(n,i)}function o(n,i){return t(n,i)}export{o as a,r as b,e as c};