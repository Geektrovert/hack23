export default function Metrics({ todos }: { todos: ToDo[] }) {
  return (
    <div className="flex flex-wrap justify-between gap-3 min-w-[40vw]">
      <div className="py-2 px-4 w-[20%] bg-slate-800 rounded-md">
        <h2 className="text-sm text-slate-100">Total</h2>
        <p className="text-3xl text-slate-100">
          {/* TODO: display total count of todos */}
          {todos.length}
        </p>
      </div>

      <div className="py-2 px-4 w-[20%] bg-slate-800 rounded-md">
        <h2 className="text-sm text-slate-100">To Do</h2>
        <p className="text-3xl text-slate-100">
          {/* TODO: display total count of todos left */}
          {0}
        </p>
      </div>

      <div className="py-2 px-4 w-[20%] bg-slate-800 rounded-md">
        <h2 className="text-sm text-slate-100">WIP</h2>
        <p className="text-3xl text-slate-100">
          {/* TODO: display total count of todos in progress */}
          {0}
        </p>
      </div>

      <div className="py-2 px-4 w-[20%] bg-slate-800 rounded-md">
        <h2 className="text-sm text-slate-100">Done</h2>
        <p className="text-3xl text-slate-100">
          {/* TODO: display total count of todos that are completed */}
          {todos.filter((todo) => todo.status === 'complete').length}
        </p>
      </div>
    </div>
  );
}
