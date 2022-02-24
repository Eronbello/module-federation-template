import { defineComponent, ref, openBlock, createElementBlock, createElementVNode as createBaseVNode, toDisplayString, createTextVNode, unref, createVNode, Fragment, pushScopeId, popScopeId, createStaticVNode, watch, withDirectives, vModelSelect, renderList, isRef, createApp } from './__federation_shared_vue.js';
import { useI18n, createI18n } from './vendor.f7dd2192.js';
import BasicButton, { _export_sfc } from './__federation_expose_BasicButton.js';

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

var __glob_6_0 = "./assets/eslint.485cf619.svg";

var __glob_6_1 = "./assets/prettier.023fa512.svg";

var __glob_6_2 = "./assets/storybook.3c33c7f8.svg";

var __glob_6_3 = "./assets/ts.b487cbba.svg";

var __glob_6_4 = "./assets/vite.17e50649.svg";

var __glob_6_5 = "./assets/vue.606c4449.svg";

var HelloWorld_vue_vue_type_style_index_0_scoped_true_lang = '';

const _withScopeId = (n) => (pushScopeId("data-v-6cb38e84"), n = n(), popScopeId(), n);
const _hoisted_1$2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", { href: "https://code.visualstudio.com/" }, "VSCode", -1));
const _hoisted_2$2 = /* @__PURE__ */ createTextVNode(" + ");
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", { href: "https://github.com/johnsoncodehk/volar" }, "Volar", -1));
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" + ");
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", { href: "https://github.com/lokalise/i18n-ally" }, "i18n-ally", -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("code", null, "README.md", -1));
const _hoisted_7 = /* @__PURE__ */ createStaticVNode('<p data-v-6cb38e84><a href="https://vitejs.dev/guide/features.html" data-v-6cb38e84> Vite </a> | <a href="https://v3.vuejs.org/" data-v-6cb38e84>Vue 3</a> | <a href="https://storybook.js.org/docs/vue/get-started/introduction" data-v-6cb38e84> Storybook </a> | <a href="https://www.typescriptlang.org/docs/" data-v-6cb38e84> Typescript </a> | <a href="https://eslint.org/docs/user-guide/" data-v-6cb38e84> ESLint </a> | <a href="https://prettier.io/docs/en/index.html" data-v-6cb38e84> Prettier </a></p>', 1);
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("code", null, "components/HelloWorld.vue", -1));
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    msg: null
  },
  setup(__props) {
    const count = ref(0);
    const { t } = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("h1", null, toDisplayString(__props.msg), 1),
        createBaseVNode("p", null, [
          createTextVNode(toDisplayString(unref(t)("setup")) + " ", 1),
          _hoisted_1$2,
          _hoisted_2$2,
          _hoisted_3,
          _hoisted_4,
          _hoisted_5
        ]),
        createBaseVNode("p", null, [
          createTextVNode(toDisplayString(unref(t)("see-readme.see")) + " ", 1),
          _hoisted_6,
          createTextVNode(" " + toDisplayString(unref(t)("see-readme.more-info")), 1)
        ]),
        createBaseVNode("h2", null, toDisplayString(unref(t)("docs")), 1),
        _hoisted_7,
        createBaseVNode("h3", null, toDisplayString(unref(t)("check-reactivity")), 1),
        createVNode(BasicButton, {
          size: "small",
          type: "button",
          onClick: _cache[0] || (_cache[0] = ($event) => count.value++),
          label: unref(t)("count", { count: count.value })
        }, null, 8, ["label"]),
        createBaseVNode("p", null, [
          createTextVNode(toDisplayString(unref(t)("hmr.edit")) + " ", 1),
          _hoisted_8,
          createTextVNode(" " + toDisplayString(unref(t)("hmr.test")), 1)
        ])
      ], 64);
    };
  }
});
var HelloWorld = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6cb38e84"]]);

var LocaleSelect_vue_vue_type_style_index_0_scoped_true_lang = '';

const _hoisted_1$1 = { class: "locales" };
const _hoisted_2$1 = ["value"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { availableLocales, locale } = useI18n();
    watch(locale, (newLocale) => {
      if (newLocale)
        localStorage.locale = newLocale;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        withDirectives(createBaseVNode("select", {
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(locale) ? locale.value = $event : null)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(availableLocales), (locale2) => {
            return openBlock(), createElementBlock("option", {
              value: locale2,
              class: "locale",
              key: locale2
            }, toDisplayString(locale2), 9, _hoisted_2$1);
          }), 128))
        ], 512), [
          [vModelSelect, unref(locale)]
        ])
      ]);
    };
  }
});
var LocaleSelect = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4349012a"]]);

var links = [
	{
		href: "https://vitejs.dev/",
		alt: "Vite logo",
		src: "vite"
	},
	{
		href: "https://v3.vuejs.org/",
		alt: "Vue 3 logo",
		src: "vue"
	},
	{
		href: "https://storybook.js.org/",
		alt: "Storybook logo",
		src: "storybook"
	},
	{
		href: "https://www.typescriptlang.org/",
		alt: "TS logo",
		src: "ts"
	},
	{
		href: "https://eslint.org//",
		alt: "ESLint logo",
		src: "eslint"
	},
	{
		href: "https://prettier.io/",
		alt: "Prettier logo",
		src: "prettier"
	}
];

var App_vue_vue_type_style_index_0_lang = '';

var App_vue_vue_type_style_index_1_scoped_true_lang = '';

const _hoisted_1 = ["href"];
const _hoisted_2 = ["alt", "src"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const { t } = useI18n();
    const getImgURL = (src) => {
      return new URL({ "./assets/svg/eslint.svg": __glob_6_0, "./assets/svg/prettier.svg": __glob_6_1, "./assets/svg/storybook.svg": __glob_6_2, "./assets/svg/ts.svg": __glob_6_3, "./assets/svg/vite.svg": __glob_6_4, "./assets/svg/vue.svg": __glob_6_5,}[`./assets/svg/${src}.svg`], self.location).href;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(LocaleSelect),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(links), ({ alt, src, href }) => {
          return openBlock(), createElementBlock("a", {
            key: alt,
            class: "logo-link",
            href
          }, [
            createBaseVNode("img", {
              class: "logo",
              alt,
              src: getImgURL(src)
            }, null, 8, _hoisted_2)
          ], 8, _hoisted_1);
        }), 128)),
        createVNode(HelloWorld, {
          msg: unref(t)("welcome")
        }, null, 8, ["msg"])
      ], 64);
    };
  }
});
var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2233e658"]]);

const i18n = createI18n({
  locale: localStorage.locale || "en",
  messages
});
createApp(App).use(i18n).mount("#app");
