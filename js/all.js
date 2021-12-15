
var app =new Vue({
    el:'#app',
    data:{
        newTodo:'',
        newNumber:'',
        
        todos:[
            // {
            //     id:'',
            //     title:'',
            //     number:'',
            //     price:''
            // }
        ],
        
        
    },
    computed:{
        
    },
    methods:{
        addTodo:function(){
            var value = this.newTodo.trim();
            var number = this.newNumber.trim();
            var price = parseInt(number) + parseInt(number);
            var timestamp = Math.floor(Date.now());
            console.log(value, number, timestamp);
            if (!value){
                return;
            } else if (!number){
                return;
            }
            
            this.todos.push({
                id: timestamp,
                title: value,
                number: number,
                price:price,
            });
            this.newTodo=''
            this.newNumber = ''
        },
        removeTodo: function (todo){
            var vm = this;
            var newIndex = vm.todos.findIndex(function(item,key){
                return todo.id === item.id;
            })
            this.todos.splice(newIndex,1);
        },
        
    }
})
