const e=window.LimeElements.h;class t{constructor(){this.valueNo=new Date("2018-11-04"),this.valueFi=new Date("2018-11-04"),this.handleChangeNo=this.handleChangeNo.bind(this),this.handleChangeFi=this.handleChangeFi.bind(this)}render(){return[e("limel-date-picker",{language:"no",type:"datetime",label:"Localized date",value:this.valueNo,onChange:this.handleChangeNo}),e("p",{style:{"font-size":"small"}},"Value:"," ",e("code",null,this.valueNo?this.valueNo.toString():"invalid")),e("limel-date-picker",{language:"fi",format:"YYYY-MM-DD",type:"datetime",label:"Date with custom format",value:this.valueFi,onChange:this.handleChangeFi}),e("p",{style:{"font-size":"small"}},"Value:"," ",e("code",null,this.valueFi?this.valueFi.toString():"invalid"))]}handleChangeNo(e){this.valueNo=e.detail}handleChangeFi(e){this.valueFi=e.detail}static get is(){return"limel-example-date-picker-formatted"}static get encapsulation(){return"shadow"}static get properties(){return{valueFi:{state:!0},valueNo:{state:!0}}}}export{t as LimelExampleDatePickerFormatted};