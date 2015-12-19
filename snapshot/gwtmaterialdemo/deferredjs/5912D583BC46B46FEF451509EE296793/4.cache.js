$wnd.gwtmaterialdemo.runAsyncCallback4("function apply_1(element, runnable){\n  var offset = $wnd.jQuery(element).offset().top;\n  var callback = $entry(function(){\n    runnable.run();\n  }\n  );\n  $wnd.apply(offset, callback);\n}\n\nfunction ScrollFirePresenter(eventBus, view, proxy){\n  $clinit_ScrollFirePresenter();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(578, 55, $intern_45, ScrollFirePresenter);\n_.onReveal = function onReveal_5(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Scrollfire', \"Executes callback functions depending on how far into the page you've scrolled.\"));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_scrollfire_ScrollFirePresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.scrollfire', 'ScrollFirePresenter', 578);\nfunction ScrollFireView(){\n  var forImage, forListItems, forToast;\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_3(new ScrollFireView_BinderImpl$Widgets(this)));\n  forToast = new ScrollFireView$1;\n  forListItems = new ScrollFireView$2(this);\n  forImage = new ScrollFireView$3(this);\n  apply_1(($clinit_DOM() , this.panel.element), forToast);\n  apply_1(this.listContainer.element, forListItems);\n  apply_1(this.image.element, forImage);\n}\n\ndefineClass(736, 58, $intern_46, ScrollFireView);\nvar Lgwt_material_design_demo_client_application_addins_scrollfire_ScrollFireView_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.scrollfire', 'ScrollFireView', 736);\nfunction ScrollFireView$1(){\n}\n\ndefineClass(737, 1, $intern_44, ScrollFireView$1);\n_.run = function run_4(){\n  $toast(new MaterialToast_0(initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_5, 18, 0, [])), 'Toasted', $intern_66, null);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_scrollfire_ScrollFireView$1_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.scrollfire', 'ScrollFireView/1', 737);\nfunction ScrollFireView$2(this$0){\n  this.this$01 = this$0;\n}\n\ndefineClass(738, 1, $intern_44, ScrollFireView$2);\n_.run = function run_5(){\n  animate_1(($clinit_Transition() , SHOW_STAGGERED_LIST), this.this$01.listContainer, 0);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_scrollfire_ScrollFireView$2_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.scrollfire', 'ScrollFireView/2', 738);\nfunction ScrollFireView$3(this$0){\n  this.this$01 = this$0;\n}\n\ndefineClass(739, 1, $intern_44, ScrollFireView$3);\n_.run = function run_6(){\n  animate_1(($clinit_Transition() , FADE_IN_IMAGE), this.this$01.image, 0);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_scrollfire_ScrollFireView$3_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.scrollfire', 'ScrollFireView/3', 739);\nfunction ScrollFireView_BinderImpl(){\n}\n\ndefineClass(959, 1, {}, ScrollFireView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_addins_scrollfire_ScrollFireView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.scrollfire', 'ScrollFireView_BinderImpl', 959);\nfunction $build_f_HTMLPanel1_3(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, panel, f_PrettyPre3, listContainer, image, sb, f_ListItem4, f_MaterialTitle5, f_ListItem6, f_MaterialTitle7, f_ListItem8, f_MaterialTitle9, f_ListItem10, f_MaterialTitle11;\n  f_HTMLPanel1 = new HTMLPanel($html2(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4).html);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), 'Usage') , $setText_5(f_MaterialTitle2.paragraph, '') , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (panel = new MaterialPanel , this$static.owner.panel = panel , panel), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre3 = new PrettyPre , $setHTML(f_PrettyPre3, (sb = new StringBuilder , sb.string += '\\u2003Runnable forToast = new Runnable() { <br> \\u2003@Override<br> \\u2003public void run() {<br> \\u2003\\u2003MaterialToast.fireToast(\"Toasted\");<br> \\u2003}<br> };<br><br> Runnable forListItems = new Runnable() {<br> \\u2003@Override<br> \\u2003public void run() {<br> \\u2003\\u2003MaterialAnimator.animate(Transition.SHOW_STAGGERED_LIST, listContainer, 0);<br> \\u2003}<br> };<br><br> Runnable forImage = new Runnable() {<br> \\u2003@Override<br> \\u2003public void run() {<br> \\u2003\\u2003MaterialAnimator.animate(Transition.FADE_IN_IMAGE, image, 0);<br> \\u2003}<br> };<br><br> MaterialScrollfire.apply(panel.getElement(), forToast);<br> MaterialScrollfire.apply(listContainer.getElement(), forListItems);<br> MaterialScrollfire.apply(image.getElement(), forImage);<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , setStyleName(f_PrettyPre3.element, 'lang-java', true) , setStyleName(f_PrettyPre3.element, 'z-depth-1', true) , f_PrettyPre3), $get_0(this$static.domId2Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (listContainer = new UnorderedList , listContainer.add_0((f_ListItem4 = new ListItem , $add_12(f_ListItem4, (f_MaterialTitle5 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle5.header), 'List Item') , $setText_5(f_MaterialTitle5.paragraph, 'List Item') , f_MaterialTitle5)) , $cssSetOpacity(f_ListItem4.element.style, 0) , f_ListItem4)) , listContainer.add_0((f_ListItem6 = new ListItem , $add_12(f_ListItem6, (f_MaterialTitle7 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle7.header), 'List Item') , $setText_5(f_MaterialTitle7.paragraph, 'List Item') , f_MaterialTitle7)) , $cssSetOpacity(f_ListItem6.element.style, 0) , f_ListItem6)) , listContainer.add_0((f_ListItem8 = new ListItem , $add_12(f_ListItem8, (f_MaterialTitle9 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle9.header), 'List Item') , $setText_5(f_MaterialTitle9.paragraph, 'List Item') , f_MaterialTitle9)) , $cssSetOpacity(f_ListItem8.element.style, 0) , f_ListItem8)) , listContainer.add_0((f_ListItem10 = new ListItem , $add_12(f_ListItem10, (f_MaterialTitle11 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle11.header), 'List Item') , $setText_5(f_MaterialTitle11.paragraph, 'List Item') , f_MaterialTitle11)) , $cssSetOpacity(f_ListItem10.element.style, 0) , f_ListItem10)) , this$static.owner.listContainer = listContainer , listContainer), $get_0(this$static.domId3Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (image = new MaterialImage , $cssSetOpacity(image.element.style, 0) , $setResource(image, (new MaterialResources_default_InlineClientBundleGenerator , $clinit_MaterialResources_default_InlineClientBundleGenerator$imageInitializer() , $clinit_MaterialResources_default_InlineClientBundleGenerator() , image_0)) , $setAttribute(image.element, 'data-caption', 'I love Material Design') , this$static.owner.image = image , image), $get_0(this$static.domId4Element));\n  return f_HTMLPanel1;\n}\n\nfunction ScrollFireView_BinderImpl$Widgets(owner){\n  this.owner = owner;\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n}\n\ndefineClass(960, 1, {}, ScrollFireView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_addins_scrollfire_ScrollFireView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.scrollfire', 'ScrollFireView_BinderImpl/Widgets', 960);\nfunction $html2(arg0, arg1, arg2, arg3, arg4){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFirePresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFirePresenter$_annotation$$none$$) {\n    result = new ScrollFirePresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFireView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFirePresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFirePresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFirePresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFireView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFireView$_annotation$$none$$) {\n    result = new ScrollFireView(new ScrollFireView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFireView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFireView$_annotation$$none$$;\n}\n\ndefineClass(496, 1, $intern_64);\n_.onSuccess_0 = function onSuccess_3(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFirePresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(4);\n\n//# sourceURL=gwtmaterialdemo-4.js\n")
