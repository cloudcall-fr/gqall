(()=>{var e={26:(e,t,r)=>{const{GraphQLClient:n}=r(928),o=r(3);e.exports=class{constructor(e,t){this.url=e,this.query=t}setVerbose(e){this.verbose=e}addHeader(e){if(!e)throw"header not valid";{let t=e.split(":",2);if(2!==t.length)throw"header not valid: "+e;this.headers=this.headers||{},this.headers[t[0]]=t[1]}}async run(){this._log(`url: ${this.url}`),this._log(`query: ${this.query}`);const e=new n(this.url,{headers:this.headers}),t=await this._runQuery(e,o.schemaQuery),r=t?t.__schema:void 0;if(!r)throw"can't get schema";const i=r.queryType.name;if(!i)throw"can't get query type name";this._log(`query type name: ${i}`);const s=this._findTypeByName(r.types,i);if(!s)throw"can't get query type";const a=this._parseQueryName();this._log(`query name: ${a}`);const u=this._findTypeByName(s.fields,a);if(!u)throw`can't find query ${a}`;const h=this._findResponseType(u.type);if(!h)throw`can't find response type for query ${a}`;this._log(`response type: ${h}`);const f=this._findTypeByName(r.types,h);if(!f)throw`can't find response for type ${h}`;this._log(`response description: ${f.description}`);const p=this._buildQuery(r,f);if(!p)throw`can't build query for ${a}`;this._log(`query: ${p}`);const c=await this._runQuery(e,p);if(!c)throw`no response from query ${a})`;return c}_findTypeByName(e,t){if(e){const r=e.filter((e=>e.name===t));return 1===r.length?r[0]:void 0}}_findResponseType(e){if(e){if(e.name)return e.name;if(e.ofType)return this._findResponseType(e.ofType)}}_findResponseKind(e){if(e){if(e.kind&&"NON_NULL"!==e.kind)return e.kind;if(e.ofType)return this._findResponseKind(e.ofType)}}_buildQuery(e,t){return`query { ${this.query} ${this._buildFields(e,t)}}`}_buildFields(e,t){let r="";return t.fields&&(r+="{ ",t.fields.forEach((t=>{switch(r+=`${t.name} `,this._findResponseKind(t.type)){case"LIST":case"OBJECT":const n=this._findResponseType(t.type),o=this._findTypeByName(e.types,n);r+=this._buildFields(e,o)}})),r+="} "),r}async _runQuery(e,t){return this._log("running query"),await e.request(t)}_parseQueryName(){return this.query.split("(",1)[0]}_log(e){this.verbose&&console.log(e)}}},3:e=>{e.exports={schemaQuery:"query IntrospectionQuery {\n  __schema {\n    queryType {\n      name\n    }\n    mutationType {\n      name\n    }\n    subscriptionType {\n      name\n    }\n    types {\n      ...FullType\n    }\n    directives {\n      name\n      description\n      locations\n      args {\n        ...InputValue\n      }\n    }\n  }\n}\n\nfragment FullType on __Type {\n  kind\n  name\n  description\n  fields(includeDeprecated: true) {\n    name\n    description\n    args {\n      ...InputValue\n    }\n    type {\n      ...TypeRef\n    }\n    isDeprecated\n    deprecationReason\n  }\n  inputFields {\n    ...InputValue\n  }\n  interfaces {\n    ...TypeRef\n  }\n  enumValues(includeDeprecated: true) {\n    name\n    description\n    isDeprecated\n    deprecationReason\n  }\n  possibleTypes {\n    ...TypeRef\n  }\n}\n\nfragment InputValue on __InputValue {\n  name\n  description\n  type {\n    ...TypeRef\n  }\n  defaultValue\n}\n\nfragment TypeRef on __Type {\n  kind\n  name\n  ofType {\n    kind\n    name\n    ofType {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}"}},905:function(){!function(e){if(!e.fetch){var t="URLSearchParams"in e,r="Symbol"in e&&"iterator"in Symbol,n="FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),o="FormData"in e,i="ArrayBuffer"in e;if(i)var s=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],a=function(e){return e&&DataView.prototype.isPrototypeOf(e)},u=ArrayBuffer.isView||function(e){return e&&s.indexOf(Object.prototype.toString.call(e))>-1};y.prototype.append=function(e,t){e=p(e),t=c(t);var r=this.map[e];this.map[e]=r?r+","+t:t},y.prototype.delete=function(e){delete this.map[p(e)]},y.prototype.get=function(e){return e=p(e),this.has(e)?this.map[e]:null},y.prototype.has=function(e){return this.map.hasOwnProperty(p(e))},y.prototype.set=function(e,t){this.map[p(e)]=c(t)},y.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},y.prototype.keys=function(){var e=[];return this.forEach((function(t,r){e.push(r)})),d(e)},y.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),d(e)},y.prototype.entries=function(){var e=[];return this.forEach((function(t,r){e.push([r,t])})),d(e)},r&&(y.prototype[Symbol.iterator]=y.prototype.entries);var h=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];v.prototype.clone=function(){return new v(this,{body:this._bodyInit})},_.call(v.prototype),_.call(g.prototype),g.prototype.clone=function(){return new g(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new y(this.headers),url:this.url})},g.error=function(){var e=new g(null,{status:0,statusText:""});return e.type="error",e};var f=[301,302,303,307,308];g.redirect=function(e,t){if(-1===f.indexOf(t))throw new RangeError("Invalid status code");return new g(null,{status:t,headers:{location:e}})},e.Headers=y,e.Request=v,e.Response=g,e.fetch=function(e,t){return new Promise((function(r,o){var i=new v(e,t),s=new XMLHttpRequest;s.onload=function(){var e,t,n={status:s.status,statusText:s.statusText,headers:(e=s.getAllResponseHeaders()||"",t=new y,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var r=e.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();t.append(n,o)}})),t)};n.url="responseURL"in s?s.responseURL:n.headers.get("X-Request-URL");var o="response"in s?s.response:s.responseText;r(new g(o,n))},s.onerror=function(){o(new TypeError("Network request failed"))},s.ontimeout=function(){o(new TypeError("Network request failed"))},s.open(i.method,i.url,!0),"include"===i.credentials?s.withCredentials=!0:"omit"===i.credentials&&(s.withCredentials=!1),"responseType"in s&&n&&(s.responseType="blob"),i.headers.forEach((function(e,t){s.setRequestHeader(t,e)})),s.send(void 0===i._bodyInit?null:i._bodyInit)}))},e.fetch.polyfill=!0}function p(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function c(e){return"string"!=typeof e&&(e=String(e)),e}function d(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return r&&(t[Symbol.iterator]=function(){return t}),t}function y(e){this.map={},e instanceof y?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function l(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function b(e){return new Promise((function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}}))}function m(e){var t=new FileReader,r=b(t);return t.readAsArrayBuffer(e),r}function w(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function _(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(n&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(o&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(t&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(i&&n&&a(e))this._bodyArrayBuffer=w(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!i||!ArrayBuffer.prototype.isPrototypeOf(e)&&!u(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=w(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):t&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},n&&(this.blob=function(){var e=l(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?l(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(m)}),this.text=function(){var e,t,r,n=l(this);if(n)return n;if(this._bodyBlob)return e=this._bodyBlob,r=b(t=new FileReader),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o&&(this.formData=function(){return this.text().then(T)}),this.json=function(){return this.text().then(JSON.parse)},this}function v(e,t){var r,n,o=(t=t||{}).body;if(e instanceof v){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new y(e.headers)),this.method=e.method,this.mode=e.mode,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new y(t.headers)),this.method=(n=(r=t.method||this.method||"GET").toUpperCase(),h.indexOf(n)>-1?n:r),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function T(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var r=e.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(n),decodeURIComponent(o))}})),t}function g(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new y(t.headers),this.url=t.url||"",this._initBody(e)}}("undefined"!=typeof self?self:this)},928:function(e,t,r){"use strict";var n=this&&this.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{u(n.next(e))}catch(e){i(e)}}function a(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){e.done?o(e.value):new r((function(t){t(e.value)})).then(s,a)}u((n=n.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=n[2&i[0]?"return":i[0]?"throw":"next"])&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[0,o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},s=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0});var a=r(487),u=r(487);t.ClientError=u.ClientError,r(905);var h=function(){function e(e,t){this.url=e,this.options=t||{}}return e.prototype.rawRequest=function(e,t){return o(this,void 0,void 0,(function(){var r,o,u,h,f,c,d,y,l;return i(this,(function(i){switch(i.label){case 0:return r=this.options,o=r.headers,u=s(r,["headers"]),h=JSON.stringify({query:e,variables:t||void 0}),[4,fetch(this.url,n({method:"POST",headers:Object.assign({"Content-Type":"application/json"},o),body:h},u))];case 1:return[4,p(f=i.sent())];case 2:if(c=i.sent(),f.ok&&!c.errors&&c.data)return d=f.headers,y=f.status,[2,n({},c,{headers:d,status:y})];throw l="string"==typeof c?{error:c}:c,new a.ClientError(n({},l,{status:f.status,headers:f.headers}),{query:e,variables:t})}}))}))},e.prototype.request=function(e,t){return o(this,void 0,void 0,(function(){var r,o,u,h,f,c,d;return i(this,(function(i){switch(i.label){case 0:return r=this.options,o=r.headers,u=s(r,["headers"]),h=JSON.stringify({query:e,variables:t||void 0}),[4,fetch(this.url,n({method:"POST",headers:Object.assign({"Content-Type":"application/json"},o),body:h},u))];case 1:return[4,p(f=i.sent())];case 2:if(c=i.sent(),f.ok&&!c.errors&&c.data)return[2,c.data];throw d="string"==typeof c?{error:c}:c,new a.ClientError(n({},d,{status:f.status}),{query:e,variables:t})}}))}))},e.prototype.setHeaders=function(e){return this.options.headers=e,this},e.prototype.setHeader=function(e,t){var r,n=this.options.headers;return n?n[e]=t:this.options.headers=((r={})[e]=t,r),this},e}();function f(e,t,r){return o(this,void 0,void 0,(function(){return i(this,(function(n){return[2,new h(e).request(t,r)]}))}))}function p(e){return o(this,void 0,void 0,(function(){var t;return i(this,(function(r){return(t=e.headers.get("Content-Type"))&&t.startsWith("application/json")?[2,e.json()]:[2,e.text()]}))}))}t.GraphQLClient=h,t.rawRequest=function(e,t,r){return o(this,void 0,void 0,(function(){return i(this,(function(n){return[2,new h(e).rawRequest(t,r)]}))}))},t.request=f,t.default=f},487:function(e,t){"use strict";var r,n=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(r,n){var o=this,i=t.extractMessage(r)+": "+JSON.stringify({response:r,request:n});return(o=e.call(this,i)||this).response=r,o.request=n,"function"==typeof Error.captureStackTrace&&Error.captureStackTrace(o,t),o}return n(t,e),t.extractMessage=function(e){try{return e.errors[0].message}catch(t){return"GraphQL Error (Code: "+e.status+")"}},t}(Error);t.ClientError=o}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{const e=r(26);r.g.gqall.Client=e})()})();