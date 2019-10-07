# Tic Tac Toe - React

This is a variant of the [offcial React Tic Tac Toe tutorial](https://reactjs.org/tutorial/tutorial.html).
But at &lt;/salt&gt; we are turning it up a notch, so you will develop the game using TDD practices and 
linter rules based on the Airbnb config.


### UI

The resulting HTML for this game should look something like this
```html
&lt;!-- Game component --&gt;
&lt;div class="game"&gt;
  &lt;div class="game-board"&gt;
    &lt;!-- Board component --&gt;
    &lt;div&gt;
      &lt;div class="board-row"&gt;
        &lt;!-- Square components --&gt;
        &lt;button type="submit" class="square"&gt;&lt;/button&gt;
        &lt;button type="submit" class="square"&gt;&lt;/button&gt;
        &lt;button type="submit" class="square"&gt;&lt;/button&gt;
      &lt;/div&gt;
      &lt;div class="board-row"&gt;
        &lt;!-- Square components --&gt;
        &lt;button type="submit" class="square"&gt;&lt;/button&gt;
        &lt;button type="submit" class="square"&gt;&lt;/button&gt;
        &lt;button type="submit" class="square"&gt;&lt;/button&gt;
      &lt;/div&gt;
      &lt;div class="board-row"&gt;
        &lt;!-- Square components --&gt;
        &lt;button type="submit" class="square"&gt;&lt;/button&gt;
        &lt;button type="submit" class="square"&gt;&lt;/button&gt;
        &lt;button type="submit" class="square"&gt;&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="game-info"&gt;
    &lt;div&gt;Next player: X&lt;/div&gt;
    &lt;ol&gt;
      &lt;li&gt;
        &lt;button type="submit"&gt;Go to game start&lt;/button&gt;
      &lt;/li&gt;
    &lt;/ol&gt;
  &lt;/div&gt;
&lt;/div&gt;
```

To achive this, we build the UI of three components, `Game`, `Board` and `Square`.

#### Snapshots

We will not use TDD to develop the UI. Instead we will test the UI manually as we develop. 
(That is sometimes called experimental driven development)
But we won't let the code stay untested. To guarantee code quality, we will verify our code against snapshots using Jest's snapshot feature. 
