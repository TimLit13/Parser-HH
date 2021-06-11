(function (c) {
    if (isEngineInited()){
        return;
    }

    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = 1;
    script.src = c.managerUrl;
    script.dataset.roxotInited = 'true';

    let head = document.getElementsByTagName('head')[0];
    head.insertBefore(script, head.firstChild);

    window.rom = window.rom || {cmd: [], icmd: []};
    window.rom.icmd = window.rom.icmd || [];
    window.rom.icmd.push(c);

    function isEngineInited(){
        return  document.querySelectorAll('[data-roxot-inited]').length;
    }
})({"adBlockMode":"iframe","managerUrl":"https:\/\/cdn-plus.roxot-panel.com\/roxot-wrapper\/js\/roxot-manager-engine.js?v=s-33677b3e-3f8b-4ba1-98cc-7e172a9670eb","wrapperUrl":"https:\/\/cdn-plus.roxot-panel.com\/roxot-wrapper\/js\/roxot-wrapper.js?v=s-33677b3e-3f8b-4ba1-98cc-7e172a9670eb","placementConfigTemplate":"https:\/\/cdn-plus.roxot-panel.com\/wrapper-builder\/placement\/__PLACEMENT_ID__?v=d-83470090-2115-4834-b63f-297e7dbc5c87","isLanguageSpecific":false,"hostConfig":{"hh.ru":{"wrapperOptions":[]}},"isBrowserSpecific":false,"isOsSpecific":false,"isDeviceTypeSpecific":true,"dynamicUrlTemplate":"","wrapperConfig":{"prebid":{"adjustment":{"appnexus":0.8,"adriver":0.8,"getintent":0.7,"mytarget":0.8,"rubicon":0.2,"otm":0.8,"segmento":0.85,"criteo":0.85,"rtbhouse":0.8},"path":"https:\/\/cdn-plus.roxot-panel.com\/roxot-wrapper\/js\/prebid.js?v=s-33677b3e-3f8b-4ba1-98cc-7e172a9670eb"},"adfox":{"hb":{"biddersMap":{"betweenDigital":"1471719","myTarget":"1471718","otm":"1471725","segmento":"1496136","hybrid":"1505514","adriver":"1508036","buzzoola":"1547542","getintent":"1499316","rtbhouse":"1393902","criteo":"1393905","videonow":"1407059"},"timeout":1000}}},"lazyLoading":[]})