<template>
  <div class="member">
    <div class="title">人员分布</div>
    <div class="content">
      <dv-decoration-9 style="width:150px;height:150px;">66人</dv-decoration-9>
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
    justify-content: center;
    align-items: center;
    flex: 1;
  }
}
</style>