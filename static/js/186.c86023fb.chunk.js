"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(t,n,e){e.r(n);var r=e(439),a=e(791),c=e(689),u=e(515),s=e(184);n.default=function(){var t=(0,c.UO)().movieId,n=(0,a.useState)([]),e=(0,r.Z)(n,2),o=e[0],i=e[1];return(0,a.useEffect)((function(){(0,u.GM)(t).then(i)}),[t]),(0,s.jsxs)("div",{children:[(0,s.jsx)("ul",{children:o.map((function(t){var n=t.id,e=t.author,r=t.content;return(0,s.jsxs)("li",{children:[(0,s.jsxs)("h4",{children:["Author: ",e]}),(0,s.jsx)("p",{children:r})]},n)}))}),0===o.length&&(0,s.jsx)("p",{children:"We don't have any reviews for this movie."})]})}},515:function(t,n,e){e.d(n,{Ay:function(){return f},Df:function(){return o},GM:function(){return p},Pg:function(){return i},Wf:function(){return d}});var r=e(861),a=e(687),c=e.n(a),u=e(243),s="185de76fc9040ef87a50d3720e8d34c5";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/trending/all/day",t.next=3,u.Z.get("".concat("/trending/all/day","?api_key=").concat(s));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/movie/".concat(n),t.next=3,u.Z.get("".concat(e,"?api_key=").concat(s));case 3:return r=t.sent,t.abrupt("return",r.data);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/movie/".concat(n,"/credits"),t.next=3,u.Z.get("".concat(e,"?api_key=").concat(s));case 3:return r=t.sent,t.abrupt("return",r.data.cast);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/movie/".concat(n,"/reviews"),t.next=3,u.Z.get("".concat(e,"?api_key=").concat(s));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/search/movie?query=".concat(n,"&include_adult=false"),t.next=3,u.Z.get("".concat(e,"&api_key=").concat(s));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.c86023fb.chunk.js.map