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
			axios.post('/api/orders', {
				name: 'good - good - good'
			})
			.then((responce) => {
				console.log(responce);
			})
		}
	},

	created: function() {
		console.log('Created!');
		this.fetchOrders();
		this.addData();

	}


}
)