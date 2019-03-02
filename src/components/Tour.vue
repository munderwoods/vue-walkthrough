<template>
  <Walkthrough :steps="steps" :stepCount="steps.length" :startPath="startPath" :name="name"/>
</template>

<script>
import Walkthrough from './Walkthrough.vue';
export default {
  props: [],
  components: { Walkthrough },

  data() {
    return {
      name: 'tour',
      startPath: null,
      steps: 
        [
          {
            elementId: 'vue-logo',
            completion: {type: 'next', payload: null},
            text: "Walkthroughs are data driven, built out of steps you define in JSON. Click next.",
          },
          {
            elementId: 'vue-logo',
            completion: {type: 'click', payload: null},
            text: "Each step consists of an element id that specifies which element on the page to call out, the text that appears here, and a completion requirement. The previous step in this walkthrough had a completion type of \"next\". This one is \"click\". That's why there's no longer a next button displayed. Click on the highlighted element to continue.",
          },
          {
            elementId: 'vue-logo',
            completion: {type: 'event', payload: 'c_pressed'},
            text: "There are also \"time\" and \"event\" completion types. Using the Vue Event Bus allows you to specify almost anything as a completion requirement. Press \"c\" on your keyboard to continue.",
          },
          {
            elementId: 'vue-logo',
            completion: {type: 'next', payload: null},
            text: "The gray mask has a hole cut in it so there's no need to pass events through. You are actually interacting with the underlying elements normally.",
          },
        ],
    }
  },

};
</script>

<style scoped>

</style>
