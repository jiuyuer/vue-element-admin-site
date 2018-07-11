(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{187:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[t._m(0),e("p",[t._v("This feature is to respond to people's needs. In fact, I do not use this feature in company projects or personal projects. In the past, those traditional back-end frameworks often included this feature. Since most of the previous back-end projects were in the form of multiple pages, the navigation feature of the tags view still has some basic meaning. Most of them are based on the iframe.")]),e("p",[t._v("However, with the development of the times, the background projects are almost all spa (single page web application single page development), and it is obviously not appropriate to use the previous way to implement the navigation of the tags.")]),e("p",[t._v("So the current plan is:")]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),e("p",[t._v("The current tag-view maintains two arrays.")]),e("ul",[e("li",[t._v("visitedViews : The page the user has visited is a collection of tag arrays displayed in the tags bar navigation.")]),e("li",[t._v("cachedViews : The actual keep-alive route. You can set whether or not you want to cache the route by configuring the route with "),e("code",[t._v("meta.noCache")]),t._v(".\n"),e("router-link",{attrs:{to:"./router-and-nav.html"}},[t._v("Configuration Document")])],1)]),t._m(6),e("p",[t._v("Because keep-alive and router-view are strongly coupled, and it is not difficult to find the keep-alive include default is to match the component's name, it is necessary to look at the document and source code when writing the routing component corresponding to the routing router and route.")]),e("p",[t._v("Make sure the name of both is exactly the same. (Keep in mind that the naming of the name is as unique as possible. Remember not to duplicate the naming of some components, or to refer to the last memory overflow issue recursively.)")]),t._m(7),t._m(8),t._m(9),e("p",[t._v("Make sure that the two names are the same. Remember not to write duplicates or mistakes. By default, if you do not write name, it will not be cached.")]),e("p",[t._v("For details, see\n"),e("a",{attrs:{href:"https://github.com/vuejs/vue/issues/6938#issuecomment-345728620",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue"),e("OutboundLink")],1),t._v(".")]),t._m(10),t._m(11),e("ul",[e("li",[e("p",[t._v("Instead of using keep-alive's include, keep-alive caches all components directly. This way, it supports the aforementioned business situation.\nTo "),e("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/views/layout/components/AppMain.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/layout/components/AppMain.vueAppMain.vue"),e("OutboundLink")],1),t._v(" remove the "),e("code",[t._v("include")]),t._v(" related code. Of course, using keep-alive directly also has disadvantages. He can't dynamically delete the cache. You can only help it to set a maximum cache instance limit.\n"),e("a",{attrs:{href:"https://github.com/vuejs/vue/issues/6509",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue"),e("OutboundLink")],1)])]),t._m(12)]),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"tags-view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tags-view","aria-hidden":"true"}},[this._v("#")]),this._v(" Tags View")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Use a combination of "),a("code",[this._v("keep-alive")]),this._v(" and "),a("code",[this._v("router-view")]),this._v(" .")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Code: "),a("code",[this._v("@/layout/components/AppMain.vue")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("keep-alive")]),t._v(" "),e("span",{attrs:{class:"token attr-name"}},[t._v(":include")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("cachedViews"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-view")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-view")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("keep-alive")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("The actual action of the tags view navigation is equivalent to another nav display mode. In fact, it is a router-link, and click to jump to the corresponding page. Then we are listening to changes in the route "),a("code",[this._v("$route")]),this._v(" to determine if the current page needs to be reloaded or cached.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"visitedviews-cachedviews"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#visitedviews-cachedviews","aria-hidden":"true"}},[this._v("#")]),this._v(" visitedViews && cachedViews")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"precautions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#precautions","aria-hidden":"true"}},[this._v("#")]),this._v(" Precautions")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("DEMO:")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("//Define routes")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'create-form'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  component"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token operator"}},[t._v("=>")]),e("span",{attrs:{class:"token keyword"}},[t._v("import")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'@/views/form/create'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  name"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'createForm'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  meta"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" title"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'createForm'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" icon"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'table'")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("//The corresponding view of the route. such as: form/create")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"createForm"')]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"cache-is-not-suitable-for-the-scene"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache-is-not-suitable-for-the-scene","aria-hidden":"true"}},[this._v("#")]),this._v(" Cache is not suitable for the scene")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Currently cached solutions are not suitable for certain services, such as the article details page such as "),a("code",[this._v("/article/1")]),this._v("、"),a("code",[this._v("/article/2")]),this._v(", their routes are different but the corresponding components are the same, so their component name is the same, As mentioned earlier, the "),a("code",[this._v("keep-alive")]),this._v(" include can only be cached based on the component name, so this is a problem. There are currently two solutions:")])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("p",[this._v("Use a browser cache scheme such as localstorage, own to control the cache.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"remove"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove","aria-hidden":"true"}},[this._v("#")]),this._v(" Remove")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("In fact, keep-alive "),a("a",{attrs:{href:"(https://github.com/vuejs/vue/blob/dev/src/core/components/keep-alive.js)"}},[this._v("source code")]),this._v(" is not complicated, but the logic is still quite around. Before the vue author himself fixed a bug, he was not careful, he made two versions to fix it, so if there is no user who needs the navigation bar, it is recommended Remove this feature.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("First find\n"),a("code",[this._v("@/layout/components/AppMain.vue")]),this._v(" adn remove "),a("code",[this._v("keep-alive")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("section")]),t._v(" "),e("span",{attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app-main"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{attrs:{class:"token style-attr language-css"}},[e("span",{attrs:{class:"token attr-name"}},[t._v(" "),e("span",{attrs:{class:"token attr-name"}},[t._v("style")])]),e("span",{attrs:{class:"token punctuation"}},[t._v('="')]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token property"}},[t._v("min-height")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transition")]),t._v(" "),e("span",{attrs:{class:"token attr-name"}},[t._v("name")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fade-transform"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{attrs:{class:"token attr-name"}},[t._v("mode")]),e("span",{attrs:{class:"token attr-value"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("out-in"),e("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("router-view")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("router-view")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("transition")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("section")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v("Then remove the entire file "),e("code",[t._v("@/layout/components/TagsView.vue")]),t._v(", and "),e("code",[t._v("@/layout/components/index")]),t._v(" \\ 、 "),e("code",[t._v("@/layout/Layout.vue")]),t._v("。Finally remove "),e("code",[t._v("@/store/modules/tagsView")]),t._v(".")])}],!1,null,null,null);a.default=n.exports}}]);