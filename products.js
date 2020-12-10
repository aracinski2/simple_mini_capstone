var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      todos: []
    };
  },
  methods: {
    getData: function () {
      axios.get('http://localhost:3000/api/products').then(response => {
        console.log('i am line 11');
        console.log(response);
        this.todos = response.data;
      });
    },
    createData: function () {
      axios.post('http://localhost:3000/api/products', {
        name: "iphone",
        description: "a smart phone",
        price: 800,
        image_url: 'asljdhfal'
      }).then(response => {
        console.log(response);
      });
    }
  }
});