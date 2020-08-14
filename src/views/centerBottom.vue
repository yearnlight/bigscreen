<template>
  <div class="line">
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
      this.options.title.text = "环境监测曲线图";
      this.options.yAxis.name = "μg/m³";
      this.options.legend.data.push(["PM2.5", "PM10"]);
      this.options.xAxis.data = [
        "2020-8-12",
        "2020-8-13",
        "2020-8-14",
        "2020-8-15",
      ];
      this.options.series.push({
        name: "PM2.5",
        type: "line",
        smooth: true,
        symbol: "none",
        sampling: "average",
        itemStyle: {
          color: "#2a87be",
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(62, 185, 226,0.5)",
            },
            {
              offset: 1,
              color: "rgb(62, 185, 226,0.1)",
            },
          ]),
        },
        data: [1, 23, 20, 7],
      });
      this.options.series.push({
        name: "PM10",
        type: "line",
        smooth: true,
        symbol: "none",
        sampling: "average",
        itemStyle: {
          color: "#2a87be",
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(62, 185, 226,0.5)",
            },
            {
              offset: 1,
              color: "rgb(62, 185, 226,0.1)",
            },
          ]),
        },
        data: [6.6, 2, 13, 14],
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
            splitLine: {
              show: false,
            },
          },
        },
        legend: {
          data: [],
          top: 20,
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
          right: 0,
          containLabel: true,
        },
      },
    };
  },
};
</script>

<style lang="scss">
.line {
  height: 100%;
}
</style>