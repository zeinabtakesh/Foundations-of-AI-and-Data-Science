# AlphaGo

<div class="chapter-intro" markdown>

**2016 · Learning and search meet at the Go board**

AlphaGo showed that a system could learn strong strategies for **Go**, a game with far too many possible moves to check by brute force alone.

[← Timeline](../index.md){ .chapter-back title="Back to chapter timeline" }

</div>

## What is it?

**AlphaGo** is a Go-playing AI system built by Google DeepMind. In March 2016, it defeated professional player **Lee Sedol** by **four games to one**. Go is played by placing black and white stones on a grid to surround territory.

<figure class="alphago-photo">
  <img src="https://lh3.googleusercontent.com/HlvA_-wpA-MxDBy-swN0gmKwNWfvE1QqeCqy-jpJXHaO3Pq2v46kBCXndQdzvolgorvqjfGEIUaHoshcBuOAaHAaxdTLkgay6-ppIaTcV1LJpML0ffY=w1440" alt="Lee Sedol at a Go board during the 2016 AlphaGo challenge match, with a human operator placing AlphaGo's stones" loading="lazy">
  <figcaption>Lee Sedol plays against AlphaGo in the 2016 challenge match. Photo: <a href="https://deepmind.google/blog/deep-reinforcement-learning/">Google DeepMind</a>.</figcaption>
</figure>

## How does it work?

AlphaGo first learned from recorded expert games, then improved by playing against versions of itself. During a game, it combined three tools:

1. A **policy network** suggested promising next moves.
2. A **value network** estimated which positions were more likely to lead to a win.
3. **Tree search** explored possible continuations, guided by those estimates, before choosing a move.

The networks supplied learned judgment; search let AlphaGo look ahead. Neither part had to examine every possible game.

## Key insights

**Learning and search can strengthen each other.** AlphaGo's match result showed that learned pattern recognition could help guide planning in a difficult strategic game. Its success was specific to Go, not proof that one system could solve every kind of problem.

**References:** [Original AlphaGo paper, *Nature* (2016)](https://www.nature.com/articles/nature16961); [Google DeepMind's account of AlphaGo and the Lee Sedol match](https://deepmind.google/research/alphago/).
