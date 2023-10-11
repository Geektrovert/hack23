import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Dispatch } from "react";
import { Actions } from "./reducer";
import TodoItem from "./ToDoItem";

export function PrioritySelector(todo: ToDo & { dispatch: Dispatch<Actions> }) {
  return (
    <Select
      onValueChange={(value: ToDo["priority"]) => {
        todo.dispatch({
          type: "CHANGE_PRIORITY",
          payload: { id: todo.id, priority: value },
        });
      }}
      defaultValue={todo.priority}
    >
      <SelectTrigger className="w-[12ch]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="low">Low</SelectItem>
        <SelectItem value="mid">Medium</SelectItem>
        <SelectItem value="high">High</SelectItem>
      </SelectContent>
    </Select>
  );
}
