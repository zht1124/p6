<template>
  <div class="before">
    <!-- 发布前 -->
    <section>
      <h2 onclick="save()">正在进行 <span id="todocount">{{arr.length}}</span></h2>
      <ol id="todolist" class="demo-box">
          <li v-for="(item,index) in arr" :key="index" v-show="item.done==false">
              <input type="checkbox" :checked="item.done" :key="item.timer" @click="change(index)">
              <p>{{item.inp}}</p>
               <a href="" @click='del(index)'></a>
          </li>
      </ol>
      <h2>已经完成 <span id="donecount">{{Twoarr.length}}</span></h2>
      <ul id="donelist">
           <li v-for="(item,index) in Twoarr" :key="index" v-show="item.done">
              <input type="checkbox" :checked="item.done" @click="xiu(index)" :key="item.timer">
              <p>{{item.inp}}</p>
               <a href="" @click='shan(index)'></a>
          </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
    name:"before",
    data(){    
        return{
              arr:[{inp:'十三',check:false},{inp:"十四",check:false}],
              Twoarr:[]
        }
    },
   created(){
        this.$bus.$on("ly",(val)=>{
           this.arr.push(val)
           console.log(this.arr);
        })
   },
   methods: {
       change(index){
            // this.arr   this.Twoarr
            this.arr[index]
            console.log(this.arr[index]);
            this.Twoarr.push(this.arr[index])
            this.arr.splice(index,1)
       },
       xiu(index){
           this.Twoarr[index];
           console.log(this.Twoarr[index]);
           this.arr.push(this.Twoarr[index])
           this.Twoarr.splice(index,1)
       },
     del(index){
         this.arr.splice(index,1)
     },
     shan(index){
       this.Twoarr.splice(index,1)
     }
   },
};
</script>
  
<style>

</style>
