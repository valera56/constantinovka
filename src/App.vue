<script setup lang="ts">
import {useCounterStore} from "@/stores/counter";


const state = useCounterStore()
state.fncount()
</script>

<template>
  <div class="about-block">
    <p class="logo-text">
      Девушка #1 константиновки
    </p>
    <div class="main-block">
      <div v-for="el in state.tanya" class="elem">
        <p>{{el.count}} голосов</p>
        <img class="el-img" src="./assets/tanya.jpg">
        <button class="el-btn" @click="state.fntanua()">Like</button>
      </div>
      <div v-for="el in state.saule" class="elem">
        <p>{{el.count}} голосов</p>
        <img class="el-img" src="./assets/sayle.jpg">
        <button class="el-btn" @click="state.fnsaule()">Like</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-block{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-block{
  display: flex;
}
.elem{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 50px;
  margin-right: 50px;
}
.el-btn{
  margin-top: 10px;
}
.el-img{
  width: 200px;
  height: 400px;
}
.logo-text{
  font-size: 40px;
  color: red;
  font-weight: 900;
}

@media screen and (max-width: 600px){
  .about-block{
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .main-block{
    display: flex;
  }
  .elem{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: 50px;
    margin-right: 50px;
  }
  .el-btn{
    margin-top: 10px;
  }
  .el-img{
    width: 200px;
    height: 400px;
  }
  .logo-text{
    font-size: 30px;
    color: red;
    font-weight: 900;
  }
}
@media screen and (max-width: 500px){
  .about-block{
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .main-block{
    display: flex;
  }
  .elem{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: 50px;
    margin-right: 50px;
  }
  .el-btn{
    margin-top: 10px;
  }
  .el-img{
    width: 150px;
    height: 300px;
  }
  .logo-text{
    font-size: 20px;
    color: red;
    font-weight: 900;
  }
}
@media screen and (max-width: 400px){
  .about-block{
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .main-block{
    display: flex;
  }
  .elem{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: 30px;
    margin-right: 30px;
  }
  .el-btn{
    margin-top: 10px;
  }
  .el-img{
    width: 120px;
    height: 200px;
  }
  .logo-text{
    font-size: 20px;
    color: red;
    font-weight: 900;
  }
}
</style>
