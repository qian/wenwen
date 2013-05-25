for(var i = 0; i < 72; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u25'] = 'top';gv_vAlignTable['u55'] = 'top';gv_vAlignTable['u46'] = 'top';gv_vAlignTable['u38'] = 'top';gv_vAlignTable['u23'] = 'center';HookHover('u62', false);
HookClick('u62', false);
gv_vAlignTable['u53'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u4'] = 'center';HookHover('u7', false);
HookClick('u7', false);

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('我的订单_1.html');

}
});
gv_vAlignTable['u66'] = 'center';gv_vAlignTable['u30'] = 'top';gv_vAlignTable['u60'] = 'center';gv_vAlignTable['u17'] = 'top';
$axure.eventManager.keyup('u19', function(e) {

if ((GetWidgetValueLength('u19')) <= Number('4')) {

	SetPanelState('u21', 'pd0u21','none','',500,'none','',500);

}
});

$axure.eventManager.focus('u19', function(e) {

if (true) {

	SetPanelState('u24', 'pd1u24','none','',500,'none','',500);

}
});

$axure.eventManager.blur('u19', function(e) {

if (true) {

	SetPanelState('u24', 'pd0u24','none','',500,'none','',500);

}

if ((GetWidgetValueLength('u19')) >= Number('4')) {

	SetPanelState('u21', 'pd1u21','none','',500,'none','',500);

}

if (((GetWidgetText('u19')) == ('admin')) && ((GetWidgetValueLength('u19')) == ('5'))) {

	SetPanelState('u21', 'pd0u21','none','',500,'none','',500);

	SetPanelState('u24', 'pd2u24','none','',500,'none','',500);

}

if ((GetWidgetValueLength('u19')) < Number('4')) {

	SetPanelState('u24', 'pd3u24','none','',500,'none','',500);

}

if ((GetWidgetValueLength('u19')) == ('0')) {

	SetPanelState('u24', 'pd1u24','none','',500,'none','',500);

}
});

$axure.eventManager.keyup('u49', function(e) {

if ((GetWidgetValueLength('u49')) <= Number('4')) {

	SetPanelState('u51', 'pd0u51','none','',500,'none','',500);

}
});

$axure.eventManager.focus('u49', function(e) {

if (true) {

	SetPanelState('u54', 'pd1u54','none','',500,'none','',500);

}
});

$axure.eventManager.blur('u49', function(e) {

if (true) {

	SetPanelState('u54', 'pd0u54','none','',500,'none','',500);

}

if ((GetWidgetValueLength('u49')) >= Number('4')) {

	SetPanelState('u51', 'pd1u51','none','',500,'none','',500);

}

if (((GetWidgetText('u49')) == ('admin')) && ((GetWidgetValueLength('u49')) == ('5'))) {

	SetPanelState('u51', 'pd0u51','none','',500,'none','',500);

	SetPanelState('u54', 'pd2u54','none','',500,'none','',500);

}

if ((GetWidgetValueLength('u49')) < Number('4')) {

	SetPanelState('u54', 'pd3u54','none','',500,'none','',500);

}

if ((GetWidgetValueLength('u49')) == ('0')) {

	SetPanelState('u54', 'pd1u54','none','',500,'none','',500);

}
});
gv_vAlignTable['u11'] = 'center';gv_vAlignTable['u71'] = 'center';gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u45'] = 'top';gv_vAlignTable['u36'] = 'top';gv_vAlignTable['u58'] = 'top';gv_vAlignTable['u37'] = 'top';gv_vAlignTable['u2'] = 'top';gv_vAlignTable['u43'] = 'center';HookHover('u3', false);
HookClick('u3', false);
gv_vAlignTable['u27'] = 'top';gv_vAlignTable['u47'] = 'top';gv_vAlignTable['u20'] = 'top';gv_vAlignTable['u50'] = 'top';gv_vAlignTable['u28'] = 'top';
$axure.eventManager.keyup('u39', function(e) {

if ((GetWidgetValueLength('u39')) <= Number('4')) {

	SetPanelState('u41', 'pd0u41','none','',500,'none','',500);

}
});

$axure.eventManager.focus('u39', function(e) {

if (true) {

	SetPanelState('u44', 'pd1u44','none','',500,'none','',500);

}
});

$axure.eventManager.blur('u39', function(e) {

if (true) {

	SetPanelState('u44', 'pd0u44','none','',500,'none','',500);

}

if ((GetWidgetValueLength('u39')) >= Number('4')) {

	SetPanelState('u41', 'pd1u41','none','',500,'none','',500);

}

if (((GetWidgetText('u39')) == ('admin')) && ((GetWidgetValueLength('u39')) == ('5'))) {

	SetPanelState('u41', 'pd0u41','none','',500,'none','',500);

	SetPanelState('u44', 'pd2u44','none','',500,'none','',500);

}

if ((GetWidgetValueLength('u39')) < Number('4')) {

	SetPanelState('u44', 'pd3u44','none','',500,'none','',500);

}

if ((GetWidgetValueLength('u39')) == ('0')) {

	SetPanelState('u44', 'pd1u44','none','',500,'none','',500);

}
});
gv_vAlignTable['u69'] = 'center';gv_vAlignTable['u6'] = 'center';gv_vAlignTable['u35'] = 'top';gv_vAlignTable['u26'] = 'top';HookHover('u65', false);
HookClick('u65', false);
gv_vAlignTable['u56'] = 'top';HookHover('u5', false);
HookClick('u5', false);
gv_vAlignTable['u9'] = 'center';gv_vAlignTable['u33'] = 'center';gv_vAlignTable['u63'] = 'center';gv_vAlignTable['u18'] = 'top';gv_vAlignTable['u48'] = 'top';HookHover('u67', false);
HookClick('u67', false);

u67.style.cursor = 'pointer';
$axure.eventManager.click('u67', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页-我要订餐.html');

}
});
gv_vAlignTable['u57'] = 'top';gv_vAlignTable['u40'] = 'top';
$axure.eventManager.keyup('u29', function(e) {

if ((GetWidgetValueLength('u29')) <= Number('4')) {

	SetPanelState('u31', 'pd0u31','none','',500,'none','',500);

}
});

$axure.eventManager.focus('u29', function(e) {

if (true) {

	SetPanelState('u34', 'pd1u34','none','',500,'none','',500);

}
});

$axure.eventManager.blur('u29', function(e) {

if (true) {

	SetPanelState('u34', 'pd0u34','none','',500,'none','',500);

}

if ((GetWidgetValueLength('u29')) >= Number('4')) {

	SetPanelState('u31', 'pd1u31','none','',500,'none','',500);

}

if (((GetWidgetText('u29')) == ('admin')) && ((GetWidgetValueLength('u29')) == ('5'))) {

	SetPanelState('u31', 'pd0u31','none','',500,'none','',500);

	SetPanelState('u34', 'pd2u34','none','',500,'none','',500);

}

if ((GetWidgetValueLength('u29')) < Number('4')) {

	SetPanelState('u34', 'pd3u34','none','',500,'none','',500);

}

if ((GetWidgetValueLength('u29')) == ('0')) {

	SetPanelState('u34', 'pd1u34','none','',500,'none','',500);

}
});
HookHover('u59', false);
HookClick('u59', false);
