import { pipe } from '@effect/data/Function';
import * as Effect from '@effect/io/Effect';
import * as Exit from '@effect/io/Exit';
import * as Layer from '@effect/io/Layer';
import * as Runtime from '@effect/io/Runtime';
import * as Scope from '@effect/io/Scope';

import { FetchLive } from './Fetch.js';
import { FigmaRepositoryLive } from './FigmaRepository.js';
import { IconRepositoryLive } from './IconRepository.js';
import { program } from './program.js';

const makeAppRuntime = <R, E, A>(layer: Layer.Layer<R, E, A>) =>
  Effect.gen(function*($) {
    const scope = yield* $(Scope.make());
    const ctx = yield* $(Layer.buildWithScope(scope)(layer));
    const runtime = yield* $(pipe(
      Effect.runtime<A>(),
      Effect.provideContext(ctx),
    ));

    return {
      close: Scope.close(scope, Exit.unit()),
      runtime,
    };
  });

const appLayer = pipe(
  FetchLive,
  Layer.provideMerge(FigmaRepositoryLive),
  Layer.provideMerge(IconRepositoryLive),
);

const promise = Effect.runPromise(makeAppRuntime(appLayer));

promise.then(({ close, runtime }) => {
  process.on('beforeExit', () => Effect.runPromise(close));

  pipe(
    program(),
    Runtime.runPromise(runtime),
  );
});
