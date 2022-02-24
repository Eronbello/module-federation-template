import { mount } from "@cypress/vue";
import HelloWorld from "./HelloWorld.vue";

beforeEach(() => {
  mount(HelloWorld, {
    propsData: {
      msg: "Hello World",
    },
  });
});

it("shows the header", () => {
  cy.get("h1").contains("Storybook");
});
