const e=window.LimeElements.h;class t{constructor(){this.disabled=!1,this.currentOptionGroup=0,this.optionGroups=[[{text:"Luke Skywalker",value:"luke"},{text:"Han Solo",value:"han"},{text:"Leia Organo",value:"leia"}],[{text:"",value:""},{text:"Homer Simpson",value:"homer"},{text:"Moe Szyslak",value:"moe"},{text:"Ned Flanders",value:"ned"}],[{text:"",value:"",disabled:!0},{text:"Bart Simpson",value:"bart"},{text:"Ned Flanders",value:"ned"}],[{text:"David Tennant",value:"10"},{text:"Matt Smith",value:"11"},{text:"Peter Capaldi",value:"12"},{text:"Jodie Witthaker",value:"13"}],[]],this.onChange=this.onChange.bind(this),this.toggleEnabled=this.toggleEnabled.bind(this),this.changeOptionsGroup=this.changeOptionsGroup.bind(this)}render(){return e("section",null,e("limel-select",{label:"Favorite hero",value:this.value,options:this.optionGroups[this.currentOptionGroup],disabled:this.disabled,onChange:this.onChange}),e("p",null,e("limel-flex-container",{justify:"end"},e("limel-button",{label:this.disabled?"Enable":"Disable",onClick:this.toggleEnabled}),e("limel-button",{label:"Change Options",onClick:this.changeOptionsGroup}))),e("p",null,"Value: ",JSON.stringify(this.value)),e("p",null,"Currently showing option group:"," ",this.currentOptionGroup+1," / ",this.optionGroups.length))}onChange(e){this.value=e.detail}toggleEnabled(){this.disabled=!this.disabled}changeOptionsGroup(){this.currentOptionGroup=(this.currentOptionGroup+1)%this.optionGroups.length}static get is(){return"limel-example-select-change-options"}static get encapsulation(){return"shadow"}static get properties(){return{currentOptionGroup:{state:!0},disabled:{state:!0},value:{state:!0}}}static get style(){return"p.sc-limel-example-select-change-options{font-size:small}"}}export{t as LimelExampleSelectChangeOptions};