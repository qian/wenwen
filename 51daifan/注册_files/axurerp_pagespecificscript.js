for(var i = 0; i < 74; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
gv_vAlignTable['u21'] = 'top';gv_vAlignTable['u51'] = 'top';gv_vAlignTable['u31'] = 'top';gv_vAlignTable['u32'] = 'top';
$axure.eventManager.keyup('u23', function(e) {

if ((GetWidgetValueLength('u23')) <= Number('4')) {

	SetPanelState('u25', 'pd0u25','none','',500,'none','',500);

}
});

$axure.eventManager.focus('u23', function(e) {

if (true) {

	SetPanelState('u28', 'pd1u28','none','',500,'none','',500);

}
});

$axure.eventManager.blur('u23', function(e) {

if (true) {

	SetPanelState('u28', 'pd0u28','none','',500,'none','',500);

}

if ((GetWidgetValueLength('u23')) >= Number('4')) {

	SetPanelState('u25', 'pd1u25','none','',500,'none','',500);

}

if (((GetWidgetText('u23')) == ('admin')) && ((GetWidgetValueLength('u23')) == ('5'))) {

	SetPanelState('u25', 'pd0u25','none','',500,'none','',500);

	SetPanelState('u28', 'pd2u28','none','',500,'none','',500);

}

if ((GetWidgetValueLength('u23')) < Number('4')) {

	SetPanelState('u28', 'pd3u28','none','',500,'none','',500);

}

if ((GetWidgetValueLength('u23')) == ('0')) {

	SetPanelState('u28', 'pd1u28','none','',500,'none','',500);

}
});
gv_vAlignTable['u62'] = 'top';
$axure.eventManager.keyup('u53', function(e) {

if ((GetWidgetValueLength('u53')) <= Number('4')) {

	SetPanelState('u55', 'pd0u55','none','',500,'none','',500);

}
});

$axure.eventManager.focus('u53', function(e) {

if (true) {

	SetPanelState('u58', 'pd1u58','none','',500,'none','',500);

}
});

$axure.eventManager.blur('u53', function(e) {

if (true) {

	SetPanelState('u58', 'pd0u58','none','',500,'none','',500);

}

if ((GetWidgetValueLength('u53')) >= Number('4')) {

	SetPanelState('u55', 'pd1u55','none','',500,'none','',500);

}

if (((GetWidgetText('u53')) == ('admin')) && ((GetWidgetValueLength('u53')) == ('5'))) {

	SetPanelState('u55', 'pd0u55','none','',500,'none','',500);

	SetPanelState('u58', 'pd2u58','none','',500,'none','',500);

}

if ((GetWidgetValueLength('u53')) < Number('4')) {

	SetPanelState('u58', 'pd3u58','none','',500,'none','',500);

}

if ((GetWidgetValueLength('u53')) == ('0')) {

	SetPanelState('u58', 'pd1u58','none','',500,'none','',500);

}
});
gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u27'] = 'center';HookHover('u7', false);
HookClick('u7', false);
HookHover('u66', false);
HookClick('u66', false);
gv_vAlignTable['u30'] = 'top';gv_vAlignTable['u8'] = 'center';gv_vAlignTable['u60'] = 'top';gv_vAlignTable['u34'] = 'top';gv_vAlignTable['u64'] = 'center';gv_vAlignTable['u19'] = 'center';gv_vAlignTable['u49'] = 'top';HookHover('u11', false);
HookClick('u11', false);

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('我的订单_1.html');

}
});
gv_vAlignTable['u41'] = 'top';HookHover('u71', false);
HookClick('u71', false);

u71.style.cursor = 'pointer';
$axure.eventManager.click('u71', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('首页-我要订餐.html');

}
});
gv_vAlignTable['u15'] = 'center';gv_vAlignTable['u37'] = 'center';gv_vAlignTable['u2'] = 'top';gv_vAlignTable['u22'] = 'top';gv_vAlignTable['u13'] = 'center';gv_vAlignTable['u52'] = 'top';
$axure.eventManager.keyup('u43', function(e) {

if ((GetWidgetValueLength('u43')) <= Number('4')) {

	SetPanelState('u45', 'pd0u45','none','',500,'none','',500);

}
});

$axure.eventManager.focus('u43', function(e) {

if (true) {

	SetPanelState('u48', 'pd1u48','none','',500,'none','',500);

}
});

$axure.eventManager.blur('u43', function(e) {

if (true) {

	SetPanelState('u48', 'pd0u48','none','',500,'none','',500);

}

if ((GetWidgetValueLength('u43')) >= Number('4')) {

	SetPanelState('u45', 'pd1u45','none','',500,'none','',500);

}

if (((GetWidgetText('u43')) == ('admin')) && ((GetWidgetValueLength('u43')) == ('5'))) {

	SetPanelState('u45', 'pd0u45','none','',500,'none','',500);

	SetPanelState('u48', 'pd2u48','none','',500,'none','',500);

}

if ((GetWidgetValueLength('u43')) < Number('4')) {

	SetPanelState('u48', 'pd3u48','none','',500,'none','',500);

}

if ((GetWidgetValueLength('u43')) == ('0')) {

	SetPanelState('u48', 'pd1u48','none','',500,'none','',500);

}
});
gv_vAlignTable['u3'] = 'top';gv_vAlignTable['u47'] = 'center';gv_vAlignTable['u73'] = 'center';gv_vAlignTable['u50'] = 'top';gv_vAlignTable['u24'] = 'top';gv_vAlignTable['u54'] = 'top';gv_vAlignTable['u39'] = 'top';HookHover('u69', false);
HookClick('u69', false);
gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u61'] = 'top';gv_vAlignTable['u5'] = 'center';HookHover('u9', false);
HookClick('u9', false);
gv_vAlignTable['u42'] = 'top';
$axure.eventManager.keyup('u33', function(e) {

if ((GetWidgetValueLength('u33')) <= Number('4')) {

	SetPanelState('u35', 'pd0u35','none','',500,'none','',500);

}
});

$axure.eventManager.focus('u33', function(e) {

if (true) {

	SetPanelState('u38', 'pd1u38','none','',500,'none','',500);

}
});

$axure.eventManager.blur('u33', function(e) {

if (true) {

	SetPanelState('u38', 'pd0u38','none','',500,'none','',500);

}

if ((GetWidgetValueLength('u33')) >= Number('4')) {

	SetPanelState('u35', 'pd1u35','none','',500,'none','',500);

}

if (((GetWidgetText('u33')) == ('admin')) && ((GetWidgetValueLength('u33')) == ('5'))) {

	SetPanelState('u35', 'pd0u35','none','',500,'none','',500);

	SetPanelState('u38', 'pd2u38','none','',500,'none','',500);

}

if ((GetWidgetValueLength('u33')) < Number('4')) {

	SetPanelState('u38', 'pd3u38','none','',500,'none','',500);

}

if ((GetWidgetValueLength('u33')) == ('0')) {

	SetPanelState('u38', 'pd1u38','none','',500,'none','',500);

}
});
HookHover('u63', false);
HookClick('u63', false);
gv_vAlignTable['u67'] = 'center';gv_vAlignTable['u57'] = 'center';gv_vAlignTable['u10'] = 'center';gv_vAlignTable['u40'] = 'top';gv_vAlignTable['u70'] = 'center';gv_vAlignTable['u44'] = 'top';gv_vAlignTable['u29'] = 'top';gv_vAlignTable['u59'] = 'top';