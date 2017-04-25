var WebSocketServer = new require('ws');

var wss = new WebSocketServer.Server({ port: 3013 });
var lpeers = [];
var peers = [];
var HEARTBIT_CONST = 30000;
var objPeers = {
}

// setInterval(function(){
// 	for (var obj in objPeers) {
// 		if (i<5) {
// 			objPeers[obj].timeout+=1;
// 		} else {
// 			delete objPeers[username];
// 		}
// 	}
// }, HEARTBIT_CONST)

Array.prototype.exterminate = function (value) {
	this.splice(this.indexOf(value), 1);
}

var userList = [
	{ login: "admin", password: "hello", },
	{ login: "usual", password: "usual", },
	{ login: "usual2", password: "usual2" }
];

//checking if user is exist in the list
function checkUser(user, pass) {
	for (var i = 0; i < userList.length; i++) {
		acc = userList[i];
		if (acc.login === user && acc.password === pass) { return true; }
	}
	return false;
}

//send the message to the all users
// function broadcast(message) {
// 	peers.forEach(function (ws) {
// 		message.text.time = getCurrentTime();
// 		var response = JSON.stringify(message);
// 		ws.send(response);
// 		console.log('The message is sent for:');
// 		console.log(lpeers);
// 	});
// }

function broadcast(message) {
	console.log('The message is sent for: ');
	for (var username in objPeers) {
		message.text.time = getCurrentTime();
		var response = JSON.stringify(message);
		objPeers[username].socket.send(response);
		console.log(username);
		};

}

function getCurrentTime() {
	return "" + new Date().toTimeString().slice(0,5);
}

wss.on('connection', function (ws) {
	var registered = false;

	ws.on('message', function (msg) {
		console.log('Got message: ' + msg);
		var message = JSON.parse(msg);
		var username = message.text.user;
		var password = message.text.password;

		if (message.type === 'authorize') {   //authorization

			registered = checkUser(username, password);
			var returning = { type: 'authorize', text: { success: registered } };

			if (registered) {
				console.log(returning);
				if (!objPeers.hasOwnProperty(username)){
					objPeers[username] = { 'socket': ws, 'timeout': 0}
				}
				console.log('User is connected: "' + username + '"');

				ws.on('close', function () {
					console.log('Used disconnected: '+username);
					delete objPeers[username];
				
					//deleting user from the list after closing session
				});
			}
			//authorization response
			returning.text.online = objPeers.keys;
			ws.send(JSON.stringify(returning));

		} else {
			if (registered) {
				switch (message.type) {
					case 'message':
						broadcast(message)
						break;
					case 'status':
						objPeers[username].timeout=0;
				}
			}
		}
	});

});

