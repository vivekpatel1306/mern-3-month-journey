import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
    
import {
  fetchTodos,
  deleteTodo,
} from "../api/todoApi";

function TodoList() {

  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    staleTime: 1000 *60* 1, 
  gcTime: 1000 * 60 * 10,
  });

  const mutation = useMutation({
    mutationFn: deleteTodo,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"]
      });
    },
  });

  if (isLoading)
    return <h2>Loading...</h2>;

  if (error)
    return <h2>Error</h2>;

  return (
    <>
      {data.map((todo) => (
        <div key={todo.id}>
          {todo.title}

          <button
            onClick={() => mutation.mutate(todo.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default TodoList;