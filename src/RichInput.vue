<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input" :type="type" ref="element"
            :class="{'is-success': success, 'is-danger': showError}"
            :placeholder="placeholder"
            :value="value"
            @input="updateValue">
      <span class="icon is-small is-left" v-if="iconLeft.length > 0">
        <i :class="iconLeft"></i>
      </span>
      <span class="icon is-small is-right" v-if="iconRight.length > 0">
        <i :class="iconRight"></i>
      </span>
    </div>
    <p class="help is-danger" v-if="showError">{{ errorMessage }}</p>
    <p class="help is-success">{{ successMessage }}</p>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String
    },
    placeholder: {
      type: String
    },
    value: {
      default: ''
    },
    error: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false
    },
    successMessage: {
      type: String
    },
    errorMessage: {
      type: String
    },
    iconLeft: {
      type: String,
      default: ''
    },
    iconRight: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  computed: {
      showError(){
          if(this.error) return true;
          return (this.errorMessage.length > 0) ? true : false;
      },
      showSuccess(){
          if(this.showError) return false;
          if(this.success) return true;
          return (this.successMessage.length > 0) ? true : false; 
      }

  },
  methods: {
    updateValue() {
      this.$emit('input', this.$refs.element.value)
    }
  }
}
</script>