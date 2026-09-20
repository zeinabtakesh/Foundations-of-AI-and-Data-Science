# Samuel's Checkers Program

<div class="chapter-intro" markdown>

**1959 · Learning through play**

The perceptron learned from labeled examples. Another early project asked whether a computer could improve by **playing games and using what happened in earlier games**.

[← Timeline](../index.md){ .chapter-back title="Back to chapter timeline" }

</div>

## What is it?

[Arthur Samuel](#arthur-samuel){ data-open-details } built a program at IBM that played checkers. He began the project in the early 1950s and described its learning methods in a **1959 paper**. Checkers gave the program clear rules and a way to tell whether a game ended well or badly.

<figure class="perceptron-photo">
  <img src="https://assets.ibm.com/is/image/ibm/1959_ibm7090_as_checkers?dpr=off" alt="Arthur Samuel at an IBM computer with a checkers board" loading="lazy">
  <figcaption>Arthur Samuel with a checkers board and IBM computer. Photo via <a href="https://www.ibm.com/history/early-games">IBM Archives</a>.</figcaption>
</figure>

## How it works

The program looked ahead at possible moves and **estimated which board positions were promising**. It could draw on positions from earlier games and adjust how it valued a position as it gained experience. This helped it choose moves without trying every possible continuation.

## Key insights

Samuel's program showed that **experience could improve a computer's play**. Unlike the perceptron's adjustable connections, this program learned through game positions and an evaluation of possible moves. Its strength was still limited, but it was an influential early example of machine learning.

[Next: ELIZA](05-eliza.md), an early program that simulated conversation.

<details class="turing-more" id="arthur-samuel">
<summary>More about Arthur Samuel</summary>

<div class="researcher-gallery researcher-gallery-single">
  <figure>
    <img src="https://assets.ibm.com/is/image/ibm/5331_as_portrait?dpr=off" alt="Portrait of Arthur Samuel" loading="lazy">
    <figcaption>Arthur Samuel, 1969. <a href="https://www.ibm.com/history/early-games">IBM Archives</a>.</figcaption>
  </figure>
</div>

<p>Arthur L. Samuel (1901–1990) was an American computer scientist and IBM researcher. He used checkers to study how a program could improve through experience and helped popularize the term <em>machine learning</em>.</p>

</details>

**References:** [Arthur Samuel, “Some Studies in Machine Learning Using the Game of Checkers” (1959)](https://doi.org/10.1147/rd.33.0210); [IBM's history of Samuel Checkers](https://www.ibm.com/history/early-games).
