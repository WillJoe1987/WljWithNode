<%@ page contentType="text/html; charset=utf-8"%>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<%@ include file="/contents/pages/common/includes.jsp"%>
	<title><%=yusysTitle%></title>
	<meta name="keywords" content="<%=yusysTitle%>,CRM" />
	<meta name="description" content="<%=yusysTitle%>,CRM" />
	<meta name="Author" content="YuchengTech" />
	<link rel="shortcut icon" href="favicon.ico" />
	<version:frameLink  type="text/css" rel="stylesheet" href="/contents/wljFrontFrame/styles/common/commoncss/LovCombo.css" />
	<version:frameScript type="text/javascript" src="/contents/frameControllers/WljFunctionBooter.js" />
	<script type="text/javascript">
		Ext.onReady(function(){
			window.APPBUILD = new Wlj.frame.functions.app.Builder();
			//修复列模型单击时候菜单不收起问题
			Ext.getBody().on('click',function(){
				parent.Ext.menu.MenuMgr.hideAll();
			});
		});
	</script>
</head>
<body></body>
</html>