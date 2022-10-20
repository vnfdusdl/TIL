{
  type Todo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low';
  };

  //기존의 타입에서 부분적으로만 이용하고 싶을 때 사용하는 Partial utility
  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
    return { ...todo, ...fieldsToUpdate };
  }

  const todayTodo: Todo = {
    title: 'learn TS',
    description: 'study hard!',
    label: 'study',
    priority: 'low',
  };

  const updatedTodayTodo = updateTodo(todayTodo, { priority: 'high' });
  console.log(updatedTodayTodo);
}
// {
//   title: 'learn TS',
//   description: 'study hard!',
//   label: 'study',
//   priority: 'high'
// }