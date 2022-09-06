abstract class Chart {
  public myChart: any;
  public option: object;
  protected constructor(el: any, config: object) {
    this.myChart = el;
    this.option = config;
  }
  abstract setOption(option: object): void;
}
export class Bar extends Chart {
  constructor(el: any, config: object) {
    super(el, config);
    this.setOption(config);
  }
  setOption(config: object): void {
    this.myChart.setOption(config);
  }
}
