import { transform } from '@svgr/core';

/**
 * Figma 컴포넌트 정보 인터페이스.
 * 기존 API의 응답의 일부를 사용합니다.
 */
export interface FigmaComponent {
    /**
     * 컴포넌트 이름
     */
    name: string;
    /**
     * 노드 ID
     */
    node_id: string;
}

/**
 * Figma 이미지 정보 인터페이스.
 */
export interface FigmaSvgImageResult {
    /**
     * 컴포넌트 정보
     */
    component: FigmaComponent;
    /**
     * 이미지 URL
     */
    imageUrl: string;
}

export interface FigmaConvertReactComponentResult {
    /**
     * 변환된 컴포넌트 코드
     */
    code: string;
    /**
     * 컴포넌트 정보
     */
    component: FigmaComponent;
    /**
     * 노멀라이징 된 컴포넌트 이름
     */
    componentName: string;
}

export interface Figma {
    /**
     * Figma API를 통해 가져온 SVG 이미지를 리액트 컴포넌트로 변환합니다.
     * @param svgImage SVG 이미지 정보 (컴포넌트 포함)
     */
    convertToReactComponent(svgImage: FigmaSvgImageResult): Promise<FigmaConvertReactComponentResult>;

    /**
     * Figma API를 통해 파일의 아이콘 컴포넌트들을 가져옵니다.
     * @param fileId 컴포넌트를 가져올 파일의 ID
     * @param nodeId 컴포넌트가 포함된 노드의 ID
     */
    getIconComponents(fileId: string, nodeId: string): Promise<FigmaComponent[]>;

    /**
     * Figma API를 통해 파일의 아이콘 컴포넌트들의 SVG 이미지를 가져옵니다.
     * @param components 다운로드 할 피그마 컴포넌트 리스트
     */
    getSvgImages(fileId: string, components: FigmaComponent[]): Promise<FigmaSvgImageResult[]>;

    /**
     * Figma 에서 가져온 컴포넌트 이름을 리액트 컴포넌트에 맞게 노멀라이즈 합니다.
     * @param name 컴포넌트 이름
     */
    normalizeComponentName(name: string): string;
}

export const figma: Figma = {
    async convertToReactComponent({ component, imageUrl }) {
        let svgCode: string;
        try {
            svgCode = await fetch(imageUrl).then(response => response.text());
        } catch (cause) {
            throw new Error('SVG 이미지를 가져오는 중 오류가 발생했습니다.', { cause });
        }

        const componentName = this.normalizeComponentName(component.name);
        const code = transform
            .sync(svgCode, {
                exportType: 'named',
                icon: true,
                jsxRuntime: 'automatic',
                namedExport: componentName,
                plugins: ['@svgr/plugin-jsx'],
                ref: true,
                typescript: true,
            }, { componentName })
            .replace(/fillOpacity={.+?}/g, '')
            .replace(/fill="((?!none).+?)"/g, 'fill="currentColor"')
            .replace(/stroke="((?!none).+?)"/g, 'stroke="currentColor"');

        return {
            code,
            component,
            componentName,
        };
    },
    async getIconComponents(fileId, nodeId) {
        const url = new URL(`/v1/files/${fileId}/components`, 'https://api.figma.com');

        let result: Response;
        try {
            result = await fetch(url, {
                headers: { 'X-Figma-Token': String(process.env.FIGMA_API_TOKEN) },
            });
        } catch (cause) {
            throw new Error('컴포넌트 정보를 가져오는 중 오류가 발생했습니다.', { cause });
        }

        let data: any;

        try {
            data = await result.json();
        } catch (cause) {
            throw new Error('컴포넌트 정보를 JSON으로 파싱하는 중 오류가 발생했습니다.', { cause });
        }

        return data.meta.components
            .filter((component: any) => component.containing_frame.nodeId === nodeId)
            .map(({ name, node_id }: { name: string; node_id: string }) => ({ name, node_id }));
    },
    async getSvgImages(fileId, components) {
        const url = new URL(`/v1/images/${fileId}`, 'https://api.figma.com');
        url.searchParams.set('ids', components.map((component) => component.node_id).join(','));
        url.searchParams.set('format', 'svg');

        let result: Response;
        try {
            result = await fetch(url, {
                headers: { 'X-Figma-Token': String(process.env.FIGMA_API_TOKEN) },
            });
        } catch (cause) {
            throw new Error('이미지 정보를 가져오는 중 오류가 발생했습니다.', { cause });
        }

        let data: any;
        try {
            data = await result.json();
        } catch (cause) {
            throw new Error('이미지 정보를 JSON으로 파싱하는 중 오류가 발생했습니다.', { cause });
        }

        return components.map(component => ({
            component,
            imageUrl: data.images[component.node_id],
        }));
    },
    normalizeComponentName(name) {
        return 'Icon' + name
            .replaceAll(/\W/g, '')
            .replace(/(Icon\/|^Icon)/, '');
    },
};
