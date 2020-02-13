## ESLint, Prettier 적용 (2020. 02 .13)

eslint --init 명령어로 eslintrc.json 파일 생성
env 값에 node를 넣으면 rules의 "no-implicit-globals": "warn" 규칙이 적용이 안됨
parserOptions 값의 sourceType 을 module 로 넣어도 마찬가지 TT

workspace 별로 prettier 의 설정을 다르게 주고싶어서 vscode의 설정파일(settings.json)을 해당 workspace 디렉토리에 작성함


**settings.json**
```JSON
{
    "editor.formatOnSave": false,
    "[javascript]": {
        "editor.formatOnSave": true
    },
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
        "source.fixAll.stylelint": true
    },
}
```

필요한 규칙들을 차차 추가할 예정이며
.eslintrc.json 파일 내부의 값들의 의미를 더 조사해봐야 할듯