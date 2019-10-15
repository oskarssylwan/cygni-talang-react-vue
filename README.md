# cygni-talang-react-vue


## Tic-tac-toe med React och Vue.js

Vi har utgått från appen som finns i denna React-tutorial [offcial React Tic Tac Toe tutorial](https://reactjs.org/tutorial/tutorial.html).
"Spelmotorn" "engine.js" har vi frikopplat och används som en modul.
Ni skall med hjälp av denna spelmotor implementera Tic-tac-toe-appen i både React och sedan Vue.js


## Övning 1
Implementera tic-tac-toe i React. (katalog tictactoe-react/)
Se README.md i den katalogen.

## Övning 2
Implementera tic-tac-toe i Vue (katalog tictactoe-vue/)
Se README.md i den katalogen.



## Spelmotorn
En impl. av spelmotor (engine.js) finns i båda katalogerna (samma kod) att importera från apparna.
(redan gjort i sklettkoden ni fått)
Se /src/game/engine.js och engine.test.js för att se hur den fungerar.

### Psuedokod för hur spelmotorn används

```js
import { calculateWinner, currentMove, initialState, move } from '@/engine/engine';

// Skapa initialtillståndet
state = initialState();
// I state finns squares - array med 9 st rutor i en array "history"

// Hämta nuvarande "move" { squares: ['X', null, 'O', ....] }  
currentMove = currentMove(state);

// Gör ett drag på position "pos"   
nextState = move(position, state);

```

## Spelet som HTML.

Appen skall byggas upp av komponenter; `Game`, `Board` and `Square`.


Resulterande HTML för spelet skall se ut ungefär så här:
```html
<!-- Game component -->
<div class="game">
  <div class="game-board">
    <!-- Board component -->
    <div>
      <div class="board-row">
        <!-- Square components -->
        <button type="submit" class="square"></button>
        <button type="submit" class="square"></button>
        <button type="submit" class="square"></button>
      </div>
      <div class="board-row">
        <!-- Square components -->
        <button type="submit" class="square"></button>
        <button type="submit" class="square"></button>
        <button type="submit" class="square"></button>
      </div>
      <div class="board-row">
        <!-- Square components -->
        <button type="submit" class="square"></button>
        <button type="submit" class="square"></button>
        <button type="submit" class="square"></button>
      </div>
    </div>
  </div>
  <div class="game-info">
    <div>Next player: X</div>
    <ol>
      <li>
        <button type="submit">Go to game start</button>
      </li>
    </ol>
  </div>
</div>
```



