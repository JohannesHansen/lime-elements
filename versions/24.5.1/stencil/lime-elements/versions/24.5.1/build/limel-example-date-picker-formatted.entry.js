import{r as e,h as t}from"./core-5f6fd4ec.js";const i=class{constructor(t){e(this,t),this.valueNo=new Date("2018-11-04"),this.valueFi=new Date("2018-11-04"),this.handleChangeNo=this.handleChangeNo.bind(this),this.handleChangeFi=this.handleChangeFi.bind(this)}render(){return[t("limel-date-picker",{language:"no",type:"datetime",label:"Localized date",value:this.valueNo,onChange:this.handleChangeNo}),t("p",{style:{"font-size":"small"}},"Value:"," ",t("code",null,this.valueNo?this.valueNo.toString():"invalid")),t("limel-date-picker",{language:"fi",format:"YYYY-MM-DD",type:"datetime",label:"Date with custom format",value:this.valueFi,onChange:this.handleChangeFi}),t("p",{style:{"font-size":"small"}},"Value:"," ",t("code",null,this.valueFi?this.valueFi.toString():"invalid"))]}handleChangeNo(e){this.valueNo=e.detail}handleChangeFi(e){this.valueFi=e.detail}};export{i as limel_example_date_picker_formatted};