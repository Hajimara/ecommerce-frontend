import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'next',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended'
  ),
  {
    rules: {
      'prettier/prettier': ['error', { endOfLine: 'auto' }], // ✅ Prettier 충돌 방지
      quotes: ['error', 'single', { allowTemplateLiterals: true }], // ✅ 작은 따옴표 강제, 템플릿 리터럴 허용
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'external'],
            ['internal', 'parent', 'sibling', 'index'],
            'type',
          ],
          'newlines-between': 'always',
        },
      ],
      'react/react-in-jsx-scope': 'off', // ✅ Next.js에서는 필요 없음
      'react/jsx-props-no-spreading': 'off', // ✅ JSX에서 props spreading 허용
      'import/prefer-default-export': 'off', // ✅ 단일 export 사용 가능
      'react-hooks/exhaustive-deps': 'off', // ✅ useEffect 의존성 검사 비활성화
      'react/button-has-type': 'off', // ✅ 버튼의 `type` 속성 강제 제한 해제
      'jsx-a11y/heading-has-content': 'off', // ✅ 접근성 검사 규칙 해제
      'jsx-a11y/no-static-element-interactions': 'off', // ✅ 클릭 이벤트 제한 해제
      'no-useless-catch': 'off', // ✅ 불필요한 catch 문 검사 비활성화
      'react/prop-types': 'off', // ✅ TypeScript 사용 시 prop-types 필요 없음
      'jsx-a11y/click-events-have-key-events': 'off', // ✅ 클릭 이벤트 키보드 이벤트 강제 제한 해제
      'react/jsx-no-useless-fragment': 'off', // ✅ 불필요한 fragment 사용 규칙 해제
      'consistent-return': 'off', // ✅ async 함수에서 항상 return 강제 X
      'no-restricted-globals': 'off', // ✅ `isNaN()` 대신 `Number.isNaN()` 강제 제한 해제
      'no-unsafe-optional-chaining': 'off', // ✅ 옵셔널 체이닝(`?.`) 안전성 검사 비활성화
      'arrow-body-style': 'off', // ✅ 화살표 함수 스타일 강제 X
      'import/no-extraneous-dependencies': 'off', // ✅ 외부 종속성(import) 강제 제한 해제
      'jsx-a11y/control-has-associated-label': 'off', // ✅ 입력 요소(label) 관련 강제 제한 해제
      'jsx-a11y/label-has-associated-control': 'off', // ✅ label과 input 연관성 검사 비활성화
      'jsx-a11y/anchor-has-content': 'off', // ✅ a 태그 내용 검사 해제
      'jsx-a11y/mouse-events-have-key-events': 'off', // ✅ 키보드 이벤트 강제 제한 해제
      'no-case-declarations': 'off', // ✅ switch-case 내 변수 선언 가능
      'no-restricted-syntax': 'off', // ✅ 특정 JavaScript 문법 사용 제한 해제
      'react/require-default-props': 'off', // ✅ Optional prop 사용 시 defaultProps 강제 해제
      'jsx-a11y/media-has-caption': 'off', // ✅ 미디어 요소 접근성 자막 요구 규칙 해제
      '@next/next/no-img-element': 'off', // ✅ Next.js에서 `img` 태그 사용 허용
    },
  },
];

export default eslintConfig;
