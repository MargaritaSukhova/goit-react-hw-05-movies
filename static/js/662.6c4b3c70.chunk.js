"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[662],{662:function(n,r,e){e.r(r),e.d(r,{default:function(){return y}});var t,a,c,u,s,o,i=e(439),p=e(791),f=e(689),l=e(515),h=e(168),d=e(686),x=d.Z.ul(t||(t=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n"]))),Z=d.Z.li(a||(a=(0,h.Z)(["\n  flex-basis: calc((100% - 140px) / 8);\n  background-color: #ffffff;\n  box-shadow: 5px 3px 18px 0px rgba(64, 61, 61, 0.75);\n"]))),v=d.Z.img(c||(c=(0,h.Z)(["\n  width: 155px;\n  max-height: 232.5px;\n"]))),g=d.Z.div(u||(u=(0,h.Z)(["\n  padding: 8px;\n"]))),b=d.Z.p(s||(s=(0,h.Z)(["\n  font-size: 14px;\n  margin-bottom: 8px;\n  font-weight: 600;\n"]))),w=d.Z.p(o||(o=(0,h.Z)(["\n  font-size: 12px;\n  margin: 0px;\n  max-width: 139px;\n  overflow: hidden;\n  max-height: 14px;\n"]))),A=e(184),y=function(){var n=(0,f.UO)().movieId,r=(0,p.useState)([]),e=(0,i.Z)(r,2),t=e[0],a=e[1];return(0,p.useEffect)((function(){(0,l.Ay)(n).then(a)}),[n]),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(x,{children:t.map((function(n){var r=n.id,e=n.profile_path,t=n.name,a=n.character;return(0,A.jsxs)(Z,{children:[(0,A.jsx)(v,{src:e?"https://image.tmdb.org/t/p/w500".concat(e):"data:image/png;base64,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",alt:t}),(0,A.jsxs)(g,{children:[(0,A.jsx)(b,{children:t||"N/a"}),(0,A.jsxs)(w,{children:["Character: ",a||"n/a"]})]})]},r)}))}),0===t.length&&(0,A.jsx)("p",{children:"We don't have any information about actors."})]})}},515:function(n,r,e){e.d(r,{Ay:function(){return p},Df:function(){return o},GM:function(){return f},Pg:function(){return i},Wf:function(){return l}});var t=e(861),a=e(687),c=e.n(a),u=e(243),s="185de76fc9040ef87a50d3720e8d34c5";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var n=(0,t.Z)(c().mark((function n(){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/trending/all/day",n.next=3,u.Z.get("".concat("/trending/all/day","?api_key=").concat(s));case 3:return r=n.sent,n.abrupt("return",r.data.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(r),n.next=3,u.Z.get("".concat(e,"?api_key=").concat(s));case 3:return t=n.sent,n.abrupt("return",t.data);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(r,"/credits"),n.next=3,u.Z.get("".concat(e,"?api_key=").concat(s));case 3:return t=n.sent,n.abrupt("return",t.data.cast);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(r,"/reviews"),n.next=3,u.Z.get("".concat(e,"?api_key=").concat(s));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/search/movie?query=".concat(r,"&include_adult=false"),n.next=3,u.Z.get("".concat(e,"&api_key=").concat(s));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=662.6c4b3c70.chunk.js.map