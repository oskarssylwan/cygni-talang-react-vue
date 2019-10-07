import { mount } from '@vue/test-utils';
import Square from '@/components/Square.vue';
import Board from '@/components/Board.vue';

describe('Board.vue', () => {

  it('Renders Board', () => {
    const squares = [null, 'X', null, null, null, null, null, null, 'O'];
    const wrapper = mount(Board, {
      propsData: { squares },
    });

    expect(wrapper.props().squares).toEqual(squares);

    const firstSquare = wrapper.findAll(Square).at(0);
    expect(firstSquare.text()).not.toMatch('X');
    const secondSquare = wrapper.findAll(Square).at(1);
    expect(secondSquare.text()).toMatch('X');
    const lastSquare = wrapper.findAll(Square).at(8);
    expect(lastSquare.text()).toMatch('O');
  });

  it('Click events for Squares on Board', () => {

    const squares = [null, 'X', null, null, null, null, null, null, 'O'];
    const wrapper = mount(Board, {
      propsData: { squares },
    });

    const button = wrapper.find('button');
    expect(button.is('button')).toBe(true);

    let clickevent;
    const clickMethodStub = (row, col) => {
      clickevent = { row, col };
    };

    wrapper.setMethods({ squareClick: clickMethodStub });
    button.trigger('click');
    expect(clickevent).toBeDefined();
    expect(clickevent).toEqual({ row: 0, col: 0 });

    wrapper.setProps({ squares: ['X', 'X', null, null, null, null, null, null, 'O'] });
    const firstSquare = wrapper.findAll(Square).at(0);
    expect(firstSquare.text()).toMatch('X');

    const lastSquareButton = wrapper.findAll('button').at(8);
    lastSquareButton.trigger('click');
    expect(clickevent).toEqual({ row: 2, col: 2 });

  });

});
