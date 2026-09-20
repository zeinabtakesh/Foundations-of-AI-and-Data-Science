# Long Short-Term Memory

<div class="chapter-intro" markdown>

**1997 · Learning from distant clues**

Earlier recurrent networks often struggled to learn when an important clue appeared many steps before it was needed. LSTM offered a way to keep that clue available.

[← Timeline](../index.md){ .chapter-back title="Back to chapter timeline" }

</div>

## What is it?

**Long short-term memory** (LSTM) is a recurrent neural-network design for sequences, such as text or measurements over time. It helps a network use information from earlier steps when making a later prediction.

## How does it work?

An LSTM carries a **cell state** through a sequence. Learned **gates** decide what to keep, add, or use. A clue near the beginning of a sentence can therefore remain available when the network processes later words.

<figure class="stat-figure">
  <div class="stat-memory" role="img" aria-label="In the sentence The keys to the cabinet are missing, the clue keys is carried forward through intervening words to help interpret are.">
    <div class="stat-words"><span>The</span><strong>keys</strong><span>to</span><span>the</span><span>cabinet</span><strong>are</strong><span>missing</span></div>
    <div class="stat-memory-path"><span>Keep clue: plural subject</span><span aria-hidden="true">→ → → →</span><span>Use clue later</span></div>
  </div>
  <figcaption>A simplified illustration: the network can preserve a useful earlier clue while processing the words between it and a later prediction.</figcaption>
</figure>

## Key insight

**LSTM was a major advance in learning from sequences.** Its memory path made it easier to train a network to use clues separated by many steps, an important breakthrough for deep learning on sequence tasks.

**References:** [TUM, *AI in Society - Foundations of AI and Data Science*, Chapter 2](https://www.gov.sot.tum.de/fileadmin/w00bzh/rds/_my_direct_uploads/AI_in_Society-Foundations_of_AI_and_Data_Science_01.pdf); [*Long Short-Term Memory* (1997)](https://doi.org/10.1162/neco.1997.9.8.1735).
