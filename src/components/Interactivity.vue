<template>
  <div class="interactivity">
    <input type="checkbox" id="checkbox">
  </div>
</template>

<script>

export default {
  name: 'interactivity',
  components: {
  }, 

}
</script>

<style>
.interactivity {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#checkbox {
  height: 60px;
  width: 60px;
}
</style>
