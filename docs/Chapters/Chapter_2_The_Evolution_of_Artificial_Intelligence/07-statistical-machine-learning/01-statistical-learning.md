# Statistical Machine Learning

<div class="chapter-intro" markdown>

**1990s–2000s · Learning patterns from data**

AI increasingly focused on methods that learn from examples and test how well those patterns work on new cases.

[← Timeline](../index.md){ .chapter-back title="Back to chapter timeline" }

</div>

## What is it?

**Statistical machine learning** uses data to estimate patterns that help make predictions. Rather than writing every rule by hand, a researcher chooses a learning method and trains it on examples. This continued earlier work on learning machines; it was not the first time AI learned from data.

## How does it work?

Suppose we want to identify spam email. We provide examples labeled **spam** or **not spam**. A model learns which combinations of features are useful, then predicts labels for new messages. We check its predictions on examples it did **not** train on: doing well only on familiar messages is not enough.

<figure class="expert-figure">
  <div class="expert-flow" aria-label="Training examples include Win a prize labeled spam and Team meeting labeled not spam. The model learns from them. A held-out message, Claim your prize, is predicted as spam and checked against its known spam label.">
    <span><strong>Training emails</strong><small>"Win a prize" = spam<br>"Team meeting" = not spam</small></span>
    <span><strong>Learn from examples</strong><small>train a spam filter</small></span>
    <span><strong>Unseen test email</strong><small>"Claim your prize"<br>prediction: spam</small></span>
    <span><strong>Check prediction</strong><small>known label: spam<br>correct in this case</small></span>
  </div>
  <figcaption>A simplified example: the test email was not used for training, but its known label lets us check the prediction. One correct answer alone does not prove the model works well.</figcaption>
</figure>

## Methods for classifying new examples

**Support vector machines (1995)** look for a boundary with a wide gap between categories, aiming to classify new examples reliably. Nonlinear versions can also handle patterns such as [XOR](../02-ai-becomes-a-field/06-perceptron-limitations.md), which one straight line cannot separate.

[**Ensembles**](03-ensembles.md), including [bagging](03-ensembles.md) and [boosting](03-ensembles.md), combine predictions from multiple models.

<details class="turing-more" id="pagerank" markdown>
<summary>Where does PageRank fit?</summary>

**PageRank (1998)** ranked web pages using links between them. Its key idea was that a link from an important page should count more than one from a less important page. This produced an ordering from web data, rather than classifying labeled examples like the spam filter above.

</details>

## Key insights

**Learning from data can handle patterns that are difficult to write as explicit rules.** But a model can still fail when its training examples are too limited or unlike the cases it later encounters. Testing on unseen data became central to judging whether it had really learned.

**References:** [TUM, *AI in Society - Foundations of AI and Data Science*, Chapter 2](https://www.gov.sot.tum.de/fileadmin/w00bzh/rds/_my_direct_uploads/AI_in_Society-Foundations_of_AI_and_Data_Science_01.pdf).
