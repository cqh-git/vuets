<template>
  <div class="root"></div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "XY",
  setup() {
interface IPerson { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
} 
 
var customer:IPerson = { 
    firstName:"Tom",
    lastName:"Hanks", 
    sayHi: ():string =>{return "Hi there"} 
} 

    return {};
  },
});
</script>
<style scoped lang="scss">
</style>
