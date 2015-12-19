$wnd.gwtmaterialdemo.runAsyncCallback7("function TimePickersPresenter(eventBus, view, proxy){\n  $clinit_TimePickersPresenter();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(582, 55, $intern_41, TimePickersPresenter);\n_.onReveal = function onReveal_8(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Time Pickers', 'A dialog picker is used to select a single time (hours:minutes) on mobile.\\n\\nThe selected time is indicated by the filled circle at the end of the clock hand.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersPresenter', 582);\nfunction TimePickersView(){\n  var f_MaterialPanel1, f_MaterialTitle2, tp, f_PrettyPre3, sb;\n  ViewImpl.call(this);\n  $initWidget_0(this, (f_MaterialPanel1 = new MaterialPanel , $add_11(f_MaterialPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML(f_MaterialTitle2.header.element, 'Time Picker') , $setText_5(f_MaterialTitle2.paragraph, 'Tap between the hour and minute label in the title bar to switch between the hour or minute view. Additionally, tap on the AM/PM label in the title bar to switch between AM or PM (in 12-hour clock mode).') , f_MaterialTitle2)) , $add_11(f_MaterialPanel1, (tp = new MaterialTimePicker , $setAttribute(tp.input_0.element, 'placeholder', 'Time') , tp)) , $add_11(f_MaterialPanel1, (f_PrettyPre3 = new PrettyPre , $setHTML(f_PrettyPre3, (sb = new StringBuilder , sb.string += '&lt;m:MaterialTimePicker ui:field=\"tp\" placeholder=\"Snooze Time\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , setStyleName(f_PrettyPre3.element, 'lang-xml', true) , setStyleName(f_PrettyPre3.element, 'z-depth-1', true) , f_PrettyPre3)) , f_MaterialPanel1));\n}\n\ndefineClass(744, 58, $intern_42, TimePickersView);\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView', 744);\nfunction TimePickersView_BinderImpl(){\n}\n\ndefineClass(985, 1, {}, TimePickersView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView_BinderImpl', 985);\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersPresenter$_annotation$$none$$) {\n    result = new TimePickersPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersView$_annotation$$none$$) {\n    result = new TimePickersView(new TimePickersView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersView$_annotation$$none$$;\n}\n\ndefineClass(503, 1, $intern_60);\n_.onSuccess_0 = function onSuccess_6(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(7);\n\n//# sourceURL=gwtmaterialdemo-7.js\n")