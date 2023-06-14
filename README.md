### react-icons

![npm (scoped)](https://img.shields.io/npm/v/@smatch-corp/react-icons) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@smatch-corp/react-icons)

스매치 웹 프로덕트에서 사용하는 리액트 아이콘 패키지

## Installation

```
pnpm add @smatch-corp/react-icons
```

## Usage

```typescript
import { IconAddRounded } from '@smatch-corp/react-icons';

<IconAddRounded />
```

See Also: [사용할 수 있는 아이콘 목록](/src/index.ts)

## Import Icons

새로 추가된 아이콘이 있는 경우, 피그마에서 아이콘을 가져와 패키지를 업데이트 해야 합니다.

1. 저장소 내의 Actions 중 [Run import icons](https://github.com/smatch-corp/react-icons/actions/workflows/import.yaml) 를 클릭합니다.
2. **Run workflow** 버튼을 클릭하여 워크플로우를 실행합니다.
3. 이후 Pull Request가 생성되면 검토 후 머지합니다.

위 과정 중 문제가 발생하여 정상적으로 가져올 수 없는 경우 [@iamchanii](https://github.com/iamchanii)에게 알려주세요.

## Author

- [@iamchanii](https://github.com/iamchanii)