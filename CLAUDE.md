Operating rules for this codebase. The governing principle: **your output should be indistinguishable from code already here** — a reviewer shouldn't be able to tell which lines you wrote.

## 1. Think Before Coding

**Don't assume. Surface tradeoffs. Ask when unclear.**

- State assumptions explicitly; if uncertain, ask.
- If multiple interpretations exist, present them — don't pick silently.
- Explore and plan before coding. If a simpler approach exists, say so.

## 2. Conform to the Codebase

**Match what's here.** This is the top rule after correctness.

- Before writing, read the 2–3 nearest existing examples (a similar component/hook/route/test) and follow their pattern.
- Match the surrounding file's style, naming, imports, and idioms. Defer to the formatter/linter — never fight it.
- Reuse existing helpers, hooks, types, and components before creating new ones. Search first.
- IMPORTANT: Don't add a new dependency or pattern when one already exists. Build only with libraries already used in this codebase.

## 3. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features, abstractions, or configurability beyond what was asked.
- No error handling for impossible cases.
- If 200 lines could be 50, rewrite it. If it wouldn't pass code review, fix it before shipping.

## 4. Surgical Changes

**Touch only what the task requires.**

- Don't refactor or reformat unrelated code; match existing style even if you'd do it differently.
- Spotted unrelated dead code? Mention it — don't delete it.
- Remove only the imports/vars your own change orphaned.
- The test: every changed line traces directly to the request.

## 5. Goal-Driven Execution

**Define a check Claude can run, then loop until it passes.**

- Turn tasks into verifiable goals: "fix the bug" → write a failing test that reproduces it, then make it pass.
- Address the root cause; don't suppress the error.
- For multi-step work, state a short plan with a verify step per step.
- YOU MUST show evidence (test output, the command and what it returned) rather than asserting success.

## 6. Cross-Check Before Finalizing

**Re-read as if seeing it fresh: if this shipped now, what breaks?**

- Check edge cases: empty inputs, nulls, boundaries, concurrency.
- Trace one real example end-to-end.
- Confirm signatures and return types match callers; mentally run affected call sites.
- Confirm it conforms to §2 — style, naming, imports, idioms all match the neighbors.
