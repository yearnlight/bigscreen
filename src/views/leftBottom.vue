<template>
  <div class="bar">
    <v-chart :options="options" autoresize v-if="isShow" />
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  mounted() {
    this.render();
    this.isShow = true;
  },
  methods: {
    render() {
      this.options.title.text = "卸料平台";
      this.options.yAxis.name = "Kg";
      this.options.legend.data.push(["电量"]);
      this.options.xAxis.data = [
        "2020-8-12",
        "2020-8-13",
        "2020-8-14",
        "2020-8-15",
        "2020-8-16",
        "2020-8-17",
        "2020-8-18",
      ];
      this.options.series.push({
        name: "重量",
        type: "bar",
        barMaxWidth: 30,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#83bff6" },
            { offset: 0.5, color: "#188df0" },
            { offset: 1, color: "#188df0" },
          ]),
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#2378f7" },
              { offset: 0.7, color: "#2378f7" },
              { offset: 1, color: "#83bff6" },
            ]),
          },
        },
        data: [23, 12, 27, 19, 19, 19, 9],
      });
    },
  },
  data() {
    return {
      isShow: false,
      options: {
        title: {
          left: "left",
          text: "",
          textStyle: {
            color: "#c3cbde",
            fontSize: 16,
            fontWeight: "normal",
            fontFamily: "Avenir, Helvetica, Arial, sans-serif",
          },
          padding: 20,
        },
        yAxis: {
          type: "value",
          name: "",
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
          nameTextStyle: {
            color: "#fff",
          },
          splitLine: {
            show: false,
          },
        },
        xAxis: {
          type: "category",
          data: [],
          nameTextStyle: {
            color: "#fff",
          },
          axisLine: {
            lineStyle: {
              color: "#fff",
            },
          },
          splitLine: {
            show: false,
          },
        },
        legend: {
          data: ["重量"],
          top: 30,
          textStyle: {
            color: "#ffffff",
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        series: [],
        animationDuration: 100,
        grid: {
          bottom: 20,
          top: 80,
          containLabel: true,
        },
      },
    };
  },
};
</script>

<style lang="scss">
.bar {
  height: 100%;
}
</style>