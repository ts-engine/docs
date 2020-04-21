/*! For license information please see 3e8df51a.7e623450.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),o=(n(0),n(161)),i=n(168),c=n(167),l={id:"ide-support",sidebar_label:"IDE support",title:"IDE support"},u={id:"ide-support",title:"IDE support",description:"import Tabs from '@theme/Tabs';",source:"@site/docs/ide-support.md",permalink:"/docs/ide-support",editUrl:"https://github.com/ts-engine/docs/edit/master/docs/ide-support.md",sidebar_label:"IDE support",sidebar:"docs",previous:{title:"Command quick reference",permalink:"/docs/command-quick-reference"},next:{title:"Working in a mono repo",permalink:"/docs/working-in-a-mono-repo"}},s=[{value:"ESLint",id:"eslint",children:[]}],p={rightToc:s},f="wrapper";function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(f,Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"eslint"},"ESLint"),Object(o.b)("p",null,"An ESLint config file is not required for ts-engine to lint code, however without a file IDE's won't know which linting issues to highlight."),Object(o.b)("p",null,"Install ts-engine's default eslint config:"),Object(o.b)(i.a,{defaultValue:"yarn",values:[{label:"Yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"yarn add --dev @ts-engine/eslint-config\n"))),Object(o.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm i -D @ts-engine/eslint-config\n")))),Object(o.b)("p",null,"To fix this add an ",Object(o.b)("inlineCode",{parentName:"p"},".eslintrc")," file in your packages root directory:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title=".eslintrc"',title:'".eslintrc"'}),'{\n  "extends": "@ts-engine/eslint-config"\n}\n')))}b.isMDXComponent=!0},160:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,d=p["".concat(i,".").concat(f)]||p[f]||b[f]||o;return n?a.a.createElement(d,c({ref:t},u,{components:n})):a.a.createElement(d,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[f]="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},163:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=a},167:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},168:function(e,t,n){"use strict";n(24),n(19),n(20);var r=n(0),a=n.n(r),o=n(163);var i=function(){return Object(r.useContext)(o.a)},c=n(160),l=n.n(c),u=n(131),s=n.n(u),p={left:37,right:39};t.a=function(e){var t=e.block,n=e.children,o=e.defaultValue,c=e.values,u=e.groupId,f=i(),b=f.tabGroupChoices,d=f.setTabGroupChoices,m=Object(r.useState)(o),v=m[0],g=m[1];if(null!=u){var y=b[u];null!=y&&y!==v&&g(y)}var O=function(e){g(e),null!=u&&d(u,e)},h=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return(a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":v===t,className:l()("tab-item",s.a.tabItem,{"tab-item--active":v===t}),key:t,ref:function(e){return h.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case p.right:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p.left:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(h,e.target,e)},onFocus:function(){return O(t)},onClick:function(){return O(t)}},n))}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}}}]);