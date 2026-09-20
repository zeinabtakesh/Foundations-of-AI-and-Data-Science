# Hopfield Networks

<div class="chapter-intro" markdown>

**1982 · A network that can recall a pattern**

Give the network a damaged version of a pattern it has stored, and it may recover the complete pattern.

[← Timeline](../index.md){ .chapter-back title="Back to chapter timeline" }

</div>

## What is it?

A **Hopfield network** is made of connected units that can each be on or off. The strengths of their connections store patterns, so an incomplete clue may prompt the network to reconstruct a complete one. This is [**associative memory**](#associative-memory){ data-open-details }: recalling a whole pattern from a clue. Because the units send signals back to one another, the network is called **recurrent**.

[John Hopfield](#john-hopfield){ data-open-details } presented this influential model in 1982. [Shun-ichi Amari](#shun-ichi-amari){ data-open-details } had described related networks for remembering patterns a decade earlier.

## How does it work?

First, set the connection strengths so the network stores a pattern, such as the letter **H** below. Then show it an H with one square missing. The connected units influence one another as they update. In this example, the missing square turns on and the network settles on the stored H. [Why does it settle?](#hopfield-attractor){ data-open-details }

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
      <span><b>1</b> Connections hold the H pattern</span>
      <span><b>2</b> An incomplete H is shown</span>
      <span><b>3</b> Connected units influence one another</span>
      <span><b>4</b> The missing square turns on</span>
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

**The pattern is remembered through the connections, not a written rule.** A partial clue can bring back the whole pattern. Recall is not guaranteed: a network can settle on the wrong pattern, and it cannot reliably store unlimited patterns.

<details class="turing-more" id="associative-memory" markdown>
<summary>What is associative memory?</summary>

It means recalling something from a related clue. Seeing most of a stored **H** can bring back the complete **H**, even though the missing square was not supplied. The clue must be close enough to a pattern the network stored.

</details>

<details class="turing-more" id="hopfield-attractor" markdown>
<summary>Why does the network settle?</summary>

In the classic model, updating units one at a time makes an **energy score** go down or stay the same. The network eventually reaches a stable state where another update does not improve that score. Such a stable pattern is called an **attractor**. It may be a stored memory, but it can also be the wrong pattern.

</details>

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

**References:** [TUM, *AI in Society - Foundations of AI and Data Science*, Chapter 2](https://www.gov.sot.tum.de/fileadmin/w00bzh/rds/_my_direct_uploads/AI_in_Society-Foundations_of_AI_and_Data_Science_01.pdf); [Hopfield's 1982 paper](https://pubmed.ncbi.nlm.nih.gov/6953413/); [Amari's 1972 paper](https://pure.teikyo.jp/en/publications/learning-patterns-and-pattern-sequences-by-self-organizing-nets-o/).
