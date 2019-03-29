import"./chunk-d211df41.js";import"./chunk-0c62589f.js";import{a as e}from"./chunk-982653a6.js";import{a as t}from"./chunk-1bf9130d.js";class s{constructor(){this.listRenderer=new t}componentDidLoad(){if(this.mdcList=new e(this.element.shadowRoot.querySelector(".mdc-list")),!this.selectable)return;this.mdcList.singleSelection=!0,this.mdcList.foundation_.adapter_.getFocusedElementIndex=(()=>this.mdcList.listElements.indexOf(this.element.shadowRoot.activeElement));const t=this.mdcList.foundation_.setSelectedIndex,s=this;this.mdcList.foundation_.setSelectedIndex=function(...e){t.apply(this,e),s.handleSelectItem(e[0])}}componentDidUnload(){this.mdcList.destroy()}render(){return this.listRenderer.render(this.items,{selectable:this.selectable,badgeIcons:this.badgeIcons})}handleSelectItem(e){let t=null;this.element.shadowRoot.querySelector(".mdc-list-item--selected")&&(t=this.items.filter(e=>!("separator"in e))[e]),this.change.emit(t)}static get is(){return"limel-list"}static get encapsulation(){return"shadow"}static get properties(){return{badgeIcons:{type:Boolean,attr:"badge-icons"},element:{elementRef:!0},items:{type:"Any",attr:"items"},selectable:{type:Boolean,attr:"selectable"}}}static get events(){return[{name:"change",method:"change",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".sc-limel-list-h{--mdc-theme-primary:var(--lime-primary-color,#26a69a);--mdc-theme-secondary:var(--lime-secondary-color,#575756);--mdc-theme-on-primary:var(--lime-on-primary-color,#fff);--mdc-theme-on-secondary:var(--lime-on-secondary-color,#fff)}.sc-limel-list:root{--mdc-theme-primary:#26a69a;--mdc-theme-secondary:#575756;--mdc-theme-background:#fff;--mdc-theme-surface:#fff;--mdc-theme-error:#b00020;--mdc-theme-on-primary:#fff;--mdc-theme-on-secondary:#fff;--mdc-theme-on-surface:#000;--mdc-theme-on-error:#fff;--mdc-theme-text-primary-on-background:rgba(0,0,0,0.87);--mdc-theme-text-secondary-on-background:rgba(0,0,0,0.54);--mdc-theme-text-hint-on-background:rgba(0,0,0,0.38);--mdc-theme-text-disabled-on-background:rgba(0,0,0,0.38);--mdc-theme-text-icon-on-background:rgba(0,0,0,0.38);--mdc-theme-text-primary-on-light:rgba(0,0,0,0.87);--mdc-theme-text-secondary-on-light:rgba(0,0,0,0.54);--mdc-theme-text-hint-on-light:rgba(0,0,0,0.38);--mdc-theme-text-disabled-on-light:rgba(0,0,0,0.38);--mdc-theme-text-icon-on-light:rgba(0,0,0,0.38);--mdc-theme-text-primary-on-dark:#fff;--mdc-theme-text-secondary-on-dark:hsla(0,0%,100%,0.7);--mdc-theme-text-hint-on-dark:hsla(0,0%,100%,0.5);--mdc-theme-text-disabled-on-dark:hsla(0,0%,100%,0.5);--mdc-theme-text-icon-on-dark:hsla(0,0%,100%,0.5)}.mdc-theme--primary.sc-limel-list{color:#26a69a!important;color:var(--mdc-theme-primary,#26a69a)!important}.mdc-theme--secondary.sc-limel-list{color:#575756!important;color:var(--mdc-theme-secondary,#575756)!important}.mdc-theme--background.sc-limel-list{background-color:#fff;background-color:var(--mdc-theme-background,#fff)}.mdc-theme--surface.sc-limel-list{background-color:#fff;background-color:var(--mdc-theme-surface,#fff)}.mdc-theme--error.sc-limel-list{color:#b00020!important;color:var(--mdc-theme-error,#b00020)!important}.mdc-theme--on-primary.sc-limel-list{color:#fff!important;color:var(--mdc-theme-on-primary,#fff)!important}.mdc-theme--on-secondary.sc-limel-list{color:#fff!important;color:var(--mdc-theme-on-secondary,#fff)!important}.mdc-theme--on-surface.sc-limel-list{color:#000!important;color:var(--mdc-theme-on-surface,#000)!important}.mdc-theme--on-error.sc-limel-list{color:#fff!important;color:var(--mdc-theme-on-error,#fff)!important}.mdc-theme--text-primary-on-background.sc-limel-list{color:rgba(0,0,0,.87)!important;color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))!important}.mdc-theme--text-secondary-on-background.sc-limel-list{color:rgba(0,0,0,.54)!important;color:var(--mdc-theme-text-secondary-on-background,rgba(0,0,0,.54))!important}.mdc-theme--text-hint-on-background.sc-limel-list{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-hint-on-background,rgba(0,0,0,.38))!important}.mdc-theme--text-disabled-on-background.sc-limel-list{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-disabled-on-background,rgba(0,0,0,.38))!important}.mdc-theme--text-icon-on-background.sc-limel-list{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-icon-on-background,rgba(0,0,0,.38))!important}.mdc-theme--text-primary-on-light.sc-limel-list{color:rgba(0,0,0,.87)!important;color:var(--mdc-theme-text-primary-on-light,rgba(0,0,0,.87))!important}.mdc-theme--text-secondary-on-light.sc-limel-list{color:rgba(0,0,0,.54)!important;color:var(--mdc-theme-text-secondary-on-light,rgba(0,0,0,.54))!important}.mdc-theme--text-hint-on-light.sc-limel-list{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-hint-on-light,rgba(0,0,0,.38))!important}.mdc-theme--text-disabled-on-light.sc-limel-list{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38))!important}.mdc-theme--text-icon-on-light.sc-limel-list{color:rgba(0,0,0,.38)!important;color:var(--mdc-theme-text-icon-on-light,rgba(0,0,0,.38))!important}.mdc-theme--text-primary-on-dark.sc-limel-list{color:#fff!important;color:var(--mdc-theme-text-primary-on-dark,#fff)!important}.mdc-theme--text-secondary-on-dark.sc-limel-list{color:hsla(0,0%,100%,.7)!important;color:var(--mdc-theme-text-secondary-on-dark,hsla(0,0%,100%,.7))!important}.mdc-theme--text-hint-on-dark.sc-limel-list{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-hint-on-dark,hsla(0,0%,100%,.5))!important}.mdc-theme--text-disabled-on-dark.sc-limel-list{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-disabled-on-dark,hsla(0,0%,100%,.5))!important}.mdc-theme--text-icon-on-dark.sc-limel-list{color:hsla(0,0%,100%,.5)!important;color:var(--mdc-theme-text-icon-on-dark,hsla(0,0%,100%,.5))!important}.mdc-theme--primary-bg.sc-limel-list{background-color:#26a69a!important;background-color:var(--mdc-theme-primary,#26a69a)!important}.mdc-theme--secondary-bg.sc-limel-list{background-color:#575756!important;background-color:var(--mdc-theme-secondary,#575756)!important}.mdc-typography.sc-limel-list{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}.mdc-typography--headline1.sc-limel-list{letter-spacing:-.01562em}.mdc-typography--headline1.sc-limel-list, .mdc-typography--headline2.sc-limel-list{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:.875rem;font-weight:300;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline2.sc-limel-list{letter-spacing:-.00833em}.mdc-typography--headline3.sc-limel-list{letter-spacing:normal}.mdc-typography--headline3.sc-limel-list, .mdc-typography--headline4.sc-limel-list{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:.875rem;font-weight:400;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline4.sc-limel-list{letter-spacing:.00735em}.mdc-typography--headline5.sc-limel-list{font-weight:400;letter-spacing:normal}.mdc-typography--headline5.sc-limel-list, .mdc-typography--headline6.sc-limel-list{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:.875rem;text-decoration:inherit;text-transform:inherit}.mdc-typography--headline6.sc-limel-list{font-weight:500;letter-spacing:.0125em}.mdc-typography--subtitle1.sc-limel-list{font-size:.875rem;font-weight:400;letter-spacing:.00937em}.mdc-typography--subtitle1.sc-limel-list, .mdc-typography--subtitle2.sc-limel-list{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:1.125rem;text-decoration:inherit;text-transform:inherit}.mdc-typography--subtitle2.sc-limel-list{font-size:.8125rem;font-weight:500;letter-spacing:.00714em}.mdc-typography--body1.sc-limel-list{line-height:1.5rem;letter-spacing:.03125em}.mdc-typography--body1.sc-limel-list, .mdc-typography--body2.sc-limel-list{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.8125rem;font-weight:400;text-decoration:inherit;text-transform:inherit}.mdc-typography--body2.sc-limel-list{line-height:1.625rem;letter-spacing:.01786em}.mdc-typography--caption.sc-limel-list{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.6875rem;line-height:.875rem;font-weight:400;letter-spacing:.03333em;text-decoration:inherit;text-transform:inherit}.mdc-typography--button.sc-limel-list{font-size:.875rem;line-height:2.25rem;letter-spacing:.08929em;text-transform:none}.mdc-typography--button.sc-limel-list, .mdc-typography--overline.sc-limel-list{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-weight:500;text-decoration:none}.mdc-typography--overline.sc-limel-list{font-size:.6875rem;line-height:.875rem;letter-spacing:.16667em;text-transform:uppercase}\@-webkit-keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}\@keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}\@-webkit-keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}\@keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}\@-webkit-keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}\@keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug.sc-limel-list{--mdc-ripple-surface-test-edge-var:0.0625rem solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug.sc-limel-list:before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-list.sc-limel-list{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.125rem;font-weight:400;letter-spacing:.00937em;text-decoration:inherit;text-transform:inherit;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87));margin:0;padding:.5rem 0;line-height:1.5rem;list-style-type:none}.mdc-list-item__secondary-text.sc-limel-list{color:rgba(0,0,0,.54);color:var(--mdc-theme-text-secondary-on-background,rgba(0,0,0,.54))}.mdc-list-item__graphic.sc-limel-list{background-color:transparent;color:rgba(0,0,0,.38);color:var(--mdc-theme-text-icon-on-background,rgba(0,0,0,.38))}.mdc-list-item__meta.sc-limel-list{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-hint-on-background,rgba(0,0,0,.38))}.mdc-list--dense.sc-limel-list{padding-top:.25rem;padding-bottom:.25rem;font-size:.812rem}.mdc-list-item.sc-limel-list{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;height:3rem;padding:0 1rem;overflow:hidden}.mdc-list-item.sc-limel-list:focus{outline:none}.mdc-list-item--activated.sc-limel-list, .mdc-list-item--activated.sc-limel-list   .mdc-list-item__graphic.sc-limel-list, .mdc-list-item--selected.sc-limel-list, .mdc-list-item--selected.sc-limel-list   .mdc-list-item__graphic.sc-limel-list{color:#26a69a;color:var(--mdc-theme-primary,#26a69a)}.mdc-list-item--disabled.sc-limel-list{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-background,rgba(0,0,0,.38))}.mdc-list-item__graphic.sc-limel-list{margin-left:0;margin-right:2rem;width:1.5rem;height:1.5rem;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;fill:currentColor}.mdc-list-item[dir=rtl].sc-limel-list   .mdc-list-item__graphic.sc-limel-list, [dir=rtl].sc-limel-list   .mdc-list-item.sc-limel-list   .mdc-list-item__graphic.sc-limel-list{margin-left:2rem;margin-right:0}.mdc-list.sc-limel-list   .mdc-list-item__graphic.sc-limel-list{display:-ms-inline-flexbox;display:inline-flex}.mdc-list-item__meta.sc-limel-list{margin-left:auto;margin-right:0}.mdc-list-item[dir=rtl].sc-limel-list   .mdc-list-item__meta.sc-limel-list, [dir=rtl].sc-limel-list   .mdc-list-item.sc-limel-list   .mdc-list-item__meta.sc-limel-list{margin-left:0;margin-right:auto}.mdc-list-item__text.sc-limel-list{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-list-item__text[for].sc-limel-list{pointer-events:none}.mdc-list-item__primary-text.sc-limel-list{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-top:0;line-height:normal;margin-bottom:-1.25rem;display:block}.mdc-list-item__primary-text.sc-limel-list:before{display:inline-block;width:0;height:2rem;content:\"\";vertical-align:0}.mdc-list-item__primary-text.sc-limel-list:after{display:inline-block;width:0;height:1.25rem;content:\"\";vertical-align:-1.25rem}.mdc-list--dense.sc-limel-list   .mdc-list-item__primary-text.sc-limel-list{display:block;margin-top:0;line-height:normal;margin-bottom:-1.25rem}.mdc-list--dense.sc-limel-list   .mdc-list-item__primary-text.sc-limel-list:before{display:inline-block;width:0;height:1.5rem;content:\"\";vertical-align:0}.mdc-list--dense.sc-limel-list   .mdc-list-item__primary-text.sc-limel-list:after{display:inline-block;width:0;height:1.25rem;content:\"\";vertical-align:-1.25rem}.mdc-list-item__secondary-text.sc-limel-list{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.8125rem;line-height:1.625rem;font-weight:400;letter-spacing:.01786em;text-decoration:inherit;text-transform:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin-top:0;line-height:normal;display:block}.mdc-list-item__secondary-text.sc-limel-list:before{display:inline-block;width:0;height:1.25rem;content:\"\";vertical-align:0}.mdc-list--dense.sc-limel-list   .mdc-list-item__secondary-text.sc-limel-list{display:block;margin-top:0;line-height:normal;font-size:inherit}.mdc-list--dense.sc-limel-list   .mdc-list-item__secondary-text.sc-limel-list:before{display:inline-block;width:0;height:1.25rem;content:\"\";vertical-align:0}.mdc-list--dense.sc-limel-list   .mdc-list-item.sc-limel-list{height:2.5rem}.mdc-list--dense.sc-limel-list   .mdc-list-item__graphic.sc-limel-list{margin-left:0;margin-right:2.25rem;width:1.25rem;height:1.25rem}.mdc-list-item[dir=rtl].sc-limel-list   .mdc-list--dense.sc-limel-list   .mdc-list-item__graphic.sc-limel-list, [dir=rtl].sc-limel-list   .mdc-list-item.sc-limel-list   .mdc-list--dense.sc-limel-list   .mdc-list-item__graphic.sc-limel-list{margin-left:2.25rem;margin-right:0}.mdc-list--avatar-list.sc-limel-list   .mdc-list-item.sc-limel-list{height:3.5rem}.mdc-list--avatar-list.sc-limel-list   .mdc-list-item__graphic.sc-limel-list{margin-left:0;margin-right:1rem;width:2.5rem;height:2.5rem;border-radius:50%}.mdc-list-item[dir=rtl].sc-limel-list   .mdc-list--avatar-list.sc-limel-list   .mdc-list-item__graphic.sc-limel-list, [dir=rtl].sc-limel-list   .mdc-list-item.sc-limel-list   .mdc-list--avatar-list.sc-limel-list   .mdc-list-item__graphic.sc-limel-list{margin-left:1rem;margin-right:0}.mdc-list--two-line.sc-limel-list   .mdc-list-item__text.sc-limel-list{-ms-flex-item-align:start;align-self:flex-start}.mdc-list--two-line.sc-limel-list   .mdc-list-item.sc-limel-list{height:4.5rem}.mdc-list--avatar-list.mdc-list--dense.sc-limel-list   .mdc-list-item.sc-limel-list, .mdc-list--two-line.mdc-list--dense.sc-limel-list   .mdc-list-item.sc-limel-list{height:3.75rem}.mdc-list--avatar-list.mdc-list--dense.sc-limel-list   .mdc-list-item__graphic.sc-limel-list{margin-left:0;margin-right:1.25rem;width:2.25rem;height:2.25rem}.mdc-list-item[dir=rtl].sc-limel-list   .mdc-list--avatar-list.mdc-list--dense.sc-limel-list   .mdc-list-item__graphic.sc-limel-list, [dir=rtl].sc-limel-list   .mdc-list-item.sc-limel-list   .mdc-list--avatar-list.mdc-list--dense.sc-limel-list   .mdc-list-item__graphic.sc-limel-list{margin-left:1.25rem;margin-right:0}.sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity}.sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item:after, .sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item:before{-webkit-transition:opacity 15ms linear,background-color 15ms linear;transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded:before{-webkit-transform:scale(var(--mdc-ripple-fg-scale,1));transform:scale(var(--mdc-ripple-fg-scale,1))}.sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded:after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--foreground-activation:after{-webkit-animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards;animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--foreground-deactivation:after{-webkit-animation:mdc-ripple-fg-opacity-out .15s;animation:mdc-ripple-fg-opacity-out .15s;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item:after, .sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item:before{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item:after, .sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item:before{background-color:#000}.sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item:hover:before{opacity:.04}.sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--background-focused:before, .sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.16}.sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.16}.sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item--activated:before{opacity:.24}.sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item--activated:after, .sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item--activated:before{background-color:#26a69a}\@supports not (-ms-ime-align:auto){.sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item--activated:after, .sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item--activated:before{background-color:var(--mdc-theme-primary,#26a69a)}}.sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item--activated:hover:before{opacity:.32}.sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item--activated.mdc-ripple-upgraded--background-focused:before, .sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.48}.sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.56}.sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.56}.sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item--selected:before{opacity:.16}.sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item--selected:after, .sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item--selected:before{background-color:#26a69a}\@supports not (-ms-ime-align:auto){.sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item--selected:after, .sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item--selected:before{background-color:var(--mdc-theme-primary,#26a69a)}}.sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item--selected:hover:before{opacity:.24}.sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item--selected.mdc-ripple-upgraded--background-focused:before, .sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.4}.sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.48}.sc-limel-list:not(.mdc-list--non-interactive) > .sc-limel-list:not(.mdc-list-item--disabled).mdc-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.48}a.mdc-list-item.sc-limel-list{color:inherit;text-decoration:none}.mdc-list-divider.sc-limel-list{height:0;margin:0;border:none;border-bottom-width:.0625rem;border-bottom-style:solid;border-bottom-color:rgba(0,0,0,.12)}.mdc-list-divider--padded.sc-limel-list{margin:0 1rem}.mdc-list-divider--inset.sc-limel-list{margin-left:4.5rem;margin-right:0;width:calc(100% - 4.5rem)}.mdc-list-group[dir=rtl].sc-limel-list   .mdc-list-divider--inset.sc-limel-list, [dir=rtl].sc-limel-list   .mdc-list-group.sc-limel-list   .mdc-list-divider--inset.sc-limel-list{margin-left:0;margin-right:4.5rem}.mdc-list-divider--inset.mdc-list-divider--padded.sc-limel-list{width:calc(100% - 4.5rem - 1rem)}.mdc-list-group.sc-limel-list   .mdc-list.sc-limel-list{padding:0}.mdc-list-group__subheader.sc-limel-list{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.125rem;font-weight:400;letter-spacing:.00937em;text-decoration:inherit;text-transform:inherit;margin:3rem-1.5rem/2 1rem;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))}.sc-limel-list-h{display:block}[hidden].sc-limel-list-h{display:none}.mdc-list.sc-limel-list{cursor:pointer}.mdc-list.mdc-list--avatar-list.sc-limel-list   limel-icon.sc-limel-list{background-color:var(--icon-background-color,var(--lime-light-grey));color:#fff;height:1.875rem;width:1.875rem}"}}export{s as LimelList};