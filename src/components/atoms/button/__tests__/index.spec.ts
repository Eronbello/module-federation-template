/* eslint-disable */

import { shallowMount } from "@vue/test-utils";

import Button from "../index.vue";

test("uses shallowMounts", async () => {
  const wrapper = shallowMount(Button);
  const expected = wrapper.find('h1')
  expect(expected.text()).toContain("Templta");
});
