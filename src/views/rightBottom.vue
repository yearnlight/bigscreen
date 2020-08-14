<template>
  <div class="table">
    <div class="title">告警列表</div>
    <dv-scroll-board :config="config" style="width:100%;height:calc(100% - 35px)" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        header: ["项目", "塔吊", "时间", "告警"],
        data: [
          [
            "尖山项目",
            "#201",
            "2020-08-14 10:03:05",
            "<span style='color:#ffdb5c;'>负荷过重</span>",
          ],
          [
            "毛乌素项目",
            "#703",
            "2020-08-14 13:00:05",
            "<span style='color:#37a2da;'>幅度限位报警</span>",
          ],
          [
            "靖边县政府项目",
            "#110",
            "2020-08-14 15:53:05",
            '<span style="color:#ffdb5c;">负荷过重</span>',
          ],
          [
            "妇幼保健院项目",
            "#307",
            "2020-08-14 16:00:00",
            "<span style='color:#37a2da;'>幅度限位报警</span>",
          ],
          [
            "中心医院项目",
            "#103",
            "2020-08-15 09:09:05",
            "<span style='color:#37a2da;'>幅度限位报警</span>",
          ],
          [
            "靖边尖山项目",
            "#334",
            "2020-08-15 14:13:05",
            "<span style='color:#ffdb5c;'>负荷过重</span>",
          ],
          [
            "靖边尖山项目",
            "#635",
            "2020-08-15 14:33:05",
            '<span style="color:#fb7293;">机器故障</span>',
          ],
          [
            "靖边县政府项目",
            "#524",
            "2020-08-15 15:53:05",
            "<span style='color:#37a2da;'>幅度限位报警</span>",
          ],
          [
            "靖边尖山项目",
            "#325",
            "2020-08-15 17:00:00",
            "<span style='color:#37a2da;'>幅度限位报警</span>",
          ],
          [
            "靖边尖山项目",
            "#036",
            "2020-08-14 15:53:05",
            "<span style='color:#37a2da;'>幅度限位报警</span>",
          ],
        ],
        index: true,
        columnWidth: [50],
        align: ["center"],
        waitTime: 2500,
      },
    };
  },
};
</script>

<style lang="scss">
.table {
  height: calc(100% - 20px);
  padding: 10px;
  .title {
    color: #c3cbde;
    padding: 10px 5px;
    font-size: 1.2308rem;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
}
</style>