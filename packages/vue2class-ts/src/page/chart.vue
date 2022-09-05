<template>
  <div></div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { Cat, Dog } from "@/class/animal";

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
  }
}
</script>

<style scoped></style>
