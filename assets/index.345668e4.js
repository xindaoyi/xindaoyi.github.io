var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,m=(e,a)=>{for(var t in a||(a={}))o.call(a,t)&&n(e,t,a[t]);if(l)for(var t of l(a))r.call(a,t)&&n(e,t,a[t]);return e},d=(e,l)=>a(e,t(l));import{d as u,r as s,o as i,t as c,p,a as f,b as h,c as y,e as b,f as v,F as D,g,h as V,i as _,w as x,j as C,k,l as w,D as R,m as I,n as Y,q as O,M as U,s as j,H as M}from"./vendor.ef115fcc.js";var P=u({name:"CompoundInterest",setup:()=>{const e=s({formData:{minYear:3,maxYear:30,minRate:3,maxRate:30},rates:[],amounts:[]}),a=()=>{e.rates=[],e.amounts=[];let a=[],t=e.formData.minYear,l=e.formData.maxYear,o=e.formData.minRate,r=e.formData.maxRate;for(let n=o;n<=r;n++){let a=n+"%";e.rates.push(a)}for(let e=t;e<=l;e++){const t=[];for(let a=o;a<=r;a++){const l=Number(Math.pow(1+a/100,e).toFixed(2));t.push(l)}a.push(t)}e.amounts=a};return i((()=>{a()})),d(m({},c(e)),{handleCreate:()=>{a()}})}});const G=x();p("data-v-2aa6fb96");const z=C(" % "),E=C(" % "),H=C("生成复利表"),A={class:"interest-table"},N=v("td",{width:"56"},null,-1),F={width:"56"};f();const $=G(((e,a,t,l,o,r)=>{const n=h("el-input"),m=h("el-form-item"),d=h("el-button"),u=h("el-form");return y(),b(D,null,[v(u,{class:"filter-form",inline:!0,model:e.formData},{default:G((()=>[v(m,{label:"最小年数"},{default:G((()=>[v(n,{modelValue:e.formData.minYear,"onUpdate:modelValue":a[1]||(a[1]=a=>e.formData.minYear=a),modelModifiers:{number:!0},placeholder:"请输入最小年数"},null,8,["modelValue"])])),_:1}),v(m,{label:"最大年数"},{default:G((()=>[v(n,{modelValue:e.formData.maxYear,"onUpdate:modelValue":a[2]||(a[2]=a=>e.formData.maxYear=a),modelModifiers:{number:!0},placeholder:"请输入最大年数"},null,8,["modelValue"])])),_:1}),v(m,{label:"最小收益率"},{default:G((()=>[v(n,{modelValue:e.formData.minRate,"onUpdate:modelValue":a[3]||(a[3]=a=>e.formData.minRate=a),modelModifiers:{number:!0},placeholder:"请输入最小收益率"},null,8,["modelValue"]),z])),_:1}),v(m,{label:"最大收益率"},{default:G((()=>[v(n,{modelValue:e.formData.maxRate,"onUpdate:modelValue":a[4]||(a[4]=a=>e.formData.maxRate=a),modelModifiers:{number:!0},placeholder:"请输入最大收益率"},null,8,["modelValue"]),E])),_:1}),v(m,null,{default:G((()=>[v(d,{type:"primary",onClick:e.handleCreate},{default:G((()=>[H])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"]),v("table",A,[v("tbody",null,[v("tr",null,[N,(y(!0),b(D,null,g(e.rates,((e,a)=>(y(),b("td",{key:a},[v("strong",null,V(e),1)])))),128))]),(y(!0),b(D,null,g(e.amounts,((a,t)=>(y(),b("tr",{key:t},[v("td",F,[v("strong",null,V(e.formData.minYear+t)+"年",1)]),a?(y(!0),b(D,{key:0},g(a,(e=>(y(),b("td",{key:e},V(e),1)))),128)):_("",!0)])))),128))])])],64)}));P.render=$,P.__scopeId="data-v-2aa6fb96";var q=u({name:"RatioCompare",setup(){const e=s({formData:[{year:null,earning:null,price:null}],ratioCompareOption:{}});let a=null;const t=e=>{let t=document.getElementById("myChart");a=k(t),null==a&&(a=w(t));const l=e.map((e=>e.year)),o=e.map((e=>e.earning)),r=e.map((e=>e.price));a.setOption({tooltip:{trigger:"axis"},legend:{data:["Earning Growth","Price Growth"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:l},yAxis:{type:"value"},series:[{name:"Earning Growth",type:"line",data:o},{name:"Price Growth",type:"line",data:r}]}),a.resize()};return i((()=>{R.get("http://localhost:3000/user").then((e=>{e.statusText}))})),d(m({},c(e)),{addRow:()=>{e.formData.push({year:null,earning:null,price:null})},removeRow:a=>{e.formData.splice(a,1)},handleCreate:()=>{let a=e.formData.sort(((e,a)=>Number(e.year)-Number(a.year)));t(a)}})}});const B=x();p("data-v-62a76340");const L=C(" - "),S=C(" - "),T=C("  "),J=C("生成图表"),K=v("div",{id:"myChart",class:"echart"},null,-1);f();const Q=B(((e,a,t,l,o,r)=>{const n=h("el-date-picker"),m=h("el-input"),d=h("el-form-item"),u=h("el-col"),s=h("el-row"),i=h("el-button"),c=h("el-form");return y(),b(D,null,[v(c,{class:"filter-form",inline:!0,model:e.formData},{default:B((()=>[v(s,null,{default:B((()=>[(y(!0),b(D,null,g(e.formData,((a,t)=>(y(),b(u,{md:12,lg:8,key:t},{default:B((()=>[v(d,null,{default:B((()=>[v(n,{modelValue:e.formData[t].year,"onUpdate:modelValue":a=>e.formData[t].year=a,type:"year","value-format":"YYYY",placeholder:"年份"},null,8,["modelValue","onUpdate:modelValue"]),L,v(m,{modelValue:e.formData[t].earning,"onUpdate:modelValue":a=>e.formData[t].earning=a,modelModifiers:{number:!0},placeholder:"收益"},null,8,["modelValue","onUpdate:modelValue"]),S,v(m,{modelValue:e.formData[t].price,"onUpdate:modelValue":a=>e.formData[t].price=a,modelModifiers:{number:!0},placeholder:"价格"},null,8,["modelValue","onUpdate:modelValue"]),T,v("i",{class:"el-icon-delete icon-btn",title:"删除这条数据",onClick:a=>e.removeRow(t)},null,8,["onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:1}),v(d,null,{default:B((()=>[v("i",{class:"el-icon-circle-plus-outline icon-btn",title:"增加一条数据",onClick:a[1]||(a[1]=(...a)=>e.addRow&&e.addRow(...a))})])),_:1}),v(d,null,{default:B((()=>[v(i,{type:"primary",onClick:e.handleCreate},{default:B((()=>[J])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"]),K],64)}));q.render=Q,q.__scopeId="data-v-62a76340";const W=[{path:"/",redirect:"/compoundInterest"},{path:"/compoundInterest",name:"CompoundInterest",meta:{title:"复利表"},component:P},{path:"/ratioCompare",name:"RatioCompare",meta:{title:"收益/价格变化"},component:q}],X=I({history:Y(),routes:W});var Z=u({name:"Header",setup:()=>{const e=s({activeIndex:"0",routes:W}),{proxy:a}=O();return d(m({},c(e)),{handleRouter:e=>{document.title=`${e.meta.title} - 金融工具箱`,a.$router.push({path:e.path})},formatRoutes:e=>e.filter((e=>e.name))})}});const ee=x();p("data-v-48156470");const ae={class:"header"},te=v("img",{class:"logo",src:"/assets/logo.60945d3e.svg"},null,-1);f();const le=ee(((e,a,t,l,o,r)=>{const n=h("el-menu-item"),m=h("el-menu");return y(),b("header",ae,[v(m,{"default-active":e.activeIndex,mode:"horizontal","background-color":"#333","text-color":"#fff","active-text-color":"#3a8ee6"},{default:ee((()=>[te,(y(!0),b(D,null,g(e.formatRoutes(e.routes),((a,t)=>(y(),b(n,{key:t,index:t,onClick:t=>e.handleRouter(a)},{default:ee((()=>[C(V(a.meta.title),1)])),_:2},1032,["index","onClick"])))),128))])),_:1},8,["default-active"])])}));Z.render=le,Z.__scopeId="data-v-48156470";var oe=u({name:"App",components:{Header:Z}});const re=x();p("data-v-730e326d");const ne={class:"container"};f();const me=re(((e,a,t,l,o,r)=>{const n=h("Header"),m=h("router-view");return y(),b(D,null,[v(n),v("main",ne,[v(m)])],64)}));oe.render=me,oe.__scopeId="data-v-730e326d";U.mock("http://localhost:3000/user","get",{name:"@name"});const de=j(oe).use(X);de.use(M,{size:"small",zIndex:3e3}),de.mount("#app");
