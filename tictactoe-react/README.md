# Tic Tac Toe - React

This is a variant of the [offcial React Tic Tac Toe tutorial](https://reactjs.org/tutorial/tutorial.html).
But at </salt> we are turning it up a notch, so you will develop the game using TDD practices and 
linter rules based on the Airbnb config.


### UI

The resulting HTML for this game should look something like this
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

To achive this, we build the UI of three components, `Game`, `Board` and `Square`.

#### Snapshots

We will not use TDD to develop the UI. Instead we will test the UI manually as we develop. 
(That is sometimes called experimental driven development)
But we won't let the code stay untested. To guarantee code quality, we will verify our code against snapshots using Jest's snapshot feature. 
