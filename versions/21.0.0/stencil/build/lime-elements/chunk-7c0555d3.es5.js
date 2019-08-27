LimeElements.loadBundle("chunk-7c0555d3.js",["exports","./chunk-d1e50e0a.js","./chunk-90369e86.js","./chunk-bcaecee8.js","./chunk-d8b57058.js","./chunk-14209dc2.js"],function(t,e,n,i,r,o){var a={ROOT:"mdc-text-field-character-counter"},s={ROOT_SELECTOR:"."+a.ROOT},u=function(t){function e(i){return t.call(this,n.__assign({},e.defaultAdapter,i))||this}return n.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return a},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return s},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{setContent:function(){}}},enumerable:!0,configurable:!0}),e.prototype.setCounterValue=function(t,e){t=Math.min(t,e),this.adapter_.setContent(t+" / "+e)},e}(i.MDCFoundation),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n.__extends(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundation",{get:function(){return this.foundation_},enumerable:!0,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this;return new u({setContent:function(e){t.root_.textContent=e}})},e}(i.MDCComponent),c={ARIA_CONTROLS:"aria-controls",ICON_SELECTOR:".mdc-text-field__icon",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline"},d={DENSE:"mdc-text-field--dense",DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon"},p={DENSE_LABEL_SCALE:.923,LABEL_SCALE:.75},h=["pattern","min","max","required","step","minlength","maxlength"],_=["color","date","datetime-local","month","range","time","week"],f=["mousedown","touchstart"],g=["click","keydown"],b=function(t){function e(i,r){void 0===r&&(r={});var o=t.call(this,n.__assign({},e.defaultAdapter,i))||this;return o.isFocused_=!1,o.receivedUserInput_=!1,o.isValid_=!0,o.useNativeValidation_=!0,o.helperText_=r.helperText,o.characterCounter_=r.characterCounter,o.leadingIcon_=r.leadingIcon,o.trailingIcon_=r.trailingIcon,o.inputFocusHandler_=function(){return o.activateFocus()},o.inputBlurHandler_=function(){return o.deactivateFocus()},o.inputInputHandler_=function(){return o.handleInput()},o.setPointerXOffset_=function(t){return o.setTransformOrigin(t)},o.textFieldInteractionHandler_=function(){return o.handleTextFieldInteraction()},o.validationAttributeChangeHandler_=function(t){return o.handleValidationAttributeChange(t)},o}return n.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return d},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return c},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return p},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"shouldAlwaysFloat_",{get:function(){var t=this.getNativeInput_().type;return _.indexOf(t)>=0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat_||this.isFocused_||Boolean(this.getValue())||this.isBadInput_()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"shouldShake",{get:function(){return!this.isFocused_&&!this.isValid()&&Boolean(this.getValue())},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver(function(){})},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this;this.adapter_.isFocused()?this.inputFocusHandler_():this.adapter_.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter_.floatLabel(!0)),this.adapter_.registerInputInteractionHandler("focus",this.inputFocusHandler_),this.adapter_.registerInputInteractionHandler("blur",this.inputBlurHandler_),this.adapter_.registerInputInteractionHandler("input",this.inputInputHandler_),f.forEach(function(e){t.adapter_.registerInputInteractionHandler(e,t.setPointerXOffset_)}),g.forEach(function(e){t.adapter_.registerTextFieldInteractionHandler(e,t.textFieldInteractionHandler_)}),this.validationObserver_=this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_),this.setCharacterCounter_(this.getValue().length)},e.prototype.destroy=function(){var t=this;this.adapter_.deregisterInputInteractionHandler("focus",this.inputFocusHandler_),this.adapter_.deregisterInputInteractionHandler("blur",this.inputBlurHandler_),this.adapter_.deregisterInputInteractionHandler("input",this.inputInputHandler_),f.forEach(function(e){t.adapter_.deregisterInputInteractionHandler(e,t.setPointerXOffset_)}),g.forEach(function(e){t.adapter_.deregisterTextFieldInteractionHandler(e,t.textFieldInteractionHandler_)}),this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_)},e.prototype.handleTextFieldInteraction=function(){var t=this.adapter_.getNativeInput();t&&t.disabled||(this.receivedUserInput_=!0)},e.prototype.handleValidationAttributeChange=function(t){var e=this;t.some(function(t){return h.indexOf(t)>-1&&(e.styleValidity_(!0),!0)}),t.indexOf("maxlength")>-1&&this.setCharacterCounter_(this.getValue().length)},e.prototype.notchOutline=function(t){if(this.adapter_.hasOutline())if(t){var e=this.adapter_.hasClass(d.DENSE)?p.DENSE_LABEL_SCALE:p.LABEL_SCALE,n=this.adapter_.getLabelWidth()*e;this.adapter_.notchOutline(n)}else this.adapter_.closeOutline()},e.prototype.activateFocus=function(){this.isFocused_=!0,this.styleFocused_(this.isFocused_),this.adapter_.activateLineRipple(),this.adapter_.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter_.floatLabel(this.shouldFloat),this.adapter_.shakeLabel(this.shouldShake)),this.helperText_&&this.helperText_.showToScreenReader()},e.prototype.setTransformOrigin=function(t){var e=t.touches,n=e?e[0]:t,i=n.target.getBoundingClientRect();this.adapter_.setLineRippleTransformOrigin(n.clientX-i.left)},e.prototype.handleInput=function(){this.autoCompleteFocus(),this.setCharacterCounter_(this.getValue().length)},e.prototype.autoCompleteFocus=function(){this.receivedUserInput_||this.activateFocus()},e.prototype.deactivateFocus=function(){this.isFocused_=!1,this.adapter_.deactivateLineRipple();var t=this.isValid();this.styleValidity_(t),this.styleFocused_(this.isFocused_),this.adapter_.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter_.floatLabel(this.shouldFloat),this.adapter_.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput_=!1)},e.prototype.getValue=function(){return this.getNativeInput_().value},e.prototype.setValue=function(t){this.getValue()!==t&&(this.getNativeInput_().value=t,this.setCharacterCounter_(t.length));var e=this.isValid();this.styleValidity_(e),this.adapter_.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter_.floatLabel(this.shouldFloat),this.adapter_.shakeLabel(this.shouldShake))},e.prototype.isValid=function(){return this.useNativeValidation_?this.isNativeInputValid_():this.isValid_},e.prototype.setValid=function(t){this.isValid_=t,this.styleValidity_(t);var e=!t&&!this.isFocused_;this.adapter_.hasLabel()&&this.adapter_.shakeLabel(e)},e.prototype.setUseNativeValidation=function(t){this.useNativeValidation_=t},e.prototype.isDisabled=function(){return this.getNativeInput_().disabled},e.prototype.setDisabled=function(t){this.getNativeInput_().disabled=t,this.styleDisabled_(t)},e.prototype.setHelperTextContent=function(t){this.helperText_&&this.helperText_.setContent(t)},e.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon_&&this.leadingIcon_.setAriaLabel(t)},e.prototype.setLeadingIconContent=function(t){this.leadingIcon_&&this.leadingIcon_.setContent(t)},e.prototype.setTrailingIconAriaLabel=function(t){this.trailingIcon_&&this.trailingIcon_.setAriaLabel(t)},e.prototype.setTrailingIconContent=function(t){this.trailingIcon_&&this.trailingIcon_.setContent(t)},e.prototype.setCharacterCounter_=function(t){if(this.characterCounter_){var e=this.getNativeInput_().maxLength;if(-1===e)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter_.setCounterValue(t,e)}},e.prototype.isBadInput_=function(){return this.getNativeInput_().validity.badInput||!1},e.prototype.isNativeInputValid_=function(){return this.getNativeInput_().validity.valid},e.prototype.styleValidity_=function(t){var n=e.cssClasses.INVALID;t?this.adapter_.removeClass(n):this.adapter_.addClass(n),this.helperText_&&this.helperText_.setValidity(t)},e.prototype.styleFocused_=function(t){var n=e.cssClasses.FOCUSED;t?this.adapter_.addClass(n):this.adapter_.removeClass(n)},e.prototype.styleDisabled_=function(t){var n=e.cssClasses,i=n.DISABLED,r=n.INVALID;t?(this.adapter_.addClass(i),this.adapter_.removeClass(r)):this.adapter_.removeClass(i),this.leadingIcon_&&this.leadingIcon_.setDisabled(t),this.trailingIcon_&&this.trailingIcon_.setDisabled(t)},e.prototype.getNativeInput_=function(){return(this.adapter_?this.adapter_.getNativeInput():null)||{disabled:!1,maxLength:-1,type:"input",validity:{badInput:!1,valid:!0},value:""}},e}(i.MDCFoundation),I={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},y={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+I.ROOT},C=function(t){function e(i){return t.call(this,n.__assign({},e.defaultAdapter,i))||this}return n.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return I},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return y},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!0,configurable:!0}),e.prototype.setContent=function(t){this.adapter_.setContent(t)},e.prototype.setPersistent=function(t){t?this.adapter_.addClass(I.HELPER_TEXT_PERSISTENT):this.adapter_.removeClass(I.HELPER_TEXT_PERSISTENT)},e.prototype.setValidation=function(t){t?this.adapter_.addClass(I.HELPER_TEXT_VALIDATION_MSG):this.adapter_.removeClass(I.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter_.removeAttr(y.ARIA_HIDDEN)},e.prototype.setValidity=function(t){var e=this.adapter_.hasClass(I.HELPER_TEXT_PERSISTENT),n=this.adapter_.hasClass(I.HELPER_TEXT_VALIDATION_MSG)&&!t;n?this.adapter_.setAttr(y.ROLE,"alert"):this.adapter_.removeAttr(y.ROLE),e||n||this.hide_()},e.prototype.hide_=function(){this.adapter_.setAttr(y.ARIA_HIDDEN,"true")},e}(i.MDCFoundation),v=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n.__extends(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundation",{get:function(){return this.foundation_},enumerable:!0,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this;return new C({addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},hasClass:function(e){return t.root_.classList.contains(e)},setAttr:function(e,n){return t.root_.setAttribute(e,n)},removeAttr:function(e){return t.root_.removeAttribute(e)},setContent:function(e){t.root_.textContent=e}})},e}(i.MDCComponent),L={ICON_EVENT:"MDCTextField:icon",ICON_ROLE:"button"},E=["click","keydown"],O=function(t){function e(i){var r=t.call(this,n.__assign({},e.defaultAdapter,i))||this;return r.savedTabIndex_=null,r.interactionHandler_=function(t){return r.handleInteraction(t)},r}return n.__extends(e,t),Object.defineProperty(e,"strings",{get:function(){return L},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},notifyIconAction:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this;this.savedTabIndex_=this.adapter_.getAttr("tabindex"),E.forEach(function(e){t.adapter_.registerInteractionHandler(e,t.interactionHandler_)})},e.prototype.destroy=function(){var t=this;E.forEach(function(e){t.adapter_.deregisterInteractionHandler(e,t.interactionHandler_)})},e.prototype.setDisabled=function(t){this.savedTabIndex_&&(t?(this.adapter_.setAttr("tabindex","-1"),this.adapter_.removeAttr("role")):(this.adapter_.setAttr("tabindex",this.savedTabIndex_),this.adapter_.setAttr("role",L.ICON_ROLE)))},e.prototype.setAriaLabel=function(t){this.adapter_.setAttr("aria-label",t)},e.prototype.setContent=function(t){this.adapter_.setContent(t)},e.prototype.handleInteraction=function(t){("click"===t.type||"Enter"===t.key||13===t.keyCode)&&this.adapter_.notifyIconAction()},e}(i.MDCFoundation),m=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n.__extends(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"foundation",{get:function(){return this.foundation_},enumerable:!0,configurable:!0}),e.prototype.getDefaultFoundation=function(){var t=this;return new O({getAttr:function(e){return t.root_.getAttribute(e)},setAttr:function(e,n){return t.root_.setAttribute(e,n)},removeAttr:function(e){return t.root_.removeAttribute(e)},setContent:function(e){t.root_.textContent=e},registerInteractionHandler:function(e,n){return t.listen(e,n)},deregisterInteractionHandler:function(e,n){return t.unlisten(e,n)},notifyIconAction:function(){return t.emit(O.strings.ICON_EVENT,{},!0)}})},e}(i.MDCComponent),T=function(t){function i(){return null!==t&&t.apply(this,arguments)||this}return n.__extends(i,t),i.attachTo=function(t){return new i(t)},i.prototype.initialize=function(t,n,i,r,a,s,p){void 0===t&&(t=function(t,n){return new e.MDCRipple(t,n)}),void 0===n&&(n=function(t){return new o.MDCLineRipple(t)}),void 0===i&&(i=function(t){return new v(t)}),void 0===r&&(r=function(t){return new l(t)}),void 0===a&&(a=function(t){return new m(t)}),void 0===s&&(s=function(t){return new o.MDCFloatingLabel(t)}),void 0===p&&(p=function(t){return new o.MDCNotchedOutline(t)}),this.input_=this.root_.querySelector(c.INPUT_SELECTOR);var h=this.root_.querySelector(c.LABEL_SELECTOR);this.label_=h?s(h):null;var _=this.root_.querySelector(c.LINE_RIPPLE_SELECTOR);this.lineRipple_=_?n(_):null;var f=this.root_.querySelector(c.OUTLINE_SELECTOR);this.outline_=f?p(f):null;var g=C.strings,b=this.root_.nextElementSibling,I=b&&b.classList.contains(d.HELPER_LINE),y=I&&b&&b.querySelector(g.ROOT_SELECTOR);this.helperText_=y?i(y):null;var L=u.strings,E=this.root_.querySelector(L.ROOT_SELECTOR);!E&&I&&b&&(E=b.querySelector(L.ROOT_SELECTOR)),this.characterCounter_=E?r(E):null,this.leadingIcon_=null,this.trailingIcon_=null;var O=this.root_.querySelectorAll(c.ICON_SELECTOR);O.length>0&&(O.length>1?(this.leadingIcon_=a(O[0]),this.trailingIcon_=a(O[1])):this.root_.classList.contains(d.WITH_LEADING_ICON)?this.leadingIcon_=a(O[0]):this.trailingIcon_=a(O[0])),this.ripple=this.createRipple_(t)},i.prototype.destroy=function(){this.ripple&&this.ripple.destroy(),this.lineRipple_&&this.lineRipple_.destroy(),this.helperText_&&this.helperText_.destroy(),this.characterCounter_&&this.characterCounter_.destroy(),this.leadingIcon_&&this.leadingIcon_.destroy(),this.trailingIcon_&&this.trailingIcon_.destroy(),this.label_&&this.label_.destroy(),this.outline_&&this.outline_.destroy(),t.prototype.destroy.call(this)},i.prototype.initialSyncWithDOM=function(){this.disabled=this.input_.disabled},Object.defineProperty(i.prototype,"value",{get:function(){return this.foundation_.getValue()},set:function(t){this.foundation_.setValue(t)},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"disabled",{get:function(){return this.foundation_.isDisabled()},set:function(t){this.foundation_.setDisabled(t)},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"valid",{get:function(){return this.foundation_.isValid()},set:function(t){this.foundation_.setValid(t)},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"required",{get:function(){return this.input_.required},set:function(t){this.input_.required=t},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"pattern",{get:function(){return this.input_.pattern},set:function(t){this.input_.pattern=t},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"minLength",{get:function(){return this.input_.minLength},set:function(t){this.input_.minLength=t},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"maxLength",{get:function(){return this.input_.maxLength},set:function(t){t<0?this.input_.removeAttribute("maxLength"):this.input_.maxLength=t},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"min",{get:function(){return this.input_.min},set:function(t){this.input_.min=t},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"max",{get:function(){return this.input_.max},set:function(t){this.input_.max=t},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"step",{get:function(){return this.input_.step},set:function(t){this.input_.step=t},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"helperTextContent",{set:function(t){this.foundation_.setHelperTextContent(t)},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"leadingIconAriaLabel",{set:function(t){this.foundation_.setLeadingIconAriaLabel(t)},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"leadingIconContent",{set:function(t){this.foundation_.setLeadingIconContent(t)},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"trailingIconAriaLabel",{set:function(t){this.foundation_.setTrailingIconAriaLabel(t)},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"trailingIconContent",{set:function(t){this.foundation_.setTrailingIconContent(t)},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"useNativeValidation",{set:function(t){this.foundation_.setUseNativeValidation(t)},enumerable:!0,configurable:!0}),i.prototype.focus=function(){this.input_.focus()},i.prototype.layout=function(){this.foundation_.notchOutline(this.foundation_.shouldFloat)},i.prototype.getDefaultFoundation=function(){var t=n.__assign({},this.getRootAdapterMethods_(),this.getInputAdapterMethods_(),this.getLabelAdapterMethods_(),this.getLineRippleAdapterMethods_(),this.getOutlineAdapterMethods_());return new b(t,this.getFoundationMap_())},i.prototype.getRootAdapterMethods_=function(){var t=this;return{addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},hasClass:function(e){return t.root_.classList.contains(e)},registerTextFieldInteractionHandler:function(e,n){return t.listen(e,n)},deregisterTextFieldInteractionHandler:function(e,n){return t.unlisten(e,n)},registerValidationAttributeChangeHandler:function(e){var n=new MutationObserver(function(t){return e(function(t){return t.map(function(t){return t.attributeName}).filter(function(t){return t})}(t))});return n.observe(t.input_,{attributes:!0}),n},deregisterValidationAttributeChangeHandler:function(t){return t.disconnect()}}},i.prototype.getInputAdapterMethods_=function(){var t=this;return{getNativeInput:function(){return t.input_},isFocused:function(){return document.activeElement===t.input_},registerInputInteractionHandler:function(e,n){return t.input_.addEventListener(e,n)},deregisterInputInteractionHandler:function(e,n){return t.input_.removeEventListener(e,n)}}},i.prototype.getLabelAdapterMethods_=function(){var t=this;return{floatLabel:function(e){return t.label_&&t.label_.float(e)},getLabelWidth:function(){return t.label_?t.label_.getWidth():0},hasLabel:function(){return Boolean(t.label_)},shakeLabel:function(e){return t.label_&&t.label_.shake(e)}}},i.prototype.getLineRippleAdapterMethods_=function(){var t=this;return{activateLineRipple:function(){t.lineRipple_&&t.lineRipple_.activate()},deactivateLineRipple:function(){t.lineRipple_&&t.lineRipple_.deactivate()},setLineRippleTransformOrigin:function(e){t.lineRipple_&&t.lineRipple_.setRippleCenter(e)}}},i.prototype.getOutlineAdapterMethods_=function(){var t=this;return{closeOutline:function(){return t.outline_&&t.outline_.closeNotch()},hasOutline:function(){return Boolean(t.outline_)},notchOutline:function(e){return t.outline_&&t.outline_.notch(e)}}},i.prototype.getFoundationMap_=function(){return{characterCounter:this.characterCounter_?this.characterCounter_.foundation:void 0,helperText:this.helperText_?this.helperText_.foundation:void 0,leadingIcon:this.leadingIcon_?this.leadingIcon_.foundation:void 0,trailingIcon:this.trailingIcon_?this.trailingIcon_.foundation:void 0}},i.prototype.createRipple_=function(t){var i=this,o=this.root_.classList.contains(d.TEXTAREA),a=this.root_.classList.contains(d.OUTLINED);if(o||a)return null;var s=n.__assign({},e.MDCRipple.createAdapter(this),{isSurfaceActive:function(){return r.matches(i.input_,":active")},registerInteractionHandler:function(t,e){return i.input_.addEventListener(t,e)},deregisterInteractionHandler:function(t,e){return i.input_.removeEventListener(t,e)}});return t(this.root_,new e.MDCRippleFoundation(s))},i}(i.MDCComponent);t.MDCTextField=T});