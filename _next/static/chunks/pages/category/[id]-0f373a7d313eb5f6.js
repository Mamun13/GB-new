(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7300],{8809:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/[id]",function(){return n(9324)}])},7076:function(e,t,n){"use strict";var a=n(5893),i=n(7294),r=n(1664),c=n.n(r),s=n(8182),l=n(381),o=n.n(l),d=n(3516),u=n(2920),m=n(7087),v=n(3364),h=n(1649),f=n(1163);let x=e=>{let{id:t,title:n,salePrice:r,offerPrice:l,offerStart:x,offerEnd:g,sku:p,categoryName:j,subCategoryName:_,imagePath:y,viewLink:b,cssClasses:N,isTimer:w,variants:Z}=e,k=(0,h.I0)(),Y=(0,f.useRouter)(),T=!1,E=o()().format("YYYY-MM-DD"),P=x?o()(x).format("YYYY-MM-DD"):null,B=g?o()(g).format("YYYY-MM-DD"):null;l&&(T=null===P||null===B||P<=E&&B>=E);let C=function(e){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.preventDefault();try{var i,c,s,o,h,f;k((0,m.il)({id:(0,v.Iy)(11111111,999999999),inventory_id:t,quantity:1,unit_price:T?l:r,total:T?l:r,type:"product",sku:p,title:n,category_name:j,sub_category_name:_,image:y,variations:"",variant_id:null==Z?void 0:null===(i=Z[0])||void 0===i?void 0:null===(c=i.variant)||void 0===c?void 0:c.id,variant_name:null==Z?void 0:null===(s=Z[0])||void 0===s?void 0:null===(o=s.variant)||void 0===o?void 0:o.name,variant_quantity:null==Z?void 0:null===(h=Z[0])||void 0===h?void 0:null===(f=h.variant_option)||void 0===f?void 0:f.name})),(0,d.B)(u.Am,"success",{message:"Added to Cart"}),a&&setTimeout(()=>{Y.push("/checkout")},2e3)}catch(e){(0,d.B)(u.Am,"warning",{message:e.message})}};return(0,a.jsxs)(s.Z,{className:"c-shadow card_hover border rounded-1 ".concat(N),children:[(0,a.jsxs)("div",{className:"combo-img-bg position-relative",children:[(0,a.jsx)(c(),{href:b,className:"d-flex justify-content-center align-items-center product_img_bg",children:(0,a.jsx)("img",{src:y,width:224,height:172,className:"card-img-top",alt:n})}),r&&l&&r>l?(0,a.jsx)("div",{className:"position-absolute offer-token text-center",children:(0,a.jsxs)("span",{className:"text-white veri-align fw-semibold font-14 pt-2",children:["-",Math.round((r-l)/r*100),"%"]})}):""]}),(0,a.jsxs)(s.Z.Body,{className:"prod-card-body",children:[(0,a.jsx)(s.Z.Title,{className:"text-center text-capitalize font-18",children:(0,a.jsx)(c(),{href:"/product/".concat(t),className:"prod-title",title:n,children:n})}),T?(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)("del",{children:(0,a.jsxs)(s.Z.Text,{className:"text-center text-capitalize",children:["Price: ",r," Tk."]})}),(0,a.jsxs)(s.Z.Text,{className:"text-center pb-2 text-capitalize",children:["offer Price: ",l," Tk."]})]}):(0,a.jsxs)(s.Z.Text,{className:"text-center pb-2 text-capitalize",children:[(0,a.jsx)("br",{}),"Price: ",r," Tk."]}),Z&&(0,a.jsx)(s.Z.Text,{className:"text-center pb-2 text-capitalize",children:Z.map((e,t)=>(0,a.jsxs)(i.Fragment,{children:[e.variant.name,": ",e.variant_option.name,t!==Z.length-1&&", "]},t))}),(0,a.jsxs)("div",{className:"d-flex justify-content-center  position-relative",children:[(0,a.jsx)(c(),{href:"/product/".concat(t),className:"btn btn-success detail_btn rounded-0 text-capitalize px-2 font-14 me-2",children:"details"}),(0,a.jsx)("button",{type:"button",className:"btn btn-success detail_btn rounded-0 text-capitalize px-2 font-14",onClick:e=>C(e),children:"add to cart"})]})]})]})};t.Z=x},2609:function(e,t,n){"use strict";var a=n(5893);n(7294);var i=n(5301),r=n.n(i);let c=()=>(0,a.jsx)(r(),{color:"white",smooth:!0,className:"topbutton"});t.Z=c},9324:function(e,t,n){"use strict";n.r(t);var a=n(5893),i=n(7294),r=n(2609),c=n(1163),s=n(9222),l=n(965),o=n(1664),d=n.n(o),u=n(7076),m=n(3516),v=n(9008),h=n.n(v),f=n(4076);n(6486);let x=()=>{let e=(0,c.useRouter)(),{id:t}=e.query,[n,o]=(0,i.useState)({}),[v,x]=(0,i.useState)([]),[g,p]=(0,i.useState)([]),[j,_]=(0,i.useState)([]),[y,b]=(0,i.useState)({}),[N,w]=(0,i.useState)("");(0,i.useEffect)(()=>{(0,s.p)({paginate:"no"}).then(e=>{(null==e?void 0:e.data)&&x(e.data)})},[]),(0,i.useEffect)(()=>{t&&(0,s.j)(t).then(e=>{(null==e?void 0:e.data)&&o(e.data)})},[t]);let Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,l.cF)(e,t).then(e=>{(null==e?void 0:e.data)&&(p(e.data),_(e.data))})};(0,i.useEffect)(()=>{t&&Z(t,{paginate:"no"})},[t]),(0,i.useEffect)(()=>{N&&t&&Z(t,{page:N,paginate:"yes"})},[N]);let k=e=>{let t=g.filter(t=>{var n;return(null===(n=t.product.sub_category)||void 0===n?void 0:n.id)===e});_(t)};return(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)(h(),{children:(0,a.jsx)("title",{children:(0,m.qJ)((null==n?void 0:n.name)||"Category Products")})}),(0,a.jsxs)("section",{className:"all_product_accordion",children:[(null==n?void 0:n.lifestyle_image)&&(0,a.jsx)("div",{className:"product-banner",children:(0,a.jsx)("img",{src:(0,m.a$)("category-image/".concat(null==n?void 0:n.lifestyle_image)),alt:"category-image",className:"product-banner"})}),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"w-100 mb-5",children:(0,a.jsx)("h1",{className:"fw-bolder text-center mt-5 font-40 font-lato our-product",children:(null==n?void 0:n.name)&&n.name})}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-3 col-md-4 col-sm-5 mb-3",children:(0,a.jsx)("div",{className:"accordion_focus catagory_side_nv py-3 rounded-1",children:null==v?void 0:v.map((e,t)=>{var n;return(0,a.jsx)(f.Z,{className:"border-0 bg-transparent rounded-0 ",children:(0,a.jsxs)(f.Z.Item,{eventKey:"0",className:"bg-transparent rounded-0",children:[(0,a.jsx)(d(),{href:"/category/".concat(e.id),children:(0,a.jsx)(f.Z.Header,{children:e.name})}),(null==e?void 0:null===(n=e.sub_categories)||void 0===n?void 0:n.length)?(0,a.jsx)(f.Z.Body,{children:(0,a.jsx)("ul",{children:(null==e?void 0:e.sub_categories)&&e.sub_categories.map((e,t)=>(0,a.jsx)("li",{className:"pb-2 font-18",children:(0,a.jsx)("button",{onClick:t=>k(e.id),children:null==e?void 0:e.name})},t))})}):""]})},t)})})}),(0,a.jsx)("div",{className:"col-lg-9 col-md-8 col-sm-7",children:(0,a.jsx)("div",{className:"row",children:j.map((e,t)=>{var n,i,r,c,s;return(0,a.jsx)("div",{className:"col-lg-4 col-md-6 text-center mb-4",children:(0,a.jsx)(u.Z,{id:e.id,title:e.title,sku:e.sku,categoryName:null==e?void 0:null===(n=e.product)||void 0===n?void 0:null===(i=n.category)||void 0===i?void 0:i.name,subCategoryName:null==e?void 0:null===(r=e.product)||void 0===r?void 0:null===(c=r.sub_category)||void 0===c?void 0:c.name,salePrice:e.sale_price,offerPrice:e.offer_price,offerStart:e.offer_start,offerEnd:e.offer_end,variants:e.inventory_variants,imagePath:(null==e?void 0:e.image)?(0,m.a$)("inventory-image/".concat(null==e?void 0:e.image)):(0,m.a$)("product-image/".concat(null==e?void 0:null===(s=e.product)||void 0===s?void 0:s.image)),viewLink:"/product/".concat(e.id),cssClasses:"category-product"})},t)})})})]})]}),(0,a.jsx)(r.Z,{})]})]})};t.default=x},965:function(e,t,n){"use strict";n.d(t,{X2:function(){return l},cF:function(){return c},dH:function(){return o},wt:function(){return s}});var a=n(2085),i=n(3516),r=n(2920);let c=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{return await a.Z.get("/ecom/inventories/categories/".concat(e),{params:t})}catch(e){(0,i.B)(r.Am,"error",e)}},s=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{return await a.Z.get("/ecom/inventories/discounted",{params:e})}catch(e){(0,i.B)(r.Am,"error",e)}},l=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{return await a.Z.get("/ecom/inventories/search",{params:e})}catch(e){(0,i.B)(r.Am,"error",e)}},o=async function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{return await a.Z.get("/ecom/inventories/".concat(e,"/show"),{params:t})}catch(e){(0,i.B)(r.Am,"error",e)}}}},function(e){e.O(0,[5586,9774,2888,179],function(){return e(e.s=8809)}),_N_E=e.O()}]);