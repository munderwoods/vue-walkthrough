<template>
  <div class="mutate">
    <p class="animation" id="animation" @mouseover="animate">{{active ? "I'm quite a bit larger." : "I'm small."}}</p>
  </div>
</template>

<script>

export default {
  name: 'mutate',
  components: {
  }, 

  data() {
    return {
      active: false,
    }
  },

  methods: {
    animate() {
      this.active = !this.active;
    },

  }
}
</script>

<style>
.mutate {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
