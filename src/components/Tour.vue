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
      name: 'tour',
      startPath: null,
      instructionStyle: "background: #0074D9; color: rgb(179, 219, 255);",
      buttonStyle: "",
      defaultPad: 100,
      steps: 
        [
          {
            elementId: 'welcome',
            completion: {type: 'next', payload: null},
            text: "Walkthroughs are data driven, built out of steps you define in JSON. Click Next.",
            interactive: false,
            pad: 500,
          },
          {
            elementId: 'vue-logo',
            completion: {type: 'click', payload: null},
            text: "Each step consists of an element id that specifies which element on the page to call out, the text that appears here, and a completion requirement. The previous step in this walkthrough had a completion type of \"next\". This one is \"click\". That's why there's no longer a Next button displayed. Click on the highlighted element to continue.",
            pad: 500,
          },
          {
            elementId: 'welcome',
            completion: {type: 'event', payload: 'c_pressed'},
            text: "Requiring the user to click an element is useful for when navigation through the app is necessary to progress the walkthrough. Another completion type is \"event\". Using the Vue Event Bus allows you to specify almost anything as a completion requirement. Press \"c\" on your keyboard to continue.",
            pad: 500,
          },
          {
            elementId: 'vue-logo',
            completion: {type: 'time', payload: 5000},
            text: "The final completion type is \"time\". Please wait five seconds.",
            pad: 500,
          },
          {
            elementId: 'interactivity-link',
            completion: {type: 'click', payload: null},
            text: "Click on Interactivity.",
            pad: 500,
          },
          {
            elementId: 'checkbox',
            completion: {type: 'next', payload: null},
            text: "The gray mask has a hole cut in it so there's no need to pass events through. You are actually interacting with the underlying elements normally. Try checking the checkbox then click Next.",
            pad: 800,
          },
          {
            elementId: 'checkbox',
            completion: {type: 'next', payload: null},
            text: "Try checking the checkbox again. This step is not interactive. This functionality allows for explanatory steps that can't be broken by unwanted user inputs. Click Next.",
            pad: 800,
            interactive: false,
          },
          {
            elementId: 'scroll-link',
            completion: {type: 'click', payload: null},
            text: "Click on Scrolling.",
            pad: 500,
          },
          {
            elementId: 'top',
            completion: {type: 'next', payload: null},
            text: "The highlighted element will be scrolled into view smoothly. You can define a default scroll offset if you have a persistent nav bar, and a specific scroll offset for each step.",
            pad: 800,
          },
          {
            elementId: 'bottom',
            completion: {type: 'next', payload: null},
            text: "If there is't enough space to fit the instruction on the bottom of the screen then it's automatically pushed to the top.",
          },
          {
            elementId: 'mutate-link',
            completion: {type: 'click', payload: null},
            text: "Click on Mutation.",
            pad: 500,
          },
          {
            elementId: 'animation',
            completion: {type: 'next', payload: null},
            text: "The callout listens for mutations on the element that it's highlighting. Mouse over the highlighted element a few times then press Next.",
            pad: 800,
          },
          {
            elementId: 'end-link',
            completion: {type: 'click', payload: null},
            text: "Click on End.",
            pad: 500,
          },
          {
            elementId: 'button2',
            completion: {type: 'click', payload: null},
            text: "Walkthroughs can seamlessly lead into one another. To begin another walkthrough from within this one, click Begin Part 2.",
            pad: 800,
          },
        ],
    }
  },

};
</script>

<style scoped>
display: none;

</style>
