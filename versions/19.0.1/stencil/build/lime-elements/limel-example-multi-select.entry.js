const e=window.LimeElements.h;import"./chunk-d211df41.js";import"./chunk-9b852a20.js";import{a as t}from"./chunk-f12b16ef.js";import"./chunk-f931047f.js";import{a as l,b as i}from"./chunk-deed931b.js";class s{constructor(){this.value=[{text:"Han Solo",value:"han"}],this.disabled=!1,this.options=[{text:"Luke Skywalker",value:"luke"},{text:"Han Solo",value:"han"},{text:"Leia Organo",value:"leia"}],this.onChange=this.onChange.bind(this),this.toggleEnabled=this.toggleEnabled.bind(this)}render(){return[e("limel-multi-select",{label:"Favorite heros",value:this.value,options:this.options,disabled:this.disabled,onChange:this.onChange}),e("p",null,e("limel-flex-container",{justify:"end"},e("limel-button",{onClick:this.toggleEnabled,label:this.disabled?"Enable":"Disable"}))),e("p",null,"Value: ",JSON.stringify(this.value))]}onChange(e){this.value=e.detail}toggleEnabled(){this.disabled=!this.disabled}static get is(){return"limel-example-multi-select"}static get encapsulation(){return"shadow"}static get properties(){return{disabled:{state:!0},value:{state:!0}}}static get style(){return"p{font-size:small}"}}class a{constructor(){this.disabled=!1,this.value=[],this.options=[],this.fieldId=t(),this.mdcCheckboxes=[],this.onChange=(e=>{e&&e.stopPropagation();const t=this.options.filter(e=>{if(this.mdcCheckboxes.some(t=>t.checked&&t.value===e.value))return e});this.change.emit(t)})}componentDidLoad(){Array.from(this.limelMultiSelect.shadowRoot.querySelectorAll(".multi-select .mdc-form-field")).forEach(e=>{const t=new l(e),s=new i(e.firstChild);t.input=s,this.mdcCheckboxes.push(s)}),this.onChange()}render(){return e("div",{class:"multi-select"},e("label",{htmlFor:this.fieldId,class:"multi-select-label mdc-floating-label mdc-floating-label--float-above"},this.label),e("div",{id:this.fieldId},this.options.map((e,t)=>this.renderCheckbox(t,e))))}renderCheckbox(t,l){return e("div",{class:"mdc-form-field "},e("div",{class:`\n                        mdc-checkbox\n                        ${this.disabled?"mdc-checkbox--disabled":""}\n                    `},e("input",{type:"checkbox",class:"mdc-checkbox__native-control",id:this.fieldId+"_"+t.toString(),value:l.value,checked:!!this.isOptionChecked(l),disabled:this.disabled,onChange:this.onChange}),e("div",{class:"mdc-checkbox__background"},e("svg",{class:"mdc-checkbox__checkmark",viewBox:"0 0 24 24"},e("path",{class:"mdc-checkbox__checkmark-path",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"})),e("div",{class:"mdc-checkbox__mixedmark"}))),e("label",{htmlFor:this.fieldId+"_"+t.toString()},l.text))}isOptionChecked(e){return this.value.find(t=>t.value===e.value)}static get is(){return"limel-multi-select"}static get encapsulation(){return"shadow"}static get properties(){return{disabled:{type:Boolean,attr:"disabled",reflectToAttr:!0},fieldId:{state:!0},label:{type:String,attr:"label",reflectToAttr:!0},limelMultiSelect:{elementRef:!0},mdcCheckboxes:{state:!0},options:{type:"Any",attr:"options"},value:{type:"Any",attr:"value"}}}static get events(){return[{name:"change",method:"change",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return":host{--mdc-theme-primary:var(--lime-primary-color,#26a69a);--mdc-theme-secondary:var(--lime-secondary-color,#575756);--mdc-theme-on-primary:var(--lime-on-primary-color,#fff);--mdc-theme-on-secondary:var(--lime-on-secondary-color,#fff)}:root{--mdc-theme-primary:#26a69a;--mdc-theme-secondary:#575756;--mdc-theme-background:#fff;--mdc-theme-surface:#fff;--mdc-theme-error:#b00020;--mdc-theme-on-primary:#fff;--mdc-theme-on-secondary:#fff;--mdc-theme-on-surface:#000;--mdc-theme-on-error:#fff;--mdc-theme-text-primary-on-background:rgba(0,0,0,0.87);--mdc-theme-text-secondary-on-background:rgba(0,0,0,0.54);--mdc-theme-text-hint-on-background:rgba(0,0,0,0.38);--mdc-theme-text-disabled-on-background:rgba(0,0,0,0.38);--mdc-theme-text-icon-on-background:rgba(0,0,0,0.38);--mdc-theme-text-primary-on-light:rgba(0,0,0,0.87);--mdc-theme-text-secondary-on-light:rgba(0,0,0,0.54);--mdc-theme-text-hint-on-light:rgba(0,0,0,0.38);--mdc-theme-text-disabled-on-light:rgba(0,0,0,0.38);--mdc-theme-text-icon-on-light:rgba(0,0,0,0.38);--mdc-theme-text-primary-on-dark:#fff;--mdc-theme-text-secondary-on-dark:hsla(0,0%,100%,0.7);--mdc-theme-text-hint-on-dark:hsla(0,0%,100%,0.5);--mdc-theme-text-disabled-on-dark:hsla(0,0%,100%,0.5);--mdc-theme-text-icon-on-dark:hsla(0,0%,100%,0.5)}.mdc-theme--primary{color:#26a69a!important;color:var(--mdc-theme-primary,#26a69a)!important}.mdc-theme--secondary{color:#575756!important;color:var(--mdc-theme-secondary,#575756)!important}.mdc-theme--background{background-color:#fff;background-color:var(--mdc-theme-background,#fff)}.mdc-theme--surface{background-color:#fff;background-color:var(--mdc-theme-surface,#fff)}.mdc-theme--error{color:#b00020!important;color:var(--mdc-theme-error,#b00020)!important}.mdc-theme--on-primary{color:#fff!important;color:var(--mdc-theme-on-primary,#fff)!important}.mdc-theme--on-secondary{color:#fff!important;color:var(--mdc-theme-on-secondary,#fff)!important}.mdc-theme--on-surface{color:#000!important;color:var(--mdc-theme-on-surface,#000)!important}.mdc-theme--on-error{color:#fff!important;color:var(--mdc-theme-on-error,#fff)!important}.mdc-theme--text-primary-on-background{color:rgba(0,0,0,.87)!important;color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))!important}.mdc-theme--text-secondary-on-background{color:rgba(0,0,0,.54)!important;color:var(--mdc-theme-text-secondary-on-background,rgba(0,0,0,.54))!important}.mdc-theme--text-hint-on-background{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-hint-on-background,rgba(0,0,0,.38))!important}.mdc-theme--text-disabled-on-background{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-disabled-on-background,rgba(0,0,0,.38))!important}.mdc-theme--text-icon-on-background{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-icon-on-background,rgba(0,0,0,.38))!important}.mdc-theme--text-primary-on-light{color:rgba(0,0,0,.87)!important;color:var(--mdc-theme-text-primary-on-light,rgba(0,0,0,.87))!important}.mdc-theme--text-secondary-on-light{color:rgba(0,0,0,.54)!important;color:var(--mdc-theme-text-secondary-on-light,rgba(0,0,0,.54))!important}.mdc-theme--text-hint-on-light{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-hint-on-light,rgba(0,0,0,.38))!important}.mdc-theme--text-disabled-on-light{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38))!important}.mdc-theme--text-icon-on-light{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-icon-on-light,rgba(0,0,0,.38))!important}.mdc-theme--text-primary-on-dark{color:#fff!important;color:var(--mdc-theme-text-primary-on-dark,#fff)!important}.mdc-theme--text-secondary-on-dark{color:hsla(0,0%,100%,.7)!important;color:var(--mdc-theme-text-secondary-on-dark,hsla(0,0%,100%,.7))!important}.mdc-theme--text-hint-on-dark{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-hint-on-dark,hsla(0,0%,100%,.5))!important}.mdc-theme--text-disabled-on-dark{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-disabled-on-dark,hsla(0,0%,100%,.5))!important}.mdc-theme--text-icon-on-dark{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-icon-on-dark,hsla(0,0%,100%,.5))!important}.mdc-theme--primary-bg{background-color:#26a69a!important;background-color:var(--mdc-theme-primary,#26a69a)!important}.mdc-theme--secondary-bg{background-color:#575756!important;background-color:var(--mdc-theme-secondary,#575756)!important}.mdc-typography{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}.mdc-typography--headline1{letter-spacing:-.01562em}.mdc-typography--headline1,.mdc-typography--headline2{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:.875rem;font-weight:300;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline2{letter-spacing:-.00833em}.mdc-typography--headline3{letter-spacing:normal}.mdc-typography--headline3,.mdc-typography--headline4{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:.875rem;font-weight:400;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline4{letter-spacing:.00735em}.mdc-typography--headline5{font-weight:400;letter-spacing:normal}.mdc-typography--headline5,.mdc-typography--headline6{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:.875rem;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline6{font-weight:500;letter-spacing:.0125em}.mdc-typography--subtitle1{font-size:.875rem;font-weight:400;letter-spacing:.00937em}.mdc-typography--subtitle1,.mdc-typography--subtitle2{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:1.125rem;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle2{font-size:.8125rem;font-weight:500;letter-spacing:.00714em}.mdc-typography--body1{line-height:1.5rem;letter-spacing:.03125em}.mdc-typography--body1,.mdc-typography--body2{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.8125rem;font-weight:400;text-decoration:inherit;text-transform:inherit}.mdc-typography--body2{line-height:1.625rem;letter-spacing:.01786em}.mdc-typography--caption{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.6875rem;line-height:.875rem;font-weight:400;letter-spacing:.03333em;text-decoration:inherit;text-transform:inherit}.mdc-typography--button{font-size:.875rem;line-height:2.25rem;letter-spacing:.08929em;text-transform:none}.mdc-typography--button,.mdc-typography--overline{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:500;text-decoration:none}.mdc-typography--overline{font-size:.6875rem;line-height:.875rem;letter-spacing:.16667em;text-transform:uppercase}.mdc-form-field{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.8125rem;line-height:1.625rem;font-weight:400;letter-spacing:.01786em;text-decoration:inherit;text-transform:inherit;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87));display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;vertical-align:middle}.mdc-form-field>label{-ms-flex-order:0;order:0;margin-right:auto;padding-left:.25rem}.mdc-form-field--align-end>label,.mdc-form-field[dir=rtl]>label,[dir=rtl] .mdc-form-field>label{margin-left:auto;padding-right:.25rem}.mdc-form-field--align-end>label{-ms-flex-order:-1;order:-1}.mdc-form-field--align-end[dir=rtl]>label,[dir=rtl] .mdc-form-field--align-end>label{margin-right:auto;padding-left:.25rem}\@-webkit-keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}\@keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}\@-webkit-keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}\@keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}\@-webkit-keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}\@keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:0.0625rem solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug:before{border:var(--mdc-ripple-surface-test-edge-var)}\@-webkit-keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.78334}50%{-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}to{stroke-dashoffset:0}}\@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.78334}50%{-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}to{stroke-dashoffset:0}}\@-webkit-keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{-webkit-transform:scaleX(0);transform:scaleX(0)}68.2%{-webkit-animation-timing-function:cubic-bezier(0,0,0,1);animation-timing-function:cubic-bezier(0,0,0,1)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}\@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{-webkit-transform:scaleX(0);transform:scaleX(0)}68.2%{-webkit-animation-timing-function:cubic-bezier(0,0,0,1);animation-timing-function:cubic-bezier(0,0,0,1)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}\@-webkit-keyframes mdc-checkbox-checked-unchecked-checkmark-path{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,1,1);animation-timing-function:cubic-bezier(.4,0,1,1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.78334}}\@keyframes mdc-checkbox-checked-unchecked-checkmark-path{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,1,1);animation-timing-function:cubic-bezier(.4,0,1,1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.78334}}\@-webkit-keyframes mdc-checkbox-checked-indeterminate-checkmark{0%{-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1);-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}to{-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}}\@keyframes mdc-checkbox-checked-indeterminate-checkmark{0%{-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1);-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}to{-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}}\@-webkit-keyframes mdc-checkbox-indeterminate-checked-checkmark{0%{-webkit-animation-timing-function:cubic-bezier(.14,0,0,1);animation-timing-function:cubic-bezier(.14,0,0,1);-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}to{-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:1}}\@keyframes mdc-checkbox-indeterminate-checked-checkmark{0%{-webkit-animation-timing-function:cubic-bezier(.14,0,0,1);animation-timing-function:cubic-bezier(.14,0,0,1);-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}to{-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:1}}\@-webkit-keyframes mdc-checkbox-checked-indeterminate-mixedmark{0%{-webkit-animation-timing-function:mdc-animation-deceleration-curve-timing-function;animation-timing-function:mdc-animation-deceleration-curve-timing-function;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}to{-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}}\@keyframes mdc-checkbox-checked-indeterminate-mixedmark{0%{-webkit-animation-timing-function:mdc-animation-deceleration-curve-timing-function;animation-timing-function:mdc-animation-deceleration-curve-timing-function;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}to{-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}}\@-webkit-keyframes mdc-checkbox-indeterminate-checked-mixedmark{0%{-webkit-animation-timing-function:cubic-bezier(.14,0,0,1);animation-timing-function:cubic-bezier(.14,0,0,1);-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}to{-webkit-transform:rotate(315deg);transform:rotate(315deg);opacity:0}}\@keyframes mdc-checkbox-indeterminate-checked-mixedmark{0%{-webkit-animation-timing-function:cubic-bezier(.14,0,0,1);animation-timing-function:cubic-bezier(.14,0,0,1);-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}to{-webkit-transform:rotate(315deg);transform:rotate(315deg);opacity:0}}\@-webkit-keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-transform:scaleX(1);transform:scaleX(1);opacity:1}32.8%,to{-webkit-transform:scaleX(0);transform:scaleX(0);opacity:0}}\@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-transform:scaleX(1);transform:scaleX(1);opacity:1}32.8%,to{-webkit-transform:scaleX(0);transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;-ms-flex:0 0 1.125rem;flex:0 0 1.125rem;-webkit-box-sizing:content-box;box-sizing:content-box;width:1.125rem;height:1.125rem;padding:.6875rem;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.mdc-checkbox:after,.mdc-checkbox:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-checkbox:before{-webkit-transition:opacity 15ms linear,background-color 15ms linear;transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-checkbox.mdc-ripple-upgraded:before{-webkit-transform:scale(var(--mdc-ripple-fg-scale,1));transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-checkbox.mdc-ripple-upgraded:after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-checkbox.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-checkbox.mdc-ripple-upgraded--foreground-activation:after{-webkit-animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards;animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-checkbox.mdc-ripple-upgraded--foreground-deactivation:after{-webkit-animation:mdc-ripple-fg-opacity-out .15s;animation:mdc-ripple-fg-opacity-out .15s;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-checkbox:after,.mdc-checkbox:before{background-color:#575756}\@supports not (-ms-ime-align:auto){.mdc-checkbox:after,.mdc-checkbox:before{background-color:var(--mdc-theme-secondary,#575756)}}.mdc-checkbox:hover:before{opacity:.04}.mdc-checkbox.mdc-ripple-upgraded--background-focused:before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.mdc-checkbox:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.16}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.16}.mdc-checkbox:after,.mdc-checkbox:before{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-checkbox.mdc-ripple-upgraded:after,.mdc-checkbox.mdc-ripple-upgraded:before{top:var(--mdc-ripple-top,calc(50% - 50%));left:var(--mdc-ripple-left,calc(50% - 50%));width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-checkbox.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-checkbox__checkmark{color:#fff}.mdc-checkbox__mixedmark{border-color:#fff}.mdc-checkbox__background:before{background-color:#575756}\@supports not (-ms-ime-align:auto){.mdc-checkbox__background:before{background-color:var(--mdc-theme-secondary,#575756)}}.mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:rgba(0,0,0,.54);background-color:transparent}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:#575756;border-color:var(--mdc-theme-secondary,#575756);background-color:#575756;background-color:var(--mdc-theme-secondary,#575756)}\@-webkit-keyframes mdc-checkbox-fade-in-background-0{0%{border-color:rgba(0,0,0,.54);background-color:transparent}50%{border-color:#575756;border-color:var(--mdc-theme-secondary,#575756);background-color:#575756;background-color:var(--mdc-theme-secondary,#575756)}}\@keyframes mdc-checkbox-fade-in-background-0{0%{border-color:rgba(0,0,0,.54);background-color:transparent}50%{border-color:#575756;border-color:var(--mdc-theme-secondary,#575756);background-color:#575756;background-color:var(--mdc-theme-secondary,#575756)}}\@-webkit-keyframes mdc-checkbox-fade-out-background-0{0%,80%{border-color:#575756;border-color:var(--mdc-theme-secondary,#575756);background-color:#575756;background-color:var(--mdc-theme-secondary,#575756)}to{border-color:rgba(0,0,0,.54);background-color:transparent}}\@keyframes mdc-checkbox-fade-out-background-0{0%,80%{border-color:#575756;border-color:var(--mdc-theme-secondary,#575756);background-color:#575756;background-color:var(--mdc-theme-secondary,#575756)}to{border-color:rgba(0,0,0,.54);background-color:transparent}}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{-webkit-animation-name:mdc-checkbox-fade-in-background-0;animation-name:mdc-checkbox-fade-in-background-0}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{-webkit-animation-name:mdc-checkbox-fade-out-background-0;animation-name:mdc-checkbox-fade-out-background-0}.mdc-checkbox__native-control:disabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:rgba(0,0,0,.26)}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0,0,0,.26)}\@media screen and (-ms-high-contrast:active){.mdc-checkbox__mixedmark{margin:0 .0625rem}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{left:.6875rem;right:auto;display:-ms-inline-flexbox;display:inline-flex;position:absolute;top:.6875rem;bottom:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;width:45%;height:45%;-webkit-transition:background-color 90ms cubic-bezier(.4,0,.6,1) 0ms,border-color 90ms cubic-bezier(.4,0,.6,1) 0ms;transition:background-color 90ms cubic-bezier(.4,0,.6,1) 0ms,border-color 90ms cubic-bezier(.4,0,.6,1) 0ms;border:.125rem solid currentColor;border-radius:.125rem;background-color:transparent;pointer-events:none;will-change:background-color,border-color}.mdc-checkbox[dir=rtl] .mdc-checkbox__background,[dir=rtl] .mdc-checkbox .mdc-checkbox__background{left:auto;right:.6875rem}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;-webkit-transition:opacity .18s cubic-bezier(.4,0,.6,1) 0ms;transition:opacity .18s cubic-bezier(.4,0,.6,1) 0ms;opacity:0}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{-webkit-transition:stroke-dashoffset .18s cubic-bezier(.4,0,.6,1) 0ms;transition:stroke-dashoffset .18s cubic-bezier(.4,0,.6,1) 0ms;stroke:currentColor;stroke-width:.195rem;stroke-dashoffset:29.78334;stroke-dasharray:29.78334}.mdc-checkbox__mixedmark{width:100%;height:0;-webkit-transform:scaleX(0) rotate(0deg);transform:scaleX(0) rotate(0deg);-webkit-transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform 90ms cubic-bezier(.4,0,.6,1) 0ms;transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform 90ms cubic-bezier(.4,0,.6,1) 0ms;transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,transform 90ms cubic-bezier(.4,0,.6,1) 0ms;transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,transform 90ms cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform 90ms cubic-bezier(.4,0,.6,1) 0ms;border-width:0;border-style:solid;opacity:0}.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{-webkit-transition:none!important;transition:none!important}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background{-webkit-animation-duration:.18s;animation-duration:.18s;-webkit-animation-timing-function:linear;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{-webkit-animation:mdc-checkbox-unchecked-checked-checkmark-path .18s linear 0s;animation:mdc-checkbox-unchecked-checked-checkmark-path .18s linear 0s;-webkit-transition:none;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{-webkit-animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;-webkit-transition:none;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{-webkit-animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;-webkit-transition:none;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{-webkit-animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;-webkit-transition:none;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{-webkit-animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;-webkit-transition:none;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{-webkit-animation:mdc-checkbox-indeterminate-checked-checkmark .5s linear 0s;animation:mdc-checkbox-indeterminate-checked-checkmark .5s linear 0s;-webkit-transition:none;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{-webkit-animation:mdc-checkbox-indeterminate-checked-mixedmark .5s linear 0s;animation:mdc-checkbox-indeterminate-checked-mixedmark .5s linear 0s;-webkit-transition:none;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{-webkit-animation:mdc-checkbox-indeterminate-unchecked-mixedmark .3s linear 0s;animation:mdc-checkbox-indeterminate-unchecked-mixedmark .3s linear 0s;-webkit-transition:none;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{-webkit-transition:border-color 90ms cubic-bezier(0,0,.2,1) 0ms,background-color 90ms cubic-bezier(0,0,.2,1) 0ms;transition:border-color 90ms cubic-bezier(0,0,.2,1) 0ms,background-color 90ms cubic-bezier(0,0,.2,1) 0ms}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__background:before{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;-webkit-transform:scale(0);transform:scale(0);-webkit-transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform 90ms cubic-bezier(.4,0,.6,1) 0ms;transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform 90ms cubic-bezier(.4,0,.6,1) 0ms;transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,transform 90ms cubic-bezier(.4,0,.6,1) 0ms;transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,transform 90ms cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform 90ms cubic-bezier(.4,0,.6,1) 0ms;border-radius:50%;opacity:0;pointer-events:none;content:\"\";will-change:opacity,transform}.mdc-ripple-upgraded--background-focused .mdc-checkbox__background:before{content:none}.mdc-checkbox__native-control:focus~.mdc-checkbox__background:before{-webkit-transform:scale(2.75);transform:scale(2.75);-webkit-transition:opacity 80ms cubic-bezier(0,0,.2,1) 0ms,-webkit-transform 80ms cubic-bezier(0,0,.2,1) 0ms;transition:opacity 80ms cubic-bezier(0,0,.2,1) 0ms,-webkit-transform 80ms cubic-bezier(0,0,.2,1) 0ms;transition:opacity 80ms cubic-bezier(0,0,.2,1) 0ms,transform 80ms cubic-bezier(0,0,.2,1) 0ms;transition:opacity 80ms cubic-bezier(0,0,.2,1) 0ms,transform 80ms cubic-bezier(0,0,.2,1) 0ms,-webkit-transform 80ms cubic-bezier(0,0,.2,1) 0ms;opacity:.12}.mdc-checkbox__native-control{position:absolute;top:0;left:0;width:100%;height:100%;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{-webkit-transition:opacity .18s cubic-bezier(0,0,.2,1) 0ms,-webkit-transform .18s cubic-bezier(0,0,.2,1) 0ms;transition:opacity .18s cubic-bezier(0,0,.2,1) 0ms,-webkit-transform .18s cubic-bezier(0,0,.2,1) 0ms;transition:opacity .18s cubic-bezier(0,0,.2,1) 0ms,transform .18s cubic-bezier(0,0,.2,1) 0ms;transition:opacity .18s cubic-bezier(0,0,.2,1) 0ms,transform .18s cubic-bezier(0,0,.2,1) 0ms,-webkit-transform .18s cubic-bezier(0,0,.2,1) 0ms;opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{-webkit-transform:scaleX(1) rotate(-45deg);transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform 90ms cubic-bezier(.4,0,.6,1) 0ms;transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform 90ms cubic-bezier(.4,0,.6,1) 0ms;transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,transform 90ms cubic-bezier(.4,0,.6,1) 0ms;transition:opacity 90ms cubic-bezier(.4,0,.6,1) 0ms,transform 90ms cubic-bezier(.4,0,.6,1) 0ms,-webkit-transform 90ms cubic-bezier(.4,0,.6,1) 0ms;opacity:0}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark{-webkit-transform:scaleX(1) rotate(0deg);transform:scaleX(1) rotate(0deg);opacity:1}.mdc-floating-label{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.125rem;font-weight:400;letter-spacing:.00937em;text-decoration:inherit;text-transform:inherit;position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:color .15s cubic-bezier(.4,0,.2,1),-webkit-transform .15s cubic-bezier(.4,0,.2,1);transition:color .15s cubic-bezier(.4,0,.2,1),-webkit-transform .15s cubic-bezier(.4,0,.2,1);transition:transform .15s cubic-bezier(.4,0,.2,1),color .15s cubic-bezier(.4,0,.2,1);transition:transform .15s cubic-bezier(.4,0,.2,1),color .15s cubic-bezier(.4,0,.2,1),-webkit-transform .15s cubic-bezier(.4,0,.2,1);line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}.mdc-floating-label[dir=rtl],[dir=rtl] .mdc-floating-label{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto;-webkit-transform:translateY(-50%) scale(.75);transform:translateY(-50%) scale(.75)}.mdc-floating-label--shake{-webkit-animation:mdc-floating-label-shake-float-above-standard .25s 1;animation:mdc-floating-label-shake-float-above-standard .25s 1}\@-webkit-keyframes mdc-floating-label-shake-float-above-standard{0%{-webkit-transform:translateX(calc(0 - 0%)) translateY(-50%) scale(.75);transform:translateX(calc(0 - 0%)) translateY(-50%) scale(.75)}33%{-webkit-animation-timing-function:cubic-bezier(.5,0,.70173,.49582);animation-timing-function:cubic-bezier(.5,0,.70173,.49582);-webkit-transform:translateX(calc(4% - 0%)) translateY(-50%) scale(.75);transform:translateX(calc(4% - 0%)) translateY(-50%) scale(.75)}66%{-webkit-animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);-webkit-transform:translateX(calc(-4% - 0%)) translateY(-50%) scale(.75);transform:translateX(calc(-4% - 0%)) translateY(-50%) scale(.75)}to{-webkit-transform:translateX(calc(0 - 0%)) translateY(-50%) scale(.75);transform:translateX(calc(0 - 0%)) translateY(-50%) scale(.75)}}\@keyframes mdc-floating-label-shake-float-above-standard{0%{-webkit-transform:translateX(calc(0 - 0%)) translateY(-50%) scale(.75);transform:translateX(calc(0 - 0%)) translateY(-50%) scale(.75)}33%{-webkit-animation-timing-function:cubic-bezier(.5,0,.70173,.49582);animation-timing-function:cubic-bezier(.5,0,.70173,.49582);-webkit-transform:translateX(calc(4% - 0%)) translateY(-50%) scale(.75);transform:translateX(calc(4% - 0%)) translateY(-50%) scale(.75)}66%{-webkit-animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);-webkit-transform:translateX(calc(-4% - 0%)) translateY(-50%) scale(.75);transform:translateX(calc(-4% - 0%)) translateY(-50%) scale(.75)}to{-webkit-transform:translateX(calc(0 - 0%)) translateY(-50%) scale(.75);transform:translateX(calc(0 - 0%)) translateY(-50%) scale(.75)}}.multi-select{position:relative}.multi-select .multi-select-label{padding-left:.9375rem}.multi-select .mdc-form-field{display:-ms-flexbox;display:flex}.multi-select .mdc-checkbox .mdc-checkbox__checkmark{color:#26a69a;color:var(--mdc-theme-primary,#26a69a)}.multi-select .mdc-checkbox .mdc-checkbox__mixedmark{border-color:#26a69a;border-color:var(--mdc-theme-primary,#26a69a)}.multi-select .mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate)~.mdc-checkbox__background{border-color:#575756;border-color:var(--mdc-theme-secondary,#575756);background-color:#fff;background-color:var(--mdc-theme-on-primary,#fff)}.multi-select .mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.multi-select .mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:#575756;border-color:var(--mdc-theme-secondary,#575756);background-color:#fff;background-color:var(--mdc-theme-on-primary,#fff)}\@-webkit-keyframes mdc-checkbox-fade-in-background-1{0%{border-color:#575756;border-color:var(--mdc-theme-secondary,#575756);background-color:#fff;background-color:var(--mdc-theme-on-primary,#fff)}50%{border-color:#575756;border-color:var(--mdc-theme-secondary,#575756);background-color:#fff;background-color:var(--mdc-theme-on-primary,#fff)}}\@keyframes mdc-checkbox-fade-in-background-1{0%{border-color:#575756;border-color:var(--mdc-theme-secondary,#575756);background-color:#fff;background-color:var(--mdc-theme-on-primary,#fff)}50%{border-color:#575756;border-color:var(--mdc-theme-secondary,#575756);background-color:#fff;background-color:var(--mdc-theme-on-primary,#fff)}}\@-webkit-keyframes mdc-checkbox-fade-out-background-1{0%,80%{border-color:#575756;border-color:var(--mdc-theme-secondary,#575756);background-color:#fff;background-color:var(--mdc-theme-on-primary,#fff)}to{border-color:#575756;border-color:var(--mdc-theme-secondary,#575756);background-color:#fff;background-color:var(--mdc-theme-on-primary,#fff)}}\@keyframes mdc-checkbox-fade-out-background-1{0%,80%{border-color:#575756;border-color:var(--mdc-theme-secondary,#575756);background-color:#fff;background-color:var(--mdc-theme-on-primary,#fff)}to{border-color:#575756;border-color:var(--mdc-theme-secondary,#575756);background-color:#fff;background-color:var(--mdc-theme-on-primary,#fff)}}.multi-select .mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.multi-select .mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{-webkit-animation-name:mdc-checkbox-fade-in-background-1;animation-name:mdc-checkbox-fade-in-background-1}.multi-select .mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.multi-select .mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{-webkit-animation-name:mdc-checkbox-fade-out-background-1;animation-name:mdc-checkbox-fade-out-background-1}"}}export{s as LimelExampleMultiSelect,a as LimelMultiSelect};