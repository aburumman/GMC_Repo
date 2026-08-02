// App.jsx
import React, { useState } from 'react';

const PRIORITIES = ['Low', 'Medium', 'High'];

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskPriority, setNewTaskPriority] = useState('Medium');

    // State for inline editing
    const [editingId, setEditingId] = useState(null);
    const [editName, setEditName] = useState('');
    const [editPriority, setEditPriority] = useState('');

    // --- Add a task ---
    const addTask = () => {
        if (!newTaskName.trim()) return;
        const task = {
            id: Date.now(),
            name: newTaskName.trim(),
            priority: newTaskPriority,
        };
        setTasks([...tasks, task]);
        setNewTaskName('');
        setNewTaskPriority('Medium');
    };

    // --- Remove a task ---
    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
        // Cancel editing if the removed task was being edited
        if (editingId === id) {
            setEditingId(null);
        }
    };

    // --- Start editing a task ---
    const startEditing = (task) => {
        setEditingId(task.id);
        setEditName(task.name);
        setEditPriority(task.priority);
    };

    // --- Save the edited task ---
    const saveEdit = (id) => {
        setTasks(tasks.map(task =>
            task.id === id
                ? { ...task, name: editName.trim() || task.name, priority: editPriority }
                : task
        ));
        setEditingId(null);
    };

    // --- Cancel editing ---
    const cancelEdit = () => {
        setEditingId(null);
    };

    return (
        <div className="app">
            <h1>Todo List (React)</h1>

            {/* Add task form */}
            <div className="add-task">
                <input
                    type="text"
                    placeholder="Task name"
                    value={newTaskName}
                    onChange={e => setNewTaskName(e.target.value)}
                />
                <select
                    value={newTaskPriority}
                    onChange={e => setNewTaskPriority(e.target.value)}
                >
                    {PRIORITIES.map(p => (
                        <option key={p} value={p}>{p}</option>
                    ))}
                </select>
                <button onClick={addTask}>Add Task</button>
            </div>

            {/* Task list */}
            <ul className="task-list">
                {tasks.map(task => (
                    <li key={task.id} className="task-item">
                        {editingId === task.id ? (
                            // --- Editing mode ---
                            <div className="edit-mode">
                                <input
                                    type="text"
                                    value={editName}
                                    onChange={e => setEditName(e.target.value)}
                                />
                                <select
                                    value={editPriority}
                                    onChange={e => setEditPriority(e.target.value)}
                                >
                                    {PRIORITIES.map(p => (
                                        <option key={p} value={p}>{p}</option>
                                    ))}
                                </select>
                                <button onClick={() => saveEdit(task.id)}>Save</button>
                                <button onClick={cancelEdit}>Cancel</button>
                            </div>
                        ) : (
                            // --- View mode ---
                            <div className="view-mode">
                                <span className="task-name">{task.name}</span>
                                <span className={`priority priority-${task.priority.toLowerCase()}`}>
                                    {task.priority}
                                </span>
                                <button onClick={() => startEditing(task)}>Edit</button>
                                <button onClick={() => removeTask(task.id)}>Delete</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;