<template>
  <div id="index">
    <dv-full-screen-container class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 style="width:33.3%;height:5px;" />
          <div class="d-flex jc-center">
            <dv-decoration-8 :color="['#568aea', '#000000']" style="width:200px;height:50px;" />
            <div class="title">
              <span class="title-text">监控可视化平台</span>
              <dv-decoration-6 class="title-bototm" :reverse="true" :color="['#50e3c2', '#67a1e5']" style="width:250px;height:8px;" />
            </div>
            <dv-decoration-8 :reverse="true" :color="['#568aea', '#000000']" style="width:200px;height:50px;" />
          </div>
          <dv-decoration-10 style="width:33.3%;height:5px;" />
        </div>

        <!-- 第二行 -->
        <div class="d-flex jc-between px-2"></div>

        <div class="body-box">
          <!-- 第三行数据 -->
          <!-- <div class="content-box"> -->
          <div class="left">
            <div class="left-top">
              <dv-border-box-8>
                <leftTop />
              </dv-border-box-8>
            </div>
            <div class="left-bottom">
              <dv-border-box-8>
                <leftBottom />
              </dv-border-box-8>
            </div>
          </div>
          <div class="center">
            <div class="center-top">
              <dv-border-box-8>
                <centerTop1 />
              </dv-border-box-8>
            </div>
            <div class="center-bottom">
              <dv-border-box-8>
                <centerBottom />
              </dv-border-box-8>
            </div>
          </div>
          <div class="right">
            <div class="right-top">
              <dv-border-box-8>
                <rightTop />
              </dv-border-box-8>
            </div>
            <div class="right-mid">
              <dv-border-box-8>
                <rightCenter />
              </dv-border-box-8>
            </div>
            <div class="right-bottom">
              <dv-border-box-8>
                <rightBottom />
              </dv-border-box-8>
            </div>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import leftTop from "./leftTop";
import leftBottom from "./leftBottom";
import centerTop1 from "./centerTop1";
import centerBottom from "./centerBottom";
import rightTop from "./rightTop";
import rightCenter from "./rightCenter";
import rightBottom from "./rightBottom";
export default {
  data() {
    return {
      loading: true,
    };
  },
  components: {
    leftBottom,
    leftTop,
    centerTop1,
    centerBottom,
    rightTop,
    rightCenter,
    rightBottom,
  },
  mounted() {
    this.cancelLoading();
  },
  methods: {
    cancelLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
</style>