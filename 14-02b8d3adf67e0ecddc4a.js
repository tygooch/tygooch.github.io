(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{254:function(e,t,r){"use strict";(function(e){r.d(t,"a",function(){return v});var n=r(249),a=r(255),i=r.n(a),o=r(0),s=r.n(o);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){c(e,t,r[t])})}return e}function f(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function d(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var p="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var y,h=(function(e){var t,r,n,a,i,o,s,l,c,u,f,d,y,h,b;t=p,r=function(e,t,n){if(!l(t)||u(t)||f(t)||d(t)||s(t))return t;var a,i=0,o=0;if(c(t))for(a=[],o=t.length;i<o;i++)a.push(r(e,t[i],n));else for(var p in a={},t)Object.prototype.hasOwnProperty.call(t,p)&&(a[e(p,n)]=r(e,t[p],n));return a},n=function(e){return y(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""})).substr(0,1).toLowerCase()+e.substr(1)},a=function(e){var t=n(e);return t.substr(0,1).toUpperCase()+t.substr(1)},i=function(e,t){return function(e,t){var r=(t=t||{}).separator||"_",n=t.split||/(?=[A-Z])/;return e.split(n).join(r)}(e,t).toLowerCase()},o=Object.prototype.toString,s=function(e){return"function"==typeof e},l=function(e){return e===Object(e)},c=function(e){return"[object Array]"==o.call(e)},u=function(e){return"[object Date]"==o.call(e)},f=function(e){return"[object RegExp]"==o.call(e)},d=function(e){return"[object Boolean]"==o.call(e)},y=function(e){return(e-=0)==e},h=function(e,t){var r=t&&"process"in t?t.process:t;return"function"!=typeof r?e:function(t,n){return r(t,e,n)}},b={camelize:n,decamelize:i,pascalize:a,depascalize:i,camelizeKeys:function(e,t){return r(h(n,t),e)},decamelizeKeys:function(e,t){return r(h(i,t),e,t)},pascalizeKeys:function(e,t){return r(h(a,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}},e.exports?e.exports=b:t.humps=b}(y={exports:{}},y.exports),y.exports);var b=!1;try{b=!0}catch(O){}function g(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?c({},e,t):{}}function m(e){return null===e?null:"object"===l(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function v(e){var t=e.icon,r=e.mask,a=e.symbol,i=e.className,o=e.title,s=m(t),l=g("classes",[].concat(d(function(e){var t,r=(c(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-inverse":e.inverse,"fa-border":e.border,"fa-li":e.listItem,"fa-flip-horizontal":"horizontal"===e.flip||"both"===e.flip,"fa-flip-vertical":"vertical"===e.flip||"both"===e.flip},"fa-".concat(e.size),null!==e.size),c(t,"fa-rotate-".concat(e.rotation),null!==e.rotation),c(t,"fa-pull-".concat(e.pull),null!==e.pull),t);return Object.keys(r).map(function(e){return r[e]?e:null}).filter(function(e){return e})}(e)),d(i.split(" ")))),f=g("transform","string"==typeof e.transform?n.c.transform(e.transform):e.transform),p=g("mask",m(r)),y=Object(n.a)(s,u({},l,f,p,{symbol:a,title:o}));if(!y)return function(){var e;!b&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",s),null;var h=y.abstract,O={};return Object.keys(e).forEach(function(t){v.defaultProps.hasOwnProperty(t)||(O[t]=e[t])}),S(h[0],O)}v.displayName="FontAwesomeIcon",v.propTypes={border:i.a.bool,className:i.a.string,mask:i.a.oneOfType([i.a.object,i.a.array,i.a.string]),fixedWidth:i.a.bool,inverse:i.a.bool,flip:i.a.oneOf(["horizontal","vertical","both"]),icon:i.a.oneOfType([i.a.object,i.a.array,i.a.string]),listItem:i.a.bool,pull:i.a.oneOf(["right","left"]),pulse:i.a.bool,rotation:i.a.oneOf([90,180,270]),size:i.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:i.a.bool,symbol:i.a.oneOfType([i.a.bool,i.a.string]),title:i.a.string,transform:i.a.oneOfType([i.a.string,i.a.object])},v.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null};var S=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var a=(r.children||[]).map(function(r){return e(t,r)}),i=Object.keys(r.attributes||{}).reduce(function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var r,n=t.indexOf(":"),a=h.camelize(t.slice(0,n)),i=t.slice(n+1).trim();return a.startsWith("webkit")?e[(r=a,r.charAt(0).toUpperCase()+r.slice(1))]=i:e[a]=i,e},{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[h.camelize(t)]=n}return e},{attrs:{}}),o=n.style,s=void 0===o?{}:o,l=f(n,["style"]);return i.attrs.style=u({},i.attrs.style,s),t.apply(void 0,[r.tag,u({},i.attrs,l)].concat(d(a)))}.bind(null,s.a.createElement)}).call(this,r(95))},255:function(e,t,r){e.exports=r(256)()},256:function(e,t,r){"use strict";var n=r(257);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,i,o){if(o!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:a};return r.PropTypes=r,r}},257:function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},270:function(e,t,r){"use strict";var n=r(8);t.__esModule=!0,t.default=void 0;var a,i=n(r(9)),o=n(r(42)),s=n(r(96)),l=n(r(97)),c=n(r(0)),u=n(r(271)),f=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},d=Object.create({}),p=function(e){var t=f(e),r=t.fluid?t.fluid.src:t.fixed.src;return d[r]||!1},y=new WeakMap;var h=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),a);return r&&(r.observe(e),y.set(e,t)),function(){r.unobserve(e),y.delete(e)}},b=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+r+"/>":"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+n+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+s+l+r+a+t+o+i+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=c.default.forwardRef(function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,i=e.style,o=e.onLoad,u=e.onError,f=e.nativeLazyLoadSupported,d=e.loading,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","nativeLazyLoadSupported","loading"]),y={};return f&&(y.loading=d),c.default.createElement("img",(0,l.default)({sizes:r,srcSet:n,src:a},p,{onLoad:o,onError:u,ref:t},y,{style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});g.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var m=function(e){function t(t){var r;r=e.call(this,t)||this;var n=!0,a=!1,i=t.fadeIn,s=!1,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,a=!0),"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype&&(n=!0,s=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,a=!1);var u=!(t.critical&&!t.fadeIn);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,IOSupported:a,fadeIn:i,hasNoScript:u,seenBefore:l,nativeLazyLoadSupported:s},r.imageRef=c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,o.default)((0,o.default)(r))),r.handleRef=r.handleRef.bind((0,o.default)((0,o.default)(r))),r}(0,i.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.state.nativeLazyLoadSupported||this.state.IOSupported&&e&&(this.cleanUpListeners=h(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=f(e),r=t.fluid?t.fluid.src:t.fixed.src,d[r]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=f(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,d=void 0===u?{}:u,p=e.placeholderClassName,y=e.fluid,h=e.fixed,m=e.backgroundColor,v=e.durationFadeIn,S=e.Tag,O=e.itemProp,w=(e.critical,f(this.props).loading);var L=this.state.nativeLazyLoadSupported,z=this.state.imgLoaded||!1===this.state.fadeIn,E=!0===this.state.fadeIn&&!this.state.imgCached,x=(0,l.default)({opacity:z?1:0,transition:E?"opacity "+v+"ms":"none"},s),j="boolean"==typeof m?"lightgray":m,I={transitionDelay:v+"ms"},T=(0,l.default)({opacity:this.state.imgLoaded?0:1},E&&I,s,d),R={title:t,alt:this.state.isVisible?"":r,style:T,className:p};if(y){var k=y;return c.default.createElement(S,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},c.default.createElement(S,{style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),j&&c.default.createElement(S,{title:t,style:(0,l.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},E&&I)}),k.base64&&c.default.createElement(g,(0,l.default)({src:k.base64},R)),k.tracedSVG&&c.default.createElement(g,(0,l.default)({src:k.tracedSVG},R)),this.state.isVisible&&c.default.createElement("picture",null,k.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),c.default.createElement(g,{alt:r,title:t,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O,nativeLazyLoadSupported:L,loading:w})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,l.default)({alt:r,title:t,loading:w},k))}}))}if(h){var P=h,C=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},i);return"inherit"===i.display&&delete C.display,c.default.createElement(S,{className:(n||"")+" gatsby-image-wrapper",style:C,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},j&&c.default.createElement(S,{title:t,style:(0,l.default)({backgroundColor:j,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},E&&I)}),P.base64&&c.default.createElement(g,(0,l.default)({src:P.base64},R)),P.tracedSVG&&c.default.createElement(g,(0,l.default)({src:P.tracedSVG},R)),this.state.isVisible&&c.default.createElement("picture",null,P.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:P.srcSetWebp,sizes:P.sizes}),c.default.createElement(g,{alt:r,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:O,nativeLazyLoadSupported:L,loading:w})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:b((0,l.default)({alt:r,title:t,loading:w},P))}}))}return null},t}(c.default.Component);m.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var v=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),S=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});m.propTypes={resolutions:v,sizes:S,fixed:v,fluid:S,fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"])};var O=m;t.default=O},271:function(e,t,r){e.exports=r(272)()},272:function(e,t,r){"use strict";var n=r(273);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,i,o){if(o!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:a};return r.PropTypes=r,r}},273:function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=14-02b8d3adf67e0ecddc4a.js.map