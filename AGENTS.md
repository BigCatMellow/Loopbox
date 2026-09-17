# Loopbox agent operating contract

Loopbox uses the MAPS_L project method. The current project objective, scope, authority, roadmap, risks, and proof live under `project/`.

## Operating rules

1. Recover current repository and project truth before acting. Do not rely on remembered branch, roadmap, dependency, or upstream state when it can be checked.
2. Treat `project/PROJECT-BRIEF.md` as the project objective/scope record and `project/ROADMAP.md` as the execution plan. Neither grants authority beyond the human-approved objective and permission envelope recorded there.
3. Make the smallest coherent change that advances the current roadmap item. Do not add infrastructure for hypothetical future needs.
4. Separate verified facts from assumptions. Material uncertainty should be inspected, prototyped, or recorded rather than guessed through.
5. Reused code must have verified compatible licensing and durable provenance. Preserve required notices. Do not copy code merely because it is public.
6. Consequential work must define observable acceptance criteria and leave evidence that another worker can verify.
7. Do not self-authorize material scope expansion, spending, credentials, publication/release, destructive actions, or irreversible external actions unless the roadmap explicitly preauthorizes them.
8. A commit, passing local test, or plausible implementation is not the same as project completion. DONE requires the proof defined in the project brief/roadmap.
9. For substantive implementation, prefer a fresh independent review before merge when practical. A continuation of the author is not independent review.
10. Preserve decision-relevant meaning while keeping records concise. Do not generate process artifacts unless they improve recoverability, authority clarity, execution, or verification.

## Current project paths

- `project/PROJECT-BRIEF.md` — objective, scope, DONE, constraints, unknowns.
- `project/ROADMAP.md` — phases, authority envelope, first wave, checkpoints.
- `project/UPSTREAMS.md` — prior art, licensing, pinned provenance, adoption status.
- `third_party/` — third-party notices or source retained for licensed reuse.

## MAPS_L references

The working method is derived from `BigCatMellow/MAPS_Lean`, especially:

- `docs/wiki/What-MAPS_L-Is.md`
- `docs/wiki/Task,-Run-and-Flow-Lifecycle.md`
- `playbook/PROJECT_BOOTSTRAP.md`
- `templates/project-brief.md`
- `templates/roadmap.md`

If those documents evolve, changes do not silently expand Loopbox authority. Update Loopbox's local project records deliberately when adopting a change.
