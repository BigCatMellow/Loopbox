# Project Brief: Loopbox

- Owner: James / BigCatMellow
- Status: `ACTIVE`
- Goal: Build a local-first tool that discovers, ranks, visualizes, and auditions musically plausible jump/loop points inside a song.
- User/operator: A listener, editor, or hobbyist who wants useful seamless transition points without manually hunting through a waveform.

## Current reality

- Checked facts:
  - `BigCatMellow/Loopbox` began as an empty public repository on 2026-09-17.
  - Forever Jukebox is an active modern Infinite-Jukebox-style implementation with separate audio-analysis and branching/playback components.
  - Forever Jukebox is MIT licensed.
  - Its branch graph compares beat-overlapping segments using timbre, pitch, loudness, duration, confidence, and beat position, then keeps low-distance candidates.
- Evidence/source paths:
  - Loopbox repository history.
  - `creightonlinza/forever-jukebox` pinned in `project/UPSTREAMS.md`.
  - `third_party/forever-jukebox/LICENSE`.
- Important assumptions:
  - A useful first version can be built around local files rather than streaming-service integration.
  - Beat-aligned acoustic similarity plus musical-position constraints can produce useful candidate jumps, but the quality bar still needs empirical testing.
  - Browser-local analysis is preferred, but it has not yet been proven fast/reliable enough for the intended formats and track lengths.

## Definition of DONE

- Finished result:
  - A user can open a supported local song file, run analysis locally, see candidate transition bridges, sort/filter them by quality, click a bridge to audition the transition, and adjust or reject candidates.
  - At minimum the UI exposes source time, destination time, score, and enough surrounding playback to judge whether the transition works.
  - Audio is not uploaded by the default local workflow.
- Final proof:
  - Automated core tests pass.
  - A documented representative audio test set completes analysis without crashing.
  - Candidate transitions can be generated and auditioned on that set.
  - A manual acceptance pass confirms that at least some high-ranked transitions on representative tracks are perceptually usable and that the UI accurately identifies their source/destination points.
  - License/provenance audit passes for all reused code.
- Final proof performed/inspected by: fresh implementation reviewer plus human operator for perceptual acceptance.

## Scope and boundaries

- In scope:
  - Local audio-file loading.
  - Beat/bar/segment analysis.
  - Transition similarity scoring and filtering.
  - Bridge visualization.
  - Transition auditioning.
  - Manual candidate deletion/selection and threshold adjustment.
  - Reuse/adaptation of compatible open-source prior art with preserved attribution.
  - A later optional infinite-play mode if the core transition tool is proven first.
- Not doing for the initial usable slice:
  - Spotify/YouTube account integration or hosted song ingestion.
  - Circumventing DRM or downloading copyrighted audio from services.
  - Cloud processing as a requirement.
  - Native mobile apps.
  - AI/LLM inference as part of transition scoring.
  - Publishing a production service before the local workflow is proven.
- Effort limit: if browser-local analysis cannot meet useful speed/quality after a bounded prototype and one alternative implementation attempt, stop and reconsider a local sidecar/WASM architecture rather than layering workarounds.

## Constraints and quality bar

- Local-first by default; user audio should remain on-device in the normal workflow.
- The scoring core must be deterministic for fixed analysis input and configuration.
- Candidate score meaning must be inspectable rather than opaque.
- Upstream code must be pinned to a revision when adopted and retain required license notices.
- Architecture should keep audio analysis separate from transition scoring so either can be improved independently.
- Prefer minimal dependencies until a dependency demonstrably improves correctness, analysis quality, or portability.

## Unknowns and risks

- Highest-risk unknown: whether fully browser-local feature extraction can match the transition quality of the Python/Essentia-style pipeline at acceptable performance.
- Transition ranking needs a perceptual evaluation method; numerical similarity alone can over-rank musically awkward jumps.
- Beat/downbeat mistakes can make otherwise similar audio transition poorly.
- Very short or highly non-repetitive tracks may have few or no good branches.
- Audio decoding/analysis support varies by browser and file format.
- Research/prototype needed first: local analysis spike and a small repeatable transition-quality fixture set.
- Evidence that would invalidate the current plan: browser-local analysis is too slow/unreliable on normal tracks, or ranked candidates show weak relationship to perceptual transition quality even after bounded scoring adjustments.

## Decision path

- Owner/orchestrator may decide: implementation details, file/module layout, scoring experiments, test fixtures, compatible dependencies, routine commits/PRs, and in-scope roadmap refinement.
- Escalate to operator: material objective expansion, hosted/public service launch, credentials or paid APIs, new spending, DRM/service ingestion, project-wide license choice, or a major architecture pivot after the bounded local-analysis experiment fails.

## Planning

- Roadmap: `project/ROADMAP.md`
- Roadmap state: `WORKING`
- Mission meeting required: `NO` for bootstrap; challenge is embedded in the first research wave.
- First wave: `LBOX-001` through `LBOX-004` in the roadmap.
- Reconsider if: local-analysis spike fails its performance/quality criteria, upstream reuse creates dependency/licensing problems, or candidate scoring performs poorly on the fixture set.
