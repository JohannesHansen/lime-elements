const e=window.LimeElements.h;import{a as t,b as i}from"./chunk-5c5c8253.js";class l{constructor(){this.textValue="",this.disabled=!1,this.value=[this.createChip("Elephant"),this.createChip("Caterpillar"),this.createChip("Badger"),this.createChip("Fish")],this.value[0].iconColor="var(--lime-red)",this.value[1].iconColor="var(--lime-orange)",this.value[2].iconColor="var(--lime-green)",this.value[3].iconColor="var(--lime-blue)"}render(){return[e("limel-switch",{label:"Disabled",onChange:e=>this.disabled=e.detail}),e("br",null),e("br",null),e("limel-chip-set",{label:"Animal",type:"input",value:this.value,required:!0,disabled:this.disabled,onChange:this.handleChange.bind(this),onInput:this.handleInput.bind(this),onKeyUp:this.handleKeyUp.bind(this)})]}handleInput(e){this.textValue=e.detail}handleKeyUp(e){e.key!==t&&e.keyCode!==i||(this.value=[...this.value,this.createChip(this.textValue)],this.textValue=null)}handleChange(e){console.log(e.detail),this.value=e.detail}createChip(e){return{id:e,text:e,removable:!0,icon:`${e}`.toLowerCase()}}static get is(){return"limel-example-chip-set-input"}static get encapsulation(){return"shadow"}static get properties(){return{disabled:{state:!0},textValue:{state:!0},value:{state:!0}}}static get style(){return"limel-chip-set[type=input].sc-limel-example-chip-set-input{--icon-background-color:#adadad;--icon-color:#fff}"}}export{l as LimelExampleChipSetInput};