
원래는 webpack 설정으로 변경해야 하나 간략하기 기본 react 프로젝트에서 설정 하나만 수정해서 쓰려면 아래 파일의 내용을 연다.

> node_modules/react-scripts/config/webpackDevServer.config.js

열면 다음과 같은 코드가 있는데 `disableHostCheck` 설정을 true로 수정해준다. 

>   disableHostCheck: !proxy || process.env.DANGEROUSLY_DISABLE_HOST_CHECK === 'true',
>    // Enable gzip compression of generated files.
>    compress: true,

>     disableHostCheck: true, //      !proxy || process.env.DANGEROUSLY_DISABLE_HOST_CHECK === 'true',
>   // Enable gzip compression of generated files.
>   compress: true,
 
