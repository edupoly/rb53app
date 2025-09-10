import React from "react";
import {
  useDeleteTodoMutation,
  useGetAllTodosQuery,
  useLazyGetAllTodosQuery,
} from "../../services/todosapi";

function Todos() {
  let { isLoading, data } = useGetAllTodosQuery();
  let [getAllTodosFn] = useLazyGetAllTodosQuery();
  let [deleteTodoFn] = useDeleteTodoMutation();
  return (
    <div>
      <h1>Todos::</h1>
      {isLoading && <h3>Loading....</h3>}
      {!isLoading && (
        <ul>
          {data.map((todo) => {
            return (
              <li>
                {todo.title}
                <button
                  onClick={() => {
                    deleteTodoFn(todo["_id"])
                      .then(() => {
                        getAllTodosFn();
                      })
                      .catch(() => {});
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Todos;
