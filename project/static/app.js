new Vue({
	el: '#orders_app',
	
	data: {
		orders: [],
		//newData: '', 
	},
	
	methods: {
		fetchOrders() {
			const vm = this;
			axios.get('/api/orders')
			.then((responce) => {
				const data = responce.data;
				vm.orders = data
			}) 
		},

		addData() {
			const deptsURL = "http://localhost:8000/api/orders/";
			var vAttributes = {};
			vAttributes = {
				amount: 789, 
				description: "XXXxxxxx"
			};
			// var username = 'admin';
			// var password = '1234';
			// var credentials = btoa(username + ':' + password);
			// var basicAuth = 'Basic ' + credentials;
			//console.log(basicAuth);
			const ops = {
				method: 'post',
				headers: { 'content-type': 'application/json' },
				//headers: { 'content-type': 'application/json', 'Authorization': + basicAuth },
				data: JSON.stringify(vAttributes) ,
				url: deptsURL
			};
			axios( ops).then((res) => {
				console.log("post response: " + res);
			}).catch(function (error) {
				console.log("post error: " + error);
			});
			
      },

      postpost(){
      	console.log('POST-POST');
      	this.addData();

      }
	},

	created: function() {
		console.log('Created!');
		this.fetchOrders();
		//this.addData();

	}


}
)