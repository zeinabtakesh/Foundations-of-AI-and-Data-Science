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

Methods prominent in this period included **support vector machines**, which find a boundary between classes, and [**ensembles**](#ensemble){ data-open-details } such as [**bagging**](#bagging){ data-open-details } and [**boosting**](#boosting){ data-open-details }, which combine predictions from multiple models.

## Key insights

**Learning from data can handle patterns that are difficult to write as explicit rules.** But a model can still fail when its training examples are too limited or unlike the cases it later encounters. Testing on unseen data became central to judging whether it had really learned.

<details class="turing-more" id="ensemble" markdown>
<summary>What is an ensemble?</summary>

An **ensemble** combines several models to make one prediction, rather than relying on a single model. It might use a vote for categories or an average for numbers.

</details>

<details class="turing-more" id="bagging" markdown>
<summary>How does bagging work?</summary>

**Bagging** trains models separately on different random samples of the training data. Their predictions are then voted on or averaged, helping reduce the effect of any one model's quirks.

</details>

<details class="turing-more" id="boosting" markdown>
<summary>How does boosting work?</summary>

**Boosting** trains models in sequence. Each new model pays more attention to mistakes the earlier models made; their predictions are combined at the end.

</details>

**Reference:** [*AI in Society - Foundations of AI and Data Science*, section 2.4.3](https://www.gov.sot.tum.de/fileadmin/w00bzh/rds/_my_direct_uploads/AI_in_Society-Foundations_of_AI_and_Data_Science_01.pdf).
