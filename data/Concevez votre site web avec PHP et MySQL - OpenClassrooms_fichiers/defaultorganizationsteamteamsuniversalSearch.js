(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{2599:function(t,e,n){"use strict";t.exports=n(2600)},2600:function(t,e,n){"use strict";n.r(e),n.d(e,"HotKeys",function(){return k}),n.d(e,"withHotKeys",function(){return w}),n.d(e,"FocusTrap",function(){return j}),n.d(e,"HotKeyMapMixin",function(){return O});var r=n(6),o=n.n(r),a=n(1),i=n.n(a),c=n(2601),u=n.n(c),s=n(338),l=n.n(s),f=n(2602),p=n.n(f),h=n(2603),d=n.n(h),y=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},v=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},b=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},g=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},m=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},j=function(t){function e(){return y(this,e),m(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return b(e,a.Component),v(e,[{key:"render",value:function(){var t=this.props,e=t.component,n=t.children,r=g(t,["component","children"]);return i.a.createElement(e,_({tabIndex:"-1"},r),n)}}]),e}();j.propTypes={onFocus:o.a.func,onBlur:o.a.func,component:o.a.oneOfType([o.a.func,o.a.string]),children:o.a.node},j.defaultProps={component:"div"};var k=function(t){function e(t,n){y(this,e);var r=m(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));return r.onFocus=r.onFocus.bind(r),r.onBlur=r.onBlur.bind(r),r}return b(e,a.Component),v(e,[{key:"getChildContext",value:function(){return{hotKeyParent:this,hotKeyMap:this.__hotKeyMap__}}},{key:"componentWillMount",value:function(){this.updateMap()}},{key:"updateMap",value:function(){var t=this.buildMap();return!u()(t,this.__hotKeyMap__)&&(this.__hotKeyMap__=t,!0)}},{key:"buildMap",value:function(){var t=this.context.hotKeyMap||{},e=this.props.keyMap||{};return _({},t,e)}},{key:"getMap",value:function(){return this.__hotKeyMap__}},{key:"componentDidMount",value:function(){var t=n(2604);this.__mousetrap__=new t(this.props.attach||l.a.findDOMNode(this)),this.updateHotKeys(!0)}},{key:"componentDidUpdate",value:function(t){this.updateHotKeys(!1,t)}},{key:"componentWillUnmount",value:function(){this.context.hotKeyParent&&this.context.hotKeyParent.childHandledSequence(null),this.__mousetrap__&&this.__mousetrap__.reset()}},{key:"updateHotKeys",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.props.handlers,r=void 0===n?{}:n,o=e.handlers,a=void 0===o?r:o,i=this.updateMap();(t||i||function(t,e){return!u()(t,e)}(r,a))&&(this.context.hotKeyParent&&this.context.hotKeyParent.childHandledSequence(null),this.syncHandlersToMousetrap())}},{key:"syncHandlersToMousetrap",value:function(){var t=this,e=this.props.handlers,n=void 0===e?{}:e,r=this.getMap(),o=[],a=this.__mousetrap__;Object.keys(n).forEach(function(e){var a=n[e];(function(t,e){var n=t[e];return n?Array.isArray(n)?n:[n]:[e]})(r,e).forEach(function(e){var n=void 0;d()(e)&&(n=e.action,e=e.sequence),o.push({callback:function(e,n){if((p()(t.props.focused)?t.props.focused:t.__isFocused__)&&n!==t.__lastChildSequence__)return t.context.hotKeyParent&&t.context.hotKeyParent.childHandledSequence(n),a(e,n)},action:n,sequence:e})})}),a.reset(),o.forEach(function(t){var e=t.sequence,n=t.callback,r=t.action;return a.bind(e,n,r)})}},{key:"childHandledSequence",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.__lastChildSequence__=t,this.context.hotKeyParent&&this.context.hotKeyParent.childHandledSequence(t)}},{key:"render",value:function(){var t=this.props,e=(t.keyMap,t.handlers,t.focused,t.attach,t.children),n=g(t,["keyMap","handlers","focused","attach","children"]);return i.a.createElement(j,_({},n,{onFocus:this.onFocus,onBlur:this.onBlur}),e)}},{key:"onFocus",value:function(){var t;this.__isFocused__=!0,this.props.onFocus&&(t=this.props).onFocus.apply(t,arguments)}},{key:"onBlur",value:function(){var t;this.__isFocused__=!1,this.props.onBlur&&(t=this.props).onBlur.apply(t,arguments),this.context.hotKeyParent&&this.context.hotKeyParent.childHandledSequence(null)}}]),e}();k.propTypes={keyMap:o.a.object,handlers:o.a.object,focused:o.a.bool,attach:o.a.any,children:o.a.node,onFocus:o.a.func,onBlur:o.a.func},k.childContextTypes={hotKeyParent:o.a.any,hotKeyMap:o.a.object},k.contextTypes={hotKeyParent:o.a.any,hotKeyMap:o.a.object};var w=function(t){return function(e){return function(n){function r(t){y(this,r);var e=m(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,t));return e._setRef=e._setRef.bind(e),e.state={handlers:{}},e}return b(r,a.PureComponent),v(r,[{key:"componentDidMount",value:function(){this.setState({handlers:this._ref.hotKeyHandlers})}},{key:"_setRef",value:function(t){this._ref=t}},{key:"render",value:function(){var n=this.state.handlers;return i.a.createElement(k,{component:"document-fragment",keyMap:t,handlers:n},i.a.createElement(e,_({ref:this._setRef},this.props)))}}]),r}()}};function O(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{contextTypes:{hotKeyMap:o.a.object},childContextTypes:{hotKeyMap:o.a.object},getChildContext:function(){return{hotKeyMap:this.__hotKeyMap__}},componentWillMount:function(){this.updateMap()},updateMap:function(){var t=this.buildMap();return!u()(t,this.__hotKeyMap__)&&(this.__hotKeyMap__=t,!0)},buildMap:function(){var e=this.context.hotKeyMap||{},n=this.props.keyMap||{};return _({},e,t,n)},getMap:function(){return this.__hotKeyMap__}}}},2601:function(t,e,n){(function(t,n){var r=200,o="__lodash_hash_undefined__",a=1,i=2,c=9007199254740991,u="[object Arguments]",s="[object Array]",l="[object AsyncFunction]",f="[object Boolean]",p="[object Date]",h="[object Error]",d="[object Function]",y="[object GeneratorFunction]",v="[object Map]",_="[object Number]",b="[object Null]",g="[object Object]",m="[object Proxy]",j="[object RegExp]",k="[object Set]",w="[object String]",O="[object Symbol]",M="[object Undefined]",P="[object ArrayBuffer]",K="[object DataView]",x=/^\[object .+?Constructor\]$/,E=/^(?:0|[1-9]\d*)$/,A={};A["[object Float32Array]"]=A["[object Float64Array]"]=A["[object Int8Array]"]=A["[object Int16Array]"]=A["[object Int32Array]"]=A["[object Uint8Array]"]=A["[object Uint8ClampedArray]"]=A["[object Uint16Array]"]=A["[object Uint32Array]"]=!0,A[u]=A[s]=A[P]=A[f]=A[K]=A[p]=A[h]=A[d]=A[v]=A[_]=A[g]=A[j]=A[k]=A[w]=A["[object WeakMap]"]=!1;var S="object"==typeof t&&t&&t.Object===Object&&t,T="object"==typeof self&&self&&self.Object===Object&&self,C=S||T||Function("return this")(),z=e&&!e.nodeType&&e,H=z&&"object"==typeof n&&n&&!n.nodeType&&n,q=H&&H.exports===z,F=q&&S.process,B=function(){try{return F&&F.binding&&F.binding("util")}catch(t){}}(),I=B&&B.isTypedArray;function L(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}function N(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}function R(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}var D,W,$,U=Array.prototype,V=Function.prototype,J=Object.prototype,G=C["__core-js_shared__"],X=V.toString,Y=J.hasOwnProperty,Q=(D=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+D:"",Z=J.toString,tt=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=q?C.Buffer:void 0,nt=C.Symbol,rt=C.Uint8Array,ot=J.propertyIsEnumerable,at=U.splice,it=nt?nt.toStringTag:void 0,ct=Object.getOwnPropertySymbols,ut=et?et.isBuffer:void 0,st=(W=Object.keys,$=Object,function(t){return W($(t))}),lt=Bt(C,"DataView"),ft=Bt(C,"Map"),pt=Bt(C,"Promise"),ht=Bt(C,"Set"),dt=Bt(C,"WeakMap"),yt=Bt(Object,"create"),vt=Rt(lt),_t=Rt(ft),bt=Rt(pt),gt=Rt(ht),mt=Rt(dt),jt=nt?nt.prototype:void 0,kt=jt?jt.valueOf:void 0;function wt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Ot(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Mt(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Pt(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new Mt;++e<n;)this.add(t[e])}function Kt(t){var e=this.__data__=new Ot(t);this.size=e.size}function xt(t,e){var n=$t(t),r=!n&&Wt(t),o=!n&&!r&&Ut(t),a=!n&&!r&&!o&&Yt(t),i=n||r||o||a,c=i?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],u=c.length;for(var s in t)!e&&!Y.call(t,s)||i&&("length"==s||o&&("offset"==s||"parent"==s)||a&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||Nt(s,u))||c.push(s);return c}function Et(t,e){for(var n=t.length;n--;)if(Dt(t[n][0],e))return n;return-1}function At(t){return null==t?void 0===t?M:b:it&&it in Object(t)?function(t){var e=Y.call(t,it),n=t[it];try{t[it]=void 0;var r=!0}catch(t){}var o=Z.call(t);r&&(e?t[it]=n:delete t[it]);return o}(t):function(t){return Z.call(t)}(t)}function St(t){return Xt(t)&&At(t)==u}function Tt(t,e,n,r,o){return t===e||(null==t||null==e||!Xt(t)&&!Xt(e)?t!=t&&e!=e:function(t,e,n,r,o,c){var l=$t(t),d=$t(e),y=l?s:Lt(t),b=d?s:Lt(e),m=(y=y==u?g:y)==g,M=(b=b==u?g:b)==g,x=y==b;if(x&&Ut(t)){if(!Ut(e))return!1;l=!0,m=!1}if(x&&!m)return c||(c=new Kt),l||Yt(t)?Ht(t,e,n,r,o,c):function(t,e,n,r,o,c,u){switch(n){case K:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case P:return!(t.byteLength!=e.byteLength||!c(new rt(t),new rt(e)));case f:case p:case _:return Dt(+t,+e);case h:return t.name==e.name&&t.message==e.message;case j:case w:return t==e+"";case v:var s=N;case k:var l=r&a;if(s||(s=R),t.size!=e.size&&!l)return!1;var d=u.get(t);if(d)return d==e;r|=i,u.set(t,e);var y=Ht(s(t),s(e),r,o,c,u);return u.delete(t),y;case O:if(kt)return kt.call(t)==kt.call(e)}return!1}(t,e,y,n,r,o,c);if(!(n&a)){var E=m&&Y.call(t,"__wrapped__"),A=M&&Y.call(e,"__wrapped__");if(E||A){var S=E?t.value():t,T=A?e.value():e;return c||(c=new Kt),o(S,T,n,r,c)}}if(!x)return!1;return c||(c=new Kt),function(t,e,n,r,o,i){var c=n&a,u=qt(t),s=u.length,l=qt(e).length;if(s!=l&&!c)return!1;for(var f=s;f--;){var p=u[f];if(!(c?p in e:Y.call(e,p)))return!1}var h=i.get(t);if(h&&i.get(e))return h==e;var d=!0;i.set(t,e),i.set(e,t);for(var y=c;++f<s;){p=u[f];var v=t[p],_=e[p];if(r)var b=c?r(_,v,p,e,t,i):r(v,_,p,t,e,i);if(!(void 0===b?v===_||o(v,_,n,r,i):b)){d=!1;break}y||(y="constructor"==p)}if(d&&!y){var g=t.constructor,m=e.constructor;g!=m&&"constructor"in t&&"constructor"in e&&!("function"==typeof g&&g instanceof g&&"function"==typeof m&&m instanceof m)&&(d=!1)}return i.delete(t),i.delete(e),d}(t,e,n,r,o,c)}(t,e,n,r,Tt,o))}function Ct(t){return!(!Gt(t)||(e=t,Q&&Q in e))&&(Vt(t)?tt:x).test(Rt(t));var e}function zt(t){if(n=(e=t)&&e.constructor,r="function"==typeof n&&n.prototype||J,e!==r)return st(t);var e,n,r,o=[];for(var a in Object(t))Y.call(t,a)&&"constructor"!=a&&o.push(a);return o}function Ht(t,e,n,r,o,c){var u=n&a,s=t.length,l=e.length;if(s!=l&&!(u&&l>s))return!1;var f=c.get(t);if(f&&c.get(e))return f==e;var p=-1,h=!0,d=n&i?new Pt:void 0;for(c.set(t,e),c.set(e,t);++p<s;){var y=t[p],v=e[p];if(r)var _=u?r(v,y,p,e,t,c):r(y,v,p,t,e,c);if(void 0!==_){if(_)continue;h=!1;break}if(d){if(!L(e,function(t,e){if(a=e,!d.has(a)&&(y===t||o(y,t,n,r,c)))return d.push(e);var a})){h=!1;break}}else if(y!==v&&!o(y,v,n,r,c)){h=!1;break}}return c.delete(t),c.delete(e),h}function qt(t){return function(t,e,n){var r=e(t);return $t(t)?r:function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}(r,n(t))}(t,Qt,It)}function Ft(t,e){var n,r,o=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?o["string"==typeof e?"string":"hash"]:o.map}function Bt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return Ct(n)?n:void 0}wt.prototype.clear=function(){this.__data__=yt?yt(null):{},this.size=0},wt.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},wt.prototype.get=function(t){var e=this.__data__;if(yt){var n=e[t];return n===o?void 0:n}return Y.call(e,t)?e[t]:void 0},wt.prototype.has=function(t){var e=this.__data__;return yt?void 0!==e[t]:Y.call(e,t)},wt.prototype.set=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=yt&&void 0===e?o:e,this},Ot.prototype.clear=function(){this.__data__=[],this.size=0},Ot.prototype.delete=function(t){var e=this.__data__,n=Et(e,t);return!(n<0||(n==e.length-1?e.pop():at.call(e,n,1),--this.size,0))},Ot.prototype.get=function(t){var e=this.__data__,n=Et(e,t);return n<0?void 0:e[n][1]},Ot.prototype.has=function(t){return Et(this.__data__,t)>-1},Ot.prototype.set=function(t,e){var n=this.__data__,r=Et(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this},Mt.prototype.clear=function(){this.size=0,this.__data__={hash:new wt,map:new(ft||Ot),string:new wt}},Mt.prototype.delete=function(t){var e=Ft(this,t).delete(t);return this.size-=e?1:0,e},Mt.prototype.get=function(t){return Ft(this,t).get(t)},Mt.prototype.has=function(t){return Ft(this,t).has(t)},Mt.prototype.set=function(t,e){var n=Ft(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this},Pt.prototype.add=Pt.prototype.push=function(t){return this.__data__.set(t,o),this},Pt.prototype.has=function(t){return this.__data__.has(t)},Kt.prototype.clear=function(){this.__data__=new Ot,this.size=0},Kt.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},Kt.prototype.get=function(t){return this.__data__.get(t)},Kt.prototype.has=function(t){return this.__data__.has(t)},Kt.prototype.set=function(t,e){var n=this.__data__;if(n instanceof Ot){var o=n.__data__;if(!ft||o.length<r-1)return o.push([t,e]),this.size=++n.size,this;n=this.__data__=new Mt(o)}return n.set(t,e),this.size=n.size,this};var It=ct?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,a=[];++n<r;){var i=t[n];e(i,n,t)&&(a[o++]=i)}return a}(ct(t),function(e){return ot.call(t,e)}))}:function(){return[]},Lt=At;function Nt(t,e){return!!(e=null==e?c:e)&&("number"==typeof t||E.test(t))&&t>-1&&t%1==0&&t<e}function Rt(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Dt(t,e){return t===e||t!=t&&e!=e}(lt&&Lt(new lt(new ArrayBuffer(1)))!=K||ft&&Lt(new ft)!=v||pt&&"[object Promise]"!=Lt(pt.resolve())||ht&&Lt(new ht)!=k||dt&&"[object WeakMap]"!=Lt(new dt))&&(Lt=function(t){var e=At(t),n=e==g?t.constructor:void 0,r=n?Rt(n):"";if(r)switch(r){case vt:return K;case _t:return v;case bt:return"[object Promise]";case gt:return k;case mt:return"[object WeakMap]"}return e});var Wt=St(function(){return arguments}())?St:function(t){return Xt(t)&&Y.call(t,"callee")&&!ot.call(t,"callee")},$t=Array.isArray;var Ut=ut||function(){return!1};function Vt(t){if(!Gt(t))return!1;var e=At(t);return e==d||e==y||e==l||e==m}function Jt(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=c}function Gt(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function Xt(t){return null!=t&&"object"==typeof t}var Yt=I?function(t){return function(e){return t(e)}}(I):function(t){return Xt(t)&&Jt(t.length)&&!!A[At(t)]};function Qt(t){return null!=(e=t)&&Jt(e.length)&&!Vt(e)?xt(t):zt(t);var e}n.exports=function(t,e){return Tt(t,e)}}).call(this,n(30),n(37)(t))},2602:function(t,e){var n="[object Boolean]",r=Object.prototype.toString;t.exports=function(t){return!0===t||!1===t||function(t){return!!t&&"object"==typeof t}(t)&&r.call(t)==n}},2603:function(t,e){t.exports=function(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}},2604:function(t,e,n){var r;!function(o,a,i){if(o){for(var c,u={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},s={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},l={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},f={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},p=1;p<20;++p)u[111+p]="f"+p;for(p=0;p<=9;++p)u[p+96]=p.toString();b.prototype.bind=function(t,e,n){return t=t instanceof Array?t:[t],this._bindMultiple.call(this,t,e,n),this},b.prototype.unbind=function(t,e){return this.bind.call(this,t,function(){},e)},b.prototype.trigger=function(t,e){return this._directMap[t+":"+e]&&this._directMap[t+":"+e]({},t),this},b.prototype.reset=function(){return this._callbacks={},this._directMap={},this},b.prototype.stopCallback=function(t,e){if((" "+e.className+" ").indexOf(" mousetrap ")>-1)return!1;if(function t(e,n){return null!==e&&e!==a&&(e===n||t(e.parentNode,n))}(e,this.target))return!1;if("composedPath"in t&&"function"==typeof t.composedPath){var n=t.composedPath()[0];n!==t.target&&(e=n)}return"INPUT"==e.tagName||"SELECT"==e.tagName||"TEXTAREA"==e.tagName||e.isContentEditable},b.prototype.handleKey=function(){return this._handleKey.apply(this,arguments)},b.addKeycodes=function(t){for(var e in t)t.hasOwnProperty(e)&&(u[e]=t[e]);c=null},b.init=function(){var t=b(a);for(var e in t)"_"!==e.charAt(0)&&(b[e]=function(e){return function(){return t[e].apply(t,arguments)}}(e))},b.init(),o.Mousetrap=b,t.exports&&(t.exports=b),void 0===(r=function(){return b}.call(e,n,e,t))||(t.exports=r)}function h(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n)}function d(t){if("keypress"==t.type){var e=String.fromCharCode(t.which);return t.shiftKey||(e=e.toLowerCase()),e}return u[t.which]?u[t.which]:s[t.which]?s[t.which]:String.fromCharCode(t.which).toLowerCase()}function y(t){return"shift"==t||"ctrl"==t||"alt"==t||"meta"==t}function v(t,e,n){return n||(n=function(){if(!c)for(var t in c={},u)t>95&&t<112||u.hasOwnProperty(t)&&(c[u[t]]=t);return c}()[t]?"keydown":"keypress"),"keypress"==n&&e.length&&(n="keydown"),n}function _(t,e){var n,r,o,a=[];for(n=function(t){return"+"===t?["+"]:(t=t.replace(/\+{2}/g,"+plus")).split("+")}(t),o=0;o<n.length;++o)r=n[o],f[r]&&(r=f[r]),e&&"keypress"!=e&&l[r]&&(r=l[r],a.push("shift")),y(r)&&a.push(r);return{key:r,modifiers:a,action:e=v(r,a,e)}}function b(t){var e=this;if(t=t||a,!(e instanceof b))return new b(t);e.target=t,e._callbacks={},e._directMap={};var n,r={},o=!1,i=!1,c=!1;function u(t){t=t||{};var e,n=!1;for(e in r)t[e]?n=!0:r[e]=0;n||(c=!1)}function s(t,n,o,a,i,c){var u,s,l,f,p=[],h=o.type;if(!e._callbacks[t])return[];for("keyup"==h&&y(t)&&(n=[t]),u=0;u<e._callbacks[t].length;++u)if(s=e._callbacks[t][u],(a||!s.seq||r[s.seq]==s.level)&&h==s.action&&("keypress"==h&&!o.metaKey&&!o.ctrlKey||(l=n,f=s.modifiers,l.sort().join(",")===f.sort().join(",")))){var d=!a&&s.combo==i,v=a&&s.seq==a&&s.level==c;(d||v)&&e._callbacks[t].splice(u,1),p.push(s)}return p}function l(t,n,r,o){e.stopCallback(n,n.target||n.srcElement,r,o)||!1===t(n,r)&&(function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}(n),function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}(n))}function f(t){"number"!=typeof t.which&&(t.which=t.keyCode);var n=d(t);n&&("keyup"!=t.type||o!==n?e.handleKey(n,function(t){var e=[];return t.shiftKey&&e.push("shift"),t.altKey&&e.push("alt"),t.ctrlKey&&e.push("ctrl"),t.metaKey&&e.push("meta"),e}(t),t):o=!1)}function p(t,e,a,i){function s(e){return function(){c=e,++r[t],clearTimeout(n),n=setTimeout(u,1e3)}}function f(e){l(a,e,t),"keyup"!==i&&(o=d(e)),setTimeout(u,10)}r[t]=0;for(var p=0;p<e.length;++p){var h=p+1===e.length?f:s(i||_(e[p+1]).action);v(e[p],h,i,t,p)}}function v(t,n,r,o,a){e._directMap[t+":"+r]=n;var i,c=(t=t.replace(/\s+/g," ")).split(" ");c.length>1?p(t,c,n,r):(i=_(t,r),e._callbacks[i.key]=e._callbacks[i.key]||[],s(i.key,i.modifiers,{type:i.action},o,t,a),e._callbacks[i.key][o?"unshift":"push"]({callback:n,modifiers:i.modifiers,action:i.action,seq:o,level:a,combo:t}))}e._handleKey=function(t,e,n){var r,o=s(t,e,n),a={},f=0,p=!1;for(r=0;r<o.length;++r)o[r].seq&&(f=Math.max(f,o[r].level));for(r=0;r<o.length;++r)if(o[r].seq){if(o[r].level!=f)continue;p=!0,a[o[r].seq]=1,l(o[r].callback,n,o[r].combo,o[r].seq)}else p||l(o[r].callback,n,o[r].combo);var h="keypress"==n.type&&i;n.type!=c||y(t)||h||u(a),i=p&&"keydown"==n.type},e._bindMultiple=function(t,e,n){for(var r=0;r<t.length;++r)v(t[r],e,n)},h(t,"keypress",f),h(t,"keydown",f),h(t,"keyup",f)}}("undefined"!=typeof window?window:null,"undefined"!=typeof window?document:null)},3059:function(t,e,n){"use strict";var r=n(1),o=n.n(r),a=n(6),i=n.n(a),c=n(3136),u=n(3133),s=n(477),l=n.n(s),f=n(2599),p=n(412),h=n.n(p),d=n(485),y=n(3139),v=n(462),_=n(3196),b=n(3140);function g(){return(g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function m(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var j=Object(c.a)(function(t){var e=t.palette,n=t.spacing;return{button:{"&, &:hover, &:focus":{background:"white",color:e.text.caption,border:"none"}},highlited:{color:[e.primary.main,"!important"]},icon:{"&$icon svg":{top:0,margin:0,marginRight:n(1),verticalAlign:"bottom",left:"-0.3rem"}}}},{classNamePrefix:"SearchButton"}),k={children:i.a.node.isRequired,icon:i.a.node,isHighlited:i.a.bool},w=function(t){var e,n,r,a=t.children,i=t.icon,c=t.isHighlited,u=m(t,["children","icon","isHighlited"]),s=j();return o.a.createElement(b.a,g({className:h()(s.button,(e={},n=s.highlited,r=c,n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e)),icon:i},u),a)};w.propTypes=k,w.defaultProps={isHighlited:!1,icon:null};var O=w;function M(){return(M=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var P=Object(c.a)(function(t){var e=t.transitions,n=t.palette;return{root:{zIndex:10,position:"relative",outline:0},icon:{"&$icon":{top:0,margin:0,verticalAlign:"bottom",left:"-0.3rem"}},expandIcon:{"&$expandIcon":{position:"relative",transform:"rotate(0deg)",left:"0.3rem",transition:"transform ".concat(e.duration.shortest,"ms ").concat(e.easing.easeInOut)}},container:{maxWidth:500,padding:"1rem",marginTop:"1rem",position:"absolute"},button:{"&, &:hover, &:focus":{background:"white",color:n.text.secondary,border:"none"}},isOpen:{"& $expandIcon":{transform:"rotate(180deg)"}}}},{classNamePrefix:"FilterDropDown"}),K={close:"escape"},x={children:i.a.node.isRequired,caption:i.a.string,isActive:i.a.bool,isHidden:i.a.bool,isOpen:i.a.bool,label:i.a.node,labelMore:i.a.oneOfType([i.a.string,i.a.number]),onSwitch:i.a.func,buttonComponent:i.a.elementType,buttonProps:i.a.object,containerMinWidth:i.a.oneOfType([i.a.string,i.a.number])},E={label:"",labelMore:"",caption:"",isActive:!1,isHidden:!1,isOpen:!1,onSwitch:function(){},buttonComponent:O,buttonProps:{},containerMinWidth:400};function A(t){var e=t.children,n=t.containerMinWidth,a=t.onSwitch,i=t.isOpen,c=t.label,s=t.caption,p=t.isHidden,_=t.labelMore,b=t.isActive,g=t.buttonComponent,m=t.buttonProps,j=Object(r.useRef)(null),k=Object(r.useCallback)(function(t){if(i&&j.current){var e=t.target;j.current.contains(e)||a()}},[i,a,j.current]);Object(r.useEffect)(function(){return d.a.document.body.addEventListener("click",k),function(){return d.a.document.body.removeEventListener("click",k)}},[k]);var w,O,x,E=P(),A=i?a:void 0;return o.a.createElement(f.HotKeys,{className:h()(E.root,(w={},O=E.isOpen,x=i,O in w?Object.defineProperty(w,O,{value:x,enumerable:!0,configurable:!0,writable:!0}):w[O]=x,w)),keyMap:K,handlers:{close:A},"aria-hidden":p},o.a.createElement("div",{ref:j},o.a.createElement(g,M({isHighlited:b,"aria-expanded":i,onClick:a,tabIndex:p?-1:0,icon:o.a.createElement(l.a,{className:h()(E.icon,E.expandIcon)}),hasIconRight:!0},m),c,_?" (".concat(_,")"):""),o.a.createElement(u.a,{elevation:24,className:E.container,style:{display:i?"block":"none",minWidth:n}},s&&o.a.createElement(y.a,{component:"p",variant:v.a.VARIANT.BODY1},s),e)))}A.propTypes=x,A.defaultProps=E;e.a=Object(_.a)(function(t){return t.isOpen&&!t.isHidden})(A)},896:function(t,e,n){"use strict";var r=n(411);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n(1)),a=(0,r(n(415)).default)(o.default.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}),"KeyboardArrowLeft");e.default=a},897:function(t,e,n){"use strict";var r=n(411);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n(1)),a=(0,r(n(415)).default)(o.default.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),"KeyboardArrowRight");e.default=a}}]);
//# sourceMappingURL=default~organizations~team~teams~universalSearch.32ef554d6ceda574a782.js.map