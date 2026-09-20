# The Perceptron

<div class="chapter-intro" markdown>

**1957–58 · Learning from examples**

The [McCulloch–Pitts neuron](../01-foundations/02-mcculloch-pitts-neuron.md) showed how a simple unit could apply a fixed rule. The perceptron added something new: its connections could **change with training**.

[← Timeline](../index.md){ .chapter-back title="Back to chapter timeline" }

</div>

## What is it?

A perceptron is an early model of a learning machine developed by [Frank Rosenblatt](#frank-rosenblatt){ data-open-details }. A simple perceptron gives each input a **weight**, adds the weighted inputs, and produces a yes-or-no answer. Rosenblatt's **Mark I Perceptron** was a larger physical system built around this learning idea.

<figure class="perceptron-photo">
  <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/330-PSA-80-60_%28USN_710739%29_%2820897323365%29.jpg/960px-330-PSA-80-60_%28USN_710739%29_%2820897323365%29.jpg" alt="The Mark I Perceptron, an early machine trained to recognize visual patterns" loading="lazy">
  <figcaption>The Mark I Perceptron. U.S. Navy photograph, 1960, via <a href="https://commons.wikimedia.org/wiki/File:330-PSA-80-60_(USN_710739)_(20897323365).jpg">Wikimedia Commons</a> (public domain).</figcaption>
</figure>

## How it works

During training, the perceptron makes a prediction, checks the correct answer, and **adjusts its weights when it is wrong**. For example, when shown a letter it misidentifies, feedback changes its connections so a similar pattern may be classified differently next time.

## Key insights

The earlier [McCulloch–Pitts neuron](../01-foundations/02-mcculloch-pitts-neuron.md) followed connections and a threshold set by its designer; it did **not learn** from mistakes. The perceptron's added value was that **feedback could change its weights**, changing how it classified future inputs. It was an early step from *programming a rule* toward *learning a rule from examples*.

A **single-layer perceptron** still cannot learn every kind of pattern. We will return to that limitation later in the chapter.

[Next: Samuel's checkers program](04-samuel-checkers.md), another early example of a machine improving with experience.

<details class="turing-more" id="frank-rosenblatt">
<summary>More about Frank Rosenblatt</summary>

<div class="researcher-gallery researcher-gallery-single">
  <figure>
    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Frank_Rosenblatt.jpg" alt="Frank Rosenblatt as a young student" loading="lazy">
    <figcaption>Frank Rosenblatt around 1950, via <a href="https://commons.wikimedia.org/wiki/File:Frank_Rosenblatt.jpg">Wikimedia Commons</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</figcaption>
  </figure>
</div>

<p>Frank Rosenblatt (1928–1971) was an American psychologist at Cornell who studied how perception and learning might work in machines. He developed the perceptron model and led the work on its Mark I hardware.</p>

</details>

**References:** [TUM, *AI in Society - Foundations of AI and Data Science*, Chapter 2](https://www.gov.sot.tum.de/fileadmin/w00bzh/rds/_my_direct_uploads/AI_in_Society-Foundations_of_AI_and_Data_Science_01.pdf); [Rosenblatt's 1958 perceptron paper](https://pubmed.ncbi.nlm.nih.gov/13602029/); [Smithsonian National Museum of American History, Mark I Perceptron](https://americanhistory.si.edu/collections/object/nmah_334414).
