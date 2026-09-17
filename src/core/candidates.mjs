import { beatDistance, DEFAULT_WEIGHTS } from './similarity.mjs';

export const DEFAULT_CANDIDATE_OPTIONS = Object.freeze({
  maxNeighbors: 6,
  maxThreshold: 80,
  justBackwards: false,
  justLongBranches: false,
  minLongBranch: 0,
});

export function buildTransitionCandidates(
  beats,
  options = {},
  weights = DEFAULT_WEIGHTS,
) {
  const config = { ...DEFAULT_CANDIDATE_OPTIONS, ...options };
  const candidates = [];

  for (let sourceIndex = 0; sourceIndex < beats.length; sourceIndex += 1) {
    const source = beats[sourceIndex];
    const neighbors = [];

    for (let destinationIndex = 0; destinationIndex < beats.length; destinationIndex += 1) {
      if (sourceIndex === destinationIndex) continue;
      if (config.justBackwards && destinationIndex > sourceIndex) continue;
      if (
        config.justLongBranches &&
        Math.abs(destinationIndex - sourceIndex) < config.minLongBranch
      ) {
        continue;
      }

      const destination = beats[destinationIndex];
      const score = beatDistance(source, destination, weights);
      if (!Number.isFinite(score) || score >= config.maxThreshold) continue;

      neighbors.push({
        sourceIndex,
        destinationIndex,
        sourceStart: source.start,
        destinationStart: destination.start,
        score,
        beatDelta: destinationIndex - sourceIndex,
        direction: destinationIndex < sourceIndex ? 'backward' : 'forward',
      });
    }

    neighbors.sort(
      (a, b) => a.score - b.score || Math.abs(b.beatDelta) - Math.abs(a.beatDelta),
    );
    candidates.push(...neighbors.slice(0, Math.max(0, config.maxNeighbors)));
  }

  return candidates.sort(
    (a, b) => a.score - b.score || a.sourceIndex - b.sourceIndex || a.destinationIndex - b.destinationIndex,
  );
}
