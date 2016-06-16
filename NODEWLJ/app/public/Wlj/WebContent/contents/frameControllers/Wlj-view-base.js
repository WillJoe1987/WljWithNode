Ext.ns('Wlj.view');
/**
 * 视图工厂
 * @class Wlj.view.View
 * @extends Ext.util.Observable
 */
Wlj.view.View = Ext.extend(Ext.util.Observable,{
	viewId: 'view$-$',
	resId : 0,
	viewType: 0, //视图类型：0客户视图,1客户群视图,2集团客户视图,3客户经理视图,4产品视图,5团队视图,6财富管理视图
	viewUrl: '',
	constructor: function(config){
        Wlj.view.View.superclass.constructor.call(this, config);
    },
    /**
     * 打开视图方法
     * @param {} viewType 视图类型: 0客户视图,1客户群视图,2集团客户视图,3客户经理视图
     * @param {} id	客户号或客户群号
     * @param {} name 客户名称或客户群名称
     */
	openViewWindow : function(viewType,id,name){
		var viewType = viewType;
		var viewName = Wlj.view.View.VIEW_PRE_NAME[viewType] + name;
		var baseURL = basepath + Wlj.view.View.VIEW_BASE_URL[viewType];
		var resId =  'view$-$' + viewType +'$-$' + id;
		var taskId = 'task_'+resId;
		
		var model = 'page';
		var viewsFeatures = '';
		if(APPUTIL){
			model = APPUTIL.viewsShowModel;
			viewsFeatures = APPUTIL.viewsFeatures;
		}
		
		if(model == 'window'){
			var fURL= baseURL + '?resId=' + resId;
			window.open(fURL, id, viewsFeatures);
		}else if(model == 'page'){
			window._APP.taskBar.openWindow({
				name : viewName,
				action : baseURL,
				resId : resId,
				id : taskId,
				serviceObject : false
			});
		}else{
			window._APP.taskBar.openWindow({
				name : viewName,
				action : baseURL,
				resId : resId,
				id : taskId,
				serviceObject : false
			});
		}
		
		
	}
});

Wlj.view.ViewController = new Wlj.view.View();
Wlj.ViewMgr = Wlj.view.ViewController;
window.openViewWindow = Wlj.ViewMgr.openViewWindow;



Wlj.view.View.VIEW_BASE_URL = [
	'/contents/frameControllers/view/Wlj-custview-base.jsp',
	'/contents/frameControllers/view/Wlj-custgroup-base.jsp',
	'/contents/frameControllers/view/Wlj-custgroup-base.jsp',
	'/contents/frameControllers/view/Wlj-custgroup-base.jsp',
	'/contents/frameControllers/view/Wlj-custgroup-base.jsp',
	'/contents/frameControllers/view/Wlj-custgroup-base.jsp',
	'/contents/frameControllers/view/Wlj-custgroup-base.jsp'
];
Wlj.view.View.VIEW_PRE_NAME = [
	'客户：',
	'客户群：',
	'集团：',
	'客户经理：',
	'产品：',
	'团队：',
	'财富管理：'
];