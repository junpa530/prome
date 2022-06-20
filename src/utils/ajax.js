import { classof } from "core-js/core/object";

export default function ajax(method,url,isAsync) {
	// 1、创建XMLHttpRequest对象
	//var xhr = new XMLHttpRequest();
	//var xhr = new ActiveXObjectA("Microsoft.XMLHTTP"); //IE6 的兼容写法
	//兼容
	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	// 2、与服务器建立连接
	xhr.open(method,url,isAsync || true);
	
	//post需要设置请求头  get不用
	xhr.setRequestHeader("content-type","application/x-www-from-urlencoded")
	
	// 3、发送请求  post 请求的时候需要将数据放在send 中 
	xhr.send();
	// 4、接受返回值
	/*
		onreadystatechange: 监听 ajax 和 服务端的状态
		xhr.readyState      ajax的状态:        
		xhr.status === 200  服务端的状态
	*/
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status === 200){
			// 使用xhr里面的responseText方法，拿到服务器返回给我们的数据
			let data = xhr.responseText;
			/**
			 * 解析内容
			 * 如果服务器返回给我们的是JSON格式的字符串
			 * 我们就要使用JSON.parse()进行转换为我们想要的json对象
			 * 如果是其他格式也是一样的处理格式
			 */
			let jsonData = JSON.parse(data);
			console.log(jsonData)
		}
	}
	
}