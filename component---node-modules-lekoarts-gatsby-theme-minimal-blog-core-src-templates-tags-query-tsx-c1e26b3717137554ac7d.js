(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[726],{38797:function(u,t,e){var n="[object Symbol]",f=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,r=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o="\\u2700-\\u27bf",a="a-z\\xdf-\\xf6\\xf8-\\xff",i="A-Z\\xc0-\\xd6\\xd8-\\xde",c="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",l="['’]",s="["+c+"]",x="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",d="\\d+",b="[\\u2700-\\u27bf]",g="["+a+"]",p="[^\\ud800-\\udfff"+c+d+o+a+i+"]",Z="(?:\\ud83c[\\udde6-\\uddff]){2}",j="[\\ud800-\\udbff][\\udc00-\\udfff]",m="["+i+"]",v="(?:"+g+"|"+p+")",y="(?:"+m+"|"+p+")",O="(?:['’](?:d|ll|m|re|s|t|ve))?",h="(?:['’](?:D|LL|M|RE|S|T|VE))?",A="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",E="[\\ufe0e\\ufe0f]?",I=E+A+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",Z,j].join("|")+")"+E+A+")*"),U="(?:"+[b,Z,j].join("|")+")"+I,k=RegExp(l,"g"),C=RegExp(x,"g"),z=RegExp([m+"?"+g+"+"+O+"(?="+[s,m,"$"].join("|")+")",y+"+"+h+"(?="+[s,m+v,"$"].join("|")+")",m+"?"+v+"+"+O,m+"+"+h,d,U].join("|"),"g"),L=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,S="object"==typeof e.g&&e.g&&e.g.Object===Object&&e.g,R="object"==typeof self&&self&&self.Object===Object&&self,T=S||R||Function("return this")();var N,w=(N={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(u){return null==N?void 0:N[u]});var D=Object.prototype.toString,G=T.Symbol,V=G?G.prototype:void 0,P=V?V.toString:void 0;function Y(u){if("string"==typeof u)return u;if(function(u){return"symbol"==typeof u||function(u){return!!u&&"object"==typeof u}(u)&&D.call(u)==n}(u))return P?P.call(u):"";var t=u+"";return"0"==t&&1/u==-Infinity?"-0":t}function H(u){return null==u?"":Y(u)}var J,$=(J=function(u,t,e){return u+(e?"-":"")+t.toLowerCase()},function(u){return function(u,t,e,n){var f=-1,r=u?u.length:0;for(n&&r&&(e=u[++f]);++f<r;)e=t(e,u[f],f,u);return e}(function(u,t,e){return u=H(u),void 0===(t=e?void 0:t)?function(u){return L.test(u)}(u)?function(u){return u.match(z)||[]}(u):function(u){return u.match(f)||[]}(u):u.match(t)||[]}(function(u){return(u=H(u))&&u.replace(r,w).replace(C,"")}(u).replace(k,"")),J,"")});u.exports=$},75068:function(u,t,e){"use strict";e.r(t),e.d(t,{default:function(){return b}});var n=e(67294),f=e(70977),r=e(35510),o=e(38797),a=e.n(o),i=e(25444),c=e(89469),l=e(96807),s=e(85999),x=e(71680),d=function(u){var t=u.list,e=(0,l.Z)(),n=e.tagsPath,o=e.basePath;return(0,f.tZ)(c.Z,null,(0,f.tZ)(s.Z,{title:"Tags"}),(0,f.tZ)(r.X6,{as:"h1",variant:"styles.h1"},"Tags"),(0,f.tZ)(r.xu,{mt:[4,5]},t.map((function(u){return(0,f.tZ)(r.kC,{key:u.fieldValue,mb:[1,1,2],sx:{alignItems:"center"}},(0,f.tZ)(r.rU,{as:i.Link,sx:{variant:"links.listItem",mr:2},to:(0,x.Z)("/"+o+"/"+n+"/"+a()(u.fieldValue))},u.fieldValue," ",(0,f.tZ)("span",{sx:{color:"secondary"}},"(",u.totalCount,")")))}))))};var b=function(u){var t=Object.assign({},u),e=t.data.allPost;return n.createElement(d,Object.assign({list:e.group},t))}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-tags-query-tsx-c1e26b3717137554ac7d.js.map