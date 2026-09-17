# Roadmap: Loopbox

- State: `WORKING`
- Authorization revision/date: 2026-09-17 — bootstrap, compatible upstream reuse, and local-first prototype authorized by owner
- Default autonomous execution: `YES` inside the envelope below

## Current reality

- Checked facts:
  - Repository started empty and now contains the project bootstrap.
  - Forever Jukebox is MIT licensed and contains a current local-analysis engine plus branch-graph logic.
  - The upstream graph uses low-distance nearest-neighbor edges between beat-aligned quanta and applies a strong penalty when beat positions within their parent do not match.
- Evidence/source paths: `project/PROJECT-BRIEF.md`, `project/UPSTREAMS.md`, `third_party/forever-jukebox/LICENSE`, upstream pinned revision.
- Important assumptions: browser-local analysis is feasible enough to remain the preferred architecture; perceptual transition quality can be improved from the upstream similarity baseline rather than requiring a wholly different method.

## Definition of DONE

- Finished result: a local-first application that analyzes a song, exposes ranked candidate jump/loop bridges, visualizes them, and lets the user audition and curate them.
- Final proof: automated tests + representative-track analysis/audition evidence + human perceptual acceptance + license/provenance review.
- Who can perform/inspect final proof: fresh reviewer for implementation/provenance; human operator for perceptual acceptance.

## Execution permission envelope

Approval of this roadmap authorizes routine implementation and research inside the following bounds without approval pauses.

- Authorized objective: deliver the DONE state above.
- In-scope decisions/actions: repository scaffolding, compatible OSS reuse/adaptation, implementation, tests, bounded prototypes, documentation, routine branches/commits/PRs, internal architecture choices, and scoring experiments.
- In scope: local file workflow, analysis, transition graph/scoring, visualization, auditioning, manual curation, deterministic exports of analysis/transition metadata.
- Explicitly excluded: paid services, new credentials, DRM circumvention, hosted ingestion of copyrighted songs, public production deployment, native mobile apps, unrelated media tooling, and a project-wide license decision not already required by reused code.
- Preauthorized external/destructive/irreversible actions: create/update Loopbox repository files, branches, issues, and PRs; no release/public deployment or destructive history rewrite.
- Human reauthorization triggers: material objective expansion, paid API/service, credentials, production publication, destructive operation outside ordinary versioned edits, project-wide license choice, or architecture pivot that abandons local-first as the default.
- Human checkpoints: none during the bounded bootstrap/prototype wave.
- Effort limit: one primary browser-local analysis approach plus one bounded alternative before an architecture checkpoint.
- Highest-risk unknown: quality/performance of local feature extraction on normal songs.

## Backward plan

1. Immediately before DONE: integrated UI passes representative-track acceptance and provenance review.
2. Before that: analysis, candidate graph, visualization, and audition engine are integrated behind stable internal data contracts.
3. Before that: analysis and transition scoring are independently testable against fixtures and a small audio corpus.
4. Current state: bootstrap plus upstream selection; no proven Loopbox audio pipeline yet.

## Mission meeting

- Required: `NO` for bootstrap.
- Questions to settle: which local analyzer to use; minimum supported formats; scoring quality metric; audition/crossfade behavior; visualization data model.
- Assumptions accepted/rejected: accept Forever Jukebox as a starting reference, not as the target product architecture.
- Questions resolved internally: licensing and initial reuse path are verified from upstream source/license.
- Human decisions required before roadmap approval: none for this bounded wave.
- Roadmap changes: optional infinite playback moved after transition discovery/audition proof.
- First wave selected: `LBOX-001`–`LBOX-004`.

## First wave

- [x] `LBOX-001` — Recover prior art, verify license, pin provenance, and establish project brain — Owner: bootstrap agent
- [x] `LBOX-002` — Extract a minimal dependency-free transition-scoring core from verified upstream behavior, with tests — Owner: bootstrap agent
- [ ] `LBOX-003` — Build analysis adapter spike that converts one local audio file into Loopbox beat/segment feature data — Owner: implementation agent
- [ ] `LBOX-004` — Create a small fixture/evaluation harness that measures candidate stability and supports human good/bad transition labels — Owner: implementation/research agent

## Phase 0 — Foundation

- [x] Establish MAPS_L-style project brief, roadmap, authority boundaries, and upstream ledger.
- [x] Preserve upstream MIT notice and exact revision provenance.
- [x] Establish deterministic similarity/candidate-generation baseline.
- [ ] Prove one local analysis route on WAV/MP3 before broad format support.
- [ ] Define stable `TrackAnalysis` / `TransitionCandidate` interchange shape.

## Phase 1 — Usable local slice

- [ ] Local file picker/drop target.
- [ ] Analyze track and cache analysis locally for the session.
- [ ] Generate and rank candidate transitions.
- [ ] Timeline/circular bridge visualization.
- [ ] Click-to-audition with configurable pre-roll/post-roll.
- [ ] Filter by score, branch distance, direction, and beat/bar alignment.
- [ ] Manual keep/reject controls.

## Phase 2 — Quality and integration

- [ ] Representative-track fixture corpus using redistributable or operator-provided audio.
- [ ] Compare numerical score to human transition labels.
- [ ] Adjust scoring only against explicit fixtures; avoid unmeasured tuning.
- [ ] Add short crossfade/zero-crossing handling only if evidence shows it improves transitions.
- [ ] Fresh independent implementation and provenance review.
- [ ] Perform final proof of DONE.

## Phase 3 — Optional extensions after core proof

- [ ] Infinite/autonomous traversal mode.
- [ ] Manual branch creation and fine timing adjustment.
- [ ] Save/load transition maps.
- [ ] Offline PWA packaging.
- [ ] Export rendered loop/jump preview where legally and technically appropriate.

## Autonomous continuation

After this roadmap's bounded authorization:

1. select the next eligible item;
2. state its inputs, outputs, acceptance criteria, and stop boundary;
3. implement/prototype the smallest coherent slice;
4. verify it with deterministic evidence where possible;
5. reconcile the result into this roadmap;
6. continue unless a listed reauthorization trigger is reached.

## Checkpoints

### Checkpoint A — after `LBOX-004`

- Type: `INTERNAL`
- Evidence reviewed: analyzer speed/reliability, candidate count/distribution, human labels, dependency cost.
- Decision: `CONTINUE | CHANGE | CUT SCOPE | RESEARCH | STOP | HUMAN REAUTHORIZATION`
- Reason: decide whether browser-local analysis and the baseline graph deserve full UI integration.
- Re-plan if: analyzer fails on normal tracks or score has poor relationship to perceptual quality.

### Checkpoint B — first integrated usable slice

- Type: `INTERNAL`
- Evidence reviewed: end-to-end local file → analysis → candidates → audition workflow.
- Decision: same decision set above.
- Next action: quality hardening or bounded architecture correction.
