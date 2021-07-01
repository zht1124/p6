<template>
    <div class="foor">
        <input type="checkbox">已选
        {{sum}} <button>结算</button>

    </div>
</template>

<script>
export default {
   name:"foot",
   data(){
       return{
           sum:0
       }
   },
   methods: {
       
   },
   created(){
       this.$bus.$on("he",(val)=>{
           this.sum=val
       })
   }
}
</script>

<style>

</style>