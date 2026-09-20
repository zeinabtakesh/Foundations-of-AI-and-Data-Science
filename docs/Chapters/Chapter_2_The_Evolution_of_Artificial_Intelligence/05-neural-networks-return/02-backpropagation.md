# Backpropagation

<div class="chapter-intro" markdown>

**1986 · Learning from errors, layer by layer**

The [single-layer perceptron could not learn XOR](../02-ai-becomes-a-field/06-perceptron-limitations.md). Adding hidden layers gave networks more expressive power, but raised a new question: **how can we tell the hidden connections what to change?**

[← Timeline](../index.md){ .chapter-back title="Back to chapter timeline" }

</div>

## What is it?

**Backpropagation** is a way to calculate how much each weight in a multilayer neural network contributes to a prediction error. It sends an error signal from the output layer back through the hidden layers. An optimization step then uses those calculations to adjust the weights.

The influential 1986 paper by [David Rumelhart](#david-rumelhart){ data-open-details }, [Geoffrey Hinton](#geoffrey-hinton){ data-open-details }, and [Ronald Williams](#ronald-williams){ data-open-details } helped bring this method to wider attention. Earlier gradient-based work existed; the book notes a 1960 precursor.

## How does it work?

Imagine the correct answer is **1**, but the network predicts **0.3**. Training repeats this loop:

<figure class="backprop-figure">
  <div class="backprop-diagram" role="img" aria-label="Forward: input passes through hidden layer and output to produce a prediction. Compare prediction with target to measure loss. Backward: the error signal passes from output weights to hidden weights, then both sets of weights are updated.">
    <div class="backprop-line backprop-forward"><b>Forward pass</b><span>Input</span><i aria-hidden="true">→</i><span>Hidden layer</span><i aria-hidden="true">→</i><span>Prediction: 0.3</span></div>
    <div class="backprop-compare"><b>Compare</b><span>Target: 1</span><i aria-hidden="true">↔</i><span>Prediction: 0.3</span><strong>Calculate loss</strong></div>
    <div class="backprop-line backprop-backward"><b>Backward pass</b><span>Hidden weights</span><i aria-hidden="true">←</i><span>Output weights</span><i aria-hidden="true">←</i><span>Error signal</span></div>
    <div class="backprop-update"><b>Update</b><span>Adjust both sets of weights in the direction that reduces the loss; repeat with more examples.</span></div>
  </div>
  <figcaption>The backward arrows show where the error information travels, not a second prediction. Backpropagation calculates the weight sensitivities; the update step changes the weights.</figcaption>
</figure>

The backward calculation uses the **chain rule** from calculus: it traces how a small change in a hidden weight would affect later layers and, ultimately, the loss. The prediction need not become 1 after one update; learning happens over many examples and updates.

## Key insights

**Hidden layers can learn useful intermediate patterns.** A network with hidden units and a non-linear activation can represent XOR; backpropagation provides a practical way to train its hidden weights. The non-linearity matters: stacking only linear layers would still act like one linear transformation.

<div class="organizer-grid">
  <details class="organizer-card" id="david-rumelhart">
    <summary>David Rumelhart</summary>
    <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/DavidRumelhart-IJCNNseattle1991-07-08.jpg?width=500" alt="David Rumelhart speaking at a conference in 1991" loading="lazy">
    <div class="organizer-card-body">
      <p>David Rumelhart was an American psychologist whose work on cognition and parallel distributed processing helped establish neural networks as models of learning. He coauthored the influential 1986 backpropagation paper.</p>
      <p class="organizer-credit">Photo: <a href="https://commons.wikimedia.org/wiki/File:DavidRumelhart-IJCNNseattle1991-07-08.jpg">Wikimedia Commons</a>. Biography: <a href="https://www.psychologicalscience.org/observer/david-rumelhart">Association for Psychological Science</a>.</p>
    </div>
  </details>
  <details class="organizer-card" id="geoffrey-hinton">
    <summary>Geoffrey Hinton</summary>
    <img src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Geoffrey_Hinton_in_2026.jpg?width=500" alt="Portrait of Geoffrey Hinton" loading="lazy">
    <div class="organizer-card-body">
      <p>Geoffrey Hinton is a computer scientist whose research advanced neural networks and learning representations. He coauthored the 1986 paper and later helped drive the revival of deep learning.</p>
      <p class="organizer-credit">Photo: <a href="https://commons.wikimedia.org/wiki/File:Geoffrey_Hinton_in_2026.jpg">Wikimedia Commons</a>. Biography: <a href="https://www.nobelprize.org/prizes/physics/2024/hinton/facts/">NobelPrize.org</a>.</p>
    </div>
  </details>
  <details class="organizer-card" id="ronald-williams">
    <summary>Ronald Williams</summary>
    <img src="https://www.khoury.northeastern.edu/wp-content/uploads/2024/03/Ron-Williams287x161.jpg" alt="Photograph of Ronald Williams" loading="lazy">
    <div class="organizer-card-body">
      <p>Ronald Williams was a computer scientist who worked on neural-network learning algorithms. He coauthored the 1986 backpropagation paper and later taught and researched at Northeastern University.</p>
      <p class="organizer-credit">Photo and biography: <a href="https://www.khoury.northeastern.edu/a-tribute-to-ron-williams-khoury-professor-and-machine-learning-pioneer/">Northeastern University</a>.</p>
    </div>
  </details>
</div>

**References:** [TUM, *AI in Society - Foundations of AI and Data Science*, Chapter 2](https://www.gov.sot.tum.de/fileadmin/w00bzh/rds/_my_direct_uploads/AI_in_Society-Foundations_of_AI_and_Data_Science_01.pdf); [Rumelhart, Hinton and Williams, *Learning representations by back-propagating errors* (1986)](https://doi.org/10.1038/323533a0).
