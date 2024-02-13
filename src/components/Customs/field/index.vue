<template>
  <v-text-field
    class="input"
    elevation="0"
    :outlined="outlined"
    :prefix="prefixText"
    ref="input"
    :label="label"
    :solo="solo"
    :flat="true"
    :filled="filled"
    :dense="dense"
    :append-icon="showPassword || icon"
    :type="show ? 'text' : type"
    :placeholder="placeholder"
    :disabled="disabled"
    :multiple="multiple"
    :counter="counter"
    hide-details="auto"
    :rules="required ? rules : []"
    :mask="mask"
    :pattern="pattern"
    :value="modelValue"
    @input="inputValue"
    @click:append="type === 'password' ? (show = !show) : $emit('icon-click')"
    @keyup.enter="$emit('onEnter', modelValue)"
  />
</template>

<script>
export default {
  name: "CustomInput",
  model: {
    prop: "modelValue",
    event: "inputValue",
  },
  props: {
    refInput: {
      type: String,
      default: "",
    },
    dense: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    filled: {
      type: Boolean,
      default: false,
    },
    solo: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
    },
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "Введите информацию",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    multiple: {
      // для выбора нескольких файлов (type="file")
      type: Boolean,
      default: false,
    },
    counter: {
      // счетчик отображающий количество выбранных файлов (type="file")
      type: Number,
      default: null,
    },
    prefixText: {
      type: String,
      default: "",
    },
    mask: {
      type: String,
      default: "",
    },
    pattern: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      show: false,
      rules: [(value) => !!value || "Обязательна к заполнению."],
    };
  },
  computed: {
    showPassword() {
      return this.type === "password"
        ? this.show
          ? "mdi-eye"
          : "mdi-eye-off"
        : "";
    },
  },
  methods: {
    inputValue(e) {
      this.$emit("inputValue", e);
    },
    focus() {
      this.$refs.input.focus();
    },
  },
};
</script>
