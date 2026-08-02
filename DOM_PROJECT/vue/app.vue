<!-- App.vue -->
<script setup>
import { ref } from 'vue'

const priorities = ['Low', 'Medium', 'High']

const tasks = ref([])
const newTaskName = ref('')
const newTaskPriority = ref('Medium')

const editingId = ref(null)
const editName = ref('')
const editPriority = ref('Medium')

// --- Add a task ---
const addTask = () => {
  const name = newTaskName.value.trim()
  if (!name) return
  tasks.value.push({
    id: Date.now(),
    name,
    priority: newTaskPriority.value
  })
  newTaskName.value = ''
  newTaskPriority.value = 'Medium'
}

// --- Remove a task ---
const removeTask = (id) => {
  const index = tasks.value.findIndex(t => t.id === id)
  if (index !== -1) tasks.value.splice(index, 1)
  if (editingId.value === id) editingId.value = null
}

// --- Start editing ---
const startEditing = (task) => {
  editingId.value = task.id
  editName.value = task.name
  editPriority.value = task.priority
}

// --- Save edit ---
const saveEdit = (id) => {
  const task = tasks.value.find(t => t.id === id)
  if (task) {
    task.name = editName.value.trim() || task.name
    task.priority = editPriority.value
  }
  editingId.value = null
}

// --- Cancel edit ---
const cancelEdit = () => {
  editingId.value = null
}
</script>

<template>
  <div class="app">
    <h1>Todo List (Vue)</h1>

    <!-- Add task form -->
    <div class="add-task">
      <input
        type="text"
        placeholder="Task name"
        v-model="newTaskName"
        @keyup.enter="addTask"
      />
      <select v-model="newTaskPriority">
        <option v-for="p in priorities" :key="p" :value="p">{{ p }}</option>
      </select>
      <button @click="addTask">Add Task</button>
    </div>

    <!-- Task list -->
    <ul class="task-list">
      <li v-for="task in tasks" :key="task.id" class="task-item">
        <!-- Editing mode -->
        <div v-if="editingId === task.id" class="edit-mode">
          <input type="text" v-model="editName" />
          <select v-model="editPriority">
            <option v-for="p in priorities" :key="p" :value="p">{{ p }}</option>
          </select>
          <button @click="saveEdit(task.id)">Save</button>
          <button @click="cancelEdit">Cancel</button>
        </div>

        <!-- View mode -->
        <div v-else class="view-mode">
          <span class="task-name">{{ task.name }}</span>
          <span
            class="priority"
            :class="'priority-' + task.priority.toLowerCase()"
          >
            {{ task.priority }}
          </span>
          <button @click="startEditing(task)">Edit</button>
          <button @click="removeTask(task.id)">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
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