import React, { ReactElement, useState, useEffect } from 'react';

import TodoForm from './TodoForm';
import List from './List';
import { TodoItem } from '../../models/Todo';

import "./TodoList.css";

const LOCAL_STORAGE_KEY = 'react-todos';

const TodoList = (): ReactElement => {
    const [todos, setTodos] = useState<TodoItem[]>([]);

    // 这个useEffect 先后顺序还有影响！！！ 如果这个放到后面，那进到page就先用empty array set，就会清除！！
    // useEffect runs after every render, including the first one. React guarantees the DOM has been updated by the time it runs the effects
    useEffect(() => {
        const localStoredTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) as string);
        if (localStoredTodos) {
            setTodos(localStoredTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    const addTodo = (todo: TodoItem) => {
        setTodos([todo, ...todos]);
    };

    const toggleComplete = (id: string) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            })
        );
    };

    const deleteTodo = (id: string) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="todo-app">
            <h1>React Todo App</h1>
            <TodoForm addTodo={addTodo} />
            <List todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
        </div>
    );
};

export default TodoList;
