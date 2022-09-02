const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
// import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
// @Component({
//   name: 'homepage',
//   components: {}
// })
//
// export class MyComponent extends Vue {
//   @Prop({ default: '' }) private name!: string
//   @Watch('name', { deep: true })
//   changeName(newVal,olVal){}
//
//   //data
//   private count:number=5
//   private arr:string[]=[]
//   mounted(){}
//
//   //methods
//   private test(){}
// }
