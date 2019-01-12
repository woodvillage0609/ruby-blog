CKEDITOR.dialog.add("a11yHelp",function(e){var a=e.lang.a11yhelp,n=e.lang.common.keyboard,l=CKEDITOR.tools.getNextId(),t={8:n[8],9:a.tab,13:n[13],16:n[16],17:n[17],18:n[18],19:a.pause,20:a.capslock,27:a.escape,33:a.pageUp,34:a.pageDown,35:n[35],36:n[36],37:a.leftArrow,38:a.upArrow,39:a.rightArrow,40:a.downArrow,45:a.insert,46:n[46],91:a.leftWindowKey,92:a.rightWindowKey,93:a.selectKey,96:a.numpad0,97:a.numpad1,98:a.numpad2,99:a.numpad3,100:a.numpad4,101:a.numpad5,102:a.numpad6,103:a.numpad7,104:a.numpad8,105:a.numpad9,106:a.multiply,107:a.add,109:a.subtract,110:a.decimalPoint,111:a.divide,112:a.f1,113:a.f2,114:a.f3,115:a.f4,116:a.f5,117:a.f6,118:a.f7,119:a.f8,120:a.f9,121:a.f10,122:a.f11,123:a.f12,144:a.numLock,145:a.scrollLock,186:a.semiColon,187:a.equalSign,188:a.comma,189:a.dash,190:a.period,191:a.forwardSlash,192:a.graveAccent,219:a.openBracket,220:a.backSlash,221:a.closeBracket,222:a.singleQuote};t[CKEDITOR.ALT]=n[18],t[CKEDITOR.SHIFT]=n[16],t[CKEDITOR.CTRL]=CKEDITOR.env.mac?n[224]:n[17];var i=[CKEDITOR.ALT,CKEDITOR.SHIFT,CKEDITOR.CTRL],d=/\$\{(.*?)\}/g,o=function(a,n){var l=e.getCommandKeystroke(n);if(l){for(var d,o,c=[],r=0;r<i.length;r++)o=i[r],d=l/i[r],d>1&&2>=d&&(l-=o,c.push(t[o]));c.push(t[l]||String.fromCharCode(l)),l=c.join("+")}else l=a;return l};return{title:a.title,minWidth:600,minHeight:400,contents:[{id:"info",label:e.lang.common.generalTab,expand:!0,elements:[{type:"html",id:"legends",style:"white-space:normal;",focus:function(){this.getElement().focus()},html:function(){for(var e='<div class="cke_accessibility_legend" role="document" aria-labelledby="'+l+'_arialbl" tabIndex="-1">%1</div><span id="'+l+'_arialbl" class="cke_voice_label">'+a.contents+" </span>",n=[],t=a.legend,i=t.length,c=0;i>c;c++){for(var r=t[c],s=[],p=r.items,g=p.length,m=0;g>m;m++){var u=p[m],f=CKEDITOR.env.edge&&u.legendEdge?u.legendEdge:u.legend,f=f.replace(d,o);f.match(d)||s.push("<dt>%1</dt><dd>%2</dd>".replace("%1",u.name).replace("%2",f))}n.push("<h1>%1</h1><dl>%2</dl>".replace("%1",r.name).replace("%2",s.join("")))}return e.replace("%1",n.join(""))}()+'<style type="text/css">.cke_accessibility_legend{width:600px;height:400px;padding-right:5px;overflow-y:auto;overflow-x:hidden;}.cke_browser_quirks .cke_accessibility_legend,{height:390px}.cke_accessibility_legend *{white-space:normal;}.cke_accessibility_legend h1{font-size: 20px;border-bottom: 1px solid #AAA;margin: 5px 0px 15px;}.cke_accessibility_legend dl{margin-left: 5px;}.cke_accessibility_legend dt{font-size: 13px;font-weight: bold;}.cke_accessibility_legend dd{margin:10px}</style>'}]}],buttons:[CKEDITOR.dialog.cancelButton]}});