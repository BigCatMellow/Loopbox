/*
 * Initial scoring model derived from Forever Jukebox graph.ts at
 * dd310371750379c48b6c845b93cb79abacb0d2d6.
 * Copyright (c) 2026 Forever Jukebox Contributors.
 * Licensed under the MIT License; see third_party/forever-jukebox/LICENSE.
 */

export const DEFAULT_WEIGHTS = Object.freeze({
  timbre: 1,
  pitch: 10,
  loudnessStart: 1,
  loudnessMax: 1,
  duration: 100,
  confidence: 1,
  beatPositionMismatch: 100,
  missingSegment: 100,
});

export function euclideanDistance(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b) || a.length !== b.length) {
    return Number.POSITIVE_INFINITY;
  }

  let sum = 0;
  for (let i = 0; i < a.length; i += 1) {
    const left = Number(a[i]);
    const right = Number(b[i]);
    if (!Number.isFinite(left) || !Number.isFinite(right)) {
      return Number.POSITIVE_INFINITY;
    }
    const delta = right - left;
    sum += delta * delta;
  }
  return Math.sqrt(sum);
}

export function segmentDistance(a, b, weights = DEFAULT_WEIGHTS) {
  if (!a || !b) return Number.POSITIVE_INFINITY;

  const timbre = euclideanDistance(a.timbre, b.timbre);
  const pitch = euclideanDistance(a.pitches, b.pitches);
  if (!Number.isFinite(timbre) || !Number.isFinite(pitch)) {
    return Number.POSITIVE_INFINITY;
  }

  const loudnessStart = Math.abs(Number(a.loudness_start) - Number(b.loudness_start));
  const loudnessMax = Math.abs(Number(a.loudness_max) - Number(b.loudness_max));
  const duration = Math.abs(Number(a.duration) - Number(b.duration));
  const confidence = Math.abs(Number(a.confidence) - Number(b.confidence));

  if (![loudnessStart, loudnessMax, duration, confidence].every(Number.isFinite)) {
    return Number.POSITIVE_INFINITY;
  }

  return (
    timbre * weights.timbre +
    pitch * weights.pitch +
    loudnessStart * weights.loudnessStart +
    loudnessMax * weights.loudnessMax +
    duration * weights.duration +
    confidence * weights.confidence
  );
}

export function beatDistance(source, destination, weights = DEFAULT_WEIGHTS) {
  const sourceSegments = source?.overlappingSegments ?? [];
  const destinationSegments = destination?.overlappingSegments ?? [];

  if (sourceSegments.length === 0) return Number.POSITIVE_INFINITY;

  let sum = 0;
  for (let i = 0; i < sourceSegments.length; i += 1) {
    const sourceSegment = sourceSegments[i];
    const destinationSegment = destinationSegments[i];

    if (!destinationSegment || sourceSegment.which === destinationSegment.which) {
      sum += weights.missingSegment;
      continue;
    }

    const distance = segmentDistance(sourceSegment, destinationSegment, weights);
    sum += Number.isFinite(distance) ? distance : weights.missingSegment;
  }

  const positionPenalty =
    source.indexInParent !== undefined &&
    destination.indexInParent !== undefined &&
    source.indexInParent === destination.indexInParent
      ? 0
      : weights.beatPositionMismatch;

  return sum / sourceSegments.length + positionPenalty;
}
