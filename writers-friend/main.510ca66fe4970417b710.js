(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){var n=a(25),r=a(52);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},l=(n(e.i,r,o),r.locals?r.locals:{});e.exports=l},29:function(e,t,a){var n=a(25),r=a(53);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},l=(n(e.i,r,o),r.locals?r.locals:{});e.exports=l},47:function(e,t,a){e.exports=a(61)},52:function(e,t,a){(t=a(26)(!1)).push([e.i,"._3uxdAGn35YtL8FfdTt5ZEV {\n\tcolor: gray;\n\tposition: fixed;\n\tbottom: 0;\n\tright: 0;\n\tpadding: 0 0.25rem 0.25rem;\n}\n",""]),t.locals={lastSaved:"_3uxdAGn35YtL8FfdTt5ZEV"},e.exports=t},53:function(e,t,a){(t=a(26)(!1)).push([e.i,"._1kHrczfFS3CVnSTKTO0W7T {\n\tmax-width: 700px;\n\twidth: 100%;\n\tmargin: 0.25rem auto;\n\t-webkit-box-flex: 1;\n\t        flex: 1;\n\tborder: 2px solid #eee;\n\tpadding: 0rem 1rem 0;\n\tposition: relative;\n}\n\n#app {\n\t-webkit-box-flex: 1;\n\t        flex: 1;\n\tdisplay: -webkit-box;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t        flex-direction: column;\n}\n\nbody {\n\tpadding: 0;\n\tmargin: 0;\n\tmin-height: 100vh;\n\tdisplay: -webkit-box;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t        flex-direction: column;\n}\n",""]),t.locals={container:"_1kHrczfFS3CVnSTKTO0W7T"},e.exports=t},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),l=a.n(o),c=a(15),i=a.n(c),s=a(17),m=a(1),d=a(30),u=a(34),p=a.n(u),f=a(36),b=a.n(f),x=a(37),E=a.n(x),h=a(38),g=a.n(h),w=a(39),v=a.n(w),y=a(40),k=a.n(y),O=a(41),j=a.n(O),N=a(42),S=a.n(N),D=a(43),T=a.n(D),F=a(45),M=a.n(F),_=a(81),q=a(7),C=a(28),R=a.n(C),z=a(80);function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const A=r.a.forwardRef(({className:e,active:t,reversed:a,...n},o)=>r.a.createElement("span",I({},n,{ref:o,className:Object(q.b)(e,q.a`
          cursor: pointer;
          color: ${a?t?"white":"#aaa":t?"black":"#ccc"};
          &:hover {
            color: #797979;
          }
        `)}))),J=(r.a.forwardRef(({className:e,value:t,...a},n)=>{const o=t.document.nodes.map(e=>e.text).toArray().join("\n");return r.a.createElement("div",I({ref:n},a,{className:Object(q.b)(e,q.a`
            margin: 30px -20px 0;
          `)}),r.a.createElement("div",{className:q.a`
            font-size: 14px;
            padding: 5px 20px;
            color: #404040;
            border-top: 2px solid #eeeeee;
            background: #f8f8f8;
          `},"Slate's value as text"),r.a.createElement("div",{className:q.a`
            color: #404040;
            font: 12px monospace;
            white-space: pre-wrap;
            padding: 10px 20px;
            div {
              margin: 0 0 0.5em;
            }
          `},o))}),r.a.forwardRef(({className:e,...t},a)=>r.a.createElement("span",I({},t,{ref:a,className:Object(q.b)("material-icons",e,q.a`
        font-size: 18px;
        vertical-align: text-bottom;
      `)}))),r.a.forwardRef(({className:e,...t},a)=>r.a.createElement("div",I({},t,{ref:a,className:Object(q.b)(e,q.a`
        white-space: pre-wrap;
        margin: 0 -20px 10px;
        padding: 10px 20px;
        font-size: 14px;
        background: #f8f8e8;
      `)}))),r.a.forwardRef(({className:e,...t},a)=>r.a.createElement("div",I({},t,{ref:a,className:Object(q.b)(e,q.a`
        & > * {
          display: inline-block;
        }

        & > * + * {
          margin-left: 15px;
        }
      `)})))),L=r.a.forwardRef(({className:e,...t},a)=>r.a.createElement(J,I({},t,{ref:a,className:Object(q.b)(e,q.a`
        position: relative;
        padding: 1rem 0 0.25rem;
        border-bottom: 2px solid #eee;
        margin-bottom: 20px;
        position: sticky;
        top: 0.5rem;
        background: white;
      `)}))),V=({time:e})=>{const[t,a]=Object(n.useState)(""),[o,l]=((e=1e3)=>{const[t,a]=Object(n.useState)(Date.now());function r(){a(Date.now())}return Object(n.useEffect)((function(){const t=setInterval(r,e);return()=>{clearInterval(t)}}),[]),[t,a]})();return Object(n.useEffect)(()=>{if(!e)return;const t=Object(z.a)(new Date(e),new Date(o),{includeSeconds:!0,addSuffix:!0});a(`Saved ${t}.`)},[o]),r.a.createElement("div",{className:R.a.lastSaved},r.a.createElement("span",null,t))};var K=a(29),G=a.n(K);const H={"mod+b":"bold","mod+i":"italic","mod+u":"underline","mod+`":"code"},P=["numbered-list","bulleted-list"],W=((e,t,a)=>{let n;return(...r)=>new Promise((o,l)=>{const c=a&&!n;clearTimeout(n),n=setTimeout((function(){n=null,a||o(e.apply(void 0,r))}),t),c&&o(e.apply(void 0,r))})})((e,t)=>{const a=JSON.stringify(t);return localStorage.setItem(e,a),Date.now()},3e3);function Y(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()}const Z=(e,t)=>{B(e,t)?m.a.removeMark(e,t):m.a.addMark(e,t,!0)},$=(e,t)=>{const[a]=m.a.nodes(e,{match:e=>e.type===t});return!!a},B=(e,t)=>{const a=m.a.marks(e);return!!a&&!0===a[t]},Q=({attributes:e,children:t,element:a})=>{switch(a.type){case"block-quote":return r.a.createElement("blockquote",e,t);case"bulleted-list":return r.a.createElement("ul",e,t);case"heading-one":return r.a.createElement("h1",e,t);case"heading-two":return r.a.createElement("h2",e,t);case"list-item":return r.a.createElement("li",e,t);case"numbered-list":return r.a.createElement("ol",e,t);default:return r.a.createElement("p",e,t)}},U=({attributes:e,children:t,leaf:a})=>(a.bold&&(t=r.a.createElement("strong",null,t)),a.code&&(t=r.a.createElement("code",null,t)),a.italic&&(t=r.a.createElement("em",null,t)),a.underline&&(t=r.a.createElement("u",null,t)),r.a.createElement("span",e,t)),X=({format:e,icon:t})=>{const a=Object(s.c)();return r.a.createElement(A,{active:$(a,e),onMouseDown:t=>{t.preventDefault(),((e,t)=>{const a=$(e,t),n=P.includes(t);if(m.h.unwrapNodes(e,{match:e=>P.includes(e.type),split:!0}),m.h.setNodes(e,{type:a?"paragraph":n?"list-item":t}),!a&&n){const a={type:t,children:[]};m.h.wrapNodes(e,a)}})(a,e)}},r.a.createElement(t,null))},ee=({format:e,icon:t})=>{const a=Object(s.c)();return r.a.createElement(A,{active:B(a,e),onMouseDown:t=>{t.preventDefault(),Z(a,e)}},r.a.createElement(t,null))},te=[{type:"paragraph",children:[{text:"This is editable "},{text:"rich",bold:!0},{text:" text, "},{text:"much",italic:!0},{text:" better than a "},{text:"<textarea>",code:!0},{text:"!"}]},{type:"paragraph",children:[{text:"Since it's rich text, you can do things like turn a selection of text "},{text:"bold",bold:!0},{text:", or add a semantically rendered block quote in the middle of the page, like this:"}]},{type:"block-quote",children:[{text:"A wise quote."}]},{type:"paragraph",children:[{text:"Try it out for yourself!"}]}];var ae=()=>{const e="foo",t=(e=>{const t=localStorage.getItem(e);let a=null;if(null===t)return a;try{a=JSON.parse(t)}catch(e){console.error(e)}return a})(e),[a,o]=Object(n.useState)(t||te),[l,c]=Object(n.useState)(0),u=Object(n.useCallback)(e=>r.a.createElement(Q,e),[]),f=Object(n.useCallback)(e=>r.a.createElement(U,e),[]),x=Object(n.useMemo)(()=>Object(d.a)(Object(s.d)(Object(m.i)())),[]);return Object(n.useEffect)((function(){document.documentElement.classList.remove("loading")}),[]),Object(n.useEffect)(()=>{console.log("ok!",Date.now())},[l]),r.a.createElement("div",{className:G.a.container},r.a.createElement(s.b,{editor:x,value:a,onChange:async function(t){o(t);const a=await W(e,t);c(a)}},r.a.createElement(L,null,r.a.createElement(ee,{format:"bold",icon:p.a}),r.a.createElement(ee,{format:"italic",icon:b.a}),r.a.createElement(ee,{format:"underline",icon:E.a}),r.a.createElement(ee,{format:"code",icon:g.a}),r.a.createElement(X,{format:"heading-one",icon:v.a}),r.a.createElement(X,{format:"heading-two",icon:k.a}),r.a.createElement(X,{format:"block-quote",icon:j.a}),r.a.createElement(X,{format:"numbered-list",icon:S.a}),r.a.createElement(X,{format:"bulleted-list",icon:T.a}),r.a.createElement(_.a,{title:"Toggle fullscreen mode",enterDelay:500},r.a.createElement(A,{onMouseDown:Y},r.a.createElement(M.a,null)))),r.a.createElement(s.a,{renderElement:u,renderLeaf:f,placeholder:"Enter some rich text…",spellCheck:!0,autoFocus:!0,onKeyDown:e=>{for(const t in H)if(i()(t,e)){e.preventDefault(),Z(x,H[t])}}}),r.a.createElement(V,{time:l})))},ne=document.getElementById("app");l.a.render(r.a.createElement(ae,null),ne)}},[[47,1,2]]]);