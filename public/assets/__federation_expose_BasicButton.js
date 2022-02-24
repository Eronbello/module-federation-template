import {importShared} from './__federation_fn_import.js'
import { _export_sfc } from './plugin-vue_export-helper.b33e694d.js';
const {defineComponent,computed,openBlock,createElementBlock,toDisplayString,normalizeClass,unref,normalizeStyle} = await importShared('vue')

var BasicButton_vue_vue_type_style_index_0_scoped_true_lang = '';

const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    label: null,
    primary: { type: Boolean, default: false },
    backgroundColor: null,
    size: null
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const onClick = () => {
      emit("click");
    };
    const classes = computed(() => ({
      "storybook-button": true,
      "storybook-button--primary": props.primary,
      "storybook-button--secondary": !props.primary,
      [`storybook-button--${props.size || "medium"}`]: true
    }));
    const style = computed(() => ({
      backgroundColor: props.backgroundColor
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: normalizeClass(unref(classes)),
        onClick,
        style: normalizeStyle(unref(style))
      }, toDisplayString(__props.label), 7);
    };
  }
});
var BasicButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1926115e"]]);

export { BasicButton as default };
