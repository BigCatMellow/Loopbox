# Loopbox

Loopbox is a local-first tool for discovering, auditioning, visualizing, and eventually using musically plausible jump/loop points inside songs.

The project starts from the Infinite Jukebox idea: analyze a track into beat-aligned musical features, connect similar points as candidate transitions, and let a listener inspect or traverse those connections. Loopbox's initial focus is narrower and more practical: **find and rank seamless transitions, make them easy to audition, and expose why a transition was suggested.**

## Status

`BOOTSTRAP / RESEARCH`

The repository is being developed using the MAPS_L project-bootstrap method from [`BigCatMellow/MAPS_Lean`](https://github.com/BigCatMellow/MAPS_Lean): inspect reality, define DONE, set scope/authority, plan backward, challenge assumptions, then execute the first bounded wave.

Start here:

- [`project/PROJECT-BRIEF.md`](project/PROJECT-BRIEF.md) — objective, DONE, scope, constraints, unknowns.
- [`project/ROADMAP.md`](project/ROADMAP.md) — phased execution plan and current first wave.
- [`project/UPSTREAMS.md`](project/UPSTREAMS.md) — reusable prior art, license/provenance, and adoption decisions.
- [`third_party/forever-jukebox/`](third_party/forever-jukebox/) — pinned MIT-licensed reference code imported for evaluation before integration.

## Intended first usable slice

1. Load a local audio file.
2. Analyze beats / bars and acoustic features locally.
3. Build candidate transitions between musically similar beats.
4. Rank and display those transitions.
5. Click a candidate to audition `before → jump → after`.
6. Adjust/filter candidates without uploading the song to a third party.

Later modes may include an Infinite-Jukebox-style autonomous player and manual transition editing, but those are not required for the first usable slice.

## Upstream starting point

The main implementation reference is [Forever Jukebox](https://github.com/creightonlinza/forever-jukebox), an MIT-licensed modern implementation of the Infinite Jukebox concept. We are pinning upstream material by commit and preserving its license rather than treating `main` as an unversioned dependency.

See [`project/UPSTREAMS.md`](project/UPSTREAMS.md) and [`third_party/forever-jukebox/LICENSE`](third_party/forever-jukebox/LICENSE).
