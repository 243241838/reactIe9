## 兼容需要插件
### import './polyfill';
### import 'core-js/es';
### import 'mutation-observer';
### import 'react-app-polyfill/ie9';
### import 'react-app-polyfill/stable';
##  polyfill.js
### import setprototypeof from  'setprototypeof';
### Object.setPrototypeOf = setprototypeof; 
## config文件
### 入口文件切换顺序