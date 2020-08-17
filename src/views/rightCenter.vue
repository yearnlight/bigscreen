<template>
  <div class="member">
    <div class="title">人员分布</div>
    <div class="content">
      <div class="content-left">
        <div class="content-left-label">
          <dv-decoration-7 style="width:150px;height:30px;">注册人员</dv-decoration-7>
        </div>
        <dv-decoration-9 style="width:100px;height:100px;">66人</dv-decoration-9>
      </div>
      <div class="content-right">
        <div class="content-left-label">
          <dv-decoration-7 style="width:150px;height:30px;">进场人员</dv-decoration-7>
        </div>
        <dv-decoration-9 style="width:100px;height:100px;">48人</dv-decoration-9>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.member {
  height: 100%;
  display: flex;
  flex-direction: column;
  .title {
    color: #c3cbde;
    padding: 10px 5px;
    margin: 10px;
    font-size: 1.2308rem;
  }
  .content {
    display: flex;
    flex: 1;
    &-left {
      padding: 20px;
      flex-direction: column;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      &-label {
        margin-bottom: 30px;
        svg {
          position: relative;
          width: auto;
          height: auto;
        }
      }
    }
    &-right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
      &-label {
        margin-bottom: 30px;
        svg {
          position: relative;
          width: auto;
          height: auto;
        }
      }
    }
  }
}
</style>