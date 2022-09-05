import * as echarts from "echarts";

abstract class Chart {
    public myChart:any;
    public option:object;
    constructor(el:any,config:object){
        this.myChart = echarts.init(el);
        this.option = config
    }
    abstract setOption(option: object): void;
}
export class Bar extends Chart{
    constructor(el:string,config:object){
        super(el,config)
        this.setOption(config)
    }
    setOption(config:object):void{
        this.myChart.setOption(config)
    }
}



