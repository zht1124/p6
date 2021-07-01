<template>
  <div class="tou">
    头部
    <header>
      <section>
        <form action="javascript:void(0)" id="form">
          <label for="title">ToDoList</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="添加ToDo"
            required="required"
            autocomplete="off"
           v-model="dx.inp" @keydown='add($event)'/>
        </form>
      </section>
    </header>
  </div>
</template>

<script>
export default {
    name:"tou",
    data(){
        return{
            dx:{
                 inp:'',
                 check:false
            }
        }
    },
    methods: {
        add(ev){
            if(ev.keyCode==13){
                this.$bus.$emit("ly",this.dx);
                this.dx={
                    inp:"",
                    check:false
                }
            }
        }
    },
};
</script>

<style>

</style>