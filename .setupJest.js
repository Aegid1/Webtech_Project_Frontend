import Vue from 'vue';
import Vuex from 'vuex';
import { config } from '@vue/test-utils'

config.global.mocks = {
  $store: {
    state: {},
    dispatch: jest.fn()
  }
}


Vue.use(Vuex);

jest.setTimeout(10000);

global.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn()
};

import { createApp } from 'vue';
import MyComponent from '@/components/MyComponent.vue';

const app = createApp(MyComponent);
app.component('my-component', MyComponent);
