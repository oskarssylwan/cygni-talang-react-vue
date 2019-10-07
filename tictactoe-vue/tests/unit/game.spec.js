import { shallowMount, mount } from '@vue/test-utils';
import Game from '@/components/Game.vue';

import { initialState, move } from '@/engine/engine';

describe('Game.vue', () => {
  it('Renders Game start', () => {
    const wrapper = shallowMount(Game);

    const stateInit = initialState();
    expect(wrapper.vm.state).toEqual(stateInit);

    const div = wrapper.find('.game-info');
    expect(div.is('div')).toBe(true);

    expect(div.text()).toMatch('Next player: X');

  });

  it('Game logic', () => {
    const wrapper = mount(Game);

    const state0 = initialState();

    const button = wrapper.findAll('button').at(0);
    button.trigger('click');

    const state1 = move(0, state0);
    expect(wrapper.vm.state).toEqual(state1);

    const div = wrapper.find('.game-info');
    expect(div.text()).toMatch('Next player: O');

    let state = state1;
    [1, 2, 3, 4, 5, 7, 6].forEach((pos) => {
      state = move(pos, state);
    });
    // state is one step from won by X at pos 8
    wrapper.setData({ state });
    expect(div.text()).toMatch('Next player: X');

    state = move(8, state);
    wrapper.setData({ state });
    expect(div.text()).toMatch('Winner: X');

  });
});
