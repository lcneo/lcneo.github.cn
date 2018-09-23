document.getElementById("button1").addEventListener("click",loadUser);
	function loadUser(){
		var xhr = new XMLHttpRequest();
		var input = document.getElementById('t1').value;
		var url = "";
		if (input == "") {
			alert("请输入你的GitHub用户名！");
		} else {
			url = url + "https://api.github.com/users/" + input;
		}
		console.log(url);
		if(url != ""){
			var xhr = new XMLHttpRequest();
			xhr.open("GET",url,true);
			xhr.onload = function () {
				var userinfo = JSON.parse(this.responseText);
				// document.getElementById("info").value = userinfo.id;
				if(userinfo.message =="Not Found"){
					alert("查询用户不存在！");
				}
				else{
				var output = `
					<div align="left" class="child">
						<img src="${userinfo.avatar_url}" width="230px" height="230px">
						<ur>
							<li>Name:${userinfo.name}</li>
							<li>Login:${userinfo.login}</li>
							<li>Id:${userinfo.id}</li>
							<li>Node_id:${userinfo.node_id}</li>
							<li>Login:${userinfo.login}</li>
							<li>Followers:${userinfo.followers}</li>
							<li>Following:${userinfo.following}</li>
							<li>CreatTime:${userinfo.created_at}</li>
							<li>UpdateTime:${userinfo.updated_at}</li>

						</ur>
					</div>
				`
				document.getElementById("info").innerHTML = output;
			}
				document.getElementById('t1').value = "";
			}
			xhr.send();
		}
	}