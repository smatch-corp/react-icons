import { expect, it } from 'vitest';

import { FigmaComponent, figma } from '../figma.js';

const FILE_ID = 'FILE_ID';
const NODE_ID = '1826:9210';

it('피그마 파일에서 컴포넌트 정보를 가져올 수 있다.', async () => {
    const components = await figma.getIconComponents(FILE_ID, NODE_ID);

    expect(components).toMatchSnapshot();
    expect(components.length).toMatchInlineSnapshot('166');
});

it('컴포넌트 정보를 활용해서 SVG 이미지를 가져올 수 있다.', async () => {
    const components: FigmaComponent[] = [
        { name: 'ArrowRight', node_id: '1:1' },
        { name: 'ArrowLeft', node_id: '1:2' },
    ];

    const images = await figma.getSvgImages(FILE_ID, components);

    expect(images).toMatchInlineSnapshot(`
      [
        {
          "component": {
            "name": "ArrowRight",
            "node_id": "1:1",
          },
          "imageUrl": "https://image.com/1:1",
        },
        {
          "component": {
            "name": "ArrowLeft",
            "node_id": "1:2",
          },
          "imageUrl": "https://image.com/1:2",
        },
      ]
    `);
});

it('컴포넌트 이름을 Icon 으로 시작하는 형태로 노멀라이즈 할 수 있다.', () => {
    expect(figma.normalizeComponentName('Icon/ArrowRight')).toBe('IconArrowRight');
    expect(figma.normalizeComponentName('IconArrowLeft')).toBe('IconArrowLeft');
    expect(figma.normalizeComponentName('ArrowUp')).toBe('IconArrowUp');
});

it('SVG가 포함된 컴포넌트 정보를 리액트 컴포넌트로 변환할 수 있다.', async () => {
    const result = await figma.convertToReactComponent({
        component: {
            name: 'ArrowLeft',
            node_id: '1:1',
        },
        imageUrl: 'https://image.com/1:1',
    });

    expect(result.code.includes('</svg>')).toBeTruthy();
    expect(result.code).toMatchInlineSnapshot(`
      "import type { SVGProps } from \\"react\\";
      import { Ref, forwardRef } from \\"react\\";
      const IconArrowLeft = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg width=\\"1em\\" height=\\"1em\\" viewBox=\\"0 0 24 24\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\" ref={ref} {...props}><path d=\\"M5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V6C3 5.45 3.19583 4.97917 3.5875 4.5875C3.97917 4.19583 4.45 4 5 4H6V3C6 2.71667 6.09583 2.47917 6.2875 2.2875C6.47917 2.09583 6.71667 2 7 2C7.28333 2 7.52083 2.09583 7.7125 2.2875C7.90417 2.47917 8 2.71667 8 3V4H16V3C16 2.71667 16.0958 2.47917 16.2875 2.2875C16.4792 2.09583 16.7167 2 17 2C17.2833 2 17.5208 2.09583 17.7125 2.2875C17.9042 2.47917 18 2.71667 18 3V4H19C19.55 4 20.0208 4.19583 20.4125 4.5875C20.8042 4.97917 21 5.45 21 6V20C21 20.55 20.8042 21.0208 20.4125 21.4125C20.0208 21.8042 19.55 22 19 22H5ZM5 20H19V10H5V20ZM5 8H19V6H5V8Z\\" fill=\\"currentColor\\" /></svg>;
      const ForwardRef = forwardRef(IconArrowLeft);
      export { ForwardRef as IconArrowLeft };"
    `);
});
