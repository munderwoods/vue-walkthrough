<template>
  <div class="walkthrough">
    <Step 
      :windowHeight="windowHeight"
      v-for="(step, index) in steps"
      :step="step"
      v-if="stepNumber === index + 1"
      :key="index"
      :final="stepCount === stepNumber"
      @cancel="cancel"
      :instructionStyle="instructionStyle"
      :buttonStyle="buttonStyle"
      :defaultPad="defaultPad"
    />

    <Callout 
      :showCallout="started"
      :elementBox="{top: elementBox.top, left: elementBox.left, right: elementBox.right, bottom: elementBox.bottom}" 
      :windowHeight="windowHeight" 
      :windowWidth="windowWidth"
      :interactive="stepNumber > 0 ? steps[stepNumber - 1].interactive: false"
    />
  </div>
</template>

<script>
import Step from './Step.vue';
import Callout from './Callout.vue';
export default {
  props: [
    'steps', 
    'stepCount', 
    'startPath', 
    'name',
    'instructionStyle',
    'buttonStyle',
    'defaultPad',
  ],
  components: { Step, Callout },

  data() {
    return {
      started: false,
      stepNumber: 0,
      windowWidth: null,
      windowHeight: null,
      elementBox: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
      overflow: null,
    }
  },

  created() {
    this.$eventBus.$on(`start_walkthrough`, walkthroughName => {

      this.$eventBus.$emit('close_walkthroughs', this.name);
      this.$eventBus.$on('close_walkthroughs', () => {
        this.cancel();
      });

      this.$nextTick(() => {
        if(!this.started && walkthroughName === this.name) {
          this.windowWidth = window.innerWidth;
          this.windowHeight = window.innerHeight;

          this.started = true;

          this.$eventBus.$on('set_element_box', elementBox => {
            this.elementBox = elementBox;
          })

          this.$eventBus.$on('clear_element_box', () => {
            this.elementBox = {top: 0, left: 0, bottom: 0, right: 0};
          })

          if(this.startPath && this.$route.startPath !== this.startPath) {
            this.$router.push(this.startPath);
          }

          this.incrementWalkthrough()

          this.switchScroll("on");

          document.addEventListener('keyup', e => {
            if(e.code === 'Escape') {
              this.cancel();
            }
          });

        }
      })
    });

    this.$eventBus.$on('increment_walkthrough', () => {
      if(this.stepNumber > 0) {
        this.incrementWalkthrough()
      }
    })

  },

  methods: {
    switchScroll(onOff) {
      if(onOff === "on") {
        let bodyStyle = window.getComputedStyle(document.body);
        this.overflow = bodyStyle.getPropertyValue('overflow');
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = this.overflow;
      }
    },

    incrementWalkthrough() {
      if(this.stepNumber < this.stepCount) {
        this.stepNumber++;
      } else {
        this.switchScroll("off");
        this.started = false;
        this.stepNumber = 0;
      }
    },

    startWalkthrough(event) {
      if(!this.started) {
        this.started = true;
        this.$eventBus.$emit(event);
      }
    },

    cancel() {
      this.switchScroll("off");
      this.started = false;
      this.stepNumber = 0;
    }
  },

};
</script>

<style scoped>

.walkthrough {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

</style>
