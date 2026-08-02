<!-- App.svelte -->
<script>
  let tasks = [];
  let newTaskName = '';
  let newTaskPriority = 'Medium';
  const priorities = ['Low', 'Medium', 'High'];

  let editingId = null;
  let editName = '';
  let editPriority = 'Medium';

  // --- Add a task ---
  function addTask() {
    const name = newTaskName.trim();
    if (!name) return;
    tasks = [
      ...tasks,
      { id: Date.now(), name, priority: newTaskPriority }
    ];
    newTaskName = '';
    newTaskPriority = 'Medium';
  }

  // --- Remove a task ---
  function removeTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    if (editingId === id) editingId = null;
  }

  // --- Start editing ---
  function startEditing(task) {
    editingId = task.id;
    editName = task.name;
    editPriority = task.priority;
  }

  // --- Save edit ---
  function saveEdit(id) {
    tasks = tasks.map(t => {
      if (t.id === id) {
        return {
          ...t,
          name: editName.trim() || t.name,
          priority: editPriority
        };
      }
      return t;
    });
    editingId = null;
  }

  // --- Cancel edit ---
  function cancelEdit() {
    editingId = null;
  }

  // --- Handle Enter key for add ---
  function handleKeydown(event) {
    if (event.key === 'Enter') addTask();
  }
</script>

<div class="app">
  <h1>Todo List (Svelte)</h1>

  <!-- Add task form -->
  <div class="add-task">
    <input
      type="text"
      placeholder="Task name"
      bind:value={newTaskName}
      on:keydown={handleKeydown}
    />
    <select bind:value={newTaskPriority}>
      {#each priorities as p}
        <option value={p}>{p}</option>
      {/each}
    </select>
    <button on:click={addTask}>Add Task</button>
  </div>

  <!-- Task list -->
  <ul class="task-list">
    {#each tasks as task (task.id)}
      <li class="task-item">
        {#if editingId === task.id}
          <!-- Editing mode -->
          <div class="edit-mode">
            <input type="text" bind:value={editName} />
            <select bind:value={editPriority}>
              {#each priorities as p}
                <option value={p}>{p}</option>
              {/each}
            </select>
            <button on:click={() => saveEdit(task.id)}>Save</button>
            <button on:click={cancelEdit}>Cancel</button>
          </div>
        {:else}
          <!-- View mode -->
          <div class="view-mode">
            <span class="task-name">{task.name}</span>
            <span class="priority priority-{task.priority.toLowerCase()}">
              {task.priority}
            </span>
            <button on:click={() => startEditing(task)}>Edit</button>
            <button on:click={() => removeTask(task.id)}>Delete</button>
          </div>
        {/if}
      </li>
    {/each}
  </ul>
</div>

<style>
  .app {
    max-width: 500px;
    margin: 2rem auto;
    font-family: sans-serif;
  }
  .add-task {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  .task-list {
    list-style: none;
    padding: 0;
  }
  .task-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;
  }
  .priority {
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    font-size: 0.8rem;
    color: white;
  }
  .priority-low { background: #6c757d; }
  .priority-medium { background: #fd7e14; }
  .priority-high { background: #dc3545; }
  .view-mode, .edit-mode {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
  }
  .task-name {
    flex-grow: 1;
  }
</style>