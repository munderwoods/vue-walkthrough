<template>
  <Walkthrough 
    :steps="steps" 
    :stepCount="steps.length" 
    :startPath="startPath" 
    :name="name" 
    :instructionStyle="instructionStyle" 
    :buttonStyle="buttonStyle"
    :defaultPad="defaultPad"
  />
</template>

<script>
import Walkthrough from './Walkthrough.vue';
export default {
  props: [],
  components: { Walkthrough },

  data() {
    return {
      name: 'tour2',
      startPath: null,
      instructionStyle: "color: #0074D9; background: rgb(179, 219, 255); text-align: center; flex-direction: column; align-items: center; font-family: monospace; border-radius: 30px; padding: 10px; border: 3px solid #0074D9;",
      buttonStyle: "color: #0074D9; background: rgb(179, 219, 255); border: 1px solid #0074D9; margin: 10px 10px 0 10px; border-radius: 0; font-weight: 100; font-family: monosp",
      defaultPad: 30,
      steps: 
        [
          {
            elementId: 'vue-logo',
            completion: {type: 'next', payload: null},
            text: "Walkthroughs can be styled to integrate into your app.",
            pad: 500,
          },
          {
            elementId: 'vue-logo',
            completion: {type: 'next', payload: null},
            text: "The overflow setting on the document body is stored and over-written for the duration of the walkthrough. When you click Finish you will see a scroll bar reappear. This will conclude the demonstration. Thanks.",
            pad: 500,
          },
        ],
    }
  },

};
</script>

<style scoped>
display: none;

</style>
