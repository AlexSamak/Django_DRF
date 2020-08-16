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
			const data = { uid: '148', amount: 111, email: 'email' };

        const options = {
            method: 'POST',
            url: "http://localhost:8000/api/orders",
            //data: JSON.stringify(data)
        };
        axios(options)
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
      }      
	},

	created: function() {
		console.log('Created!');
		this.fetchOrders();
		//this.addData();

	}


}
)