var require=function(a,b){var c=require.resolve(a,b||"/"),d=require.modules[c];if(!d)throw new Error("Failed to resolve module "+a+", tried "+c);var e=require.cache[c],f=e?e.exports:d();return f};require.paths=[],require.modules={},require.cache={},require.extensions=[".js",".coffee"],require._core={assert:!0,events:!0,fs:!0,path:!0,vm:!0},require.resolve=function(){return function(a,b){function g(a){a=c.normalize(a);if(require.modules[a])return a;for(var b=0;b<require.extensions.length;b++){var d=require.extensions[b];if(require.modules[a+d])return a+d}}function h(a){a=a.replace(/\/+$/,"");var b=c.normalize(a+"/package.json");if(require.modules[b]){var d=require.modules[b](),e=d.browserify;if(typeof e=="object"&&e.main){var f=g(c.resolve(a,e.main));if(f)return f}else if(typeof e=="string"){var f=g(c.resolve(a,e));if(f)return f}else if(d.main){var f=g(c.resolve(a,d.main));if(f)return f}}return g(a+"/index")}function i(a,b){var c=j(b);for(var d=0;d<c.length;d++){var e=c[d],f=g(e+"/"+a);if(f)return f;var i=h(e+"/"+a);if(i)return i}var f=g(a);if(f)return f}function j(a){var b;a==="/"?b=[""]:b=c.normalize(a).split("/");var d=[];for(var e=b.length-1;e>=0;e--){if(b[e]==="node_modules")continue;var f=b.slice(0,e+1).join("/")+"/node_modules";d.push(f)}return d}b||(b="/");if(require._core[a])return a;var c=require.modules.path();b=c.resolve("/",b);var d=b||"/";if(a.match(/^(?:\.\.?\/|\/)/)){var e=g(c.resolve(d,a))||h(c.resolve(d,a));if(e)return e}var f=i(a,d);if(f)return f;throw new Error("Cannot find module '"+a+"'")}}(),require.alias=function(a,b){var c=require.modules.path(),d=null;try{d=require.resolve(a+"/package.json","/")}catch(e){d=require.resolve(a,"/")}var f=c.dirname(d),g=(Object.keys||function(a){var b=[];for(var c in a)b.push(c);return b})(require.modules);for(var h=0;h<g.length;h++){var i=g[h];if(i.slice(0,f.length+1)===f+"/"){var j=i.slice(f.length);require.modules[b+j]=require.modules[f+j]}else i===f&&(require.modules[b]=require.modules[f])}},function(){var a={};require.define=function(b,c){require.modules.__browserify_process&&(a=require.modules.__browserify_process());var d=require._core[b]?"":require.modules.path().dirname(b),e=function(a){var b=require(a,d),c=require.cache[require.resolve(a,d)];return c.parent===null&&(c.parent=f),b};e.resolve=function(a){return require.resolve(a,d)},e.modules=require.modules,e.define=require.define,e.cache=require.cache;var f={id:b,filename:b,exports:{},loaded:!1,parent:null};require.modules[b]=function(){return require.cache[b]=f,c.call(f.exports,e,f,f.exports,d,b,a),f.loaded=!0,f.exports}}}(),require.define("path",function(a,b,c,d,e,f){function g(a,b){var c=[];for(var d=0;d<a.length;d++)b(a[d],d,a)&&c.push(a[d]);return c}function h(a,b){var c=0;for(var d=a.length;d>=0;d--){var e=a[d];e=="."?a.splice(d,1):e===".."?(a.splice(d,1),c++):c&&(a.splice(d,1),c--)}if(b)for(;c--;c)a.unshift("..");return a}var i=/^(.+\/(?!$)|\/)?((?:.+?)?(\.[^.]*)?)$/;c.resolve=function(){var a="",b=!1;for(var c=arguments.length;c>=-1&&!b;c--){var d=c>=0?arguments[c]:f.cwd();if(typeof d!="string"||!d)continue;a=d+"/"+a,b=d.charAt(0)==="/"}return a=h(g(a.split("/"),function(a){return!!a}),!b).join("/"),(b?"/":"")+a||"."},c.normalize=function(a){var b=a.charAt(0)==="/",c=a.slice(-1)==="/";return a=h(g(a.split("/"),function(a){return!!a}),!b).join("/"),!a&&!b&&(a="."),a&&c&&(a+="/"),(b?"/":"")+a},c.join=function(){var a=Array.prototype.slice.call(arguments,0);return c.normalize(g(a,function(a,b){return a&&typeof a=="string"}).join("/"))},c.dirname=function(a){var b=i.exec(a)[1]||"",c=!1;return b?b.length===1||c&&b.length<=3&&b.charAt(1)===":"?b:b.substring(0,b.length-1):"."},c.basename=function(a,b){var c=i.exec(a)[2]||"";return b&&c.substr(-1*b.length)===b&&(c=c.substr(0,c.length-b.length)),c},c.extname=function(a){return i.exec(a)[3]||""}}),require.define("__browserify_process",function(a,b,c,d,e,f){var f=b.exports={};f.nextTick=function(){var a=[],b=typeof window!="undefined"&&window.postMessage&&window.addEventListener;return b&&window.addEventListener("message",function(b){if(b.source===window&&b.data==="browserify-tick"){b.stopPropagation();if(a.length>0){var c=a.shift();c()}}},!0),function(c){b?(a.push(c),window.postMessage("browserify-tick","*")):setTimeout(c,0)}}(),f.title="browser",f.browser=!0,f.env={},f.argv=[],f.binding=function(b){if(b==="evals")return a("vm");throw new Error("No such module. (Possibly not yet loaded)")},function(){var b="/",c;f.cwd=function(){return b},f.chdir=function(d){c||(c=a("path")),b=c.resolve(d,b)}}()}),require.define("/package.json",function(a,b,c,d,e,f){b.exports={}}),require.define("websocket-stream",function(a,b,c,d,e,f){function i(a,b){var c=this;g.Stream.call(this),this.readable=!0,this.writable=!0,typeof a=="object"?(this.ws=a,this.ws.on("message",this.onMessage.bind(this)),this.ws.on("error",this.onError.bind(this)),this.ws.on("close",this.onClose.bind(this)),this.ws.on("open",function(){c.emit("open")})):(this.ws=new WebSocket(a,b),this.ws.onmessage=this.onMessage.bind(this),this.ws.onerror=this.onError.bind(this),this.ws.onclose=this.onClose.bind(this))}var g=a("stream"),h=a("util");h.inherits(i,g.Stream),b.exports=function(a,b){return new i(a,b)},b.exports.WebsocketStream=i,i.prototype.onMessage=function(a,b){this.emit("metadata",a,b),this.emit("data",a.data)},i.prototype.onError=function(a){this.emit("error",a)},i.prototype.onClose=function(a){this.emit("end")},i.prototype.write=function(a,b){return this.ws.send(a,b)},i.prototype.end=function(){this.ws.close()}}),require.define("stream",function(a,b,c,d,e,f){function i(){g.EventEmitter.call(this)}var g=a("events"),h=a("util");h.inherits(i,g.EventEmitter),b.exports=i,i.Stream=i,i.prototype.pipe=function(a,b){function d(b){a.writable&&!1===a.write(b)&&c.pause&&c.pause()}function e(){c.readable&&c.resume&&c.resume()}function g(){if(f)return;f=!0,a._pipeCount--,j();if(a._pipeCount>0)return;a.end()}function h(){if(f)return;f=!0,a._pipeCount--,j();if(a._pipeCount>0)return;a.destroy()}function i(a){j();if(this.listeners("error").length===0)throw a}function j(){c.removeListener("data",d),a.removeListener("drain",e),c.removeListener("end",g),c.removeListener("close",h),c.removeListener("error",i),a.removeListener("error",i),c.removeListener("end",j),c.removeListener("close",j),a.removeListener("end",j),a.removeListener("close",j)}var c=this;c.on("data",d),a.on("drain",e),!a._isStdio&&(!b||b.end!==!1)&&(a._pipeCount=a._pipeCount||0,a._pipeCount++,c.on("end",g),c.on("close",h));var f=!1;return c.on("error",i),a.on("error",i),c.on("end",j),c.on("close",j),a.on("end",j),a.on("close",j),a.emit("pipe",c),a}}),require.define("events",function(a,b,c,d,e,f){f.EventEmitter||(f.EventEmitter=function(){});var g=c.EventEmitter=f.EventEmitter,h=typeof Array.isArray=="function"?Array.isArray:function(a){return Object.prototype.toString.call(a)==="[object Array]"},i=10;g.prototype.setMaxListeners=function(a){this._events||(this._events={}),this._events.maxListeners=a},g.prototype.emit=function(a){if(a==="error")if(!this._events||!this._events.error||h(this._events.error)&&!this._events.error.length)throw arguments[1]instanceof Error?arguments[1]:new Error("Uncaught, unspecified 'error' event.");if(!this._events)return!1;var b=this._events[a];if(!b)return!1;if(typeof b=="function"){switch(arguments.length){case 1:b.call(this);break;case 2:b.call(this,arguments[1]);break;case 3:b.call(this,arguments[1],arguments[2]);break;default:var c=Array.prototype.slice.call(arguments,1);b.apply(this,c)}return!0}if(h(b)){var c=Array.prototype.slice.call(arguments,1),d=b.slice();for(var e=0,f=d.length;e<f;e++)d[e].apply(this,c);return!0}return!1},g.prototype.addListener=function(a,b){if("function"!=typeof b)throw new Error("addListener only takes instances of Function");this._events||(this._events={}),this.emit("newListener",a,b);if(!this._events[a])this._events[a]=b;else if(h(this._events[a])){if(!this._events[a].warned){var c;this._events.maxListeners!==undefined?c=this._events.maxListeners:c=i,c&&c>0&&this._events[a].length>c&&(this._events[a].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[a].length),console.trace())}this._events[a].push(b)}else this._events[a]=[this._events[a],b];return this},g.prototype.on=g.prototype.addListener,g.prototype.once=function(a,b){var c=this;return c.on(a,function d(){c.removeListener(a,d),b.apply(this,arguments)}),this},g.prototype.removeListener=function(a,b){if("function"!=typeof b)throw new Error("removeListener only takes instances of Function");if(!this._events||!this._events[a])return this;var c=this._events[a];if(h(c)){var d=c.indexOf(b);if(d<0)return this;c.splice(d,1),c.length==0&&delete this._events[a]}else this._events[a]===b&&delete this._events[a];return this},g.prototype.removeAllListeners=function(a){return a&&this._events&&this._events[a]&&(this._events[a]=null),this},g.prototype.listeners=function(a){return this._events||(this._events={}),this._events[a]||(this._events[a]=[]),h(this._events[a])||(this._events[a]=[this._events[a]]),this._events[a]}}),require.define("util",function(a,b,c,d,e,f){function h(a){return a instanceof Array||Array.isArray(a)||a&&a!==Object.prototype&&h(a.__proto__)}function i(a){return a instanceof RegExp||typeof a=="object"&&Object.prototype.toString.call(a)==="[object RegExp]"}function j(a){if(a instanceof Date)return!0;if(typeof a!="object")return!1;var b=Date.prototype&&o(Date.prototype),c=a.__proto__&&o(a.__proto__);return JSON.stringify(c)===JSON.stringify(b)}function k(a){return a<10?"0"+a.toString(10):a.toString(10)}function m(){var a=new Date,b=[k(a.getHours()),k(a.getMinutes()),k(a.getSeconds())].join(":");return[a.getDate(),l[a.getMonth()],b].join(" ")}var g=a("events");c.print=function(){},c.puts=function(){},c.debug=function(){},c.inspect=function(a,b,d,e){function k(a,d){if(a&&typeof a.inspect=="function"&&a!==c&&(!a.constructor||a.constructor.prototype!==a))return a.inspect(d);switch(typeof a){case"undefined":return g("undefined","undefined");case"string":var e="'"+JSON.stringify(a).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return g(e,"string");case"number":return g(""+a,"number");case"boolean":return g(""+a,"boolean")}if(a===null)return g("null","null");var l=n(a),m=b?o(a):l;if(typeof a=="function"&&m.length===0){if(i(a))return g(""+a,"regexp");var p=a.name?": "+a.name:"";return g("[Function"+p+"]","special")}if(j(a)&&m.length===0)return g(a.toUTCString(),"date");var q,r,s;h(a)?(r="Array",s=["[","]"]):(r="Object",s=["{","}"]);if(typeof a=="function"){var t=a.name?": "+a.name:"";q=i(a)?" "+a:" [Function"+t+"]"}else q="";j(a)&&(q=" "+a.toUTCString());if(m.length===0)return s[0]+q+s[1];if(d<0)return i(a)?g(""+a,"regexp"):g("[Object]","special");f.push(a);var u=m.map(function(b){var c,e;a.__lookupGetter__&&(a.__lookupGetter__(b)?a.__lookupSetter__(b)?e=g("[Getter/Setter]","special"):e=g("[Getter]","special"):a.__lookupSetter__(b)&&(e=g("[Setter]","special"))),l.indexOf(b)<0&&(c="["+b+"]"),e||(f.indexOf(a[b])<0?(d===null?e=k(a[b]):e=k(a[b],d-1),e.indexOf("\n")>-1&&(h(a)?e=e.split("\n").map(function(a){return"  "+a}).join("\n").substr(2):e="\n"+e.split("\n").map(function(a){return"   "+a}).join("\n"))):e=g("[Circular]","special"));if(typeof c=="undefined"){if(r==="Array"&&b.match(/^\d+$/))return e;c=JSON.stringify(""+b),c.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(c=c.substr(1,c.length-2),c=g(c,"name")):(c=c.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),c=g(c,"string"))}return c+": "+e});f.pop();var v=0,w=u.reduce(function(a,b){return v++,b.indexOf("\n")>=0&&v++,a+b.length+1},0);return w>50?u=s[0]+(q===""?"":q+"\n ")+" "+u.join(",\n  ")+" "+s[1]:u=s[0]+q+" "+u.join(", ")+" "+s[1],u}var f=[],g=function(a,b){var c={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},d={special:"cyan",number:"blue","boolean":"yellow","undefined":"grey","null":"bold",string:"green",date:"magenta",regexp:"red"}[b];return d?"["+c[d][0]+"m"+a+"["+c[d][1]+"m":a};return e||(g=function(a,b){return a}),k(a,typeof d=="undefined"?2:d)};var l=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];c.log=function(a){},c.pump=null;var n=Object.keys||function(a){var b=[];for(var c in a)b.push(c);return b},o=Object.getOwnPropertyNames||function(a){var b=[];for(var c in a)Object.hasOwnProperty.call(a,c)&&b.push(c);return b},p=Object.create||function(a,b){var c;if(a===null)c={__proto__:null};else{if(typeof a!="object")throw new TypeError("typeof prototype["+typeof a+"] != 'object'");var d=function(){};d.prototype=a,c=new d,c.__proto__=a}return typeof b!="undefined"&&Object.defineProperties&&Object.defineProperties(c,b),c};c.inherits=function(a,b){a.super_=b,a.prototype=p(b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}})}});