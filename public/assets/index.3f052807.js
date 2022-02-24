import { openBlock, createElementBlock, defineComponent, createBlock, unref, createApp } from './__federation_shared_vue.js';
import { useI18n, createI18n } from './vendor.f7dd2192.js';
import { _export_sfc } from './plugin-vue_export-helper.b33e694d.js';

var messages = {
  "en": {
  "welcome": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Welcome to Vite + Vue 3 + Storybook + Typescript"])},
  "setup": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Recommended IDE setup:"])},
  "see-readme": {
    "see": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["see"])},
    "more-info": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["for more information."])}
  },
  "docs": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Docs"])},
  "check-reactivity": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Check reactivity"])},
  "count": (ctx) => {const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;return _plural([_normalize(["no clicks"]), _normalize([_interpolate(_named("count")), " click"]), _normalize([_interpolate(_named("count")), " clicks"])])},
  "hmr": {
    "edit": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Edit"])},
    "test": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["to test hot module replacement"])}
  },
  "select-locale": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Select locale"])}
},
"pt": {
  "welcome": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Bem vindo a Vite + Vue 3 + Storybook + Typescript"])},
  "setup": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Configuração de IDE recomendada:"])},
  "check-reactivity": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Verifique a reatividade"])},
  "count": (ctx) => {const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;return _plural([_normalize(["sem cliques"]), _normalize([_interpolate(_named("count")), " clique"]), _normalize([_interpolate(_named("count")), " cliques"])])},
  "docs": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Documentos"])},
  "hmr.edit": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Editar"])},
  "hmr.test": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["para testar a HMR"])},
  "see-readme.more-info": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Para mais informações."])},
  "see-readme.see": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["Veja"])}
},
"zh": {
  "check-reactivity": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["检查反应性"])},
  "count": (ctx) => {const { normalize: _normalize, interpolate: _interpolate, named: _named, plural: _plural } = ctx;return _plural([_normalize(["没有点击"]), _normalize(["点击 ", _interpolate(_named("count"))]), _normalize(["点击 ", _interpolate(_named("count")), " 次 "])])},
  "docs": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["文档"])},
  "hmr.edit": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["编辑"])},
  "hmr.test": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["测试热模块更换"])},
  "see-readme.more-info": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["了解更多信息。"])},
  "see-readme.see": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["看"])},
  "setup": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["推荐的 IDE 设置："])},
  "welcome": (ctx) => {const { normalize: _normalize } = ctx;return _normalize(["欢迎使用 Vite + Vue 3 + Storybook + Typescript"])}
}
};

const _sfc_main$1 = {};

function _sfc_render(_ctx, _cache) {
  return (openBlock(), createElementBlock("h1", null, "Storybook"))
}
var HelloWorld = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render]]);

var App_vue_vue_type_style_index_0_lang = '';

var App_vue_vue_type_style_index_1_scoped_true_lang = '';

const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(HelloWorld, {
        msg: unref(t)("welcome")
      }, null, 8, ["msg"]);
    };
  }
});
var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3ff0bbc9"]]);

const i18n = createI18n({
  locale: localStorage.locale || "en",
  messages
});
createApp(App).use(i18n).mount("#app");
