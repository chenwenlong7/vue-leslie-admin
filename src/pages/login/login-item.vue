<template>
  <div>
    <h3>使用 Windi CSS</h3>
    <div
      class="flex items-center justify-around bg-teal-100 rounded-md p-4px w-192px"
    >
      <div class="w-[25%] h-12 bg-red-400 rounded-md m-4px"></div>
      <div class="w-[25%] h-12 bg-green-400 rounded-md m-4px"></div>
      <div class="w-[25%] h-12 bg-blue-400 rounded-md m-4px"></div>
    </div>
    <br />

    <h3>使用正常的 sass</h3>
    <div class="card">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 4px;
  border-radius: 6px;
  background-color: rgb(204, 251, 241);

  .box {
    width: 48px;
    height: 48px;
    margin: 4px;
    border-radius: 6px;
  }

  .box:nth-child(1) {
    background-color: rgb(248, 113, 113);
  }

  .box:nth-child(2) {
    background-color: rgb(52, 211, 153);
  }

  .box:nth-child(3) {
    background-color: rgb(96, 165, 250);
  }
}
</style>
