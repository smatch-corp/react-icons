import { HttpResponse, http } from 'msw';

import figma_get_components from './stubs/figma-get-components.json' assert { type: 'json' };

const handlers = [
  http.get('https://api.figma.com/v1/files/:file_key/components', () => {
    return HttpResponse.json(figma_get_components);
  }),
  http.get('https://api.figma.com/v1/images/:file_key', ({ request }) => {
    const ids = new URLSearchParams(request.url).get('ids') || '';
    const images = ids.split(',').reduce(
      (acc, id) => ({ ...acc, [id]: `https://image.com/${id}` }),
      {} as Record<string, string>,
    );

    return HttpResponse.json({
      err: null,
      images,
    });
  }),
];

export default handlers;
