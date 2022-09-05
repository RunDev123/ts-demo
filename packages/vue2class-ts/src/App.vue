<template>
  <div class="todo-container">
    <h3>lerna+yarn+workspace+monorepo+eslint+prettier+vue2.6+ts</h3>
    <div class="container-tab">
      <div
        class="item-tab"
        v-for="(item, index) in tabs"
        :key="index"
        @click="changeTitle(item)"
      >
        {{ item.title }}
      </div>
    </div>
    <component :is="currentComponent"></component>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import List from "@/page/list";
import Chart from "@/page/chart";
@Component({
  name: "App",
  components: {
    List,
    Chart,
  },
})
export default class App extends Vue {
  tabs: object[] = [
    {
      title: "示例一",
      component: "List",
    },
    {
      title: "示例二",
      component: "Chart",
    },
  ];
  currentComponent = "Chart";
  changeTitle(item: object): void {
    this.currentComponent = item.component;
  }
}
</script>

<style scoped>
h3 {
  text-align: center;
}
.container-tab {
  display: flex;
  justify-content: center;
  margin: 30px 0;
}
.item-tab {
  cursor: pointer;
  margin-left: 30px;
}
</style>
