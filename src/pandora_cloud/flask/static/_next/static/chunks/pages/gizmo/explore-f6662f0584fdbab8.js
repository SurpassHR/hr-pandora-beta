(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6107],{95182:function(e,n,r){var t=r(70331),i=r(67948);e.exports=function(e,n,r){return void 0===r&&(r=n,n=void 0),void 0!==r&&(r=(r=i(r))==r?r:0),void 0!==n&&(n=(n=i(n))==n?n:0),t(i(e),n,r)}},81181:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gizmo/explore",function(){return r(70456)}])},70456:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSP:function(){return K},default:function(){return R}});var t,i,o=r(35250),a=r(22830),s=r(81949),c=r(99805),l=r(78931),d=r(10664),u=r(66085),f=r(47428),h=r(6013),g=r(19841),m=r(61888),x=r(60554),v=r(70079),p=r(1454),b=r(36338),y=r(1821),k=r(39324),j=r(71209),w=r(28861),N=r(6038),C=r(63857);function _(e){for(var n=0,r=0;r<e.length;r++)n=(n<<5)-n+e.charCodeAt(r);return(n%360+360)%360}function S(e){var n,r,t=e.conversationTemplates,s=e.style,c=void 0===s?i.Grid2:s,l=e.numPerPage,d=void 0===l?24:l,u=Math.ceil(t.length/d),f=(0,a._)((0,v.useState)(0),2),h=f[0],g=f[1];switch(h>=u&&g(u-1),(0,v.useEffect)(function(){g(0)},[t]),c){case i.Grid2:n="grid grid-cols-2 gap-2 my-10",r=T;break;case i.Grid2Image:n="grid grid-cols-2 gap-2 my-10",r=M;break;case i.Grid1:n="grid grid-cols-1 gap-4 my-10",r=T;break;case i.Grid1Image:n="grid grid-cols-1 gap-4 my-10",r=A;break;default:(0,w.Z)(c)}return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:n,children:t.slice(h*d,(h+1)*d).map(function(e){return(0,o.jsx)(r,{conversationTemplate:e},e.id)})}),u>1&&(0,o.jsx)("div",{className:"flex justify-center gap-2",children:(0,o.jsx)(C.t,{currentPage:h,onChangeIndex:g,length:u})})]})}function M(e){return(0,o.jsx)(T,(0,j._)((0,k._)({},e),{showImage:!0}))}function T(e){var n=e.conversationTemplate,r=e.showImage,t=_(n.id),i=(0,x.useRouter)(),a=(0,l.ec)(l.F_.accountUserId),s=(null==n?void 0:n.owner_id)===a,c=(0,u.xj)(null==n?void 0:n.id),d=function(){i.push((0,b.l1)(n.id),void 0,{shallow:!0})};return(0,o.jsxs)("div",{className:"flex flex-col gap-2 rounded-lg border border-transparent p-2 hover:border-gray-100 hover:bg-gray-50 dark:hover:border-gray-800 dark:hover:bg-gray-700",children:[r&&(0,o.jsx)("div",{className:"h-36 w-full overflow-hidden text-clip rounded-lg p-4 text-4xl hover:cursor-pointer",onClick:d,style:{background:"hsl(".concat(t,", 40%, 80%) ").concat(null!=n.profile_pic_permalink?"url(".concat(n.profile_pic_permalink,") center/cover no-repeat"):""),color:"hsl(".concat((t+80)%360,", 90%, 80%)")},children:n.name}),(0,o.jsxs)("div",{className:"flex gap-2 hover:cursor-pointer",onClick:d,children:[(0,o.jsx)(N.Py,{conversationTemplate:n,className:"flex-shrink-0 !rounded-lg border border-gray-200 dark:border-gray-800",iconSize:"large"}),(0,o.jsxs)("div",{className:"flex flex-col leading-tight hover:cursor-pointer",children:[(0,o.jsx)("span",{className:"font-semibold",children:n.name}),(0,o.jsx)("span",{className:"overflow-hidden text-ellipsis text-sm line-clamp-2 hover:cursor-pointer",children:n.description}),(0,o.jsxs)("div",{className:"item-end flex gap-1.5 text-ellipsis text-sm text-gray-500",children:[(0,o.jsxs)("div",{children:["By ",n.author_name]}),(0,o.jsx)("div",{children:"\xb7"}),(0,o.jsxs)("div",{className:"flex items-end",children:[(0,o.jsx)(p.EQ9,{className:"m-0.5"}),"1.3m"]}),s&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{children:"\xb7"}),(0,o.jsx)("button",{onClick:function(e){e.stopPropagation(),i.push(c,void 0,{shallow:!0})},className:"hover:underline",children:"Edit"})]})]})]})]})]})}function A(e){var n=e.conversationTemplate,r=_(n.id),t=(0,x.useRouter)();return(0,o.jsx)("div",{className:"dark:border-900 relative flex h-44 w-full flex-col rounded-lg border border-gray-200",style:{background:"hsl(".concat(r,", 40%, 80%)")},onClick:function(){return t.push((0,b.l1)(n.id),void 0,{shallow:!0})},children:(0,o.jsxs)("div",{className:"absolute left-4 top-4 flex flex-col",style:{color:"hsl(".concat(r,", 80%, 20%)")},children:[(0,o.jsx)("span",{className:"text-2xl font-bold",children:n.name}),(0,o.jsx)("span",{children:n.description})]})})}(t=i||(i={})).Grid2="grid-2",t.Grid2Image="grid-2-image",t.Grid1="grid-1",t.Grid1Image="grid-1-image";var I=r(67);function Z(){var e=(0,l.$T)(),n=(0,l.ec)(l.F_.businessWorkspace),r=null==n?void 0:n.id,t=(0,x.useRouter)();return((0,d.yx)({resetThreadAction:function(){t.push("/")}}),e)?null:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(z,{workspaceId:r}),(0,o.jsxs)("div",{className:"mx-auto max-w-3xl py-12",children:[(0,o.jsx)(B,{workspaceId:r}),(0,o.jsx)(L,{workspaceId:r})]})]})}function z(e){var n=e.workspaceId,r=(0,u.J8)(),t=(0,x.useRouter)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(I.m,{className:"absolute left-3 top-3 z-50"}),(0,o.jsxs)(c.QT,{className:"mx-2 gap-2",children:[(0,o.jsx)("div",{className:"h-1 w-8"}),(0,o.jsx)(P,{workspaceId:n,className:"absolute left-1/2 w-1/2 -translate-x-1/2"}),(0,o.jsxs)("div",{className:"flex justify-between gap-2 sm:gap-6",children:[(0,o.jsx)("button",{className:"text-md",onClick:function(){return t.push(r,void 0,{shallow:!0})},children:"Create"}),(0,o.jsx)(p.A8q,{size:20,className:"flex-shrink-0"}),(0,o.jsxs)(f.fC,{children:[(0,o.jsx)(f.xz,{children:(0,o.jsx)(p.K9M,{size:20})}),(0,o.jsx)(f.VY,{className:"min-w-10 rounded-lg border border-gray-100 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900",children:(0,o.jsx)(c.UA,{children:"..."})})]})]})]})]})}function P(e){var n=e.workspaceId,r=e.className,t=(0,a._)((0,v.useState)(""),2),i=t[0],s=t[1];return(0,o.jsxs)(h.fC,{open:i.length>0,children:[(0,o.jsx)(h.xz,{className:(0,g.default)("flex justify-center",r),children:(0,o.jsxs)("div",{className:"flex w-full items-center rounded-xl border border-gray-200 bg-gray-50 p-2 dark:border-gray-900 dark:bg-gray-700",children:[(0,o.jsx)(p.jRj,{className:"mr-2 hidden flex-shrink-0 text-gray-500 sm:block",size:20}),(0,o.jsx)("input",{className:"flex-grow overflow-hidden bg-transparent font-medium outline-0",placeholder:"Search",value:i,onChange:function(e){return s(e.target.value)}})]})}),(0,o.jsx)(h.h_,{children:(0,o.jsx)(h.VY,{className:"PopoverContent w-96 rounded-lg border border-gray-200 bg-white/95 p-4 dark:border-gray-900 dark:bg-gray-900/95",sideOffset:5,onOpenAutoFocus:function(e){return e.preventDefault()},onCloseAutoFocus:function(e){return e.preventDefault()},children:(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"flex justify-end",children:(0,o.jsx)(p.q5L,{className:"text-gray-500",size:20,onClick:function(){return s("")}})}),(0,o.jsx)(F,{workspaceId:n,query:i})]})})})]})}function F(e){var n,r,t=e.workspaceId,a=e.query,c=(0,b.ki)(t),l=c.data,d=c.isLoading,u=(0,b.Ym)(t),f=u.data,h=u.isLoading;if(d||h)return(0,o.jsx)("div",{children:(0,o.jsx)(y.Z,{})});var g=(0,s._)(null!==(n=null==f?void 0:f.items.filter(function(e){return null==e.published_at}))&&void 0!==n?n:[]).concat((0,s._)(null!==(r=null==l?void 0:l.items)&&void 0!==r?r:[]));return(0,o.jsx)(S,{conversationTemplates:g.filter(function(e){return e.name.toLowerCase().includes(a)}),style:i.Grid1,numPerPage:5})}function B(e){var n=e.workspaceId,r=(0,b.Ym)(n),t=r.data;return r.isLoading?(0,o.jsx)(y.Z,{}):null==t?null:(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"text-2xl font-bold",children:"My GPTs"}),(0,o.jsx)(S,{conversationTemplates:null==t?void 0:t.items})]})}function L(e){var n,r=e.workspaceId,t=(0,b.ki)(r),a=t.data,s=t.isLoading,c=(0,l.ec)(l.F_.businessWorkspace);if(s)return(0,o.jsx)(y.Z,{});if(null==a)return null;var d=(0,m.sortBy)(a.items,function(e){return null==e.profile_pic_permalink?1:0});return(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:"text-2xl font-bold",children:["Made at ",null!==(n=null==c?void 0:c.name)&&void 0!==n?n:"Workspace"]}),(0,o.jsx)(S,{conversationTemplates:d,style:i.Grid2})]})}var E=r(82277),K=!0;function R(){return(0,o.jsx)(E.Z,{showNavigation:!1,renderMobileHeaderRightContent:null,children:(0,o.jsx)(Z,{})})}},50744:function(e,n,r){"use strict";var t=r(35250),i=r(55344),o=r.n(i);r(70079);var a=function(e){var n=e.children;return(0,t.jsx)(t.Fragment,{children:n})};n.Z=o()(function(){return Promise.resolve(a)},{ssr:!1})},63857:function(e,n,r){"use strict";r.d(n,{h:function(){return m},t:function(){return b}});var t=r(4337),i=r(35250),o=r(95182),a=r.n(o),s=r(1454),c=r(21389);function l(){var e=(0,t._)(["text-xs flex items-center justify-center gap-1"]);return l=function(){return e},e}function d(){var e=(0,t._)(["dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400"]);return d=function(){return e},e}function u(){var e=(0,t._)(["flex-grow flex-shrink-0 tabular-nums"]);return u=function(){return e},e}function f(){var e=(0,t._)(["text-xs inline-flex bg-token-surface-secondary h-8 border rounded border-token-border-medium"]);return f=function(){return e},e}function h(){var e=(0,t._)(["text-token-text-secondary disabled:text-token-border-medium w-8 flex items-center justify-center hover:bg-token-surface-tertiary"]);return h=function(){return e},e}function g(){var e=(0,t._)(["text-token-text-tertiary px-2 flex items-center font-mono tracking-widest"]);return g=function(){return e},e}function m(e){var n=e.currentPage,r=e.onChangeIndex,t=e.length,o=e.className,c=function(e){r(a()(n+e,0,t-1))};return(0,i.jsxs)(x,{className:o,children:[(0,i.jsx)(v,{onClick:function(){return c(-1)},disabled:0===n,children:(0,i.jsx)(s.YFh,{className:"icon-xs"})}),(0,i.jsx)(p,{children:"".concat(n+1," / ").concat(t)}),(0,i.jsx)(v,{onClick:function(){return c(1)},disabled:n===t-1,children:(0,i.jsx)(s.Tfp,{className:"icon-xs"})})]})}var x=c.Z.div(l()),v=c.Z.button(d()),p=c.Z.span(u());function b(e){var n=e.currentPage,r=e.onChangeIndex,t=e.length,o=e.className,c=function(e){r(a()(n+e,0,t-1))};return(0,i.jsxs)(y,{className:o,children:[(0,i.jsx)(k,{onClick:function(){return c(-1)},disabled:0===n,children:(0,i.jsx)(s.YFh,{className:"icon-sm"})}),(0,i.jsx)(j,{children:"".concat(n+1,"/").concat(t)}),(0,i.jsx)(k,{onClick:function(){return c(1)},disabled:n===t-1,children:(0,i.jsx)(s.Tfp,{className:"icon-sm"})})]})}var y=c.Z.div(f()),k=c.Z.button(h()),j=c.Z.span(g())},82277:function(e,n,r){"use strict";r.d(n,{Z:function(){return l}});var t=r(35250),i=r(70079),o=r(46020),a=r(33669),s=r(50744),c=r(13090);function l(e){var n=e.children,r=e.showNavigation,d=e.renderTitle,u=e.renderMobileHeaderRightContent,f=e.renderSidebar,h=(0,a.w$)(),g=[],m=null;return i.Children.forEach(n,function(e){i.isValidElement(e)&&(e.type===l.Sidebars?m=e:g.push(e))}),(0,t.jsxs)("div",{className:"relative z-0 flex h-full w-full overflow-hidden",children:[h&&r&&null!=f?(0,t.jsx)(s.Z,{children:f}):null,(0,t.jsxs)("div",{className:"relative flex h-full max-w-full flex-1 flex-col overflow-hidden",children:[!h&&r&&(0,t.jsx)(s.Z,{children:(0,t.jsx)(c.Vs,{onClickOpenSidebar:function(){return o.vm.toggleActiveSidebar("mobile-nav")},renderTitle:d,renderSidebar:f,renderRightContent:u})}),(0,t.jsx)("main",{className:"relative h-full w-full flex-1 overflow-auto transition-width",children:g})]}),m]})}l.Sidebars=function(e){var n=e.children;return(0,t.jsx)(t.Fragment,{children:n})}},13090:function(e,n,r){"use strict";r.d(n,{H:function(){return _},MP:function(){return N},Vs:function(){return M},js:function(){return C},l6:function(){return T}});var t=r(39324),i=r(70216),o=r(35250),a=r(98359),s=r(20525),c=r(32148),l=r(19841),d=r(97296),u=r(70737),f=r(60554),h=r(70079),g=r(1454),m=r(70671),x=r(32004),v=r(94968),p=r(46020),b=r(33669),y=r(42271),k=r(45635),j=r(20522),w=r(15329);function N(e){var n=e.onClick,r=e.className,a=(0,i._)(e,["onClick","className"]);return(0,o.jsx)(w.zV,(0,t._)({onClick:n,className:(0,l.default)(r,"flex-grow overflow-hidden")},a))}function C(e){var n=e.onClick,r=(0,i._)(e,["onClick"]);return(0,o.jsx)("button",(0,t._)({type:"button",className:"px-3",onClick:n},r))}function _(){var e=(0,m.Z)();return(0,b.w$)()?(0,o.jsx)(k.u,{side:"right",label:e.formatMessage(A.closeSidebar),children:(0,o.jsxs)(w.zV,{onClick:p.vm.toggleDesktopNavCollapsed,className:"w-11 flex-shrink-0 items-center justify-center bg-white dark:bg-transparent",children:[(0,o.jsx)(g.iYc,{className:"icon-sm"}),(0,o.jsx)(c.f,{children:(0,o.jsx)(x.Z,(0,t._)({},A.closeSidebar))})]})}):null}var S=function(e){var n=e.onClose,r=e.sidebarOpen,i=e.children;return(0,o.jsx)(a.u.Root,{show:r,as:h.Fragment,children:(0,o.jsxs)(s.V,{as:"div",className:"dark relative",onClose:n,children:[(0,o.jsx)(a.u.Child,{as:h.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,o.jsx)("div",{className:"fixed inset-0 bg-gray-600 bg-opacity-75"})}),(0,o.jsxs)("div",{className:"fixed inset-0 flex",children:[(0,o.jsx)(a.u.Child,{as:h.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:(0,o.jsxs)(s.V.Panel,{className:"relative flex w-full max-w-[260px] flex-1 flex-col bg-gray-900 gizmo:bg-gray-800",children:[(0,o.jsx)(a.u.Child,{as:h.Fragment,enter:"ease-in-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,o.jsx)("div",{className:"absolute right-0 top-0 -mr-12 pt-2",children:(0,o.jsxs)("button",{type:"button",className:"ml-1 flex h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",onClick:n,children:[(0,o.jsx)("span",{className:"sr-only",children:(0,o.jsx)(x.Z,(0,t._)({},A.closeSidebar))}),(0,o.jsx)(g.q5L,{className:"icon-lg text-white","aria-hidden":"true"})]})})}),i]})}),(0,o.jsx)("div",{className:"w-14 flex-shrink-0"})]})]})})},M=function(e){var n=e.onClickOpenSidebar,r=e.renderTitle,i=e.renderSidebar,a=e.renderRightContent,s=(0,p.tN)(function(e){return e.activeSidebar}),c=(0,f.useRouter)().asPath;return(0,h.useEffect)(function(){"mobile-nav"===s&&p.vm.setActiveSidebar(!1)},[c]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden",children:[(0,o.jsxs)("button",{type:"button",className:"-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white",onClick:n,children:[(0,o.jsx)("span",{className:"sr-only",children:(0,o.jsx)(x.Z,(0,t._)({},A.openSidebar))}),(0,o.jsx)(g.cur,{"aria-hidden":"true",className:"icon-lg"})]}),(0,o.jsx)("h1",{className:"flex-1 text-center text-base font-normal",children:r}),a]}),(0,o.jsx)(S,{onClose:function(){p.vm.setActiveSidebar(!1)},sidebarOpen:"mobile-nav"===s,children:i})]})};function T(e){var n=e.children,r=(0,m.Z)(),t=(0,h.useRef)(null),i=(0,p.tN)(function(e){return e.isDesktopNavCollapsed}),a=(0,j.Ml)(),s=(0,j.bU)(function(e){return e.displayVariant});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.E.div,{className:(0,l.default)("h-full flex-shrink-0 overflow-x-hidden",a?"border-r border-gray-100 bg-gray-50 gizmo:bg-white dark:border-0 dark:bg-gray-800 gizmo:dark:border-r gizmo:dark:border-token-border-light":"dark bg-gray-900"),ref:t,initial:!1,animate:{width:i?0:"260px",transition:{duration:.165,ease:"easeOut"}},onAnimationStart:function(){t.current&&(t.current.style.visibility="visible")},onAnimationComplete:function(){t.current&&i&&(t.current.style.visibility="hidden")},children:(0,o.jsx)("div",{className:"h-full w-[260px]",children:(0,o.jsx)("div",{className:"flex h-full min-h-0 flex-col ",children:n})})}),(0,o.jsx)(u.M,{initial:!1,children:i&&(0,o.jsx)(d.E.div,{className:(0,l.default)("absolute z-40 hidden md:inline-block",a&&s!==j.Mo.SidebarList?"bottom-1 left-1":"left-2 top-2"),initial:{opacity:0},animate:{opacity:1,transition:{duration:.165,ease:"easeIn"}},children:(0,o.jsx)(k.u,{side:"right",label:r.formatMessage(A.openSidebar),children:(0,o.jsx)(y.O,{onClick:p.vm.toggleDesktopNavCollapsed,"aria-label":r.formatMessage(A.openSidebar),children:(0,o.jsx)(g.iYc,{className:"icon-sm text-token-text-primary gizmo:text-token-text-tertiary gizmo:hover:text-token-text-secondary"})})})})})]})}var A=(0,v.vU)({closeSidebar:{id:"navigation.closeSidebar",defaultMessage:"Close sidebar",description:"Close sidebar button label"},openSidebar:{id:"navigation.openSidebar",defaultMessage:"Open sidebar",description:"Open sidebar button label"}})},42271:function(e,n,r){"use strict";r.d(n,{O:function(){return s},h:function(){return c}});var t=r(4337),i=r(21389);function o(){var e=(0,t._)(["flex p-3 items-center gap-3 transition-colors duration-200 text-gray-600 dark:text-gray-200 cursor-pointer text-sm rounded-md bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 h-11"]);return o=function(){return e},e}function a(){var e=(0,t._)(["h-11 w-11"]);return a=function(){return e},e}var s=i.Z.button(o()),c=i.Z.div(a())},67:function(e,n,r){"use strict";r.d(n,{X:function(){return l},m:function(){return d}});var t=r(4337),i=r(35250),o=r(19841),a=r(9181),s=r.n(a);function c(){var e=(0,t._)(["rounded-full bg-black dark:bg-gray-100"]);return c=function(){return e},e}var l=r(21389).Z.div(c());function d(e){var n=e.className;return(0,i.jsx)(s(),{href:"/",shallow:!0,className:(0,o.default)("block h-8 w-8 cursor-pointer",n),children:(0,i.jsx)(l,{className:"h-full w-full"})})}},99805:function(e,n,r){"use strict";r.d(n,{QT:function(){return g},UA:function(){return m},i1:function(){return h},y4:function(){return x}});var t=r(39324),i=r(71209),o=r(4337),a=r(35250),s=r(47428),c=r(19841),l=r(21389),d=r(67273),u=r(45635);function f(){var e=(0,o._)(["sticky top-0 flex items-center justify-between z-10 h-14 bg-white/95 p-2 font-semibold dark:bg-gray-800/90 ",""]);return f=function(){return e},e}function h(e){var n=e.children,r=e.className,t=e.size;return(0,a.jsxs)("div",{className:(0,c.default)("relative flex-shrink-0 overflow-hidden","small"===t&&"rounded-sm","medium"===t&&"rounded-md","large"===t&&"rounded-lg","cover"===t&&"rounded-[38px]",r),children:[n,(0,a.jsx)("div",{className:(0,c.default)("absolute inset-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]","small"===t&&"rounded-sm","medium"===t&&"rounded-md","large"===t&&"rounded-lg","cover"===t&&"rounded-[38px]")})]})}var g=l.Z.div(f(),function(e){return e.$spaceForCollapsedSidebar&&"pl-12"});function m(e){return(0,a.jsx)(s.ck,(0,i._)((0,t._)({},e),{className:(0,c.default)("flex cursor-pointer gap-2 px-5 py-3 text-sm hover:bg-gray-100 focus:ring-0 dark:hover:bg-gray-800",e.disabled&&"pointer-events-none opacity-50",e.className)}))}function x(e){var n=(0,a.jsx)(d.z,(0,i._)((0,t._)({color:"neutral",size:"small"},e),{className:(0,c.default)("h-10 whitespace-nowrap rounded-lg border border-token-border-medium px-3 py-2 shadow-[0_1px_1px_0_rgba(0,0,0,0.08)] focus:ring-0",e.className)}));return null!=e.label?(0,a.jsx)(u.u,{side:"left",label:e.label,className:"h-fit w-fit",children:n}):n}},15329:function(e,n,r){"use strict";r.d(n,{R:function(){return x},Vq:function(){return v},ZB:function(){return g},ZP:function(){return h},zV:function(){return m}});var t=r(4337),i=r(35250),o=r(7813),a=r(19841),s=r(21389);function c(){var e=(0,t._)(["p-2 rounded-md hover:bg-black/10 hover:dark:bg-white/10 cursor-pointer"]);return c=function(){return e},e}function l(){var e=(0,t._)(["flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm"]);return l=function(){return e},e}function d(){var e=(0,t._)(["rounded-md border dark:border-white/20 gizmo:min-h-0 hover:bg-gray-500/10 h-11 gizmo:h-10 gizmo:rounded-lg gizmo:border-[rgba(0,0,0,0.1)]"]);return d=function(){return e},e}function u(){var e=(0,t._)(["my-1.5 h-px dark:bg-white/20 bg-black/20"]);return u=function(){return e},e}function f(){var e=(0,t._)(["",""]);return f=function(){return e},e}function h(e){var n=e.onClick,r=e.href,t=e.target,s=e.children;return(0,i.jsx)(o.v.Item,{children:function(e){var o=e.active;return(0,i.jsx)(g,{as:void 0!==r?"a":"button",onClick:n,href:r,target:t,className:(0,a.default)(o?"bg-gray-100 dark:bg-gray-800":"hover:bg-gray-100 dark:hover:bg-gray-800"),children:s})}})}s.Z.a(c());var g=s.Z.a(l()),m=(0,s.Z)(g)(d()),x=s.Z.div(u()),v=(0,s.Z)(g)(f(),function(e){return e.$active?"bg-gray-100 dark:bg-gray-800":"hover:bg-gray-100 dark:hover:bg-gray-800"})},640:function(e,n,r){"use strict";r.d(n,{V:function(){return a}});var t=r(51217),i=r(36560),o=r.n(i),a=function(){function e(){(0,t._)(this,e),this.emitter=new(o()),this.emitter.setMaxListeners(1e3)}var n=e.prototype;return n.on=function(e,n){this.emitter.on(e,n)},n.off=function(e,n){this.emitter.off(e,n)},n.publish=function(e){this.emitter.emit(e.kind,e),this.emitter.emit("anyEvent",e)},e}()},10664:function(e,n,r){"use strict";r.d(n,{n:function(){return z},A3:function(){return I},yx:function(){return L},JS:function(){return B}});var t,i,o,a=r(96237),s=r(39324),c=r(81949),l=r(15858),d=r(18719),u=r(73426),f=r(11084),h=r(82534),g=r(61888),m=r(70079),x=r(94968),v=r(95954),p=r(50253),b=r(88798),y=r(32877),k=r(37469),j=r(46020),w=r(78931),N=r(640),C=r(52787),_=r(45248),S=m.useLayoutEffect,M=RegExp("```.*?\\n([\\s\\S]+?)\\n?```[^`]*$","gms");(t=i||(i={})).Core="Core",t.Chat="Chat",t.Settings="Settings";var T=(0,s._)({Mod:"mod",Comma:","},l.s),A=(o={},(0,a._)(o,T.Mod,/Mac|iPod|iPhone|iPad/.test(window.navigator.platform)?"⌘":"Ctrl"),(0,a._)(o,T.Comma,","),(0,a._)(o,T.Enter,"⏎"),(0,a._)(o,T.Escape,"Esc"),(0,a._)(o,T.ArrowUp,"↑"),(0,a._)(o,T.ArrowDown,"↓"),(0,a._)(o,T.ArrowLeft,"←"),(0,a._)(o,T.ArrowRight,"→"),(0,a._)(o,T.Backspace,"⌫"),(0,a._)(o,T.Delete,"⌦"),(0,a._)(o,T.Tab,"⇥"),(0,a._)(o,T.Control,"Ctrl"),(0,a._)(o,T.Shift,"Shift"),o),I=function(e){var n;return e.map(function(e){return null!==(n=A[e])&&void 0!==n?n:e})},Z=(0,x.vU)({newChat:{id:"keyboardActions.newChat",defaultMessage:"Open new chat",description:"Keyboard shortcut to open a new chat"},focusPromptTextarea:{id:"keyboardActions.focusPromptTextarea",defaultMessage:"Focus chat input",description:"Keyboard shortcut to focus the chat input"},copyLastCodeBlock:{id:"keyboardActions.copyLastCodeBlock",defaultMessage:"Copy last code block",description:"Keyboard shortcut to copy the last code block in the chat"},copyLastResponse:{id:"keyboardActions.copyLastResponse",defaultMessage:"Copy last response",description:"Keyboard shortcut to copy the last response in the chat"},toggleCustomInstructions:{id:"keyboardActions.toggleCustomInstructions",defaultMessage:"Set custom instructions",description:"Keyboard shortcut to toggle custom instructions"},navigationToggle:{id:"keyboardActions.navigationToggle",defaultMessage:"Toggle sidebar",description:"Keyboard shortcut to toggle navigation"},deleteChat:{id:"keyboardActions.deleteChat",defaultMessage:"Delete chat",description:"Keyboard shortcut to delete chat"},toggleKeyboardActions:{id:"keyboardActions.toggleKeyboardActions",defaultMessage:"Show shortcuts",description:"Keyboard shortcut to toggle keyboard actions"}}),z=new N.V,P=function(e){var n=e.resetThreadAction,r=e.clientThreadId,t=e.features;return[{key:"newChat",action:n||g.noop,actionMessageDescriptor:Z.newChat,group:i.Core,keyboardBinding:[T.Mod,T.Shift,"o"],altKeyboardBindings:[[T.Mod,"k"]]},{key:"focusPromptTextarea",action:p.go,actionMessageDescriptor:Z.focusPromptTextarea,group:i.Chat,keyboardBinding:[T.Shift,T.Escape]},{key:"copyLastCodeBlock",action:function(){if(null!=r)for(var e=k.tQ.getThreadCurrentLeafId(r),n=k.tQ.getThreadConversationTurns(r,e),t=n.length-1;t>=0;t--){var i=n[t].messages.reduce(function(e,n){return null==n.err&&n.message.author.role===v.uU.Assistant&&"all"===n.message.recipient?e+(e?"\n\n":"")+(0,C.RR)(n.message):e},""),o=(0,c._)(i.matchAll(M)),a=o.length?o[o.length-1][1]:null;if(null!=a){(0,f.S)(a).then(function(){b.m.success("Copied code block to clipboard")});break}}},actionMessageDescriptor:Z.copyLastCodeBlock,group:i.Chat,keyboardBinding:[T.Mod,T.Shift,";"],altKeyboardBindings:[[T.Mod,T.Shift,":"]]},{key:"copyLastResponse",action:function(){null!=r&&k.tQ.copyLastMessageToClipboard(r,"keyboard").then(function(){b.m.success("Last response copied to clipboard")})},actionMessageDescriptor:Z.copyLastResponse,group:i.Chat,keyboardBinding:[T.Mod,T.Shift,"c"]},{key:"toggleCustomInstructions",action:function(){return j.vm.toggleModal(j.B.UserContext)},actionMessageDescriptor:Z.toggleCustomInstructions,group:i.Settings,keyboardBinding:[T.Mod,T.Shift,"i"],enabled:t.has(y.Rw)||t.has(y.uo)},{key:"navigationToggle",action:function(){return j.vm.toggleDesktopNavCollapsed()},actionMessageDescriptor:Z.navigationToggle,group:i.Core,keyboardBinding:[T.Mod,T.Shift,"s"]},{key:"deleteChat",action:function(){z.publish({kind:"deleteChat"})},actionMessageDescriptor:Z.deleteChat,group:i.Chat,keyboardBinding:[T.Mod,T.Shift,T.Backspace],altKeyboardBindings:[[T.Mod,T.Shift,T.Delete]]},{key:"toggleKeyboardActions",action:function(){return j.vm.toggleModal(j.B.KeyboardActions)},actionMessageDescriptor:Z.toggleKeyboardActions,group:i.Settings,keyboardBinding:[T.Mod,"/"]}]},F=function(e){var n,r,t,i=(0,w.hz)().has(y.rk);return n=function(e){d.A.logEvent(u.M.keyboardShortcut,{keyboardActionKey:e.key}),h.U.addAction("chatgpt_keyboard_shortcut",{keyboardActionKey:e.key})},r={enabled:i},t=e.map(function(e){var n=e.keyboardBinding.join("+");if(e.altKeyboardBindings){n=[n];var r=e.altKeyboardBindings.map(function(e){return e.join("+")});n=n.concat(r)}return(0,_.ZP)(n,{byKey:!0})}),void S(function(){if((null==r?void 0:r.enabled)!==!1){var i=function(r){if(!r.repeat)for(var i=0;i<t.length;i++)t[i](r)&&(void 0===e[i].enabled||e[i].enabled)&&(r.preventDefault(),n(e[i]),e[i].action())},o=function(e){void 0!==e.key&&i(e)},a=document;return a.addEventListener("keydown",o),function(){a.removeEventListener("keydown",o)}}},[e,r])},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.resetThreadAction,r=e.clientThreadId,t=(0,w.hz)();return(0,m.useMemo)(function(){return P({features:t,resetThreadAction:n,clientThreadId:r}).filter(function(e){var n=e.enabled;return void 0===n||n})},[r,t,n])},L=function(e){F(B({resetThreadAction:e.resetThreadAction,clientThreadId:e.clientThreadId}))}}},function(e){e.O(0,[2104,1438,9774,2888,179],function(){return e(e.s=81181)}),_N_E=e.O()}]);