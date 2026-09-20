(() => {
  const periods = [
    ["Foundations", "What can machines compute?", 0, 3],
    ["AI becomes a field", "Can machines reason and learn?", 3, 10],
    ["First AI winter", "Where did early expectations run into limits?", 10, 11],
    ["Symbolic AI and expert systems", "How far can explicit rules take us?", 11, 13],
    ["Neural networks return", "Can networks learn useful patterns?", 13, 16],
    ["Second AI winter", "Why did confidence fall again?", 16, 17],
    ["Statistical machine learning", "What changes when systems learn from data?", 17, 21],
    ["Deep learning and modern AI", "What became possible at larger scale?", 21, 26]
  ];
  const events = [
    ["1936", "Turing machine", "Foundations", "A precise model of what it means to follow a computation.", "01-foundations/01-turing-machine.md"],
    ["1943", "McCulloch–Pitts neuron", "Foundations", "A mathematical neuron connects logic and neural activity.", "01-foundations/02-mcculloch-pitts-neuron.md"],
    ["1950", "Turing test", "Foundations", "Turing asks how we might judge a machine's conversational behavior.", "01-foundations/03-turing-test.md"],
    ["1956", "Dartmouth workshop", "AI becomes a field", "Researchers gather around the proposal to study artificial intelligence.", "02-ai-becomes-a-field/01-dartmouth-workshop.md"],
    ["1956", "Symbolic reasoning", "AI becomes a field", "Early programs manipulate symbols to search for solutions.", "02-ai-becomes-a-field/02-early-symbolic-reasoning.md"],
    ["1957–58", "Perceptron", "AI becomes a field", "A simple neural model learns weights from examples.", "02-ai-becomes-a-field/03-perceptron.md"],
    ["1959", "Samuel's checkers", "AI becomes a field", "A game program improves its play through experience.", "02-ai-becomes-a-field/04-samuel-checkers.md"],
    ["1966", "ELIZA", "AI becomes a field", "A rule-based conversation program reveals the power of pattern matching.", "02-ai-becomes-a-field/05-eliza.md"],
    ["1967", "Nearest neighbors", "AI becomes a field", "New cases are classified using nearby labeled examples.", "02-ai-becomes-a-field/07-nearest-neighbors.md"],
    ["1969", "Perceptron limitations", "AI becomes a field", "Limits of single-layer perceptrons focus attention on harder problems.", "02-ai-becomes-a-field/06-perceptron-limitations.md"],
    ["1970s", "First AI winter", "Limits emerge", "Early promises meet harder problems and closer scrutiny of AI funding.", "03-first-ai-winter/01-first-ai-winter.md"],
    ["1970s–80s", "Expert systems", "Rules and knowledge", "Specialized systems encode expert knowledge as facts and rules.", "04-symbolic-ai-and-expert-systems/01-expert-systems.md"],
    ["1980", "Chinese room", "Rules and knowledge", "A philosophical challenge asks whether symbol manipulation implies understanding.", "04-symbolic-ai-and-expert-systems/02-chinese-room.md"],
    ["1980", "Early convolutional networks", "Neural networks return", "Layered networks begin to extract local patterns from images.", "05-neural-networks-return/03-early-cnns.md"],
    ["1982", "Hopfield networks", "Neural networks return", "Recurrent networks demonstrate associative memory.", "05-neural-networks-return/01-hopfield-networks.md"],
    ["1986", "Backpropagation", "Neural networks return", "Error signals help train weights in hidden layers.", "05-neural-networks-return/02-backpropagation.md"],
    ["Late 1980s", "Second AI winter", "Limits emerge", "The cost and limits of expert systems temper expectations again.", "06-second-ai-winter/01-second-ai-winter.md"],
    ["1990s–2000s", "Statistical learning", "Learning from data", "Data-driven methods become central to many AI tasks.", "07-statistical-machine-learning/01-statistical-learning.md"],
    ["1992", "Q-learning", "Learning from feedback", "A milestone within reinforcement learning: an agent learns which actions lead to future rewards.", "07-statistical-machine-learning/04-reinforcement-learning.md"],
    ["1996 onward", "Ensembles", "Learning from data", "Bagging and boosting combine multiple learners.", "07-statistical-machine-learning/03-ensembles.md"],
    ["1997", "Long short-term memory", "Sequence learning", "A recurrent network keeps useful information across steps.", "07-statistical-machine-learning/05-lstm.md"],
    ["2000s", "Neural networks become practical again", "Deep learning", "More data, faster hardware, and improved training make larger networks increasingly practical.", "08-deep-learning-and-modern-ai/00-neural-networks-become-practical.md"],
    ["2012", "AlexNet", "Deep learning", "Deep networks and GPUs produce a major image-recognition result.", "08-deep-learning-and-modern-ai/01-alexnet.md"],
    ["2016", "AlphaGo", "Modern AI", "Search and learned networks combine to master Go.", "08-deep-learning-and-modern-ai/02-alphago.md"],
    ["2017 onward", "Transformers", "Modern AI", "Attention-based architectures shape later language models.", "08-deep-learning-and-modern-ai/03-transformers.md"],
    ["2020s", "Beyond language models", "Modern AI", "AI extends into biology and multimodal tasks.", "08-deep-learning-and-modern-ai/05-beyond-transformers.md"]
  ];
  const timelinePositionKey = "chapter2.timelinePosition";
  const timelineReturnKey = "chapter2.timelineReturn";

  function eventId(event) {
    return `event-${event[4].replace(/\.md$/, "").replaceAll("/", "-")}`;
  }

  function readPosition() {
    try { return JSON.parse(sessionStorage.getItem(timelinePositionKey)); }
    catch { return null; }
  }

  function restoreTimelinePosition() {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (!target?.closest("[data-chapter-timeline]")) return;
    let returnId;
    try {
      returnId = sessionStorage.getItem(timelineReturnKey);
      sessionStorage.removeItem(timelineReturnKey);
    } catch { /* Anchor navigation still works without session storage. */ }
    const saved = readPosition();
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (returnId === target.id && saved?.eventId === target.id && Number.isFinite(saved.y)) {
        window.scrollTo(0, saved.y);
      } else {
        target.scrollIntoView({ block: "center" });
      }
    }));
  }

  function initTimeline(root) {
    const navigation = root.querySelector("[data-era-nav]");
    const container = root.querySelector("[data-timeline-periods]");
    periods.forEach(([name, question, start, end], periodIndex) => {
      const id = `period-${periodIndex + 1}`;
      const jump = document.createElement("a");
      jump.href = `#${id}`;
      jump.textContent = `${periodIndex + 1}. ${name}`;
      navigation.append(jump);

      const section = document.createElement("section");
      section.className = "timeline-period";
      section.id = id;
      const heading = document.createElement("h3");
      heading.textContent = `${String(periodIndex + 1).padStart(2, "0")} / ${name}`;
      const prompt = document.createElement("p");
      prompt.className = "timeline-question";
      prompt.textContent = question;
      const list = document.createElement("ol");
      list.className = "timeline-events";
      events.slice(start, end).forEach(event => {
        const item = document.createElement("li");
        if (event[4]) item.id = eventId(event);
        const content = event[4] ? document.createElement("a") : document.createElement("div");
        content.className = event[4] ? "timeline-link" : "timeline-preview";
        if (event[4]) {
          content.href = new URL(event[4].replace(/\.md$/, "/"), document.baseURI).href;
          content.addEventListener("click", () => {
            try {
              sessionStorage.setItem(timelinePositionKey, JSON.stringify({
                eventId: item.id, destination: content.pathname, y: window.scrollY
              }));
            } catch { /* Navigation does not depend on storage. */ }
          });
        }
        const year = document.createElement("span");
        year.className = "timeline-year";
        year.textContent = event[0];
        const title = document.createElement("strong");
        title.textContent = event[1];
        const summary = document.createElement("span");
        summary.className = "timeline-summary";
        summary.textContent = event[3];
        content.append(year, title, summary);
        if (event[4]) {
          const arrow = document.createElement("span");
          arrow.className = "timeline-arrow";
          arrow.setAttribute("aria-hidden", "true");
          arrow.textContent = "→";
          content.append(arrow);
        }
        item.append(content);
        list.append(item);
      });
      section.append(heading, prompt, list);
      container.append(section);
    });
    restoreTimelinePosition();
  }

  function initBackLink(link) {
    if (link.title !== "Back to chapter timeline") return;
    const overview = new URL(link.href);
    const event = events.find(entry => entry[4] &&
      new URL(entry[4].replace(/\.md$/, "/"), overview).pathname === location.pathname);
    if (!event) return;
    const id = eventId(event);
    link.href = `${overview.href}#${id}`;
    link.addEventListener("click", () => {
      const saved = readPosition();
      if (saved?.eventId === id && saved.destination === location.pathname) {
        try { sessionStorage.setItem(timelineReturnKey, id); }
        catch { /* The event anchor remains a usable fallback. */ }
      }
    });
  }

  function initMachine(root) {
    const tapeElement = root.querySelector("[data-machine-tape]");
    const status = root.querySelector("[data-machine-status]");
    const rule = root.querySelector("[data-machine-rule]");
    const stepButton = root.querySelector("[data-machine-step]");
    const playButton = root.querySelector("[data-machine-play]");
    const resetButton = root.querySelector("[data-machine-reset]");
    let tape, head, halted, timer;
    function render() {
      tapeElement.replaceChildren();
      for (let i = 0; i < 7; i++) {
        const cell = document.createElement("div");
        cell.className = "machine-cell" + (i === head ? " is-head" : "");
        cell.innerHTML = `<span class="machine-head">HEAD</span><span class="machine-symbol"></span><span class="machine-position"></span>`;
        cell.querySelector(".machine-symbol").textContent = tape[i] || "□";
        cell.querySelector(".machine-position").textContent = String(i);
        tapeElement.append(cell);
      }
      status.textContent = halted ? "Halted · blank reached" : `Scanning · cell ${head}`;
      stepButton.disabled = halted;
      playButton.disabled = halted;
    }
    function stop() {
      if (timer) clearInterval(timer);
      timer = null;
      playButton.textContent = "Play";
    }
    function step() {
      if (halted) return;
      if (tape[head] === "1") {
        rule.textContent = "Read 1 → keep 1 → move right → keep scanning";
        head += 1;
      } else if (tape[head] === "0") {
        tape[head] = "1";
        rule.textContent = "Read 0 → write 1 → move right → keep scanning";
        head += 1;
      } else {
        halted = true;
        rule.textContent = "Read blank → leave it blank → halt. The tape now reads 1111.";
        stop();
      }
      render();
    }
    function reset() {
      stop();
      tape = ["1", "0", "1", "0", "", "", ""];
      head = 0;
      halted = false;
      rule.textContent = "Current rules: keep 1, change 0 to 1, and stop at the first blank cell.";
      render();
    }
    stepButton.addEventListener("click", step);
    playButton.addEventListener("click", () => {
      if (timer) { stop(); return; }
      playButton.textContent = "Pause";
      timer = setInterval(step, 700);
    });
    resetButton.addEventListener("click", reset);
    reset();
  }

  function initNeuron(root) {
    const inputs = [...root.querySelectorAll("[data-neuron-input]")];
    const modes = [...root.querySelectorAll("[data-neuron-mode]")];
    const values = [...root.querySelectorAll("[data-neuron-value]")];
    const sumElement = root.querySelector("[data-neuron-sum]");
    const thresholdElement = root.querySelector("[data-neuron-threshold]");
    const outputElement = root.querySelector("[data-neuron-output]");
    const modeLabel = root.querySelector("[data-neuron-mode-label]");
    const explanation = root.querySelector("[data-neuron-explanation]");
    let mode = "and";
    function render() {
      const numbers = inputs.map(input => Number(input.checked));
      const sum = numbers[0] + numbers[1];
      const threshold = mode === "and" ? 2 : 1;
      const output = Number(sum >= threshold);
      values.forEach((value, index) => { value.textContent = String(numbers[index]); });
      modes.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.neuronMode === mode)));
      sumElement.textContent = String(sum);
      thresholdElement.textContent = String(threshold);
      outputElement.textContent = String(output);
      outputElement.classList.toggle("is-on", output === 1);
      modeLabel.textContent = `${mode.toUpperCase()} · threshold ${threshold}`;
      explanation.textContent = `${numbers[0]} + ${numbers[1]} = ${sum}. ${sum} ${output ? "reaches" : "is below"} the threshold ${threshold}, so the output is ${output}.`;
    }
    inputs.forEach(input => input.addEventListener("change", render));
    modes.forEach(button => button.addEventListener("click", () => { mode = button.dataset.neuronMode; render(); }));
    render();
  }

  function init() {
    document.querySelectorAll(".chapter-back:not([data-ready])").forEach(link => {
      link.dataset.ready = "true";
      initBackLink(link);
    });
    document.querySelectorAll("[data-chapter-timeline]:not([data-ready])").forEach(root => {
      root.dataset.ready = "true";
      initTimeline(root);
    });
    document.querySelectorAll("[data-turing-machine]:not([data-ready])").forEach(root => {
      root.dataset.ready = "true";
      initMachine(root);
    });
    document.querySelectorAll("[data-neuron-lab]:not([data-ready])").forEach(root => {
      root.dataset.ready = "true";
      initNeuron(root);
    });
    document.querySelectorAll("[data-open-details]:not([data-ready])").forEach(link => {
      link.dataset.ready = "true";
      link.addEventListener("click", event => {
        const details = document.getElementById(link.hash.slice(1));
        if (details?.tagName !== "DETAILS") return;
        event.preventDefault();
        details.open = true;
        history.replaceState(null, "", link.hash);
        requestAnimationFrame(() => details.scrollIntoView({ behavior: "smooth", block: "start" }));
      });
    });
    const linkedDetails = document.getElementById(window.location.hash.slice(1));
    if (linkedDetails?.tagName === "DETAILS") linkedDetails.open = true;
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
  document.addEventListener("DOMContentLoaded", () => {
    if (window.document$) window.document$.subscribe(init);
  });
})();
