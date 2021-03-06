<template>
  <div class="step">
    <div v-if="showInstruction" :class="windowHeight - elementBox.bottom >= 140 ? '' : 'high'" class="body">

      <div class="instruction" :style="instructionStyle">
        <div class="instruction-text">
          {{this.step.text}}
        </div>

        <div class="buttons">
        <button 
          v-if="step.completion.type === 'next' || final" 
          @click="incrementWalkthrough" 
          :style="buttonStyle"
        >{{final ? 'Finish' : 'Next'}}
        </button>

        <button @click="cancel" v-if="!final" :style="buttonStyle" style="opacity: .5">Close Guide</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'step', 
    'step.completion', 
    'final', 
    'windowHeight',
    'instructionStyle',
    'buttonStyle',
    'defaultPad',
  ],
  components: {  },

  data() {
    return {
      showInstruction: false,
      element: null,
      intervalId: null,
      scroll: false,
      elementBox: null,
      isScrolling: null,
      mutationObserver: null,
      attempts: 0,
    }
  },

  mounted() {
    this.intervalId = setInterval(() => {
      this.attempts++;
      if(this.attempts > 15) {
        clearInterval(this.intervalId);
        this.cancel();
      } else {

        this.element = document.getElementById(this.step.elementId);

        if(this.element) {
          clearInterval(this.intervalId);

          window.addEventListener('scroll', this.scrollDisplayTimeout, false); 
          window.addEventListener('resize', this.cancel);

          window.scrollTo({
            top: this.element.offsetTop - this.defaultPad - (this.step.pad ? this.step.pad : 0), 
            behavior: "smooth"
          });

          window.setTimeout(() => {
            if(!this.scroll) {
              this.display()
            }
          }, 100)
        }
      }
    }, 600);
  },

  methods: {
    setBox() {
      if(this.element) {
        this.elementBox = this.element.getBoundingClientRect();
        this.$eventBus.$emit('set_element_box', this.elementBox);
      }
    },

    scrollDisplayTimeout() {
      this.scroll = true;
      window.clearTimeout(this.isScrolling);

      this.isScrolling = setTimeout(() => {
        if(this.element) {
          this.display();
          this.scroll = false;
        }
      }, 66);
    },

    display() {
      this.mutationObserver = new MutationObserver( mutations => {
        mutations.forEach(mutation => {
          this.setBox(mutation);
        });
      });

      this.mutationObserver.observe(this.element, {
        attributes: true,
        characterData: true,
        childList: true,
        subtree: true,
        attributeOldValue: true,
        characterDataOldValue: true
      });

      this.setBox();

      this.showInstruction = true;
      this.element.focus();

      if(this.step.completion.type === "click") {
        this.element.addEventListener("click", this.incrementWalkthrough);
      } else if(this.step.completion.type === "event") {
        this.$eventBus.$on(this.step.completion.payload, this.incrementWalkthrough); 
      } else if(this.step.completion.type === "time") {
        setTimeout(this.incrementWalkthrough, this.step.completion.payload);
      }

    },

    incrementWalkthrough() {
      this.cleanup();

      this.$eventBus.$emit('increment_walkthrough');
    },

    cancel() {
      this.$emit('cancel')
    },

    cleanup() {
      this.mutationObserver.disconnect();
      this.$eventBus.$emit('clear_element_box');

      if(this.step.completion.type === 'click') {
        this.element.removeEventListener("click", this.incrementWalkthrough);
      } else if(this.step.completion.type === 'event') {
        this.$eventBus.$off(this.step.completion.payload, this.incrementWalkthrough);
      }

      window.removeEventListener('scroll', this.scrollDisplayTimeout, false); 
      window.removeEventListener('resize', this.cancel);
    }
  },

  beforeDestroy() {
    this.cleanup();

    this.showInstruction = false;
    this.element = null;
    this.intervalId = null;
  },
};
</script>

<style scoped>

.step {
  position: fixed;
  z-index: 999;
}

.body {
  display: flex;
  flex-direction: column;
  position: fixed;
  left:0;
  right: 0;
  width: 100%;
  z-index: 999;
  bottom: 10px;
  color: black;
  font-size: 16;
  font-weight: bold;
  animation-name: fadein;
  animation-duration: .5s;

}

.body.high {
  bottom: unset;
  top: 5px;
}

.instruction {
  display: flex;
  flex-direction: row;
  margin: auto;
  bottom: 5px;
  z-index: 1000;
  padding: 25px;
  border-radius: 4px;
  background-color: white;
  max-width: 80%;
  font-weight: 400;
  justify-content:space-between;
  box-shadow: 3px 3px 15px #33333322;
  text-align: left;
}

.instruction-text {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 8px;
  margin-right: 16px;
}

.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
