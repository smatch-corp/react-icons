import { afterAll, afterEach, beforeAll } from 'vitest';

import { server } from './script/tests/server';

beforeAll(() => {
    server.listen({
        onUnhandledRequest: 'error',
    });
});

afterEach(() => {
    server.resetHandlers();
});

afterAll(() => {
    server.close();
});
