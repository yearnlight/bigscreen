<template>
  <div class="items">
    <div class="item">
      <div class="item-title">设备总数</div>
      <dv-active-ring-chart :config="config1" v-if="isShow" />
    </div>
    <div class="item">
      <div class="item-title">在线总数</div>
      <dv-active-ring-chart :config="config2" v-if="isShow" />
    </div>
    <div class="item">
      <div class="item-title">今日装载次数</div>
      <dv-active-ring-chart :config="config3" v-if="isShow" />
    </div>
    <div class="item">
      <div class="item-title">今日违规次数</div>
      <dv-active-ring-chart :config="config4" v-if="isShow" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      config1: {
        data: [
          {
            name: "塔机",
            value: 60,
          },
          {
            name: "升降机",
            value: 60,
          },
        ],
        lineWidth: 10,
        color: ["#32c8a1", "#309fcd", "#e0b66a"],
        showOriginValue: true,
      },
      config2: {
        data: [
          {
            name: "塔机",
            value: 55,
          },
          {
            name: "升降机",
            value: 40,
          },
        ],
        lineWidth: 10,
        color: ["#309fcd", "#e0b66a"],
        showOriginValue: true,
      },
      config3: {
        data: [
          {
            name: "塔机",
            value: 100,
          },
          {
            name: "升降机",
            value: 130,
          },
        ],
        lineWidth: 10,
        color: ["#32c8a1", "#309fcd", "#e0b66a"],
        showOriginValue: true,
      },
      config4: {
        data: [
          {
            name: "塔机",
            value: 1,
          },
          {
            name: "升降机",
            value: 1,
          },
        ],
        lineWidth: 10,
        color: ["#e0b66a", "#fb7293"],
        showOriginValue: true,
      },
    };
  },
  mounted() {
    let that = this;
    that.isShow = true;
  },
};
</script>

<style lang="scss">
.items {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  .item {
    width: 50%;
    height: calc(50% - 5px);
    &-title {
      font-size: 16px;
      display: flex;
      justify-content: center;
      padding-top: 30px;
    }
    .dv-active-ring-chart {
      width: calc(100% - 45px);
      height: calc(100% - 45px);
      padding: 0 22.5px;
      .dv-active-ring-chart {
        display: flex;
        justify-content: center;
      }
      .active-ring-chart-container {
        canvas {
          height: 100%;
          width: 100%;
        }
      }
      .active-ring-name {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>