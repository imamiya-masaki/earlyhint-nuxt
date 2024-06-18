<template>
  <div>
    <script async src="https://imamiya-masaki.github.io/thirdparty-js/deliver/third-party.js"></script>
    HTML読み込み完了
  </div>
</template>

<script lang="ts">
export default {
  async fetch() {
    // 6秒間スリープさせる
    await new Promise(resolve => setTimeout(resolve, 6000));
  },
  head() {
    return {
      script: [
        {
          src: 'https://imamiya-masaki.github.io/thirdparty-js/deliver/third-party.js',
          body: true,
          async: true,
          callback: () => {
            console.log('third-party.js 読み込み完了');
          },
        },
      ],
    };
  },
}

</script>
