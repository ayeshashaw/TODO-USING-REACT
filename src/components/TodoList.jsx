function TodoList(props) {
    return (
      <li className="List-Items">
        {props.items}
        <span className="icons">
          <i
            className="fa-duotone fa-solid fa-trash icon-delete"
            role="button"
            aria-label="Delete item"
            onClick={() => props.deleteList(props.index)}
          ></i>
        </span>
      </li>
    );
  }
  
  export default TodoList;
  