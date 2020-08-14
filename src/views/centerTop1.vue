<template>
  <div class="map">
    <baidu-map :class="['bmView']" :scroll-wheel-zoom="true" :center="location" v-if="isShow" :zoom="zoom" @click="getLocationPoint" @ready="mapReady">
      <bm-view style="width: 100%; height:100%; flex: 1"></bm-view>
      <bm-local-search :keyword="addressKeyword" :auto-viewport="true" style="display: none"></bm-local-search>
      <bm-marker v-for="(item,index) in points" :key="index" :zIndex="100" :position="{lng: item.lng, lat: item.lat}" :dragging="false">
        <bm-label :content="item.projectName" :labelStyle="{color: 'red', fontSize : '18px'}" :offset="{width: -35, height: 30}" />
      </bm-marker>
    </baidu-map>
  </div>
</template>
<script>
import Api from "@/api/index";
import mapStyleBrown from "@/json/mapBg.js";
export default {
  methods: {
    search(params) {
      let inputParams = {
        _search: false,
        limit: params ? params.limit : 10,
        page: params ? params.page : 1,
        order: "asc",
      };
      let url = Api.project.list + this.jointQuery(inputParams);
      this.$axios.get(url).then((res) => {
        if (res.code == 0) {
          this.list.total = res.page.totalCount;
          this.list.records = res.page.list;
          this.list.records.forEach((r) => {
            let lnglat = r.projectLongitudeLatitude;
            if (lnglat) {
              let lng = lnglat.split(",")[0];
              let lat = lnglat.split(",")[1];
              this.points.push({
                lng: lng,
                lat: lat,
                projectName: r.projectName,
              });
              this.setCenter(this.points);
            }
          });
          // 统计
          this.datas[0].sum = res.page.totalCount;
          this.datas[0].items[0].val = res.page.totalCount;
        }
      });
    },
    jointQuery(params) {
      let res = "?";
      for (let key in params) {
        res += `${key}=${params[key]}&`;
      }
      return res.substring(0, res.length - 1);
    },
    setMapStyle({ BMap, map }) {
      // let mapStyle = { style: "dark" };
      map.setMapStyleV2({ styleJson: mapStyleBrown });
      // map.setMapStyle(mapStyle);
    },
    mapReady({ BMap, map }) {
      this.map = map;
      this.getBoundary(map);
      this.setMapStyle({ BMap, map });
    },
    getBoundary(map) {
      let that = this;
      let bdary = new BMap.Boundary();
      bdary.get(this.cityName, function (rs) {
        //获取行政区域
        // map.clearOverlays(); //清除地图覆盖物
        var count = rs.boundaries.length; //行政区域的点有多少个
        for (var i = 0; i < count; i++) {
          var ply = new BMap.Polygon(rs.boundaries[i], {
            strokeWeight: 2, //设置多边形边线线粗
            strokeOpacity: 1, //设置多边形边线透明度0-1
            StrokeStyle: "solid", //设置多边形边线样式为实线或虚线，取值 solid 或 dashed
            strokeColor: "#409EFF", //设置多边形边线颜色
            fillColor: "#00ffff", //设置多边形填充颜色
            fillOpacity: 0.1, //设置多边形填充颜色透明度0-1  注：标红的地放你们可以去掉看一下效果，自己体验一下
          }); //建立多边形覆盖物
          map.addOverlay(ply); //添加覆盖物
          map.setViewport(ply.getPath()); //调整视野
          that.loading = false;
        }
      });
    },
    getLocationPoint(e) {
      this.lng = e.point.lng;
      this.lat = e.point.lat;
    },
    setCenter(points) {
      this.map && this.map.setViewport(points);
    },
  },
  mounted() {
    let that = this;
    that.isShow = true;
    this.search();
  },
  data() {
    return {
      isShow: false,
      map: null,
      location: {
        lng: 109.34824,
        lat: 37.357421,
      },
      zoom: 12.8,
      cityName: "靖边市",
      addressKeyword: "",
      points: [],
    };
  },
};
</script>

<style lang="scss">
.map {
  height: 100%;
  .bmView {
    height: 100%;
    width: 100%;
    .BMap_cpyCtrl {
      display: none;
    }
    .anchorBL {
      display: none;
    }
    &.hideMarker {
      .BMap_Marker {
        display: none;
      }
    }
  }
}
</style>