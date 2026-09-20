# Transformers

<div class="chapter-intro" markdown>

**2017 · Words gain context through attention**

The Transformer offered a new way for a neural network to work with a sequence of words. Its original demonstration was **machine translation**.

[← Timeline](../index.md){ .chapter-back title="Back to chapter timeline" }

</div>

## What is it?

A **Transformer** is a neural-network architecture introduced in the 2017 paper *Attention Is All You Need*. Its central idea is **self-attention**: when working on one word, the network can use information from other words in the same sentence. Earlier translation models commonly relied on **recurrence**, processing a sequence step by step.

## How does it work?

The word **bank** can mean different things. Compare these sentences:

<figure class="transformer-figure">
  <div class="transformer-examples" aria-label="In the sentence I deposited money at the bank, money is a clue that bank means a financial institution. In the sentence I sat on the bank beside the river, river is a clue that bank means land beside water.">
    <div><span>I deposited <strong>money</strong> at the <b>bank</b>.</span><small>“money” helps identify a financial bank</small></div>
    <div><span>I sat on the <b>bank</b> beside the <strong>river</strong>.</span><small>“river” helps identify land beside water</small></div>
  </div>
  <figcaption>Attention can give useful context words more influence when forming a representation of “bank”; these are illustrative links, not measured attention scores.</figcaption>
</figure>

For each word, self-attention weighs information from other positions. The Transformer repeats this process across layers, building context-sensitive representations. It also adds **position information**, so word order is not lost. In the original translation system, one part processed the input sentence and another generated the translated sentence.

## Key insights

**Words can connect directly to relevant context, even when they are far apart.** The architecture also lets many positions be processed in parallel during training, unlike a strictly word-by-word recurrent layer. Generating an output sentence still happens step by step. This combination helped Transformers become a foundation for later language models.

**References:** [TUM, *AI in Society - Foundations of AI and Data Science*, Chapter 2](https://www.gov.sot.tum.de/fileadmin/w00bzh/rds/_my_direct_uploads/AI_in_Society-Foundations_of_AI_and_Data_Science_01.pdf); [Original paper, *Attention Is All You Need* (2017)](https://papers.nips.cc/paper/2017/hash/3f5ee243547dee91fbd053c1c4a845aa-Abstract.html); [Google Research explanation of self-attention](https://research.google/blog/transformer-a-novel-neural-network-architecture-for-language-understanding/).
