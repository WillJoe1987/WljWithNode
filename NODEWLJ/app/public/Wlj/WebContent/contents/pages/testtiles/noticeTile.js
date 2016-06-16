(function(){
	
	var tg = new Wlj.widgets.views.index.grid.FloatTipTileGrid({
		needheader :false,
		dataSize : 7,
		title : '公告管理',
		root : 'json.data',
		url : basepath+'/noticequery.json',
		userTipTemplate : '<font color="red"><b>{NOTICE_TITLE}</b></font>&nbsp;&nbsp;{ACTIVE_DATE}', //false为默认样式，自定义html语句，可以形成特殊样式
		ndtipheader : true, 	////是否在tip数据前加上表头TIP
		columns : [{
			columnName : 'NOTICE_ID',
			tipshow : false,
			key : true
		},{
			columnName : 'ACTIVE_DATE',
			show : true,
			header : 'AAA'
		},{
			columnName : 'NOTICE_TITLE',
			tipshow : false,
			width:120,
			show : true
		},{
			columnName : 'NOTICE_CONTENT',
			show : false,
			tipshow : true
		}]
	});
	return [tg];
})();