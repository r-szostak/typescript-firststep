import Todo from "./Todo"
import classes from "./Todos.module.css"
import { useContext } from "react"
import { TodosContext } from "../store/todos-context"

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext)

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <Todo
          key={item.id}
          text={item.text}
          onRemove={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  )
}

export default Todos
