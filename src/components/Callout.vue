<template>
  <div v-if="showCallout">
    <div 
      v-if="safari"
      class="top callout flex-column" 
      :style="`height: ${elementBox.top}px;`"
    />
    <div 
      v-if="safari"
      class="left callout flex-column" 
      :style="
        `top: ${elementBox.top}px; 
        width: ${elementBox.left}px; 
        height: ${elementBox.bottom - elementBox.top}px;`
      "
    />
    <div 
      v-if="safari"
      class="right callout flex-column" 
      :style="
        `top: ${elementBox.top}px; 
        width: ${windowWidth - elementBox.right}px; 
        height: ${elementBox.bottom - elementBox.top}px;`
      "
    />
    <div 
      v-if="safari"
      class="bottom callout flex-column" 
      :style="
        `top: ${elementBox.bottom}px; 
        height: ${windowHeight - elementBox.bottom}px;`
      "
    />

    <svg 
      width='0' 
      height='0' 
      v-if="!(elementBox.top === 0 && elementBox.left === 0 && elementBox.bottom === 0 && elementBox.right === 0)"
    >
      <defs>
        <clipPath id='cutout'>
          <path 
            :d="`
              M 0.00,0.00 V ${windowHeight} H ${windowWidth} V 0.00 Z 
              M ${elementBox.left - 10}, ${elementBox.top - 5} a5,5 0 0 1 5 -5 H ${elementBox.right + 5} a-5,5 0 0 1 5,5 V ${elementBox.bottom + 5} a5,5 0 0 1 -5,5 H ${elementBox.left - 5} ${elementBox.top !== 0 ? 'a5,5 0 0 1 -5,-5' : ''} Z
            `"
          />
        </clipPath>
      </defs>
    </svg>
    <div v-if="!safari" class="svg-callout"/>

    <svg 
      width='0' 
      height='0' 
      v-if="!(elementBox.top === 0 && elementBox.left === 0 && elementBox.bottom === 0 && elementBox.right === 0)"
    >
      <defs>
        <clipPath id='blocker' v-if="interactive">
          <path 
            :d="`
              M 0.00,0.00 V ${windowHeight} H ${windowWidth} V 0.00 Z 
              M 12,12 H ${elementBox.right - elementBox.left + 12} V ${elementBox.bottom - elementBox.top + 12} H 13 Z
            `"
          />
        </clipPath>
      </defs>
    </svg>
    <div 
      v-if="elementBox.right - elementBox.left !== 0"
      class="svg-callout transparent" 
      :style="`
        top: ${elementBox.top - 12}px; 
        left: ${elementBox.left - 12}px; 
        width: ${elementBox.right - elementBox.left + 22}px;
        height: ${elementBox.bottom - elementBox.top + 22}px;
      `"
    />
  </div>
</template>

<script>
export default {
  props: {
    'showCallout': Boolean,
    'elementBox': {
      type: Object,
    }, 
    'windowHeight': {
      type: Number,
      defualt: 0
    }, 
    'windowWidth': {
      type: Number,
      defualt: 0
    }, 
    'interactive': {
      type: Boolean,
      default: true,
    },
  },
  components: {  },

  data() {
    return {
      safari: false,
    }
  },

  mounted() {
    this.safari = this.isSafari();
  },

  methods: {
    isSafari() {
      return /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
    },
  }
};
</script>

<style scoped>

.callout {
  position: fixed;
  isolation: auto;
  opacity: 1;
  z-index: 998;
  width: 20%;
  height: 20%;
  background-color: rgba(61, 73, 99, 0.8);
  justify-content: flex-end;
}

.top {
  top: 0;
  width: 100%;
}
.left {
  left: 0;
}
.right {
  right: 0;
}
.bottom {
  width: 100%;
}

.svg-callout {
  position: fixed;
  opacity: 1;
  z-index: 998;
  width: 100%;
  height: 100%;
  background-color: rgba(61, 73, 99, 0.8);
  justify-content: flex-end;
  clip-path: url(#cutout);
  -webkit-clip-path: url(#cutout);
  top: 0;
  left: 0;
}

.svg-callout.transparent {
  background-color: transparent;
  clip-path: url(#blocker);
  -webkit-clip-path: url(#blocker);
}
</style>
