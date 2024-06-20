<template>
  <div>
    HTML読み込み完了
  </div>
</template>

<script lang="ts">
export default {
  async fetch() {
    // 6秒間スリープさせる
    await new Promise(resolve => setTimeout(resolve, 6000));
  },
}

</script>
