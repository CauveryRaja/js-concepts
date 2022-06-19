let obj = { 
    name: 'ram',
    age: 10,
    method: function() { 
        function inner() {
            console.log('inner', this.name, this.age);
        }
        inner();
        console.log('outer', this.name)
    }
};

obj.method();