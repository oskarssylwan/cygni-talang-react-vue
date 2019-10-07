<template>
  <div class="game">
    <div class="game-board">

      <!-- Board -->
      <div>
        <div class="board-row">
          <!-- Square -->
          <button type="submit" class="square"></button>
          <!-- Square -->
          <button type="submit" class="square">X</button>
          <!-- Square -->
          <button type="submit" class="square"></button>
        </div>
        <div class="board-row">
          <button type="submit" class="square"></button>
          <button type="submit" class="square"></button>
          <button type="submit" class="square"></button>
        </div>
        <div class="board-row">
          <button type="submit" class="square"></button>
          <button type="submit" class="square"></button>
          <button type="submit" class="square"></button>
        </div>
      </div>

    </div>

    <div class="game-info">
      <div>{{status}}</div>
    </div>

  </div>

</template>

<script>

import Board from '@/components/Board.vue';

import {
  calculateWinner, currentMove, initialState, jumpTo, move,
} from '@/engine/engine';

export default {
  name: 'Game',
  components: {
    Board
  },
  data() {
    return {
      state: initialState(),
    };
  },
  methods: {
  },
  computed: {
    status() { // Notera: computed methods accessas utan invokering "()", dvs bara "status" inte "status()"
      return 'Next player: X';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .game {
    display: flex;
    flex-direction: row;
  }

  .game-info {
    margin-left: 20px;
  }

  .board-row:after {
   clear: both;
   content: "";
   display: table;
  }

  .square {
    background: #fff;
    border: 1px solid #999;
    float: left;
    font-size: 24px;
    font-weight: bold;
    line-height: 34px;
    height: 34px;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    width: 34px;
  }

  .square:focus {
    outline: none;
  }

</style>
