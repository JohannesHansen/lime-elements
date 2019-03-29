const t=window.LimeElements.h;import{a as e,b as s}from"./chunk-d211df41.js";import{b as a,a as i,c as n}from"./chunk-59aee0fb.js";import{a as d}from"./chunk-f3775a45.js";const r={CHECKED:"mdc-switch--checked",DISABLED:"mdc-switch--disabled"},c={NATIVE_CONTROL_SELECTOR:".mdc-switch__native-control",RIPPLE_SURFACE_SELECTOR:".mdc-switch__thumb-underlay"};class l extends e{static get strings(){return c}static get cssClasses(){return r}static get defaultAdapter(){return{addClass:()=>{},removeClass:()=>{},setNativeControlChecked:()=>{},setNativeControlDisabled:()=>{}}}constructor(t){super(Object.assign(l.defaultAdapter,t))}setChecked(t){this.adapter_.setNativeControlChecked(t),this.updateCheckedStyling_(t)}setDisabled(t){this.adapter_.setNativeControlDisabled(t),t?this.adapter_.addClass(r.DISABLED):this.adapter_.removeClass(r.DISABLED)}handleChange(t){this.updateCheckedStyling_(t.target.checked)}updateCheckedStyling_(t){t?this.adapter_.addClass(r.CHECKED):this.adapter_.removeClass(r.CHECKED)}}class o extends s{static attachTo(t){return new o(t)}constructor(...t){super(...t),this.ripple_=this.initRipple_()}destroy(){super.destroy(),this.ripple_.destroy(),this.nativeControl_.removeEventListener("change",this.changeHandler_)}initialSyncWithDOM(){this.changeHandler_=this.foundation_.handleChange.bind(this.foundation_),this.nativeControl_.addEventListener("change",this.changeHandler_),this.checked=this.checked}get nativeControl_(){const{NATIVE_CONTROL_SELECTOR:t}=l.strings;return this.root_.querySelector(t)}initRipple_(){const{RIPPLE_SURFACE_SELECTOR:t}=l.strings,e=this.root_.querySelector(t),s=a(HTMLElement.prototype),d=Object.assign(i.createAdapter(this),{isUnbounded:()=>!0,isSurfaceActive:()=>this.nativeControl_[s](":active"),addClass:t=>e.classList.add(t),removeClass:t=>e.classList.remove(t),registerInteractionHandler:(t,e)=>this.nativeControl_.addEventListener(t,e),deregisterInteractionHandler:(t,e)=>this.nativeControl_.removeEventListener(t,e),updateCssVariable:(t,s)=>e.style.setProperty(t,s),computeBoundingRect:()=>e.getBoundingClientRect()}),r=new n(d);return new i(this.root_,r)}getDefaultFoundation(){return new l({addClass:t=>this.root_.classList.add(t),removeClass:t=>this.root_.classList.remove(t),setNativeControlChecked:t=>this.nativeControl_.checked=t,setNativeControlDisabled:t=>this.nativeControl_.disabled=t})}get ripple(){return this.ripple_}get checked(){return this.nativeControl_.checked}set checked(t){this.foundation_.setChecked(t)}get disabled(){return this.nativeControl_.disabled}set disabled(t){this.foundation_.setDisabled(t)}}class h{constructor(){this.disabled=!1,this.value=!1,this.fieldId=d(),this.onChange=(t=>{t.stopPropagation(),this.change.emit(t.target.checked)})}componentDidLoad(){this.mdcSwitch=new o(this.host.shadowRoot.querySelector(".mdc-switch"))}componentDidUnload(){this.mdcSwitch.destroy()}render(){return[t("div",{class:`\n                    mdc-switch\n                    ${this.disabled?"mdc-switch--disabled":""}\n                `},t("div",{class:"mdc-switch__track"}),t("div",{class:"mdc-switch__thumb-underlay"},t("div",{class:"mdc-switch__thumb"},t("input",{type:"checkbox",class:"mdc-switch__native-control",id:this.fieldId,role:"switch",onChange:this.onChange,disabled:this.disabled,checked:this.value})))),t("label",{class:`${this.disabled?"disabled":""}`,htmlFor:this.fieldId},t("span",{class:"label"},this.label))]}valueWatcher(t,e){t!==e&&(this.mdcSwitch.checked=t)}static get is(){return"limel-switch"}static get encapsulation(){return"shadow"}static get properties(){return{disabled:{type:Boolean,attr:"disabled",reflectToAttr:!0},fieldId:{state:!0},host:{elementRef:!0},label:{type:String,attr:"label",reflectToAttr:!0},mdcSwitch:{state:!0},value:{type:Boolean,attr:"value",reflectToAttr:!0,watchCallbacks:["valueWatcher"]}}}static get events(){return[{name:"change",method:"change",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return":host{--mdc-theme-primary:var(--lime-primary-color,#26a69a);--mdc-theme-secondary:var(--lime-secondary-color,#575756);--mdc-theme-on-primary:var(--lime-on-primary-color,#fff);--mdc-theme-on-secondary:var(--lime-on-secondary-color,#fff)}:root{--mdc-theme-primary:#26a69a;--mdc-theme-secondary:#575756;--mdc-theme-background:#fff;--mdc-theme-surface:#fff;--mdc-theme-error:#b00020;--mdc-theme-on-primary:#fff;--mdc-theme-on-secondary:#fff;--mdc-theme-on-surface:#000;--mdc-theme-on-error:#fff;--mdc-theme-text-primary-on-background:rgba(0,0,0,0.87);--mdc-theme-text-secondary-on-background:rgba(0,0,0,0.54);--mdc-theme-text-hint-on-background:rgba(0,0,0,0.38);--mdc-theme-text-disabled-on-background:rgba(0,0,0,0.38);--mdc-theme-text-icon-on-background:rgba(0,0,0,0.38);--mdc-theme-text-primary-on-light:rgba(0,0,0,0.87);--mdc-theme-text-secondary-on-light:rgba(0,0,0,0.54);--mdc-theme-text-hint-on-light:rgba(0,0,0,0.38);--mdc-theme-text-disabled-on-light:rgba(0,0,0,0.38);--mdc-theme-text-icon-on-light:rgba(0,0,0,0.38);--mdc-theme-text-primary-on-dark:#fff;--mdc-theme-text-secondary-on-dark:hsla(0,0%,100%,0.7);--mdc-theme-text-hint-on-dark:hsla(0,0%,100%,0.5);--mdc-theme-text-disabled-on-dark:hsla(0,0%,100%,0.5);--mdc-theme-text-icon-on-dark:hsla(0,0%,100%,0.5)}.mdc-theme--primary{color:#26a69a!important;color:var(--mdc-theme-primary,#26a69a)!important}.mdc-theme--secondary{color:#575756!important;color:var(--mdc-theme-secondary,#575756)!important}.mdc-theme--background{background-color:#fff;background-color:var(--mdc-theme-background,#fff)}.mdc-theme--surface{background-color:#fff;background-color:var(--mdc-theme-surface,#fff)}.mdc-theme--error{color:#b00020!important;color:var(--mdc-theme-error,#b00020)!important}.mdc-theme--on-primary{color:#fff!important;color:var(--mdc-theme-on-primary,#fff)!important}.mdc-theme--on-secondary{color:#fff!important;color:var(--mdc-theme-on-secondary,#fff)!important}.mdc-theme--on-surface{color:#000!important;color:var(--mdc-theme-on-surface,#000)!important}.mdc-theme--on-error{color:#fff!important;color:var(--mdc-theme-on-error,#fff)!important}.mdc-theme--text-primary-on-background{color:rgba(0,0,0,.87)!important;color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))!important}.mdc-theme--text-secondary-on-background{color:rgba(0,0,0,.54)!important;color:var(--mdc-theme-text-secondary-on-background,rgba(0,0,0,.54))!important}.mdc-theme--text-hint-on-background{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-hint-on-background,rgba(0,0,0,.38))!important}.mdc-theme--text-disabled-on-background{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-disabled-on-background,rgba(0,0,0,.38))!important}.mdc-theme--text-icon-on-background{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-icon-on-background,rgba(0,0,0,.38))!important}.mdc-theme--text-primary-on-light{color:rgba(0,0,0,.87)!important;color:var(--mdc-theme-text-primary-on-light,rgba(0,0,0,.87))!important}.mdc-theme--text-secondary-on-light{color:rgba(0,0,0,.54)!important;color:var(--mdc-theme-text-secondary-on-light,rgba(0,0,0,.54))!important}.mdc-theme--text-hint-on-light{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-hint-on-light,rgba(0,0,0,.38))!important}.mdc-theme--text-disabled-on-light{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38))!important}.mdc-theme--text-icon-on-light{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-icon-on-light,rgba(0,0,0,.38))!important}.mdc-theme--text-primary-on-dark{color:#fff!important;color:var(--mdc-theme-text-primary-on-dark,#fff)!important}.mdc-theme--text-secondary-on-dark{color:hsla(0,0%,100%,.7)!important;color:var(--mdc-theme-text-secondary-on-dark,hsla(0,0%,100%,.7))!important}.mdc-theme--text-hint-on-dark{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-hint-on-dark,hsla(0,0%,100%,.5))!important}.mdc-theme--text-disabled-on-dark{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-disabled-on-dark,hsla(0,0%,100%,.5))!important}.mdc-theme--text-icon-on-dark{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-icon-on-dark,hsla(0,0%,100%,.5))!important}.mdc-theme--primary-bg{background-color:#26a69a!important;background-color:var(--mdc-theme-primary,#26a69a)!important}.mdc-theme--secondary-bg{background-color:#575756!important;background-color:var(--mdc-theme-secondary,#575756)!important}.mdc-typography{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}.mdc-typography--headline1{letter-spacing:-.01562em}.mdc-typography--headline1,.mdc-typography--headline2{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:.875rem;font-weight:300;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline2{letter-spacing:-.00833em}.mdc-typography--headline3{letter-spacing:normal}.mdc-typography--headline3,.mdc-typography--headline4{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:.875rem;font-weight:400;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline4{letter-spacing:.00735em}.mdc-typography--headline5{font-weight:400;letter-spacing:normal}.mdc-typography--headline5,.mdc-typography--headline6{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:.875rem;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline6{font-weight:500;letter-spacing:.0125em}.mdc-typography--subtitle1{font-size:.875rem;font-weight:400;letter-spacing:.00937em}.mdc-typography--subtitle1,.mdc-typography--subtitle2{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:1.125rem;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle2{font-size:.8125rem;font-weight:500;letter-spacing:.00714em}.mdc-typography--body1{line-height:1.5rem;letter-spacing:.03125em}.mdc-typography--body1,.mdc-typography--body2{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.8125rem;font-weight:400;text-decoration:inherit;text-transform:inherit}.mdc-typography--body2{line-height:1.625rem;letter-spacing:.01786em}.mdc-typography--caption{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.6875rem;line-height:.875rem;font-weight:400;letter-spacing:.03333em;text-decoration:inherit;text-transform:inherit}.mdc-typography--button{font-size:.875rem;line-height:2.25rem;letter-spacing:.08929em;text-transform:none}.mdc-typography--button,.mdc-typography--overline{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:500;text-decoration:none}.mdc-typography--overline{font-size:.6875rem;line-height:.875rem;letter-spacing:.16667em;text-transform:uppercase}\@-webkit-keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}\@keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}\@-webkit-keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}\@keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}\@-webkit-keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}\@keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:0.0625rem solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug:before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-switch{display:inline-block;position:relative;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mdc-switch.mdc-switch--checked .mdc-switch__thumb,.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#575756;background-color:var(--mdc-theme-secondary,#575756);border-color:#575756;border-color:var(--mdc-theme-secondary,#575756)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:#000;border-color:#000}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:#fff;border-color:#fff}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:after,.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:before{background-color:#9e9e9e}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:hover:before{opacity:.08}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused:before,.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.32}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.32}.mdc-switch__native-control{left:0;right:auto;position:absolute;top:0;width:4.25rem;height:3rem;margin:0;opacity:0;cursor:pointer;pointer-events:auto}.mdc-switch__native-control[dir=rtl],[dir=rtl] .mdc-switch__native-control{left:auto;right:0}.mdc-switch__track{-webkit-box-sizing:border-box;box-sizing:border-box;width:2rem;height:.875rem;-webkit-transition:opacity 90ms cubic-bezier(.4,0,.2,1),background-color 90ms cubic-bezier(.4,0,.2,1),border-color 90ms cubic-bezier(.4,0,.2,1);transition:opacity 90ms cubic-bezier(.4,0,.2,1),background-color 90ms cubic-bezier(.4,0,.2,1),border-color 90ms cubic-bezier(.4,0,.2,1);border:.0625rem solid;border-radius:.4375rem;opacity:.38}.mdc-switch__thumb-underlay{left:-1.125rem;right:auto;--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;display:-ms-flexbox;display:flex;position:absolute;top:-1.0625rem;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:3rem;height:3rem;-webkit-transform:translateX(0);transform:translateX(0);-webkit-transition:background-color 90ms cubic-bezier(.4,0,.2,1),border-color 90ms cubic-bezier(.4,0,.2,1),-webkit-transform 90ms cubic-bezier(.4,0,.2,1);transition:background-color 90ms cubic-bezier(.4,0,.2,1),border-color 90ms cubic-bezier(.4,0,.2,1),-webkit-transform 90ms cubic-bezier(.4,0,.2,1);transition:transform 90ms cubic-bezier(.4,0,.2,1),background-color 90ms cubic-bezier(.4,0,.2,1),border-color 90ms cubic-bezier(.4,0,.2,1);transition:transform 90ms cubic-bezier(.4,0,.2,1),background-color 90ms cubic-bezier(.4,0,.2,1),border-color 90ms cubic-bezier(.4,0,.2,1),-webkit-transform 90ms cubic-bezier(.4,0,.2,1)}.mdc-switch__thumb-underlay[dir=rtl],[dir=rtl] .mdc-switch__thumb-underlay{left:auto;right:-1.125rem}.mdc-switch__thumb-underlay:after,.mdc-switch__thumb-underlay:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-switch__thumb-underlay:before{-webkit-transition:opacity 15ms linear,background-color 15ms linear;transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-switch__thumb-underlay.mdc-ripple-upgraded:before{-webkit-transform:scale(var(--mdc-ripple-fg-scale,1));transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-switch__thumb-underlay.mdc-ripple-upgraded:after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--foreground-activation:after{-webkit-animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards;animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--foreground-deactivation:after{-webkit-animation:mdc-ripple-fg-opacity-out .15s;animation:mdc-ripple-fg-opacity-out .15s;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-switch__thumb-underlay:after,.mdc-switch__thumb-underlay:before{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-switch__thumb-underlay.mdc-ripple-upgraded:after,.mdc-switch__thumb-underlay.mdc-ripple-upgraded:before{top:var(--mdc-ripple-top,calc(50% - 50%));left:var(--mdc-ripple-left,calc(50% - 50%));width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-switch__thumb-underlay.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-switch__thumb-underlay:after,.mdc-switch__thumb-underlay:before{background-color:#575756}\@supports not (-ms-ime-align:auto){.mdc-switch__thumb-underlay:after,.mdc-switch__thumb-underlay:before{background-color:var(--mdc-theme-secondary,#575756)}}.mdc-switch__thumb-underlay:hover:before{opacity:.04}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused:before,.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.16}.mdc-switch__thumb-underlay.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.16}.mdc-switch__thumb{-webkit-box-shadow:0 .1875rem .0625rem -.125rem rgba(0,0,0,.2),0 .125rem .125rem 0 rgba(0,0,0,.14),0 .0625rem .3125rem 0 rgba(0,0,0,.12);box-shadow:0 .1875rem .0625rem -.125rem rgba(0,0,0,.2),0 .125rem .125rem 0 rgba(0,0,0,.14),0 .0625rem .3125rem 0 rgba(0,0,0,.12);-webkit-box-sizing:border-box;box-sizing:border-box;width:1.25rem;height:1.25rem;border:.625rem solid;border-radius:50%;pointer-events:none;z-index:1}.mdc-switch--checked .mdc-switch__track{opacity:.54}.mdc-switch--checked .mdc-switch__thumb-underlay{-webkit-transform:translateX(1.25rem);transform:translateX(1.25rem)}.mdc-switch--checked .mdc-switch__native-control,.mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl],[dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay{-webkit-transform:translateX(-1.25rem);transform:translateX(-1.25rem)}.mdc-switch--checked .mdc-switch__native-control[dir=rtl],[dir=rtl] .mdc-switch--checked .mdc-switch__native-control{-webkit-transform:translateX(1.25rem);transform:translateX(1.25rem)}.mdc-switch--disabled{opacity:.38;pointer-events:none}.mdc-switch--disabled .mdc-switch__thumb{border-width:.0625rem}.mdc-switch--disabled .mdc-switch__native-control{cursor:default;pointer-events:none}.mdc-switch{margin-right:.5rem}.mdc-switch.mdc-switch--checked .mdc-switch__thumb,.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#26a69a;background-color:var(--mdc-theme-primary,#26a69a);border-color:#26a69a;border-color:var(--mdc-theme-primary,#26a69a)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb-underlay:after,.mdc-switch.mdc-switch--checked .mdc-switch__thumb-underlay:before{background-color:#26a69a}\@supports not (-ms-ime-align:auto){.mdc-switch.mdc-switch--checked .mdc-switch__thumb-underlay:after,.mdc-switch.mdc-switch--checked .mdc-switch__thumb-underlay:before{background-color:var(--mdc-theme-primary,#26a69a)}}.mdc-switch.mdc-switch--checked .mdc-switch__thumb-underlay:hover:before{opacity:.08}.mdc-switch.mdc-switch--checked .mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused:before,.mdc-switch.mdc-switch--checked .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}.mdc-switch.mdc-switch--checked .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.mdc-switch.mdc-switch--checked .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.32}.mdc-switch.mdc-switch--checked .mdc-switch__thumb-underlay.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.32}label{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.8125rem;line-height:1.625rem;font-weight:400;letter-spacing:.01786em;text-decoration:inherit;text-transform:inherit;cursor:pointer}label.disabled{cursor:default}"}}export{h as LimelSwitch};