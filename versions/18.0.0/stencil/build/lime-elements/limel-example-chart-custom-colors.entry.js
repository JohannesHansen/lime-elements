const t=window.LimeElements.h;class s{constructor(){this.labels=["A","B"],this.datasets=[{label:"Using hex-values",data:[5,3],backgroundColor:"#ff0000",borderColor:"#ff0000"},{label:"Semi-transparent background, solid border",data:[5,3],backgroundColor:"rgba(0, 0, 255, 0.2)",borderColor:"rgba(0, 0, 255, 1)"},{label:"No color set ",data:[5,3]},{label:"No color set",data:[5,3]}],this.type="bar",this.options={scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}}render(){return t("limel-chart",{type:this.type,labels:this.labels,datasets:this.datasets,options:this.options})}static get is(){return"limel-example-chart-custom-colors"}static get encapsulation(){return"shadow"}}export{s as LimelExampleChartCustomColors};