{
  type Todo = {
    title: string;
    description: string;
  };

  function display(todo: Readonly<Todo>) {
    todo.title = 'jaja'; //readonly property 는 변경 불가능
  }
}
