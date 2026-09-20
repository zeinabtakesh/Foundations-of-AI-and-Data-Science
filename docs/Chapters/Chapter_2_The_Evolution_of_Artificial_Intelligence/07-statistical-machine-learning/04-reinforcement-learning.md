# Reinforcement Learning

<div class="chapter-intro" markdown>

**1990s · Learning from rewards**

Instead of being shown the right answer for every choice, a program can learn by acting and seeing what happens.

[← Timeline](../index.md){ .chapter-back title="Back to chapter timeline" }

</div>

## What is it?

**Reinforcement learning** is about learning which actions to take from feedback. A program called an **agent** acts in an **environment** and receives a **reward** signal. In a maze, for example, the agent chooses moves and may earn a reward when it finds the exit.

## How does it work?

The agent takes an action, the environment changes, and the agent receives a new situation and a reward. It repeats this loop, using the feedback to improve later choices. No one has to show it the correct move at every step.

<figure class="stat-figure">
  <div class="rl-loop" role="img" aria-label="An agent sends an action to an environment. The environment returns a new situation and a reward. The agent uses that feedback to improve its next choice, and the cycle repeats.">
    <div class="rl-loop-entity"><strong>Agent</strong><small>chooses what to do</small></div>
    <div class="rl-loop-messages"><span>Action →</span><span>← New situation + reward</span></div>
    <div class="rl-loop-entity"><strong>Environment</strong><small>responds to the action</small></div>
  </div>
  <figcaption>The agent acts, sees the result, and adjusts its next choice. This cycle repeats.</figcaption>
</figure>

## Where does Q-learning fit?

**Q-learning** is one important reinforcement-learning method. It estimates how useful an action is, including rewards that may come later. [Christopher Watkins](#christopher-watkins){ data-open-details } introduced it in the late 1980s and described it in a 1992 paper with [Peter Dayan](#peter-dayan){ data-open-details }.

## Key insight

**Feedback can teach a sequence of decisions**, even without a correct label for every step. Q-learning was an important advance within reinforcement learning, which had begun earlier.

<div class="organizer-grid">
  <details class="organizer-card" id="christopher-watkins">
    <summary>Christopher Watkins</summary>
    <img src="https://www.cs.rhul.ac.uk/~chrisw/cropped_at_bin.jpeg" alt="Portrait of Christopher Watkins" loading="lazy">
    <div class="organizer-card-body">
      <p>Christopher Watkins is a machine-learning researcher who introduced Q-learning in his late-1980s doctoral work. He later coauthored its 1992 paper with Peter Dayan.</p>
      <p class="organizer-credit">Photo and biography: <a href="https://www.cs.rhul.ac.uk/~chrisw/">Christopher Watkins, Royal Holloway</a>.</p>
    </div>
  </details>
  <details class="organizer-card" id="peter-dayan">
    <summary>Peter Dayan</summary>
    <img src="https://www.mpg.de/12309414/original-1560322204.jpg" alt="Portrait of Peter Dayan" loading="lazy">
    <div class="organizer-card-body">
      <p>Peter Dayan is a computational neuroscientist whose research connects learning, decision-making, and the brain. He coauthored the 1992 Q-learning paper with Watkins.</p>
      <p class="organizer-credit">Photo and biography: <a href="https://www.mpg.de/12309370/biological-cybernetics-dayan">Max Planck Society</a>.</p>
    </div>
  </details>
</div>

**References:** [TUM, *AI in Society - Foundations of AI and Data Science*, Chapter 2](https://www.gov.sot.tum.de/fileadmin/w00bzh/rds/_my_direct_uploads/AI_in_Society-Foundations_of_AI_and_Data_Science_01.pdf); [Watkins and Dayan, *Q-learning* (1992)](https://doi.org/10.1007/BF00992698).
