<template>
  <div class="modal" id="modal" v-show="isModalVisible">
    <div class="modal-overlay"></div>
    <div class="modal-content -elevation-10" id="modal-content">
      <button class="btn-close" @click="onClose">close</button>
      <p class="text">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum<br /><br />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum<br /><br />
      </p>
      <button class="btn-close" @click="onClose">close</button>
    </div>
  </div>

  <p>remembers the scroll position</p>
  <p>remembers the scroll position</p>
  <p>remembers the scroll position</p>
  <p>remembers the scroll position</p>
  <p>remembers the scroll position</p>

  <div class="toggle-wrapper">
    <button class="toggle -elevation-10" id="toggle" @click="onToggle">
      <span>Toggle {{ isModalVisible }}</span>
    </button>
  </div>
</template>

<script lang="ts">
// @ts-nocheck

import { defineComponent } from 'vue'
import {
  disableScrollLock,
  enableScrollLock,
  getScrollbarWidth,
  isScrollLockEnabled,
} from '../../dist/index.esm'

export default defineComponent({
  data() {
    return {
      isModalVisible: false,
    }
  },
  computed: {},
  methods: {
    onClose() {
      this.isModalVisible = false
      disableScrollLock()
    },
    onToggle() {
      this.isModalVisible = !this.isModalVisible
      if (this.isModalVisible) enableScrollLock()
      else disableScrollLock()
    },
  },
  beforeMount() {},
  mounted() {},
  beforeUnmount() {},
})
</script>

<style lang="scss">
p {
  background: rgba(255, 255, 255, 0.5);
  padding: 1rem;
}
.app {
  min-height: 300vh;
  background: linear-gradient(dodgerblue, deeppink);
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > p {
    text-align: right;
  }
}

.toggle-wrapper {
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  pointer-events: none;
}
.toggle {
  pointer-events: initial;
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 1rem;
  color: black;
  border-radius: 4px;
  width: 100%;
  max-width: 300px;
  display: block;
}
.toggle {
  > span:first-child {
    min-width: 65px;
    display: inline-block;
  }
  > span:nth-child(2) {
    min-width: 70px;
    display: inline-block;
  }
}

.modal {
  z-index: 1;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.modal.is-ready .modal-content {
  transition: transform 300ms;
}
.modal-content {
  transform: scale(0);
  position: relative;
  top: 6rem;
  max-width: 300px;
  max-height: 300px;
  background: white;
  padding: 1rem;
  overflow-y: auto;
  pointer-events: initial;
  z-index: 3;
  border-radius: 4px;
}
.modal-overlay {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
.text {
  line-height: 1.5;
}
.btn-close {
  border: 1px solid;
  padding: 1rem;
  border-radius: 4px;
}

.-elevation-10 {
  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2),
    0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);
}

html[scroll-lock-is-active] .modal-content {
  transform: scale(1);
}

html[scroll-lock-is-active] .modal-overlay {
  display: block;
}

html[scroll-lock-is-active] button {
  visibility: visible;
}
</style>
