import test from 'node:test';
import assert from 'node:assert/strict';

import { buildTransitionCandidates } from '../src/core/candidates.mjs';
import { beatDistance } from '../src/core/similarity.mjs';

function segment(which, overrides = {}) {
  return {
    which,
    duration: 0.5,
    confidence: 0.9,
    loudness_start: -12,
    loudness_max: -4,
    pitches: [1, 0, 0],
    timbre: [2, 3, 4],
    ...overrides,
  };
}

function beat(which, indexInParent, seg) {
  return {
    which,
    start: which * 0.5,
    duration: 0.5,
    indexInParent,
    overlappingSegments: [seg],
  };
}

test('matching musical position avoids the upstream-style position penalty', () => {
  const a = beat(0, 0, segment(0));
  const samePosition = beat(4, 0, segment(4));
  const differentPosition = beat(5, 1, segment(5));

  assert.equal(beatDistance(a, samePosition), 0);
  assert.equal(beatDistance(a, differentPosition), 100);
});

test('pitch differences contribute more strongly than equal-sized timbre differences', () => {
  const base = beat(0, 0, segment(0));
  const pitchChanged = beat(4, 0, segment(4, { pitches: [0, 0, 0] }));
  const timbreChanged = beat(8, 0, segment(8, { timbre: [1, 3, 4] }));

  assert.ok(beatDistance(base, pitchChanged) > beatDistance(base, timbreChanged));
});

test('candidate generation ranks low-distance transitions and can restrict to backward jumps', () => {
  const beats = [
    beat(0, 0, segment(0)),
    beat(1, 1, segment(1, { pitches: [0, 1, 0] })),
    beat(2, 2, segment(2, { pitches: [0, 0, 1] })),
    beat(3, 3, segment(3, { pitches: [0.5, 0.5, 0] })),
    beat(4, 0, segment(4)),
  ];

  const all = buildTransitionCandidates(beats, { maxThreshold: 80, maxNeighbors: 2 });
  assert.ok(all.some((candidate) => candidate.sourceIndex === 0 && candidate.destinationIndex === 4));
  assert.equal(all[0].score, 0);

  const backwardOnly = buildTransitionCandidates(beats, {
    maxThreshold: 80,
    maxNeighbors: 2,
    justBackwards: true,
  });
  assert.ok(backwardOnly.length > 0);
  assert.ok(backwardOnly.every((candidate) => candidate.destinationIndex < candidate.sourceIndex));
});
