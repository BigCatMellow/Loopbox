# Upstreams and prior art

This ledger records external code/concepts considered for Loopbox. Public availability alone is not permission to copy; each adopted source needs a compatible license and pinned provenance.

## Forever Jukebox

- Repository: `creightonlinza/forever-jukebox`
- Pinned revision evaluated: `dd310371750379c48b6c845b93cb79abacb0d2d6`
- Revision date observed: 2026-09-15
- License: MIT
- License copy: `third_party/forever-jukebox/LICENSE`
- Status: `ADOPTED AS INITIAL REFERENCE / PARTIAL DERIVATION`

### Useful pieces

- `engine/` — local Python audio analysis producing beat/bar/segment-style analysis data.
- `packages/shared/src/engine/graph.ts` — transition graph construction and nearest-neighbor scoring.
- `packages/shared/src/engine/types.ts` — analysis/graph data shapes.
- shared playback/visualization code — useful later, but intentionally not imported in the first wave.

### Initial behavior intentionally borrowed

The first Loopbox scoring baseline preserves the key idea from upstream `graph.ts`:

- Euclidean distance for timbre and pitch vectors.
- Absolute difference for segment loudness, duration, and confidence.
- Weighted combination of those distances.
- A strong penalty when source/destination beat positions inside the parent musical unit do not match.
- Lower score means a more similar candidate.

Loopbox re-expresses this as a small dependency-free module rather than copying the entire Forever Jukebox graph/playback system. The derived files contain a provenance header and the upstream MIT notice is retained in `third_party/forever-jukebox/LICENSE`.

### Deliberately not adopted yet

- Server/API and hosted ingestion stack.
- Spotify/YouTube search/download integration.
- Deployment/Docker stack.
- Whole UI/PWA.
- Upstream random branch traversal policy.

These may be studied later, but copying them now would widen the product before the transition-discovery core is proven.

## Infinite Jukebox / Eternal Jukebox

- Status: `CONCEPTUAL PRIOR ART; NOT YET COPIED`
- Role: original interaction model and historical reference for the circular bridge visualization / branching-song idea.
- Before copying any source from these projects, verify the exact repository, revision, and license and add it here.

## Dependency policy for this project

1. Prefer a small stable dependency or clean reimplementation of a licensed idea over vendoring a whole application.
2. Pin source revisions when behavior is adopted from a moving upstream.
3. Keep analysis, transition scoring, playback, and visualization separable.
4. Preserve notices for copied/substantially derived MIT code.
5. Record why each dependency/reuse decision improves correctness, quality, or delivery rather than adding it speculatively.
