const e=window.LimeElements.h;class i{constructor(){this.required=!1,this.disabled=!1,this.invalid=!1,this.checkValidity=this.checkValidity.bind(this),this.changeHandler=this.changeHandler.bind(this),this.toggleEnabled=this.toggleEnabled.bind(this),this.toggleRequired=this.toggleRequired.bind(this)}render(){return[e("limel-input-field",{label:"Text Field",value:this.value,required:this.required,invalid:this.invalid,disabled:this.disabled,onChange:this.changeHandler}),e("p",null,e("limel-flex-container",{justify:"end"},e("limel-button",{onClick:this.toggleEnabled,label:this.disabled?"Enable":"Disable"}),e("limel-button",{onClick:this.toggleRequired,label:this.required?"Set Optional":"Set Required"}))),e("p",null,"Value: ",this.value)]}checkValidity(){this.invalid=this.required&&!this.value}changeHandler(e){this.value=e.detail,this.checkValidity()}toggleEnabled(){this.disabled=!this.disabled}toggleRequired(){this.required=!this.required}static get is(){return"limel-example-input-field-text"}static get encapsulation(){return"shadow"}static get properties(){return{disabled:{state:!0},invalid:{state:!0},required:{state:!0,watchCallbacks:["checkValidity"]},value:{state:!0}}}static get style(){return"p{font-size:small}"}}export{i as LimelExampleInputFieldText};