import { shallowMount } from '@vue/test-utils';
import Square from '@/components/Square.vue';

describe('Square.vue', () => {
  it('renders Square', () => {
    const wrapper = shallowMount(Square, {
      propsData: { value: 'O' },
    });

    expect(wrapper.text()).toMatch('O');
  });

});
