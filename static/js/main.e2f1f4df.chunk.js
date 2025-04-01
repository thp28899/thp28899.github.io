(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},74:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c(7),n=c.n(a),o=(c(63),c(64),c(110)),r=c(112),l=c(116),i=c(105),d=c(109),j=c(78),u=(c(65),c(2));var h=function(e){return Object(u.jsx)(i.a,{onClick:e.onClick,className:`infoBox ${e.active&&"infoBox--selected"} ${"cases"===e.casesType&&"infoBox--red"} ${"deaths"===e.casesType&&"infoBox--gray"}`,children:Object(u.jsxs)(d.a,{children:[Object(u.jsx)(j.a,{className:"infoBox__title",color:"textSecondary",children:e.title}),Object(u.jsx)("h2",{className:`infoBox__cases ${"cases"===e.casesType&&"infoBox__cases--red"} ${"deaths"===e.casesType&&"infoBox__cases--gray"}`,children:e.cases}),Object(u.jsxs)(j.a,{className:"infoBox__total",color:"textSecondary",children:[e.total," Total"]})]})})},b=c(30),x=(c(69),c(115)),O=c(111),y=c(113),p=c(20),m=c.n(p);c(70);const v=e=>e?`+${m()(e).format("0.0a")}`:"+0",f=Object(s.createContext)({selectedCountry:""}),g=e=>{const[t,c]=Object(s.useState)(""),a={selectedCountry:t,selectCountry:e=>{c(e)}};return Object(u.jsx)(f.Provider,{value:a,children:e.children})};var C=f;const w={cases:{hex:"#cc1034",multiplier:.03},recovered:{hex:"#7dd71d",multiplier:.03},deaths:{hex:"#c0c0c0",multiplier:1}};var _=function(e){const[t,c]=Object(s.useState)(!1),a=Object(s.useContext)(C);return Object(s.useEffect)((()=>{a.selectedCountry===e.country.country&&c(!0)}),[a.selectedCountry,e.country.country]),Object(u.jsxs)(u.Fragment,{children:["circle"===e.mapDrawingsMode&&Object(u.jsx)(b.a,{center:{lat:e.country.countryInfo.lat,lng:e.country.countryInfo.long},options:{strokeColor:w[e.casesType].hex,strokeOpacity:.9,strokeWeight:2,fillColor:w[e.casesType].hex,fillOpacity:.35,clickable:!0,draggable:!1,editable:!1,visible:!0,radius:e.country[e.casesType]*w[e.casesType].multiplier>15e3?e.country[e.casesType]*w[e.casesType].multiplier:15e3,zIndex:1},onClick:()=>c(!0)}),t&&Object(u.jsx)(b.c,{position:{lat:e.country.countryInfo.lat,lng:e.country.countryInfo.long},onCloseClick:()=>c(!1),children:Object(u.jsxs)("div",{className:"info-container",children:[Object(u.jsx)("div",{className:"info-flag",style:{backgroundImage:`url(${e.country.countryInfo.flag})`}}),Object(u.jsx)("div",{className:"info-name",children:e.country.country}),Object(u.jsxs)("div",{className:"info-cases",children:["Cases: ",m()(e.country.cases).format("0,0")]}),Object(u.jsxs)("div",{className:"info-recovered",children:["Recovered: ",m()(e.country.recovered).format("0,0")]}),Object(u.jsxs)("div",{className:"info-deaths",children:["Deaths: ",m()(e.country.deaths).format("0,0")]})]})})]})};const N={width:"100%",height:"100%"};var T=function(e){const[t,c]=Object(s.useState)("circle"),{isLoaded:a}=Object(b.d)({id:"google-map-script",googleMapsApiKey:"AIzaSyCc-EsvzIi-fvx3sZLYUML659aIzodUQhE"});return a?Object(u.jsx)(i.a,{className:"map__card",children:Object(u.jsxs)(d.a,{className:"map",children:[Object(u.jsx)("div",{className:"map__head",children:Object(u.jsx)(o.a,{children:Object(u.jsxs)(x.a,{row:!0,value:t,onChange:e=>c(e.target.value),children:[Object(u.jsx)(O.a,{value:"circle",control:Object(u.jsx)(y.a,{color:"primary"}),label:"Circle"}),Object(u.jsx)(O.a,{value:"none",control:Object(u.jsx)(y.a,{color:"primary"}),label:"None"})]})})}),Object(u.jsx)(b.b,{mapContainerStyle:N,center:e.center,zoom:e.zoom,children:e.countries.map((c=>Object(u.jsx)(_,{country:c,casesType:e.casesType,mapDrawingsMode:t},c.country)))})]})}):Object(u.jsx)(u.Fragment,{})};c(71);var k=function(e){return Object(u.jsx)("table",{className:"table",children:Object(u.jsx)("tbody",{children:e.countries.map((e=>{let{country:t,cases:c}=e;return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t}),Object(u.jsx)("td",{children:Object(u.jsx)("strong",{children:m()(c).format("0,0")})})]},t)}))})})},S=c(52);c(72),c(74);var I=function(e){let{casesType:t,days:c}=e;const[a,n]=Object(s.useState)([]),o="cases"===t?"#cc1034":"deaths"===t?"gray":"#478604";Object(s.useEffect)((()=>{(async()=>{await fetch(`https://disease.sh/v3/covid-19/historical/all?lastdays=${c}`).then((e=>e.json())).then((e=>{const c=r(e,t);n(c)}))})()}),[t,c]);const r=(e,t)=>{const c=[];let s;for(let a in e.cases){if(s){const n={x:a,y:e[t][a]-s};c.push(n)}s=e[t][a]}return c};return Object(u.jsx)("div",{className:"graph",children:Object(u.jsx)(S.a,{data:{datasets:[{backgroundColor:o,borderColor:o,data:a}]},options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{type:"time",time:{displayFormats:{quarter:"MMM YYYY"},tooltipFormat:"MMM DD, YYYY"}}},elements:{point:{radius:1,hitRadius:2},line:{borderWidth:1}}}})})};var $=function(){const e="https://disease.sh/v3/covid-19/",[t,c]=Object(s.useState)([]),[a,n]=Object(s.useState)("worldwide"),[j,b]=Object(s.useState)({}),[x,O]=Object(s.useState)([]),[y,p]=Object(s.useState)({lat:24.80746,lng:.4796}),[m,f]=Object(s.useState)(2),[g,w]=Object(s.useState)([]),_=Object(s.useContext)(C),[N,S]=Object(s.useState)("cases"),[$,M]=Object(s.useState)("30");return Object(s.useEffect)((()=>{(async()=>{await fetch(`${e}all`).then((e=>e.json())).then((e=>{b(e)}))})()}),[]),Object(s.useEffect)((()=>{(async()=>{await fetch(`${e}countries`).then((e=>e.json())).then((e=>{const t=e.map((e=>({name:e.country,value:e.countryInfo.iso2})));c(t),O((e=>(e.sort(((e,t)=>t.cases-e.cases)),e))(e)),w(e)}))})()}),[]),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"app",children:[Object(u.jsxs)("div",{className:"app__left",children:[Object(u.jsxs)("div",{className:"app__header",children:[Object(u.jsx)("h1",{children:"COVID-19 TRACKER"}),Object(u.jsx)(o.a,{className:"app__dropdown",children:Object(u.jsxs)(r.a,{variant:"outlined",value:a,onChange:async t=>{const c=t.target.value;n(c);const s="worldwide"===c?`${e}all`:`${e}countries/${c}`;await fetch(s).then((e=>e.json())).then((e=>{var t,s;b(e),p({lat:(null===(t=e.countryInfo)||void 0===t?void 0:t.lat)||24.80746,lng:(null===(s=e.countryInfo)||void 0===s?void 0:s.long)||.4796}),f("worldwide"===c?2:4),e.country?_.selectCountry(e.country):_.selectCountry("worldwide")}))},children:[Object(u.jsx)(l.a,{value:"worldwide",children:"Worldwide"},"worldwide"),t.map((e=>Object(u.jsx)(l.a,{value:e.value,children:e.name},e.name)))]})})]}),Object(u.jsxs)("div",{className:"app__stats",children:[Object(u.jsx)(h,{title:"Coronavirus cases",cases:v(j.todayCases),total:v(j.cases).split("+")[1],onClick:()=>S("cases"),active:"cases"===N,casesType:"cases"}),Object(u.jsx)(h,{title:"Recovered",cases:v(j.todayRecovered),total:v(j.recovered).split("+")[1],onClick:()=>S("recovered"),active:"recovered"===N,casesType:"recovered"}),Object(u.jsx)(h,{title:"Deaths",cases:v(j.todayDeaths),total:v(j.deaths).split("+")[1],onClick:()=>S("deaths"),active:"deaths"===N,casesType:"deaths"})]}),Object(u.jsx)(T,{center:y,zoom:m,countries:g,casesType:N})]}),Object(u.jsx)(i.a,{className:"app__right",children:Object(u.jsxs)(d.a,{className:"app__right__content",children:[Object(u.jsx)("h4",{children:"All cases recorded by country"}),Object(u.jsx)(k,{countries:x}),Object(u.jsxs)("div",{className:"app__right__da",children:[Object(u.jsxs)("h4",{children:["Worldwide new ",N]}),Object(u.jsx)(o.a,{children:Object(u.jsx)(r.a,{value:$,onChange:e=>M(e.target.value),children:["30","60","120","all"].map((e=>Object(u.jsxs)(l.a,{value:e,children:[e," days"]},e)))})})]}),Object(u.jsx)(I,{casesType:N,days:$})]})})]}),Object(u.jsxs)("div",{className:"dataReference",children:["Data from: ",Object(u.jsx)("u",{children:"https://disease.sh/"})]}),Object(u.jsxs)("div",{className:"dataReference",children:["Code reference: ",Object(u.jsx)("u",{children:"https://www.youtube.com/watch?v=cF3pIMJUZxM"})]}),Object(u.jsxs)("div",{className:"dataReference",children:["Contact me: ",Object(u.jsx)("u",{children:"https://www.linkedin.com/in/thp28899"})]})]})};n.a.render(Object(u.jsx)(g,{children:Object(u.jsx)($,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.e2f1f4df.chunk.js.map