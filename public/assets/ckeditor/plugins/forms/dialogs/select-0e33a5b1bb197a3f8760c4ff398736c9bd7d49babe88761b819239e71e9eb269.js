CKEDITOR.dialog.add("select",function(e){function t(e,t,n,l,i){return e=c(e),l=l?l.createElement("OPTION"):document.createElement("OPTION"),e&&l&&"option"==l.getName()?(CKEDITOR.env.ie?(isNaN(parseInt(i,10))?e.$.options.add(l.$):e.$.options.add(l.$,i),l.$.innerHTML=0<t.length?t:"",l.$.value=n):(null!==i&&i<e.getChildCount()?e.getChild(0>i?0:i).insertBeforeMe(l):e.append(l),l.setText(0<t.length?t:""),l.setValue(n)),l):!1}function n(e){e=c(e);for(var t=a(e),n=e.getChildren().count()-1;n>=0;n--)e.getChild(n).$.selected&&e.getChild(n).remove();s(e,t)}function l(e,t,n,l){return e=c(e),0>t?!1:(e=e.getChild(t),e.setText(n),e.setValue(l),e)}function i(e){for(e=c(e);e.getChild(0)&&e.getChild(0).remove(););}function o(e,n,l){e=c(e);var i=a(e);if(0>i)return!1;if(n=i+n,n=0>n?0:n,n=n>=e.getChildCount()?e.getChildCount()-1:n,i==n)return!1;var i=e.getChild(i),o=i.getText(),u=i.getValue();return i.remove(),i=t(e,o,u,l?l:null,n),s(e,n),i}function a(e){return(e=c(e))?e.$.selectedIndex:-1}function s(e,t){if(e=c(e),0>t)return null;var n=e.getChildren().count();return e.$.selectedIndex=t>=n?n-1:t,e}function u(e){return(e=c(e))?e.getChildren():!1}function c(e){return e&&e.domId&&e.getInputElement().$?e.getInputElement():e&&e.$?e:!1}return{title:e.lang.forms.select.title,minWidth:CKEDITOR.env.ie?460:395,minHeight:CKEDITOR.env.ie?320:300,onShow:function(){delete this.selectBox,this.setupContent("clear");var e=this.getParentEditor().getSelection().getSelectedElement();if(e&&"select"==e.getName()){this.selectBox=e,this.setupContent(e.getName(),e);for(var e=u(e),t=0;t<e.count();t++)this.setupContent("option",e.getItem(t))}},onOk:function(){var e=this.getParentEditor(),t=this.selectBox,n=!t;if(n&&(t=e.document.createElement("select")),this.commitContent(t),n&&(e.insertElement(t),CKEDITOR.env.ie)){var l=e.getSelection(),i=l.createBookmarks();setTimeout(function(){l.selectBookmarks(i)},0)}},contents:[{id:"info",label:e.lang.forms.select.selectInfo,title:e.lang.forms.select.selectInfo,accessKey:"",elements:[{id:"txtName",type:"text",widths:["25%","75%"],labelLayout:"horizontal",label:e.lang.common.name,"default":"",accessKey:"N",style:"width:350px",setup:function(e,t){"clear"==e?this.setValue(this["default"]||""):"select"==e&&this.setValue(t.data("cke-saved-name")||t.getAttribute("name")||"")},commit:function(e){this.getValue()?e.data("cke-saved-name",this.getValue()):(e.data("cke-saved-name",!1),e.removeAttribute("name"))}},{id:"txtValue",type:"text",widths:["25%","75%"],labelLayout:"horizontal",label:e.lang.forms.select.value,style:"width:350px","default":"",className:"cke_disabled",onLoad:function(){this.getInputElement().setAttribute("readOnly",!0)},setup:function(e,t){"clear"==e?this.setValue(""):"option"==e&&t.getAttribute("selected")&&this.setValue(t.$.value)}},{type:"hbox",className:"cke_dialog_forms_select_order_txtsize",widths:["175px","170px"],children:[{id:"txtSize",type:"text",labelLayout:"horizontal",label:e.lang.forms.select.size,"default":"",accessKey:"S",style:"width:175px",validate:function(){var t=CKEDITOR.dialog.validate.integer(e.lang.common.validateNumberFailed);return""===this.getValue()||t.apply(this)},setup:function(e,t){"select"==e&&this.setValue(t.getAttribute("size")||""),CKEDITOR.env.webkit&&this.getInputElement().setStyle("width","86px")},commit:function(e){this.getValue()?e.setAttribute("size",this.getValue()):e.removeAttribute("size")}},{type:"html",html:"<span>"+CKEDITOR.tools.htmlEncode(e.lang.forms.select.lines)+"</span>"}]},{type:"html",html:"<span>"+CKEDITOR.tools.htmlEncode(e.lang.forms.select.opAvail)+"</span>"},{type:"hbox",widths:["115px","115px","100px"],className:"cke_dialog_forms_select_order",children:[{type:"vbox",children:[{id:"txtOptName",type:"text",label:e.lang.forms.select.opText,style:"width:115px",setup:function(e){"clear"==e&&this.setValue("")}},{type:"select",id:"cmbName",label:"",title:"",size:5,style:"width:115px;height:75px",items:[],onChange:function(){var e=this.getDialog(),t=e.getContentElement("info","cmbValue"),n=e.getContentElement("info","txtOptName"),e=e.getContentElement("info","txtOptValue"),l=a(this);s(t,l),n.setValue(this.getValue()),e.setValue(t.getValue())},setup:function(e,n){"clear"==e?i(this):"option"==e&&t(this,n.getText(),n.getText(),this.getDialog().getParentEditor().document)},commit:function(e){var n=this.getDialog(),l=u(this),o=u(n.getContentElement("info","cmbValue")),a=n.getContentElement("info","txtValue").getValue();i(e);for(var s=0;s<l.count();s++){var c=t(e,l.getItem(s).getValue(),o.getItem(s).getValue(),n.getParentEditor().document);o.getItem(s).getValue()==a&&(c.setAttribute("selected","selected"),c.selected=!0)}}}]},{type:"vbox",children:[{id:"txtOptValue",type:"text",label:e.lang.forms.select.opValue,style:"width:115px",setup:function(e){"clear"==e&&this.setValue("")}},{type:"select",id:"cmbValue",label:"",size:5,style:"width:115px;height:75px",items:[],onChange:function(){var e=this.getDialog(),t=e.getContentElement("info","cmbName"),n=e.getContentElement("info","txtOptName"),e=e.getContentElement("info","txtOptValue"),l=a(this);s(t,l),n.setValue(t.getValue()),e.setValue(this.getValue())},setup:function(e,n){if("clear"==e)i(this);else if("option"==e){var l=n.getValue();t(this,l,l,this.getDialog().getParentEditor().document),"selected"==n.getAttribute("selected")&&this.getDialog().getContentElement("info","txtValue").setValue(l)}}}]},{type:"vbox",padding:5,children:[{type:"button",id:"btnAdd",label:e.lang.forms.select.btnAdd,title:e.lang.forms.select.btnAdd,style:"width:100%;",onClick:function(){var e=this.getDialog(),n=e.getContentElement("info","txtOptName"),l=e.getContentElement("info","txtOptValue"),i=e.getContentElement("info","cmbName"),o=e.getContentElement("info","cmbValue");t(i,n.getValue(),n.getValue(),e.getParentEditor().document),t(o,l.getValue(),l.getValue(),e.getParentEditor().document),n.setValue(""),l.setValue("")}},{type:"button",id:"btnModify",label:e.lang.forms.select.btnModify,title:e.lang.forms.select.btnModify,style:"width:100%;",onClick:function(){var e=this.getDialog(),t=e.getContentElement("info","txtOptName"),n=e.getContentElement("info","txtOptValue"),i=e.getContentElement("info","cmbName"),e=e.getContentElement("info","cmbValue"),o=a(i);o>=0&&(l(i,o,t.getValue(),t.getValue()),l(e,o,n.getValue(),n.getValue()))}},{type:"button",id:"btnUp",style:"width:100%;",label:e.lang.forms.select.btnUp,title:e.lang.forms.select.btnUp,onClick:function(){var e=this.getDialog(),t=e.getContentElement("info","cmbName"),n=e.getContentElement("info","cmbValue");o(t,-1,e.getParentEditor().document),o(n,-1,e.getParentEditor().document)}},{type:"button",id:"btnDown",style:"width:100%;",label:e.lang.forms.select.btnDown,title:e.lang.forms.select.btnDown,onClick:function(){var e=this.getDialog(),t=e.getContentElement("info","cmbName"),n=e.getContentElement("info","cmbValue");o(t,1,e.getParentEditor().document),o(n,1,e.getParentEditor().document)}}]}]},{type:"hbox",widths:["40%","20%","40%"],children:[{type:"button",id:"btnSetValue",label:e.lang.forms.select.btnSetValue,title:e.lang.forms.select.btnSetValue,onClick:function(){var e=this.getDialog(),t=e.getContentElement("info","cmbValue");e.getContentElement("info","txtValue").setValue(t.getValue())}},{type:"button",id:"btnDelete",label:e.lang.forms.select.btnDelete,title:e.lang.forms.select.btnDelete,onClick:function(){var e=this.getDialog(),t=e.getContentElement("info","cmbName"),l=e.getContentElement("info","cmbValue"),i=e.getContentElement("info","txtOptName"),e=e.getContentElement("info","txtOptValue");n(t),n(l),i.setValue(""),e.setValue("")}},{type:"vbox",children:[{id:"chkMulti",type:"checkbox",label:e.lang.forms.select.chkMulti,"default":"",accessKey:"M",value:"checked",setup:function(e,t){"select"==e&&this.setValue(t.getAttribute("multiple"))},commit:function(e){this.getValue()?e.setAttribute("multiple",this.getValue()):e.removeAttribute("multiple")}},{id:"required",type:"checkbox",label:e.lang.forms.select.required,"default":"",accessKey:"Q",value:"checked",setup:function(e,t){"select"==e&&this.setValue(t.getAttribute("required"))},commit:function(e){this.getValue()?e.setAttribute("required","required"):e.removeAttribute("required")}}]}]}]}]}});