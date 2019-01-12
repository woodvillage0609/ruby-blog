"use strict";!function(){function e(e){CKEDITOR.tools.extend(this,e),this.queue=[],this.init?this.init(CKEDITOR.tools.bind(function(){for(var e;e=this.queue.pop();)e.call(this);this.ready=!0},this)):this.ready=!0}function t(e){function t(e){for(var t,i=[],n=e.children,a=n.length-1;a>=0;a--)t=n[a],t.type==CKEDITOR.NODE_TEXT&&t.value.match(h)||i.push(t);return i}var n=e.config.codeSnippet_codeClass,a=/\r?\n/g,s=new CKEDITOR.dom.element("textarea"),o=e.lang.codesnippet;e.widgets.add("codeSnippet",{allowedContent:"pre; code(language-*)",requiredContent:"pre",styleableElements:"pre",template:'<pre><code class="'+n+'"></code></pre>',dialog:"codeSnippet",pathName:o.pathName,mask:!0,parts:{pre:"pre",code:"code"},highlight:function(){var t=this,n=this.data,s=function(e){t.parts.code.setHtml(i?e:e.replace(a,"<br>"))};s(CKEDITOR.tools.htmlEncode(n.code)),e._.codesnippet.highlighter.highlight(n.code,n.lang,function(t){e.fire("lockSnapshot"),s(t),e.fire("unlockSnapshot")})},data:function(){var e=this.data,t=this.oldData;e.code&&this.parts.code.setHtml(CKEDITOR.tools.htmlEncode(e.code)),t&&e.lang!=t.lang&&this.parts.code.removeClass("language-"+t.lang),e.lang&&(this.parts.code.addClass("language-"+e.lang),this.highlight()),this.oldData=CKEDITOR.tools.copy(e)},upcast:function(i,a){if("pre"==i.name){var o,h=t(i);if(1==h.length&&"code"==(o=h[0]).name&&1==o.children.length&&o.children[0].type==CKEDITOR.NODE_TEXT){var l=e._.codesnippet.langsRegex.exec(o.attributes["class"]);return l&&(a.lang=l[1]),s.setHtml(o.getHtml()),a.code=s.getValue(),o.addClass(n),i}}},downcast:function(e){var t=e.getFirst("code");return t.children.length=0,t.removeClass(n),t.add(new CKEDITOR.htmlParser.text(CKEDITOR.tools.htmlEncode(this.data.code))),e}});var h=/^[\s\n\r]*$/}var i=!CKEDITOR.env.ie||CKEDITOR.env.version>8;CKEDITOR.plugins.add("codesnippet",{requires:"widget,dialog",lang:"ar,az,bg,ca,cs,da,de,de-ch,el,en,en-gb,eo,es,es-mx,et,eu,fa,fi,fr,fr-ca,gl,he,hr,hu,id,it,ja,km,ko,ku,lt,lv,nb,nl,no,oc,pl,pt,pt-br,ro,ru,sk,sl,sq,sv,th,tr,tt,ug,uk,vi,zh,zh-cn",icons:"codesnippet",hidpi:!0,beforeInit:function(e){e._.codesnippet={},this.setHighlighter=function(t){e._.codesnippet.highlighter=t;var i=e._.codesnippet.langs=e.config.codeSnippet_languages||t.languages;e._.codesnippet.langsRegex=new RegExp("(?:^|\\s)language-("+CKEDITOR.tools.objectKeys(i).join("|")+")(?:\\s|$)")}},onLoad:function(){CKEDITOR.dialog.add("codeSnippet",this.path+"dialogs/codesnippet.js")},init:function(e){e.ui.addButton&&e.ui.addButton("CodeSnippet",{label:e.lang.codesnippet.button,command:"codeSnippet",toolbar:"insert,10"})},afterInit:function(e){var n=this.path;if(t(e),!e._.codesnippet.highlighter){var a=new CKEDITOR.plugins.codesnippet.highlighter({languages:{apache:"Apache",bash:"Bash",coffeescript:"CoffeeScript",cpp:"C++",cs:"C#",css:"CSS",diff:"Diff",html:"HTML",http:"HTTP",ini:"INI",java:"Java",javascript:"JavaScript",json:"JSON",makefile:"Makefile",markdown:"Markdown",nginx:"Nginx",objectivec:"Objective-C",perl:"Perl",php:"PHP",python:"Python",ruby:"Ruby",sql:"SQL",vbscript:"VBScript",xhtml:"XHTML",xml:"XML"},init:function(t){var a=this;i&&CKEDITOR.scriptLoader.load(n+"lib/highlight/highlight.pack.js",function(){a.hljs=window.hljs,t()}),e.addContentsCss&&e.addContentsCss(n+"lib/highlight/styles/"+e.config.codeSnippet_theme+".css")},highlighter:function(e,t,i){var n=this.hljs.highlightAuto(e,this.hljs.getLanguage(t)?[t]:void 0);n&&i(n.value)}});this.setHighlighter(a)}}}),CKEDITOR.plugins.codesnippet={highlighter:e},e.prototype.highlight=function(){var e=arguments;this.ready?this.highlighter.apply(this,e):this.queue.push(function(){this.highlighter.apply(this,e)})}}(),CKEDITOR.config.codeSnippet_codeClass="hljs",CKEDITOR.config.codeSnippet_theme="default";