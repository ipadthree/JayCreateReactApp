import React, { ReactElement } from 'react';
import { TodoItem } from '../../../models/Todo';
import Todo from '../Todo';
type ListProps = {
    todos: TodoItem[];
    toggleComplete: (id: string) => void;
    deleteTodo: (id: string) => void;
};

export default function List({ todos, toggleComplete, deleteTodo }: ListProps): ReactElement {
    return (
        <ul>
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    );
}
