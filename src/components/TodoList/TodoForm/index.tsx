/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement, useState } from 'react';
import { TodoItem } from '../../../models/Todo';

interface TodoFormProps {
    addTodo: (todo: TodoItem) => void;
}

export default function TodoForm(props: TodoFormProps): ReactElement {
    const { addTodo } = props;
    const [todo, setTodo] = useState<TodoItem>({
        id: '',
        task: '',
        completed: false,
    });

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: Math.random() * 100000 + '' });
        }
        // reset task
        setTodo({ ...todo, task: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({ ...todo, task: e.target.value });
    };

    // form html tag主要是用来收集用户input的，里面放input tag
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a todo"
                value={todo.task}
                name="task"
                className="todo-input"
                onChange={handleChange}
            />
            <button className="todo-button" type="submit">
                Add todo
            </button>
        </form>
    );
}
