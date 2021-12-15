var app = new Vue({
    el: '#app',
    data: {
        
        newTodo: '',
        newNumber: '',
        
        
        todos: [
            {
                id: '',
                title: '吹風機',
                number: '300',
                price: '300'
            },
            {
                id: '',
                title: '麥克風',
                number: '9000',
                price: '9000'
            },
            {
                id: '',
                title: '筆記型電腦',
                number: '29000',
                price: '29000'
            },
            {
                id: '',
                title: 'IPhone9',
                number: '28500',
                price: '28500'
            },
            {
                id: '',
                title: '神奇海螺',
                number: '443300',
                price: '443300'
            },
        ],
        amount:0,


    },
    
    methods: {
        addTodo: function () {
            var value = this.newTodo.trim();
            var number = this.newNumber.trim();
            var price = parseInt(number);
            var timestamp = Math.floor(Date.now());
            console.log(value, number, timestamp);
            if (!value) {
                return;
            } else if (!number) {
                return;
            }
            

            this.todos.push({
                id: timestamp,
                title: value,
                number: number,
                price: price,
                
                
            });
            this.newTodo = ''
            this.newNumber = ''
        },
        removeTodo: function (todo) {
            var newIndex = '';
            var vm = this;
            vm.todos.forEach(function (item, key) {
                if (todo.id === item.id) {
                    newIndex = key
                }
            })
            this.todos.splice(newIndex, 1);
        },

    },
    computed: {
        calAmount:function(){
            var prices = this.todos.map(item => item.price);

           return prices.reduce(function(prev,current){
                this.amount = parseInt(prev) + parseInt(current);
                return this.amount;
            }, 0)
            
        }
    },
})
