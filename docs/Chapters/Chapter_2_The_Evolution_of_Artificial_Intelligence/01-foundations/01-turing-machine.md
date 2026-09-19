# 1936 — Alan Turing and the Turing Machine

In 1936, **Alan Turing** introduced what is now called the **Turing machine**.

The Turing machine was not a physical computer. It was a theoretical mathematical model designed around a fundamental question:

> **What does it mean for a problem to be computable?**

## What is a Turing Machine?

A Turing machine is a simple abstract computer consisting of:

- an unbounded tape divided into cells,
- a read/write head,
- a current state,
- a set of transition rules.

The tape acts like memory. Each cell stores a symbol, and the head examines one cell at a time.

```text
                Read / Write Head
                       ↓
... | 0 | 1 | 1 | 0 | _ | _ | ...
             Tape / Memory
```

## How does it work?

At every step:

```text
Read
 ↓
Write
 ↓
Move left or right
 ↓
Change state
```

A transition rule can be written as:

$$
(q_i,s) \rightarrow (s',D,q_j)
$$

where:

- $q_i$ is the current state,
- $s$ is the symbol currently being read,
- $s'$ is the new symbol written to the tape,
- $D$ determines whether the head moves left or right,
- $q_j$ is the new state.

## Key Idea

> A surprisingly simple mechanical system can represent general algorithmic computation.

The Turing machine gave computer science a mathematical framework for talking about **computation itself**.

This matters to the history of AI because before asking whether a machine can be intelligent, we first need a way to understand what machines can compute.

## What comes next?

In 1943, Warren McCulloch and Walter Pitts approached computation from another direction:

> **Can neuron-like systems perform computation?**

That leads to the **McCulloch–Pitts neuron**.

---

[← Back to Chapter 2 timeline](../index.md)

## References

- Gjergji Kasneci, _AI in Society — Foundations of AI and Data Science_, Technical University of Munich (TUM), Chapter 2.
- Alan M. Turing, _On Computable Numbers, with an Application to the Entscheidungsproblem_ (1936).
