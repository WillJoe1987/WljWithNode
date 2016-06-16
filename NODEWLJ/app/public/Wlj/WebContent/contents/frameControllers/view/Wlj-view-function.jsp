<%@page import="java.net.URLDecoder"%>
<%@ page contentType="text/html; charset=utf-8"%>
<%@ page import="com.yuchengtech.framework.common.GrantProxyCustView" language="java" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<%@ include file="/contents/pages/common/includes.jsp"%>
	<title><%=yusysTitle%></title>
	<meta name="keywords" content="<%=yusysTitle%>,CRM" />
	<meta name="description" content="<%=yusysTitle%>,CRM" />
	<meta name="Author" content="YuchengTech" />
	<link rel="shortcut icon" href="favicon.ico" />
	<script type="text/javascript">
	<%
		String custId = request.getParameter("custId");
		String busiId = request.getParameter("busiId");
		String viewId = request.getParameter("viewId");
		String viewType = request.getParameter("viewType");
		//wzy,20150528,将客户姓名转码（中文转码）
		//String busiName = request.getParameter("busiName");
		String busiName = request.getParameter("busiName")==null?"":request.getParameter("busiName");//客户姓名
		busiName = URLDecoder.decode(busiName,"UTF-8");//客户姓名(转码)
		out.print("var _custId = '"+custId+"';");
		out.print("var _busiId = '"+busiId+"';");
		out.print("var _viewType = '"+viewType+"';");
		out.print("var _busiName = '"+busiName+"';");
		
		if(!(SecurityContextHolder.getContext().getAuthentication().getPrincipal() instanceof String)){
			AuthUser auth=(AuthUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
			//1、重新将视图下的控制点写入公共变量,用于功能按钮权限控制
			if(viewId!=null && !"-1".equals(viewId) && !"".equals(viewId)){
				List<String> grants = new GrantProxyCustView().getControlByRoleIdAndViewId(auth,viewId);
				if(grants!=null){
					for(int i=0;i<grants.size();i++){
						out.print("__grants.push('"+grants.get(i)+"');");
					}
				}
			}
		}
	%>
		JsContext.initContext();
	</script>
	<version:frameLink  type="text/css" rel="stylesheet" href="/contents/css/LovCombo.css" />
	<version:frameScript type="text/javascript" src="/FusionCharts/FusionCharts.js"/>
   	<version:frameScript type="text/javascript" src="/contents/frameControllers/view/WljViewFunctionBooter.js"/>
    <version:frameScript type="text/javascript" src="/contents/frameControllers/view/Wlj-view-function-builder.js"/>
</head>
<body>
</body>
</html>