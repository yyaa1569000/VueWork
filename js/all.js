var app = new Vue({
    el: '#app',
    data: {
        newTodo: '',
        newNumber: '',
        todos: [
            {
                id: '',
                title: '測試',
                number: '100',
                price: '100'
            }
        ],


    },
    // computed:{

    // },
    methods: {
        addTodo: function () {
            var value = this.newTodo.trim();
            var number = this.newNumber.trim();
            var price = parseInt(number) + parseInt(number);
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

    }
})
