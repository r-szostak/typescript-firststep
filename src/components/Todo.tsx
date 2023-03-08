import classes from './Todo.module.css'

const Todo: React.FC<{text: string; onRemove: () => void}> = (props) => {

  return (
    <li className={classes.item} onClick={props.onRemove}>{props.text}</li>
  )
}

export default Todo