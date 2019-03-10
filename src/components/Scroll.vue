<template>
  <div class="scroll">
    <p class="top" id="top">Top</p>
    <p class="bottom" id="bottom">Bottom</p>
  </div>
</template>

<script>

export default {
  name: 'scroll',
  components: {
  }, 

}
</script>

<style>
.scroll {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
