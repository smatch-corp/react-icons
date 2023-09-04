import fse from 'fs-extra';

import { FigmaConvertReactComponentResult, figma } from './figma';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const FILE_ID = process.env.FIGMA_FILE_ID!;
const NODE_ID = '1826:9210';

const components = await figma.getIconComponents(FILE_ID, NODE_ID);
console.log(`컴포넌트 ${components.length}개를 가져왔습니다.`);

const images = await figma.getSvgImages(FILE_ID, components);
console.log(`이미지 ${images.length}개를 가져왔습니다.`);

await fse.emptyDir('./src');
console.log('src 폴더를 비웠습니다.');

const entryFilePath = './src/index.ts';
let entryFileContent = '';

await Promise.all(images.map(async image => {
    let reactComponent: FigmaConvertReactComponentResult;
    try {
        console.log(`컴포넌트 ${image.component.name} 변환 중...`);
        reactComponent = await figma.convertToReactComponent(image);
    } catch (cause) {
        console.error(`컴포넌트 ${image.component.name} 변환 중 오류가 발생했습니다.`, { cause });
        console.debug(image.component);
        return;
    }

    const componentPath = `./src/${reactComponent.componentName}.tsx`;
    await fse.writeFile(componentPath, reactComponent.code);

    console.log(`컴포넌트 ${reactComponent.componentName} 변환 완료`);

    entryFileContent += `export { ${reactComponent.componentName} } from './${reactComponent.componentName}';\n`;
}));

await fse.writeFile(entryFilePath, entryFileContent);
console.log('src/index.ts 파일을 생성했습니다.');

console.log('모든 작업이 완료되었습니다.');
