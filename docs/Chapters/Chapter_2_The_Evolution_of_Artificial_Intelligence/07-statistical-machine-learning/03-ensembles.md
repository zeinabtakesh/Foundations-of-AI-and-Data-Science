# Ensembles

<div class="chapter-intro" markdown>

**1990s–2000s · Many models, one decision**

[← Timeline](../index.md){ .chapter-back title="Back to chapter timeline" }

</div>

## What are they?

An **ensemble** combines multiple models to make one prediction. The models can vote on a category or average a number.

## How do they work?

**Bagging** trains models independently on different random samples, then combines their predictions. A **random forest** does this with decision trees.

**Boosting** builds models in sequence: each new model helps correct errors in the combined prediction.

<figure class="stat-figure">
  <div class="stat-ensemble" role="img" aria-label="Bagging trains three models independently and combines their votes. Boosting trains three models in sequence, each responding to errors from earlier models.">
    <div><strong>Bagging</strong><span class="stat-ensemble-steps"><b>Sample A → model A</b><b>Sample B → model B</b><b>Sample C → model C</b></span><span class="stat-result">Votes → one prediction</span></div>
    <div><strong>Boosting</strong><span class="stat-ensemble-steps stat-ensemble-chain"><b>Model 1</b><b>Correct errors → model 2</b><b>Correct errors → model 3</b></span><span class="stat-result">Combined → one prediction</span></div>
  </div>
  <figcaption>Bagging creates variety in parallel; boosting improves the combination step by step.</figcaption>
</figure>

## Key insight

Combining imperfect learners can give a stronger prediction than relying on one. The difference is **parallel variety** versus **sequential correction**.

**References:** [TUM, *AI in Society - Foundations of AI and Data Science*, Chapter 2](https://www.gov.sot.tum.de/fileadmin/w00bzh/rds/_my_direct_uploads/AI_in_Society-Foundations_of_AI_and_Data_Science_01.pdf).
