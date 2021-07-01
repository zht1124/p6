<template>
<div class="head">
   <h3> {{msg}}</h3>
  <Cha></Cha>
  <Foot></Foot>
</div>

</template>

<script>
import Cha from './Cha.vue'
import Foot from './Foot.vue'

export default {
   name:"shop",
   data(){
       return{
           msg:"我的购物车"
       }
   },
   methods: {
       
   },
   components:{
       Cha,
       Foot
   }
}
</script>

<style>
ul {
  width: 900px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  border-top: 1px dashed salmon;
  border-bottom: 1px dashed salmon;
  margin: 0 auto;
}
ul li {
  margin-top: 30px;
  list-style: none;
  align-items: center;
}
img{
    width: 40px;
    height: 30px;
}
.p1 {
  display: flex;
  flex-direction: column;
}
.p1 span:last-child {
  color: salmon;
}
.p2 {
  display: flex;
  flex-direction: column;
}
.p2 span:last-child {
 width: 100px;
 height: 20px;
 display: inline-block;
 justify-content: space-between;
}
</style>