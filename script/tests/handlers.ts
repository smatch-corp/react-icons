import { HttpResponse, http } from 'msw';

import figma_get_components from './stubs/figma-get-components.json';

export const handlers = [
    http.get('https://api.figma.com/v1/files/:file_key/components', () => {
        return HttpResponse.json(figma_get_components);
    }),
    http.get('https://api.figma.com/v1/images/:fileKey', ({ request }) => {
        const ids = new URL(request.url).searchParams.get('ids') || '';
        const images = ids.split(',').reduce(
            (acc, id) => ({ ...acc, [id]: `https://image.com/${id}` }),
            {} as Record<string, string>,
        );

        return HttpResponse.json({
            err: null,
            images,
        });
    }),
    http.get('https://image.com/*', () => {
        return HttpResponse.text(`
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V6C3 5.45 3.19583 4.97917 3.5875 4.5875C3.97917 4.19583 4.45 4 5 4H6V3C6 2.71667 6.09583 2.47917 6.2875 2.2875C6.47917 2.09583 6.71667 2 7 2C7.28333 2 7.52083 2.09583 7.7125 2.2875C7.90417 2.47917 8 2.71667 8 3V4H16V3C16 2.71667 16.0958 2.47917 16.2875 2.2875C16.4792 2.09583 16.7167 2 17 2C17.2833 2 17.5208 2.09583 17.7125 2.2875C17.9042 2.47917 18 2.71667 18 3V4H19C19.55 4 20.0208 4.19583 20.4125 4.5875C20.8042 4.97917 21 5.45 21 6V20C21 20.55 20.8042 21.0208 20.4125 21.4125C20.0208 21.8042 19.55 22 19 22H5ZM5 20H19V10H5V20ZM5 8H19V6H5V8Z" fill="black"/>
            </svg>
        `.trim());
    }),
];