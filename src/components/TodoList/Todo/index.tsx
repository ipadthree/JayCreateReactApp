import React, { ReactElement } from 'react';
import { TodoItem as TodoItemModel } from '../../../models/Todo';
// 直接import css
import './Todo.css';

type TodoItemProps = {
    todo: TodoItemModel;
    toggleComplete: (id: string) => void;
    deleteTodo: (id: string) => void;
};

export default function TodoItem({
    todo,
    toggleComplete,
    deleteTodo,
}: TodoItemProps): ReactElement {
    return (
        <div className="todo-item">
            <input type="checkbox" onClick={() => toggleComplete(todo.id)} />
            {/**
             * 这里可以直接给react component加inline style，但是这个style也是JS化的，都是camel case要React再处理
             * 比如真正的 test-Decoration，而且这里可以用JS的语法。
             */}
            <li
                style={{
                    color: 'pink',
                    textDecoration: todo.completed ? 'line-through' : 'none',
                }}
            >
                {todo.task}
            </li>
            <button onClick={() => deleteTodo(todo.id)}>X</button>
        </div>
    );
}
