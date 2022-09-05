<template>
  <div id="bar">demo-ts</div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { Cat, Dog } from "@/class/animal";
import {bar} from '@/class/chart'

@Component({
  name: "chart",
})
export default class Chart extends Vue {
  mounted() {
    let cat = new Cat("小猫", "红色");
    let dog = new Dog("小狗", "蓝色");

    cat.eat("吃老鼠"); //红色小猫在吃老鼠
    cat.run("飞快的跑"); //红色小猫在飞快的跑
    dog.eat("吃大餐"); //蓝色小狗在吃大餐
    dog.run("跳来跳去"); //蓝色小狗在跳来跳去


      let bar = new Bar(document.getElementById('bar'),
          {
          title: {
              text: 'ECharts 入门示例'
          },
          tooltip: {},
          legend: {
              data: ['销量']
          },
          xAxis: {
              data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [
              {
                  name: '销量',
                  type: 'bar',
                  data: [5, 20, 36, 10, 10, 20]
              }
          ]
      })

      // bar.setOption({})
  }
}
</script>

<style scoped></style>
