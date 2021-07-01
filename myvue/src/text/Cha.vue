<template>
  <div>
    全选：<input type="checkbox" v-model='bool' @click='allSel'>
    <ul v-for="(item, index) in arr" :key="index">
      <li>
        <input type="checkbox" v-model='item.bol' @click='sel(item.id)'>
      </li>
      <li><img :src="item.img" alt="" /></li>
      <li class="p1"><span>几乎都一统江湖说</span><span>￥809</span></li>
      <li class="p2">
        <span @click="del(index)">删除</span>
        <span>
          <button @click="reduce(index)">-</button>
          <input type="button" v-model="item.num" />
          <button @click="add(index)">+</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Cha",
  data() {
    return {
      arr: [
        {
          done: false,
          img: "./img/1.jpg",
          price: 11,
          num: 1,
        },
        {
          done: false,
          name: "友情",
          price: 22,
          num: 1,
          img: "./img/2.jpg",
        },
        {
          done: false,
          name: "暧昧之情",
          price: 33,
          num: 1,
          img: "./img/3.jpg",
        },
      ],
      sum: 0,
      bool:false,
    };
  },
  methods: {
    getsum() {
      this.sum = 0;
      this.arr.forEach((item) => {
      this.sum += item.price * item.num;
      });
      this.$bus.$emit("he", this.sum);
    },
    add(index) {
      this.arr[index].num++;
      this.getsum();
    },
    reduce(index) {
      this.arr[index].num--;
      this.arr[index].num = this.arr[index].num < 0 ? 0 : this.arr[index].num;
      this.getsum();
    },
    del(index) {
      this.arr.splice(index, 1);
      this.getSum();
    },
  //  全选事件
  allSel(){
    this.bool=!this.bool;
    this.dataArr.forEach((item)=>{
      item.bol=this.bool;
    });
  },
  },
  mounted() {
    this.getsum();
  },
  created(){
    
        Object.assign(item,{bol:false});
        this.arr=res.data;
  }
};
</script>

<style>

</style>