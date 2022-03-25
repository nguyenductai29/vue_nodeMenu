<template>
    <v-btn id="CustomButton"
        :block="!noBlock"
        :to="link"
        :disabled="disabled"
        :class="customClasses"
        :loading="loading"
        @click="callback($event)"
        v-text="title"
    >
    </v-btn>
</template>

<script>
export default {
  name: 'CustomButton',
  data() {
    return {
      clicked: false
    }
  },
  props: {
    link: [String, Object],
    title: String,
    customClass: String,
    disabled: Boolean,
    noBlock: Boolean,
    loading: Boolean
  },
  computed: {
    customClasses() {
      const baseCustomClass = { 'disable-events': this.clicked }
      const classObject = this.customClass ?? {}
      return { ...baseCustomClass, ...classObject }
    }
  },
  methods: {
    callback: function(e) {
      this.clicked = true
      setTimeout(() => this.clicked = false, 500)
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped>
#CustomButton {
  color: #fff;
  background-color: #00ACC1;
  border-color: #00ACC1;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
}

#CustomButton.v-btn--disabled {
  opacity: .65;
  color: #fff !important;
  background-color: #00ACC1 !important;
  border-color: #00ACC1 !important;
}

#CustomButton.disable-events{
  pointer-events: none
}

#CustomButton.btn-oder {
  height: 50px;
  font-size: 1.5rem;
}
</style>
