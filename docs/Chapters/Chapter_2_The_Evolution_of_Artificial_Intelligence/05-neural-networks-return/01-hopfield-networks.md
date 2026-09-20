# Hopfield Networks

<div class="chapter-intro" markdown>

**1982 · A network that can recall a pattern**

Instead of following a list of expert rules, a Hopfield network uses connections between simple units to recover a stored pattern from an incomplete or noisy clue.

[← Timeline](../index.md){ .chapter-back title="Back to chapter timeline" }

</div>

## What is it?

A **Hopfield network** is a recurrent neural network: its units feed signals back to one another. In the classic model, each unit is on or off and connected to the others. Together, the connections can store patterns as **associative memories**.

This is **connectionism**: a pattern is held in the network's connection strengths, rather than in the hand-written rules of [symbolic expert systems](../04-symbolic-ai-and-expert-systems/01-expert-systems.md).

[John Hopfield](#john-hopfield){ data-open-details } presented this influential model in 1982. [Shun-ichi Amari](#shun-ichi-amari){ data-open-details } had described related networks for remembering patterns a decade earlier.

## How does it work?

First, the connection weights are set to store a pattern, such as the letter **H** below. Give the network an H with one square switched off. Each unit adds up the weighted signals it receives from the others. Here, the other **24 squares still match the stored H**, so their combined signal tells the missing square to switch on. In the standard model, such updates lower an **energy score** until the network settles into a stable pattern, called an **attractor**.

<figure class="hopfield-figure">
  <div class="hopfield-recall" aria-label="Illustrative pattern recall: a five-by-five letter H with one wrong bit enters a recurrent network and settles into a complete letter H">
    <div class="hopfield-pattern">
      <strong>Noisy clue</strong>
      <div class="hopfield-tiles" aria-label="Letter H with its bottom-left square missing">
        <span class="is-on"></span><span></span><span></span><span></span><span class="is-on"></span>
        <span class="is-on"></span><span></span><span></span><span></span><span class="is-on"></span>
        <span class="is-on"></span><span class="is-on"></span><span class="is-on"></span><span class="is-on"></span><span class="is-on"></span>
        <span class="is-on"></span><span></span><span></span><span></span><span class="is-on"></span>
        <span class="is-error"></span><span></span><span></span><span></span><span class="is-on"></span>
      </div>
    </div>
    <span class="hopfield-arrow" aria-hidden="true">→</span>
    <div class="hopfield-process">
      <strong>Why the square changes</strong>
      <span><b>1</b> Connections store the H pattern</span>
      <span><b>2</b> The other 24 squares match H</span>
      <span><b>3</b> Their weighted signals favor ON</span>
      <span><b>4</b> The missing square flips ON</span>
    </div>
    <span class="hopfield-arrow" aria-hidden="true">→</span>
    <div class="hopfield-pattern">
      <strong>Recalled pattern</strong>
      <div class="hopfield-tiles" aria-label="Complete letter H with the bottom-left square restored">
        <span class="is-on"></span><span></span><span></span><span></span><span class="is-on"></span>
        <span class="is-on"></span><span></span><span></span><span></span><span class="is-on"></span>
        <span class="is-on"></span><span class="is-on"></span><span class="is-on"></span><span class="is-on"></span><span class="is-on"></span>
        <span class="is-on"></span><span></span><span></span><span></span><span class="is-on"></span>
        <span class="is-restored"></span><span></span><span></span><span></span><span class="is-on"></span>
      </div>
    </div>
  </div>
  <figcaption>The orange outline marks the square that changes from off to on. This shows one stored pattern and one error; recall is not guaranteed for every input.</figcaption>
</figure>

## Key insights

**Memory can emerge from the network's collective behavior**, rather than from a rule that explicitly says what the answer is. But recall is not guaranteed: a network may settle into the wrong stable pattern, and the number of patterns it can store reliably is limited.

<div class="organizer-grid">
  <details class="organizer-card" id="john-hopfield">
    <summary>John Hopfield</summary>
    <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/John_J._Hopfield%2C_2024_Nobel_Prize_Laureate_in_Physics.jpg?width=500" alt="Portrait of John Hopfield" loading="lazy">
    <div class="organizer-card-body">
      <p>John Hopfield is an American physicist whose 1982 neural-network model showed how connected units could store and recover patterns. His work linked ideas from physics and computation.</p>
      <p class="organizer-credit">Photo: <a href="https://commons.wikimedia.org/wiki/File:John_J._Hopfield,_2024_Nobel_Prize_Laureate_in_Physics.jpg">Arthur Petron / Wikimedia Commons</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>. Biography: <a href="https://www.nobelprize.org/prizes/physics/2024/hopfield/facts/">NobelPrize.org</a>.</p>
    </div>
  </details>
  <details class="organizer-card" id="shun-ichi-amari">
    <summary>Shun-ichi Amari</summary>
    <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Shun-ichi_Amari_in_2026.jpg?width=500" alt="Portrait of Shun-ichi Amari" loading="lazy">
    <div class="organizer-card-body">
      <p>Shun-ichi Amari is a Japanese researcher in neural networks and mathematical neuroscience. His 1972 work described how networks of threshold units could remember patterns and sequences.</p>
      <p class="organizer-credit">Photo: <a href="https://commons.wikimedia.org/wiki/File:Shun-ichi_Amari_in_2026.jpg">Mvolz / Wikimedia Commons</a>, <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0</a>. Biography: <a href="https://www.kyotoprize.org/en/laureates/shun-ichi_amari/">Kyoto Prize</a>.</p>
    </div>
  </details>
</div>

**References:** [TUM, *AI in Society - Foundations of AI and Data Science*, section 2.3.2](https://www.gov.sot.tum.de/fileadmin/w00bzh/rds/_my_direct_uploads/AI_in_Society-Foundations_of_AI_and_Data_Science_01.pdf); [Hopfield's 1982 paper](https://pubmed.ncbi.nlm.nih.gov/6953413/); [Amari's 1972 paper](https://pure.teikyo.jp/en/publications/learning-patterns-and-pattern-sequences-by-self-organizing-nets-o/).
