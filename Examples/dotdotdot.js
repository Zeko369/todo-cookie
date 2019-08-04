let a = [1, 2, 3]
let b = [2, 3, 4, [3, 4, 5]]

c = [...a, ...b] // [1, 2, 3, 2, 3, 4, [3, 4, 5]]
console.log(c);

c = [a, ...b] // [[1, 2, 3], 2, 3, 4, [3, 4, 5]]
console.log(c);

a.push(0)
a.unshift(0)

console.log(a);

// this.state.todos.push('Todo');


let tmp = [...this.state.foo]

tmp.push('123');
tmp.unshift('123');

this.setState({foo: tmp});

// Or

this.setState((state) => {
  foo: state.foo.push('asdas')
});
