document.getElementById("button1").addEventListener("click",loadUser);
	function loadUsers() {
		var xhr = new XMLHttpRequest();
		console.log("abc");
		xhr.open("GET","https://api.github.com/users",true);
		xhr.onload = function(){
			var users = JSON.parse(this.responseText);
			// console.log(users);
			document.getElementById("p1").innerHTML = users[0].login;
		}
		xhr.send();
	}
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
			console.log("ok");
			var xhr = new XMLHttpRequest();
			xhr.open("GET",url,true);
			xhr.onload = function () {
				var userinfo = JSON.parse(this.responseText);
				// document.getElementById("info").value = userinfo.id;
				var output = `
					<div>
						<img src="${userinfo.avatar_url}" width="230px" height="230px">
						<ur>
							<li>ID:${userinfo.login}</li>
						</ur>
					</div>
				`
				document.getElementById("info").innerHTML = output;
			}
			xhr.send();
		}
	}