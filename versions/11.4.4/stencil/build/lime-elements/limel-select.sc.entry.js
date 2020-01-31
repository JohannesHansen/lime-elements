/*! Built with http://stenciljs.com */
const{h:t}=window.LimeElements;import{c as e,a as s,e as i}from"./chunk-05c5f803.js";import{a,b as n}from"./chunk-48316a3b.js";import{a as l,b as o}from"./chunk-6a33c04e.js";const h={DISABLED:"mdc-select--disabled",ROOT:"mdc-select",OUTLINED:"mdc-select--outlined"},r={CHANGE_EVENT:"MDCSelect:change",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",LABEL_SELECTOR:".mdc-floating-label",NATIVE_CONTROL_SELECTOR:".mdc-select__native-control",OUTLINE_SELECTOR:".mdc-notched-outline"},d={LABEL_SCALE:.75};class c extends l{static get cssClasses(){return h}static get numbers(){return d}static get strings(){return r}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},hasClass:()=>!1,activateBottomLine:()=>{},deactivateBottomLine:()=>{},getValue:()=>{},isRtl:()=>!1,hasLabel:()=>!1,floatLabel:()=>{},getLabelWidth:()=>{},hasOutline:()=>!1,notchOutline:()=>{},closeOutline:()=>{}}}constructor(t){super(Object.assign(c.defaultAdapter,t))}updateDisabledStyle(t){const{DISABLED:e}=c.cssClasses;t?this.adapter_.addClass(e):this.adapter_.removeClass(e)}handleChange(){const t=this.adapter_.getValue().length>0;this.adapter_.floatLabel(t),this.notchOutline(t)}handleFocus(){this.adapter_.floatLabel(!0),this.notchOutline(!0),this.adapter_.activateBottomLine()}handleBlur(){this.handleChange(),this.adapter_.deactivateBottomLine()}notchOutline(t){if(this.adapter_.hasOutline())if(t){const t=d.LABEL_SCALE,e=this.adapter_.getLabelWidth()*t,s=this.adapter_.isRtl();this.adapter_.notchOutline(e,s)}else this.adapter_.closeOutline()}}class u extends o{constructor(...t){super(...t)}static attachTo(t){return new u(t)}get value(){return this.nativeControl_.value}set value(t){this.nativeControl_.value=t,this.foundation_.handleChange()}get selectedIndex(){return this.nativeControl_.selectedIndex}set selectedIndex(t){this.nativeControl_.selectedIndex=t,this.foundation_.handleChange()}get disabled(){return this.nativeControl_.disabled}set disabled(t){this.nativeControl_.disabled=t,this.foundation_.updateDisabledStyle(t)}layout(){this.foundation_.notchOutline(this.nativeControl_.value.length>0)}initialize(t=(t=>new e(t)),a=(t=>new s(t)),n=(t=>new i(t))){this.nativeControl_=this.root_.querySelector(r.NATIVE_CONTROL_SELECTOR);const l=this.root_.querySelector(r.LABEL_SELECTOR);l&&(this.label_=t(l));const o=this.root_.querySelector(r.LINE_RIPPLE_SELECTOR);o&&(this.lineRipple_=a(o));const d=this.root_.querySelector(r.OUTLINE_SELECTOR);d&&(this.outline_=n(d)),this.root_.classList.contains(h.OUTLINED)||(this.ripple=this.initRipple_())}initRipple_(){const t=Object.assign(a.createAdapter(this),{registerInteractionHandler:(t,e)=>this.nativeControl_.addEventListener(t,e),deregisterInteractionHandler:(t,e)=>this.nativeControl_.removeEventListener(t,e)}),e=new n(t);return new a(this.root_,e)}initialSyncWithDOM(){this.handleChange_=(()=>this.foundation_.handleChange()),this.handleFocus_=(()=>this.foundation_.handleFocus()),this.handleBlur_=(()=>this.foundation_.handleBlur()),this.handleClick_=(t=>this.setTransformOrigin_(t)),this.nativeControl_.addEventListener("change",this.handleChange_),this.nativeControl_.addEventListener("focus",this.handleFocus_),this.nativeControl_.addEventListener("blur",this.handleBlur_),this.lineRipple_&&["mousedown","touchstart"].forEach(t=>{this.nativeControl_.addEventListener(t,this.handleClick_)}),this.foundation_.handleChange(),this.nativeControl_.disabled&&(this.disabled=!0)}destroy(){this.nativeControl_.removeEventListener("change",this.handleChange_),this.nativeControl_.removeEventListener("focus",this.handleFocus_),this.nativeControl_.removeEventListener("blur",this.handleBlur_),["mousedown","touchstart"].forEach(t=>{this.nativeControl_.removeEventListener(t,this.handleClick_)}),this.ripple&&this.ripple.destroy(),this.outline_&&this.outline_.destroy(),super.destroy()}getDefaultFoundation(){return new c(Object.assign({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),hasClass:t=>this.root_.classList.contains(t),getValue:()=>this.nativeControl_.value,isRtl:()=>"rtl"===window.getComputedStyle(this.root_).getPropertyValue("direction"),activateBottomLine:()=>{this.lineRipple_&&this.lineRipple_.activate()},deactivateBottomLine:()=>{this.lineRipple_&&this.lineRipple_.deactivate()}},this.getOutlineAdapterMethods_(),this.getLabelAdapterMethods_()))}getOutlineAdapterMethods_(){return{hasOutline:()=>!!this.outline_,notchOutline:(t,e)=>{this.outline_&&this.outline_.notch(t,e)},closeOutline:()=>{this.outline_&&this.outline_.closeNotch()}}}getLabelAdapterMethods_(){return{hasLabel:()=>!!this.label_,floatLabel:t=>{this.label_&&this.label_.float(t)},getLabelWidth:()=>this.label_?this.label_.getWidth():0}}setTransformOrigin_(t){const e=t.target.getBoundingClientRect();this.lineRipple_.setRippleCenter(t.clientX-e.left)}}class _{constructor(){this.disabled=!1,this.options=[],this.onChange=(()=>{const t=this.mdcSelect.value;let e;e=""===t?null:this.options.find(e=>t===e.value),this.change.emit(e)})}componentDidLoad(){const t=this.limelSelect.shadowRoot.querySelector(".mdc-select");this.mdcSelect=new u(t),this.onChange()}componentDidUnload(){this.mdcSelect.destroy()}render(){return t("label",{class:`\n                    mdc-select\n                    ${this.disabled?"mdc-select--disabled":""}\n                `},t("select",{onChange:this.onChange,class:"mdc-select__native-control",disabled:this.disabled},this.options.map(e=>t("option",{key:e.value,value:e.value,selected:this.value?e.value===this.value.value:""===e.value,disabled:e.disabled},e.text))),t("span",{class:`\n                        mdc-floating-label\n                        ${this.value?"mdc-floating-label--float-above":""}\n                    `},this.label),t("div",{class:"mdc-line-ripple"}))}optionsWatcher(t){t&&t.length?setTimeout(()=>{this.mdcSelect.selectedIndex=0,this.onChange()},0):(this.mdcSelect.value=null,this.mdcSelect.selectedIndex=-1,this.onChange())}static get is(){return"limel-select"}static get encapsulation(){return"shadow"}static get properties(){return{disabled:{type:Boolean,attr:"disabled",reflectToAttr:!0},label:{type:String,attr:"label",reflectToAttr:!0},limelSelect:{elementRef:!0},mdcSelect:{state:!0},options:{type:"Any",attr:"options",watchCallbacks:["optionsWatcher"]},value:{type:"Any",attr:"value"}}}static get events(){return[{name:"change",method:"change",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".sc-limel-select-h{--mdc-theme-primary:var(--lime-primary-color,#26a69a);--mdc-theme-secondary:var(--lime-secondary-color,#29b6f6);--mdc-theme-on-primary:var(--lime-on-primary-color,#fff);--mdc-theme-on-secondary:var(--lime-on-secondary-color,#fff)}.sc-limel-select:root{--mdc-theme-primary:#26a69a;--mdc-theme-secondary:#29b6f6;--mdc-theme-background:#fff;--mdc-theme-surface:#fff;--mdc-theme-error:#b00020;--mdc-theme-on-primary:#fff;--mdc-theme-on-secondary:#fff;--mdc-theme-on-surface:#000;--mdc-theme-on-error:#fff;--mdc-theme-text-primary-on-background:rgba(0,0,0,0.87);--mdc-theme-text-secondary-on-background:rgba(0,0,0,0.54);--mdc-theme-text-hint-on-background:rgba(0,0,0,0.38);--mdc-theme-text-disabled-on-background:rgba(0,0,0,0.38);--mdc-theme-text-icon-on-background:rgba(0,0,0,0.38);--mdc-theme-text-primary-on-light:rgba(0,0,0,0.87);--mdc-theme-text-secondary-on-light:rgba(0,0,0,0.54);--mdc-theme-text-hint-on-light:rgba(0,0,0,0.38);--mdc-theme-text-disabled-on-light:rgba(0,0,0,0.38);--mdc-theme-text-icon-on-light:rgba(0,0,0,0.38);--mdc-theme-text-primary-on-dark:#fff;--mdc-theme-text-secondary-on-dark:hsla(0,0%,100%,0.7);--mdc-theme-text-hint-on-dark:hsla(0,0%,100%,0.5);--mdc-theme-text-disabled-on-dark:hsla(0,0%,100%,0.5);--mdc-theme-text-icon-on-dark:hsla(0,0%,100%,0.5)}.mdc-theme--primary.sc-limel-select{color:#26a69a!important;color:var(--mdc-theme-primary,#26a69a)!important}.mdc-theme--secondary.sc-limel-select{color:#29b6f6!important;color:var(--mdc-theme-secondary,#29b6f6)!important}.mdc-theme--background.sc-limel-select{background-color:#fff;background-color:var(--mdc-theme-background,#fff)}.mdc-theme--surface.sc-limel-select{background-color:#fff;background-color:var(--mdc-theme-surface,#fff)}.mdc-theme--error.sc-limel-select{color:#b00020!important;color:var(--mdc-theme-error,#b00020)!important}.mdc-theme--on-primary.sc-limel-select{color:#fff!important;color:var(--mdc-theme-on-primary,#fff)!important}.mdc-theme--on-secondary.sc-limel-select{color:#fff!important;color:var(--mdc-theme-on-secondary,#fff)!important}.mdc-theme--on-surface.sc-limel-select{color:#000!important;color:var(--mdc-theme-on-surface,#000)!important}.mdc-theme--on-error.sc-limel-select{color:#fff!important;color:var(--mdc-theme-on-error,#fff)!important}.mdc-theme--text-primary-on-background.sc-limel-select{color:rgba(0,0,0,.87)!important;color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))!important}.mdc-theme--text-secondary-on-background.sc-limel-select{color:rgba(0,0,0,.54)!important;color:var(--mdc-theme-text-secondary-on-background,rgba(0,0,0,.54))!important}.mdc-theme--text-hint-on-background.sc-limel-select{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-hint-on-background,rgba(0,0,0,.38))!important}.mdc-theme--text-disabled-on-background.sc-limel-select{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-disabled-on-background,rgba(0,0,0,.38))!important}.mdc-theme--text-icon-on-background.sc-limel-select{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-icon-on-background,rgba(0,0,0,.38))!important}.mdc-theme--text-primary-on-light.sc-limel-select{color:rgba(0,0,0,.87)!important;color:var(--mdc-theme-text-primary-on-light,rgba(0,0,0,.87))!important}.mdc-theme--text-secondary-on-light.sc-limel-select{color:rgba(0,0,0,.54)!important;color:var(--mdc-theme-text-secondary-on-light,rgba(0,0,0,.54))!important}.mdc-theme--text-hint-on-light.sc-limel-select{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-hint-on-light,rgba(0,0,0,.38))!important}.mdc-theme--text-disabled-on-light.sc-limel-select{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38))!important}.mdc-theme--text-icon-on-light.sc-limel-select{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-icon-on-light,rgba(0,0,0,.38))!important}.mdc-theme--text-primary-on-dark.sc-limel-select{color:#fff!important;color:var(--mdc-theme-text-primary-on-dark,#fff)!important}.mdc-theme--text-secondary-on-dark.sc-limel-select{color:hsla(0,0%,100%,.7)!important;color:var(--mdc-theme-text-secondary-on-dark,hsla(0,0%,100%,.7))!important}.mdc-theme--text-hint-on-dark.sc-limel-select{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-hint-on-dark,hsla(0,0%,100%,.5))!important}.mdc-theme--text-disabled-on-dark.sc-limel-select{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-disabled-on-dark,hsla(0,0%,100%,.5))!important}.mdc-theme--text-icon-on-dark.sc-limel-select{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-icon-on-dark,hsla(0,0%,100%,.5))!important}.mdc-theme--primary-bg.sc-limel-select{background-color:#26a69a!important;background-color:var(--mdc-theme-primary,#26a69a)!important}.mdc-theme--secondary-bg.sc-limel-select{background-color:#29b6f6!important;background-color:var(--mdc-theme-secondary,#29b6f6)!important}.mdc-typography.sc-limel-select{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}.mdc-typography--headline1.sc-limel-select{font-size:9.6rem;line-height:9.6rem;letter-spacing:-.01562em}.mdc-typography--headline1.sc-limel-select, .mdc-typography--headline2.sc-limel-select{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:300;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline2.sc-limel-select{font-size:6rem;line-height:6rem;letter-spacing:-.00833em}.mdc-typography--headline3.sc-limel-select{font-size:4.8rem;line-height:5rem;letter-spacing:normal}.mdc-typography--headline3.sc-limel-select, .mdc-typography--headline4.sc-limel-select{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:400;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline4.sc-limel-select{font-size:3.4rem;line-height:4rem;letter-spacing:.00735em}.mdc-typography--headline5.sc-limel-select{font-size:2.4rem;font-weight:400;letter-spacing:normal}.mdc-typography--headline5.sc-limel-select, .mdc-typography--headline6.sc-limel-select{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:3.2rem;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline6.sc-limel-select{font-size:2rem;font-weight:500;letter-spacing:.0125em}.mdc-typography--subtitle1.sc-limel-select{font-size:1.6rem;line-height:2.8rem;font-weight:400;letter-spacing:.00937em}.mdc-typography--subtitle1.sc-limel-select, .mdc-typography--subtitle2.sc-limel-select{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle2.sc-limel-select{font-size:1.4rem;line-height:2.2rem;font-weight:500;letter-spacing:.00714em}.mdc-typography--body1.sc-limel-select{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.6rem;line-height:2.4rem;font-weight:400;letter-spacing:.03125em;text-decoration:inherit;text-transform:inherit}.mdc-typography--body2.sc-limel-select{font-size:1.4rem;letter-spacing:.01786em}.mdc-typography--body2.sc-limel-select, .mdc-typography--caption.sc-limel-select{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:2rem;font-weight:400;text-decoration:inherit;text-transform:inherit}.mdc-typography--caption.sc-limel-select{font-size:1.2rem;letter-spacing:.03333em}.mdc-typography--button.sc-limel-select{font-size:1.4rem;line-height:3.6rem;letter-spacing:.08929em;text-transform:none}.mdc-typography--button.sc-limel-select, .mdc-typography--overline.sc-limel-select{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:500;text-decoration:none}.mdc-typography--overline.sc-limel-select{font-size:1.2rem;line-height:3.2rem;letter-spacing:.16667em;text-transform:uppercase}\@-webkit-keyframes mdc-select-float-native-control{0%{-webkit-transform:translateY(.8rem);transform:translateY(.8rem);opacity:0}to{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}\@keyframes mdc-select-float-native-control{0%{-webkit-transform:translateY(.8rem);transform:translateY(.8rem);opacity:0}to{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}.mdc-line-ripple.sc-limel-select{position:absolute;bottom:0;left:0;width:100%;height:.2rem;-webkit-transform:scaleX(0);transform:scaleX(0);-webkit-transition:opacity .18s cubic-bezier(.4,0,.2,1),-webkit-transform .18s cubic-bezier(.4,0,.2,1);transition:opacity .18s cubic-bezier(.4,0,.2,1),-webkit-transform .18s cubic-bezier(.4,0,.2,1);transition:transform .18s cubic-bezier(.4,0,.2,1),opacity .18s cubic-bezier(.4,0,.2,1);transition:transform .18s cubic-bezier(.4,0,.2,1),opacity .18s cubic-bezier(.4,0,.2,1),-webkit-transform .18s cubic-bezier(.4,0,.2,1);opacity:0;z-index:2}.mdc-line-ripple--active.sc-limel-select{-webkit-transform:scaleX(1);transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating.sc-limel-select{opacity:0}.mdc-notched-outline.sc-limel-select, .mdc-notched-outline__idle.sc-limel-select{position:absolute;top:0;left:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%}.mdc-notched-outline.sc-limel-select{-webkit-transition:opacity .15s cubic-bezier(.4,0,.2,1);transition:opacity .15s cubic-bezier(.4,0,.2,1);opacity:0;text-align:left;overflow:hidden}.mdc-notched-outline[dir=rtl].sc-limel-select, [dir=rtl].sc-limel-select   .mdc-notched-outline.sc-limel-select{text-align:right}.mdc-notched-outline.sc-limel-select   svg.sc-limel-select{position:absolute;width:100%;height:100%}.mdc-notched-outline__idle.sc-limel-select{-webkit-transition:opacity .15s cubic-bezier(.4,0,.2,1),border-color .15s cubic-bezier(.4,0,.2,1);transition:opacity .15s cubic-bezier(.4,0,.2,1),border-color .15s cubic-bezier(.4,0,.2,1);border:.1rem solid;opacity:1}.mdc-notched-outline__path.sc-limel-select{stroke-width:.1rem;-webkit-transition:stroke .15s cubic-bezier(.4,0,.2,1),stroke-width .15s cubic-bezier(.4,0,.2,1);transition:stroke .15s cubic-bezier(.4,0,.2,1),stroke-width .15s cubic-bezier(.4,0,.2,1);fill:transparent}.mdc-notched-outline--notched.sc-limel-select{opacity:1}.mdc-notched-outline--notched.sc-limel-select ~ .mdc-notched-outline__idle.sc-limel-select{opacity:0}.mdc-floating-label.sc-limel-select{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.6rem;line-height:2.8rem;font-weight:400;letter-spacing:.00937em;text-decoration:inherit;text-transform:inherit;position:absolute;bottom:.8rem;left:0;-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:color .15s cubic-bezier(.4,0,.2,1),-webkit-transform .15s cubic-bezier(.4,0,.2,1);transition:color .15s cubic-bezier(.4,0,.2,1),-webkit-transform .15s cubic-bezier(.4,0,.2,1);transition:transform .15s cubic-bezier(.4,0,.2,1),color .15s cubic-bezier(.4,0,.2,1);transition:transform .15s cubic-bezier(.4,0,.2,1),color .15s cubic-bezier(.4,0,.2,1),-webkit-transform .15s cubic-bezier(.4,0,.2,1);line-height:1.84rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}.mdc-floating-label[dir=rtl].sc-limel-select, [dir=rtl].sc-limel-select   .mdc-floating-label.sc-limel-select{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above.sc-limel-select{cursor:auto;-webkit-transform:translateY(-100%) scale(.75);transform:translateY(-100%) scale(.75)}.mdc-floating-label--shake.sc-limel-select{-webkit-animation:mdc-floating-label-shake-float-above-standard .25s 1;animation:mdc-floating-label-shake-float-above-standard .25s 1}\@-webkit-keyframes mdc-floating-label-shake-float-above-standard{0%{-webkit-transform:translateX(calc(0 - 0%)) translateY(-100%) scale(.75);transform:translateX(calc(0 - 0%)) translateY(-100%) scale(.75)}33%{-webkit-animation-timing-function:cubic-bezier(.5,0,.70173,.49582);animation-timing-function:cubic-bezier(.5,0,.70173,.49582);-webkit-transform:translateX(calc(4% - 0%)) translateY(-100%) scale(.75);transform:translateX(calc(4% - 0%)) translateY(-100%) scale(.75)}66%{-webkit-animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);-webkit-transform:translateX(calc(-4% - 0%)) translateY(-100%) scale(.75);transform:translateX(calc(-4% - 0%)) translateY(-100%) scale(.75)}to{-webkit-transform:translateX(calc(0 - 0%)) translateY(-100%) scale(.75);transform:translateX(calc(0 - 0%)) translateY(-100%) scale(.75)}}\@keyframes mdc-floating-label-shake-float-above-standard{0%{-webkit-transform:translateX(calc(0 - 0%)) translateY(-100%) scale(.75);transform:translateX(calc(0 - 0%)) translateY(-100%) scale(.75)}33%{-webkit-animation-timing-function:cubic-bezier(.5,0,.70173,.49582);animation-timing-function:cubic-bezier(.5,0,.70173,.49582);-webkit-transform:translateX(calc(4% - 0%)) translateY(-100%) scale(.75);transform:translateX(calc(4% - 0%)) translateY(-100%) scale(.75)}66%{-webkit-animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);-webkit-transform:translateX(calc(-4% - 0%)) translateY(-100%) scale(.75);transform:translateX(calc(-4% - 0%)) translateY(-100%) scale(.75)}to{-webkit-transform:translateX(calc(0 - 0%)) translateY(-100%) scale(.75);transform:translateX(calc(0 - 0%)) translateY(-100%) scale(.75)}}\@-webkit-keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}\@keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}\@-webkit-keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}\@keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}\@-webkit-keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}\@keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug.sc-limel-select{--mdc-ripple-surface-test-edge-var:.1rem solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug.sc-limel-select:before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-select.sc-limel-select{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;background-image:url(\"data:image/svg+xml,%3Csvg%20width%3D%221.0rem%22%20height%3D%22.5rem%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%23000%22%20fill-rule%3D%22evenodd%22%20opacity%3D%220.54%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E\");display:-ms-inline-flexbox;display:inline-flex;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;height:5.6rem;background-repeat:no-repeat;background-position:right 1rem center;overflow:hidden;will-change:opacity,transform,color}.mdc-select.sc-limel-select:not(.mdc-select--disabled){background-color:#f5f5f5}.mdc-select.sc-limel-select:after, .mdc-select.sc-limel-select:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-select.sc-limel-select:before{-webkit-transition:opacity 15ms linear,background-color 15ms linear;transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-select.mdc-ripple-upgraded.sc-limel-select:before{-webkit-transform:scale(var(--mdc-ripple-fg-scale,1));transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-select.mdc-ripple-upgraded.sc-limel-select:after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-select.mdc-ripple-upgraded--unbounded.sc-limel-select:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-select.mdc-ripple-upgraded--foreground-activation.sc-limel-select:after{-webkit-animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards;animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select.mdc-ripple-upgraded--foreground-deactivation.sc-limel-select:after{-webkit-animation:mdc-ripple-fg-opacity-out .15s;animation:mdc-ripple-fg-opacity-out .15s;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-select.sc-limel-select:after, .mdc-select.sc-limel-select:before{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-select.mdc-ripple-upgraded.sc-limel-select:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-select.sc-limel-select:after, .mdc-select.sc-limel-select:before{background-color:rgba(0,0,0,.87)}.mdc-select.sc-limel-select:hover:before{opacity:.04}.mdc-select.mdc-ripple-upgraded--background-focused.sc-limel-select:before, .mdc-select.sc-limel-select:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.mdc-select.sc-limel-select:not(.mdc-select--disabled)   .mdc-select__native-control.sc-limel-select{color:rgba(0,0,0,.87)}.mdc-select.sc-limel-select:not(.mdc-select--disabled)   .mdc-floating-label.sc-limel-select{color:rgba(0,0,0,.6)}.mdc-select.sc-limel-select:not(.mdc-select--disabled)   .mdc-select__native-control.sc-limel-select{border-bottom-color:rgba(0,0,0,.42)}.mdc-select.sc-limel-select, .mdc-select__native-control.sc-limel-select{border-radius:.4rem .4rem 0 0}.mdc-select.sc-limel-select:not(.mdc-select--disabled)   .mdc-select__native-control.sc-limel-select:focus ~ .mdc-line-ripple.sc-limel-select{background-color:#26a69a;background-color:var(--mdc-theme-primary,#26a69a)}.mdc-select.sc-limel-select:not(.mdc-select--disabled)   .mdc-select__native-control.sc-limel-select:focus ~ .mdc-floating-label.sc-limel-select{color:rgba(38,166,154,.87)}.mdc-select.sc-limel-select:not(.mdc-select--disabled)   .mdc-select__native-control.sc-limel-select:hover{border-bottom-color:rgba(0,0,0,.87)}.mdc-select.sc-limel-select   .mdc-floating-label--float-above.sc-limel-select{-webkit-transform:translateY(-40%) scale(.75);transform:translateY(-40%) scale(.75)}.mdc-select.sc-limel-select   .mdc-floating-label.sc-limel-select{left:1.6rem;right:auto;bottom:1.2rem;line-height:2.8rem;pointer-events:none}.mdc-select.sc-limel-select   .mdc-floating-label[dir=rtl].sc-limel-select, [dir=rtl].sc-limel-select   .mdc-select.sc-limel-select   .mdc-floating-label.sc-limel-select{left:auto;right:1.6rem}.mdc-select[dir=rtl].sc-limel-select, [dir=rtl].sc-limel-select   .mdc-select.sc-limel-select{background-position:left 1rem center}.mdc-select__native-control.sc-limel-select{padding-left:1.6rem;padding-right:2.6rem;font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.6rem;line-height:2.8rem;font-weight:400;letter-spacing:.00937em;text-decoration:inherit;text-transform:inherit;width:100%;height:5.6rem;padding-top:2rem;padding-bottom:.4rem;border:none;border-bottom:.1rem solid;outline:none;background-color:transparent;color:inherit;white-space:nowrap;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.mdc-select__native-control[dir=rtl].sc-limel-select, [dir=rtl].sc-limel-select   .mdc-select__native-control.sc-limel-select{padding-left:2.6rem;padding-right:1.6rem}.mdc-select__native-control.sc-limel-select::-ms-expand{display:none}.mdc-select__native-control.sc-limel-select::-ms-value{background-color:transparent;color:inherit}\@-moz-document url-prefix(\"\"){.mdc-select__native-control{text-indent:-.2rem}}.mdc-select__native-control.sc-limel-select > option.sc-limel-select{background-color:#fff;background-color:var(--mdc-theme-surface,#fff);color:inherit}.mdc-select.sc-limel-select   .mdc-select__native-control.sc-limel-select:focus ~ .mdc-line-ripple.sc-limel-select:after{-webkit-transform:scaleY(2);transform:scaleY(2);opacity:1}.mdc-select--outlined.sc-limel-select{border:none;overflow:visible}.mdc-select--outlined.sc-limel-select:not(.mdc-select--disabled)   .mdc-notched-outline__idle.sc-limel-select{border-color:rgba(0,0,0,.24)}.mdc-select--outlined.sc-limel-select:not(.mdc-select--disabled)   .mdc-notched-outline__path.sc-limel-select{stroke:rgba(0,0,0,.24)}.mdc-select--outlined.sc-limel-select:not(.mdc-select--disabled):not(.mdc-select__native-control:focus)   .mdc-select__native-control.sc-limel-select:hover ~ .mdc-notched-outline__idle.sc-limel-select{border-color:rgba(0,0,0,.87)}.mdc-select--outlined.sc-limel-select:not(.mdc-select--disabled):not(.mdc-select__native-control:focus)   .mdc-select__native-control.sc-limel-select:hover ~ .mdc-notched-outline.sc-limel-select   .mdc-notched-outline__path.sc-limel-select{stroke:rgba(0,0,0,.87)}.mdc-select--outlined.sc-limel-select:not(.mdc-select--disabled)   .mdc-select__native-control.sc-limel-select:focus ~ .mdc-notched-outline.sc-limel-select   .mdc-notched-outline__path.sc-limel-select{stroke-width:.2rem;stroke:#26a69a;stroke:var(--mdc-theme-primary,#26a69a)}.mdc-select--outlined.sc-limel-select   .mdc-floating-label--float-above.sc-limel-select{-webkit-transform:translateY(-130%) scale(.75);transform:translateY(-130%) scale(.75)}.mdc-select--outlined.sc-limel-select   .mdc-floating-label--shake.sc-limel-select{-webkit-animation:mdc-floating-label-shake-float-above-text-field-outlined .25s 1;animation:mdc-floating-label-shake-float-above-text-field-outlined .25s 1}.mdc-select--outlined.sc-limel-select   .mdc-notched-outline.sc-limel-select, .mdc-select--outlined.sc-limel-select   .mdc-notched-outline__idle.sc-limel-select, .mdc-select--outlined__native-control.sc-limel-select{border-radius:.4rem}.mdc-select--outlined.sc-limel-select:after, .mdc-select--outlined.sc-limel-select:before, .mdc-select--outlined.sc-limel-select:not(.mdc-select--disabled){background-color:transparent}.mdc-select--outlined.sc-limel-select   .mdc-select__native-control.sc-limel-select{padding-left:1.6rem;padding-right:2.6rem;display:-ms-flexbox;display:flex;padding-top:1.2rem;padding-bottom:1.2rem;border:none;background-color:transparent;z-index:1}.mdc-select--outlined.sc-limel-select   .mdc-select__native-control[dir=rtl].sc-limel-select, [dir=rtl].sc-limel-select   .mdc-select--outlined.sc-limel-select   .mdc-select__native-control.sc-limel-select{padding-left:2.6rem;padding-right:1.6rem}.mdc-select--outlined.sc-limel-select   .mdc-floating-label.sc-limel-select{bottom:2rem;line-height:1.84rem;pointer-events:auto}.mdc-select--disabled.sc-limel-select{background-image:url(\"data:image/svg+xml,%3Csvg%20width%3D%221.0rem%22%20height%3D%22.5rem%22%20viewBox%3D%227%2010%2010%205%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%20%20%3Cpolygon%20id%3D%22Shape%22%20stroke%3D%22none%22%20fill%3D%22%23000%22%20fill-rule%3D%22evenodd%22%20opacity%3D%220.37%22%20points%3D%227%2010%2012%2015%2017%2010%22%3E%3C%2Fpolygon%3E%0A%3C%2Fsvg%3E\");background-color:#fafafa;cursor:default;pointer-events:none}.mdc-select--disabled.sc-limel-select   .mdc-floating-label.sc-limel-select{color:rgba(0,0,0,.37)}.mdc-select--disabled.sc-limel-select   .mdc-line-ripple.sc-limel-select{display:none}.mdc-select--disabled.sc-limel-select   .mdc-select__native-control.sc-limel-select{border-bottom-style:dotted;color:rgba(0,0,0,.37)}.mdc-select--disabled.mdc-select--outlined.sc-limel-select{background-color:transparent}.mdc-select--disabled.mdc-select--outlined.sc-limel-select   .mdc-select__native-control.sc-limel-select{border-bottom-style:none}.mdc-select--disabled.mdc-select--outlined.sc-limel-select   .mdc-notched-outline__idle.sc-limel-select{border-color:rgba(0,0,0,.16)}.mdc-select--disabled.mdc-select--outlined.sc-limel-select   .mdc-notched-outline__path.sc-limel-select{stroke:rgba(0,0,0,.16)}.sc-limel-select-h{display:block}[hidden].sc-limel-select-h{display:none}.mdc-select.sc-limel-select{width:100%;background-size:1.2rem 1.2rem;background-position:right 1.6rem center}.mdc-select__native-control.sc-limel-select{padding-top:2.5rem;padding-bottom:.2rem}.mdc-select.sc-limel-select:not(.mdc-select--disabled){background-color:var(--background-color,#fff)}"}}export{_ as LimelSelect};