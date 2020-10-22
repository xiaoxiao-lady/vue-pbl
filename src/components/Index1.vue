<template>
  <div>
    <div class="Index">
      <div class="app-right">
        <div class="app-top" style="background: #33d6cc">
          <!-- <lay-top /> -->
        </div>
        <div class="app-main">
          <!-- <transition name="fade-slide" mode="out-in"> -->
          <!-- <keep-alive v-if="!$route.meta.noKeep">
            <router-view />
          </keep-alive>-->
          <router-view />
          <!-- </transition> -->
        </div>

        <div class="app-bottom">
          <!-- <lay-bottom /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import LayTop from "@/components/LayTop";
// import LayBottom from "@/components/LayBottom";
export default {
  components: {
    // LayTop,
    // LayBottom,
  },
  data() {
    return {};
  },
};
</script>

<style  scoped>
.Index {
  /* position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex; */
}
.app-top {
  position: relative;
  width: 100%;
  height: 70px;
  z-index: 0;
}
.app-top::after {
  position: absolute;
  display: block;
  content: "";
  top: 0;
  right: 0;
  width: 246px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  /* background-image: url("../../assets/top-bg.png"); */
  background-size: 100% 100%;
  /* // background-color: red; */
  z-index: -1;
}
.app-main {
  width: 100%;
  box-sizing: border-box;
  /* // height: calc(100% - 178px);

  // overflow: auto; */
}
.app-right {
  width: 100%;
  height: 100%;
  background-color: #eceff2;
}
.app-bottom {
  position: fixed;
  bottom: 0;
  z-index: 99;
  width: 100%;
  height: 108px;
  background-color: #fff;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.16);
}
.bottom {
  height: 108px;
  width: 100%;
}
.fade-slide-enter {
  opacity: 0;
  transform: translateX(-5%);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(5%);
}
.fade-slide-enter-active,
.fade-slide-leave-active {
  // position: absolute;
  z-index: 1;
  transition: all 0.3s ease;
}
.fade-slide-enter-to,
.fade-slide-leave {
  opacity: 1;
  transform: translateX(0);
}
</style>