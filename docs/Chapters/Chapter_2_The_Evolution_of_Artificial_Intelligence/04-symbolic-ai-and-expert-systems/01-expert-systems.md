# Expert Systems

<div class="chapter-intro" markdown>

**1960s–1980s · Knowledge for a specific task**

Researchers began building AI for narrow problems where expert knowledge could be written down. This approach grew before the first AI winter and became more prominent afterward.

[← Timeline](../index.md){ .chapter-back title="Back to chapter timeline" }

</div>

## What is an expert system?

An **expert system** is a form of **symbolic AI**: it uses explicit facts and **if–then rules** supplied by people with expertise to make recommendations or draw conclusions. In **connectionist AI**, such as neural networks, knowledge is instead represented through connections between units.

## How does it work?

A **knowledge base** holds the rules. An **inference engine** checks which rules match the facts of a new case and follows them toward a conclusion.

<figure class="expert-figure">
  <div class="expert-flow" aria-label="Expert knowledge becomes if-then rules; the inference engine applies the rules to case facts and produces a recommendation">
    <span><strong>Human expertise</strong><small>knowledge gathered</small></span>
    <span><strong>Knowledge base</strong><small>if–then rules stored</small></span>
    <span><strong>Inference engine</strong><small>rules matched to case facts</small></span>
    <span><strong>Recommendation</strong><small>reasoning can be traced</small></span>
  </div>
  <figcaption>How a rule-based expert system reaches a conclusion. Simplified from <a href="https://www.gov.sot.tum.de/fileadmin/w00bzh/rds/_my_direct_uploads/AI_in_Society-Foundations_of_AI_and_Data_Science_01.pdf">Figure 7 in the TUM book</a>.</figcaption>
</figure>

## Two early examples

**DENDRAL** began in the 1960s. It used chemical knowledge and data from instruments such as mass spectrometers to suggest possible **molecular structures**. Its expertise was chemistry, not general problem-solving.

**MYCIN**, developed in the 1970s, used medical rules and answers to its questions to suggest likely causes of certain **bacterial infections** and possible treatments. It could explain its recommendations, but it was a research system, not a doctor or a general medical assistant.

<figure class="expert-figure">
  <div class="expert-comparison" aria-label="DENDRAL uses chemical measurements to suggest molecular structures; MYCIN uses patient and test information to suggest infection-related conclusions">
    <div><strong>DENDRAL</strong><span>Chemical measurements</span><span aria-hidden="true">→</span><span>Possible molecular structures</span></div>
    <div><strong>MYCIN</strong><span>Patient and test information</span><span aria-hidden="true">→</span><span>Infection and treatment suggestions</span></div>
  </div>
  <figcaption>The same expert-system approach served two different specialties.</figcaption>
</figure>

## Key insights

Expert systems showed that **useful AI did not have to solve every problem**. DENDRAL and MYCIN applied expert knowledge in very different fields, but both depended on people to supply and maintain that knowledge. They could struggle outside the situations their rules covered.

**References:** [TUM, *AI in Society - Foundations of AI and Data Science*, Chapter 2](https://www.gov.sot.tum.de/fileadmin/w00bzh/rds/_my_direct_uploads/AI_in_Society-Foundations_of_AI_and_Data_Science_01.pdf); [Computer History Museum on DENDRAL](https://www.computerhistory.org/timeline/1965/); [original MYCIN paper (1975)](https://pubmed.ncbi.nlm.nih.gov/1157471/); [Stanford account of expert-system limits](https://www-formal.stanford.edu/jmc/someneed/someneed.html).
