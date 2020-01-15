(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){var a=n(26),r=n(54);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},c=(a(e.i,r,o),r.locals?r.locals:{});e.exports=c},29:function(e,t,n){var a=n(26),r=n(53);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1},c=(a(e.i,r,o),r.locals?r.locals:{});e.exports=c},48:function(e,t,n){e.exports=n(62)},53:function(e,t,n){(t=n(27)(!1)).push([e.i,"._3uxdAGn35YtL8FfdTt5ZEV {\n\tcolor: gray;\n\tposition: fixed;\n\tbottom: 0;\n\tright: 0;\n\tpadding: 0 0.25rem 0.25rem;\n}\n",""]),t.locals={lastSaved:"_3uxdAGn35YtL8FfdTt5ZEV"},e.exports=t},54:function(e,t,n){(t=n(27)(!1)).push([e.i,"._1kHrczfFS3CVnSTKTO0W7T {\n\tmax-width: 700px;\n\twidth: 100%;\n\tmargin: 0.25rem auto;\n\t-webkit-box-flex: 1;\n\t        flex: 1;\n\tborder: 2px solid #eee;\n\tpadding: 0rem 1rem 0;\n\tposition: relative;\n\tbackground-color: inherit;\n}\n\n.ol7PHcNvMCWxXsVmT818L {\n\tbackground-color: inherit;\n}\n\n#app {\n\t-webkit-box-flex: 1;\n\t        flex: 1;\n\tdisplay: -webkit-box;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t        flex-direction: column;\n\tbackground-color: inherit;\n}\n\nbody {\n\tpadding: 0;\n\tmargin: 0;\n\tmin-height: 100vh;\n\tdisplay: -webkit-box;\n\tdisplay: flex;\n\t-webkit-box-orient: vertical;\n\t-webkit-box-direction: normal;\n\t        flex-direction: column;\n\tbackground-color: inherit;\n\tfont-size: 20px;\n}\n\n* {\n\tbox-sizing: border-box;\n}\n\n/* dark theme */\n@media (prefers-color-scheme: dark) {\n    :root {\n        background-color: #131313;\n        color: #cacaca;\n    }\n}\n\n",""]),t.locals={container:"_1kHrczfFS3CVnSTKTO0W7T",slateContainer:"ol7PHcNvMCWxXsVmT818L"},e.exports=t},62:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),c=n.n(o),l=n(15),i=n.n(l),s=n(17),m=n(1),d=n(30),u=n(34),p=n.n(u),f=n(36),b=n.n(f),x=n(37),h=n.n(x),E=n(38),g=n.n(E),v=n(39),w=n.n(v),k=n(40),y=n.n(k),O=n(41),j=n.n(O),N=n(42),S=n.n(N),D=n(43),T=n.n(D),C=n(46),M=n.n(C),F=n(45),_=n.n(F),q=n(82),z=n(7),L=n(29),R=n.n(L),V=n(81);function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const A=r.a.forwardRef(({className:e,active:t,reversed:n,...a},o)=>r.a.createElement("span",I({},a,{ref:o,className:Object(z.b)(e,z.a`
          cursor: pointer;
          color: ${n?t?"white":"#aaa":t?"gray":"#ccc"};
          &:hover {
            color: #797979;
          }
        `)}))),H=(r.a.forwardRef(({className:e,value:t,...n},a)=>{const o=t.document.nodes.map(e=>e.text).toArray().join("\n");return r.a.createElement("div",I({ref:a},n,{className:Object(z.b)(e,z.a`
            margin: 30px -20px 0;
          `)}),r.a.createElement("div",{className:z.a`
            font-size: 14px;
            padding: 5px 20px;
            color: #404040;
            border-top: 2px solid #eeeeee;
            background: #f8f8f8;
          `},"Slate's value as text"),r.a.createElement("div",{className:z.a`
            color: #404040;
            font: 12px monospace;
            white-space: pre-wrap;
            padding: 10px 20px;
            div {
              margin: 0 0 0.5em;
            }
          `},o))}),r.a.forwardRef(({className:e,...t},n)=>r.a.createElement("span",I({},t,{ref:n,className:Object(z.b)("material-icons",e,z.a`
        font-size: 18px;
        vertical-align: text-bottom;
      `)}))),r.a.forwardRef(({className:e,...t},n)=>r.a.createElement("div",I({},t,{ref:n,className:Object(z.b)(e,z.a`
        white-space: pre-wrap;
        margin: 0 -20px 10px;
        padding: 10px 20px;
        font-size: 14px;
        background: #f8f8e8;
      `)}))),r.a.forwardRef(({className:e,...t},n)=>r.a.createElement("div",I({},t,{ref:n,className:Object(z.b)(e,z.a`
        & > * {
          display: inline-block;
        }

        & > * + * {
          margin-left: 15px;
        }
      `)})))),J=r.a.forwardRef(({className:e,...t},n)=>r.a.createElement(H,I({},t,{ref:n,className:Object(z.b)(e,z.a`
        position: relative;
        padding: 1rem 0 0.25rem;
        border-bottom: 2px solid #eee;
        margin-bottom: 20px;
        position: sticky;
        top: 0.5rem;
        background: inherit;
      `)}))),P=({time:e})=>{const[t,n]=Object(a.useState)(""),[o,c]=((e=1e3)=>{const[t,n]=Object(a.useState)(Date.now());function r(){n(Date.now())}return Object(a.useEffect)((function(){const t=setInterval(r,e);return()=>{clearInterval(t)}}),[]),[t,n]})();return Object(a.useEffect)(()=>{if(!e)return;const t=Object(V.a)(new Date(e),new Date(o),{includeSeconds:!0,addSuffix:!0});n(`Saved ${t}.`)},[o]),r.a.createElement("div",{className:R.a.lastSaved},r.a.createElement("span",null,t))};var W=n(23),K=n.n(W);const G={"mod+b":"bold","mod+i":"italic","mod+u":"underline","mod+`":"code"},X=["numbered-list","bulleted-list"],Y=((e,t,n)=>{let a;return(...r)=>new Promise((o,c)=>{const l=n&&!a;clearTimeout(a),a=setTimeout((function(){a=null,n||o(e.apply(void 0,r))}),t),l&&o(e.apply(void 0,r))})})((e,t)=>{const n=JSON.stringify(t);return localStorage.setItem(e,n),Date.now()},3e3);function Z(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()}const $=(e,t)=>{Q(e,t)?m.a.removeMark(e,t):m.a.addMark(e,t,!0)},B=(e,t)=>{const[n]=m.a.nodes(e,{match:e=>e.type===t});return!!n},Q=(e,t)=>{const n=m.a.marks(e);return!!n&&!0===n[t]},U=({attributes:e,children:t,element:n})=>{switch(n.type){case"block-quote":return r.a.createElement("blockquote",e,t);case"bulleted-list":return r.a.createElement("ul",e,t);case"heading-one":return r.a.createElement("h1",e,t);case"heading-two":return r.a.createElement("h2",e,t);case"list-item":return r.a.createElement("li",e,t);case"numbered-list":return r.a.createElement("ol",e,t);default:return r.a.createElement("p",e,t)}},ee=({attributes:e,children:t,leaf:n})=>(n.bold&&(t=r.a.createElement("strong",null,t)),n.code&&(t=r.a.createElement("code",null,t)),n.italic&&(t=r.a.createElement("em",null,t)),n.underline&&(t=r.a.createElement("u",null,t)),r.a.createElement("span",e,t)),te=({format:e,icon:t})=>{const n=Object(s.c)();return r.a.createElement(A,{active:B(n,e),onMouseDown:t=>{t.preventDefault(),((e,t)=>{const n=B(e,t),a=X.includes(t);if(m.h.unwrapNodes(e,{match:e=>X.includes(e.type),split:!0}),m.h.setNodes(e,{type:n?"paragraph":a?"list-item":t}),!n&&a){const n={type:t,children:[]};m.h.wrapNodes(e,n)}})(n,e)}},r.a.createElement(t,null))},ne=({format:e,icon:t})=>{const n=Object(s.c)();return r.a.createElement(A,{active:Q(n,e),onMouseDown:t=>{t.preventDefault(),$(n,e)}},r.a.createElement(t,null))},ae=[{type:"paragraph",children:[{text:"This is editable "},{text:"rich",bold:!0},{text:" text, "},{text:"much",italic:!0},{text:" better than a "},{text:"<textarea>",code:!0},{text:"!"}]},{type:"paragraph",children:[{text:"Since it's rich text, you can do things like turn a selection of text "},{text:"bold",bold:!0},{text:", or add a semantically rendered block quote in the middle of the page, like this:"}]},{type:"block-quote",children:[{text:"A wise quote."}]},{type:"paragraph",children:[{text:"Try it out for yourself!"}]}];var re=()=>{const e="foo",t=(e=>{const t=localStorage.getItem(e);let n=null;if(null===t)return n;try{n=JSON.parse(t)}catch(e){console.error(e)}return n})(e),[n,o]=Object(a.useState)(t||ae),[c,l]=Object(a.useState)(!1),[u,f]=Object(a.useState)(0),x=Object(a.useCallback)(e=>r.a.createElement(U,e),[]),E=Object(a.useCallback)(e=>r.a.createElement(ee,e),[]),v=Object(a.useMemo)(()=>Object(d.a)(Object(s.d)(Object(m.i)())),[]);return Object(a.useEffect)((function(){document.documentElement.classList.remove("loading")}),[]),r.a.createElement("div",{className:K.a.container,spellCheck:c},r.a.createElement(s.b,{className:K.a.slateContainer,editor:v,value:n,onChange:async function(t){o(t);const n=await Y(e,t);f(n)}},r.a.createElement(J,null,r.a.createElement(ne,{format:"bold",icon:p.a}),r.a.createElement(ne,{format:"italic",icon:b.a}),r.a.createElement(ne,{format:"underline",icon:h.a}),r.a.createElement(ne,{format:"code",icon:g.a}),r.a.createElement(te,{format:"heading-one",icon:w.a}),r.a.createElement(te,{format:"heading-two",icon:y.a}),r.a.createElement(te,{format:"block-quote",icon:j.a}),r.a.createElement(te,{format:"numbered-list",icon:S.a}),r.a.createElement(te,{format:"bulleted-list",icon:T.a}),r.a.createElement(q.a,{title:"Spellcheck",enterDelay:500},r.a.createElement(A,{onMouseDown:function(e){l(!c)},active:c},r.a.createElement(_.a,null))),r.a.createElement(q.a,{title:"Toggle fullscreen mode",enterDelay:500},r.a.createElement(A,{onMouseDown:Z},r.a.createElement(M.a,null)))),r.a.createElement(s.a,{renderElement:x,renderLeaf:E,placeholder:"Enter some rich text…",spellCheck:c,autoFocus:!0,onKeyDown:e=>{for(const t in G)if(i()(t,e)){e.preventDefault(),$(v,G[t])}}}),r.a.createElement(P,{time:u})))},oe=document.getElementById("app");c.a.render(r.a.createElement(re,null),oe)}},[[48,1,2]]]);