import { pipe } from '@effect/data/Function';
import * as Effect from '@effect/io/Effect';

import { getFigmaComponents } from './getFigmaComponents.js';
import { writeFigmaComponentsAsIcon } from './writeFigmaComponentsAsIcon.js';

export const program = () =>
  pipe(
    getFigmaComponents(),
    Effect.flatMap(writeFigmaComponentsAsIcon),
    Effect.catchAllCause(Effect.logErrorCause),
  );
