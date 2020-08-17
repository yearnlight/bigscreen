<template>
  <div class="map">
    <v-chart :options="options" autoresize v-if="isShow" />
  </div>
</template>

<script>
import echarts from "echarts";
import geoJson from "@/json/jingbian.js";
export default {
  created() {
    echarts.registerMap("JingBian", geoJson);
  },
  mounted() {
    this.render();
    this.isShow = true;
  },
  methods: {
    render() {},
  },
  data() {
    let addImage = (url, params, api, realData) => {
      console.log(api);
      return {
        type: "image",
        style: {
          image: url,
          x: api.coord([109.34824, 37.357421])[0],
          y: api.coord([109.34824, 37.357421])[1],
          width: 20,
          height: 19,
        },
      };
    };
    return {
      isShow: false,
      options: {
        backgroundColor: "transparent",
        title: {
          text: "项目分布",
          left: "left",
          textStyle: {
            color: "#c3cbde",
            fontSize: 16,
            fontWeight: "normal",
            fontFamily: "Avenir, Helvetica, Arial, sans-serif",
          },
          padding: 20,
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}<br/>{c} (p / km2)",
        },
        visualMap: {
          show: false,
        },
        bmap: {
          center: [109.34824, 37.357421],
          zoom: 5,
          roam: true,
          mapStyle: {
            styleJson: [
              {
                featureType: "water",
                elementType: "all",
                stylers: {
                  color: "#044161",
                },
              },
              {
                featureType: "land",
                elementType: "all",
                stylers: {
                  color: "#004981",
                },
              },
              {
                featureType: "boundary",
                elementType: "geometry",
                stylers: {
                  color: "#064f85",
                },
              },
              {
                featureType: "railway",
                elementType: "all",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "highway",
                elementType: "geometry",
                stylers: {
                  color: "#004981",
                },
              },
              {
                featureType: "highway",
                elementType: "geometry.fill",
                stylers: {
                  color: "#005b96",
                  lightness: 1,
                },
              },
              {
                featureType: "highway",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "arterial",
                elementType: "geometry",
                stylers: {
                  color: "#004981",
                },
              },
              {
                featureType: "arterial",
                elementType: "geometry.fill",
                stylers: {
                  color: "#00508b",
                },
              },
              {
                featureType: "poi",
                elementType: "all",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "green",
                elementType: "all",
                stylers: {
                  color: "#056197",
                  visibility: "off",
                },
              },
              {
                featureType: "subway",
                elementType: "all",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "manmade",
                elementType: "all",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "local",
                elementType: "all",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "arterial",
                elementType: "labels",
                stylers: {
                  visibility: "off",
                },
              },
              {
                featureType: "boundary",
                elementType: "geometry.fill",
                stylers: {
                  color: "#029fd4",
                },
              },
              {
                featureType: "building",
                elementType: "all",
                stylers: {
                  color: "#1a5787",
                },
              },
              {
                featureType: "label",
                elementType: "all",
                stylers: {
                  visibility: "off",
                },
              },
            ],
          },
        },
        geo: {
          show: true,
          map: "JingBian",
          roam: true,
          scaleLimit: {
            min: 1,
            max: 10,
          },
          zoom: 1,
          aspectScale: 1,
          top: 30,
          itemStyle: {
            normal: {
              borderWidth: 0.5, //区域边框宽度
              borderColor: "#009fe8", //区域边框颜色
              areaColor: "#83bff6", //区域颜色
            },
            emphasis: {
              borderWidth: 0.5,
              borderColor: "#4b0082",
              areaColor: "#188df0",
            },
          },
          label: {
            normal: {
              show: true,
              fontSize: "10",
              color: "#e0b66a",
            },
            emphasis: {
              show: true,
              color: "#e0b66a",
            },
          },
        },
        series: [
          {
            name: "地图",
            type: "custom",
            coordinateSystem: "geo",
            renderItem(params, api) {
              //具体实现自定义图标的方法
              return addImage("@/assets/img/mapPoint.png", params, api, []);
            },
            data: [{ lng: 109.34824, lat: 37.357421 }],
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
.map {
  height: 100%;
  .echarts {
    height: 100%;
    width: 100%;
  }
}
</style>