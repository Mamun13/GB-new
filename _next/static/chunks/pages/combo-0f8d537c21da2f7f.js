(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2064],{1441:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/combo",function(){return a(5241)}])},2407:function(e,t,a){"use strict";var s=a(5893);a(7294);var c=a(2205),l=a(6486),n=a.n(l);t.Z=function(e){let{meta:t,setPage:a}=e,l=[];return n().isEmpty(t)||t.links.slice(1,-1).map((e,t)=>l.push((0,s.jsx)(c.Z.Item,{active:e.active,onClick:t=>{t.preventDefault(),a(e.label)},children:e.label},t))),l.length>1&&(0,s.jsx)(c.Z,{className:"custom-pagination",children:l})}},5241:function(e,t,a){"use strict";a.r(t);var s=a(5893),c=a(7294),l=a(2609),n=a(3516),i=a(2407),o=a(6843),r=a(5086),d=a(1664),m=a.n(d),u=a(9554),f=a(101),v=a(9008),h=a.n(v);let x=()=>{var e;let[t,a]=(0,c.useState)([]),[d,v]=(0,c.useState)([]),[x,g]=(0,c.useState)({}),[j,p]=(0,c.useState)("");(0,c.useEffect)(()=>{(0,f.s)({paginate:"no"}).then(e=>{(null==e?void 0:e.data)&&v(e.data)})},[]);let b=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(0,o.BZ)(e).then(e=>{var t;(null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.data)&&(a(e.data.data),g(e.data.meta))})};return(0,c.useEffect)(()=>{b({paginate:"yes"})},[]),(0,c.useEffect)(()=>{j&&id&&b(id,{page:j,paginate:"yes"})},[j]),(0,s.jsxs)(c.Fragment,{children:[(0,s.jsx)(h(),{children:(0,s.jsx)("title",{children:(0,n.qJ)("Combo Products")})}),(0,s.jsxs)("section",{children:[(null==d?void 0:null===(e=d[0])||void 0===e?void 0:e.image)&&(0,s.jsx)("div",{className:"product-banner",children:(0,s.jsx)("img",{src:"/combo-default.jpg",alt:"category-image",className:"product-banner"})}),(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("div",{className:"w-100 mb-5",children:(0,s.jsx)("h1",{className:"fw-bolder text-center mt-5 font-40 font-lato our-product",children:"Combo Pack"})}),(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-4",children:(0,s.jsx)("ul",{className:"stickyContent list-unstyled text-start ps-3 font-20 lh-lg card-border py-3 ",children:null==d?void 0:d.map((e,t)=>(0,s.jsx)("li",{children:(0,s.jsx)(m(),{href:"/combo/category/".concat(e.id),children:(0,s.jsxs)("button",{className:"d-flex align-items-center category-btn",children:[(0,s.jsx)(u.fNt,{className:"icon-space me-2"}),(0,s.jsx)("span",{children:e.name})]})})},t))})}),(0,s.jsxs)("div",{className:"col-lg-9 col-md-8 col-sm-9",children:[(0,s.jsx)("div",{className:"row",children:t.map((e,t)=>{var a,c,l;return(0,s.jsx)("div",{className:"col-lg-4 col-md-6 text-center mb-4",children:(0,s.jsx)(r.Z,{id:e.id,title:e.title,sku:e.sku,categoryName:null==e?void 0:null===(a=e.combo_category)||void 0===a?void 0:a.name,subCategoryName:null==e?void 0:null===(c=e.product)||void 0===c?void 0:null===(l=c.sub_category)||void 0===l?void 0:l.name,salePrice:e.sale_price,offerPrice:e.offer_price,offerStart:e.offer_start,offerEnd:e.offer_end,imagePath:(0,n.a$)("combo-image/".concat(null==e?void 0:e.image)),viewLink:"/combo/pack/".concat(e.id),cssClasses:"category-product",isTimer:!0,items:e.combo_items})},t)})}),(0,s.jsx)("div",{className:"my-3 d-flex justify-content-center",children:(0,s.jsx)(i.Z,{meta:x,setPage:p})})]})]})]}),(0,s.jsx)(l.Z,{})]})]})};t.default=x}},function(e){e.O(0,[4980,4857,9774,2888,179],function(){return e(e.s=1441)}),_N_E=e.O()}]);