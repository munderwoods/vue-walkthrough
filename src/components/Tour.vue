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
            elementId: 'content',
            completion: {type: 'next', payload: null},
            text: "Walkthroughs are data driven, built out of steps you define in JSON. Click Next.",
            interactive: false,
          },
          {
            elementId: 'vue-logo',
            completion: {type: 'click', payload: null},
            text: "Each step consists of an element id that specifies which element on the page to call out, the text that appears here, and a completion requirement. The previous step in this walkthrough had a completion type of \"next\". This one is \"click\". That's why there's no longer a Next button displayed. Click on the highlighted element to continue.",
          },
          {
            elementId: 'welcome',
            completion: {type: 'event', payload: 'c_pressed'},
            text: "Requiring the user to click an element is useful for when navigation through the app is necessary to progress the walkthrough. Another completion type is \"event\". Using the Vue Event Bus allows you to specify almost anything as a completion requirement. Press \"c\" on your keyboard to continue.",
          },
          {
            elementId: 'vue-logo',
            completion: {type: 'time', payload: 5000},
            text: "The final completion type is \"time\". Please wait five seconds.",
          },
          {
            elementId: 'checkbox',
            completion: {type: 'next', payload: null},
            text: "The gray mask has a hole cut in it so there's no need to pass events through. You are actually interacting with the underlying elements normally. Try checking the checkbox then click Next.",
          },
          {
            elementId: 'checkbox',
            completion: {type: 'next', payload: null},
            text: "Try checking the checkbox again. This step is not interactive. This functionality allows for explanatory steps that can't be broken by unwanted user inputs. Click Next.",
            interactive: false,
          },
          {
            elementId: 'bottom',
            completion: {type: 'next', payload: null},
            text: "If there is't enough space to fit the instruction on the bottom of the screen then it's automatically pushed to the top. The highlighted element will also be scrolled into view smoothly.",
          },
          {
            elementId: 'animation',
            completion: {type: 'next', payload: null},
            text: "The callout listens for mutations on the element that it's highlighting. Mouse over the highlighted element a few times then press Next.",
          },
          {
            elementId: 'vue-logo',
            completion: {type: 'next', payload: null},
            text: "The overflow setting on the document body is stored and over-written for the duration of the walkthrough. When you click Finish you will see a scroll bar reappear. This will conclude the demonstration. Thanks.",
          },
        ],
    }
  },

};
</script>

<style scoped>

</style>
