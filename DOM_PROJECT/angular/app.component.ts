// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
    id: number;
    name: string;
    priority: 'Low' | 'Medium' | 'High';
}

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, FormsModule],
    template: `
    <div class="app">
      <h1>Todo List (Angular)</h1>

      <!-- Add task form -->
      <div class="add-task">
        <input
          type="text"
          placeholder="Task name"
          [(ngModel)]="newTaskName"
          (keyup.enter)="addTask()"
        />
        <select [(ngModel)]="newTaskPriority">
          <option *ngFor="let p of priorities" [value]="p">{{ p }}</option>
        </select>
        <button (click)="addTask()">Add Task</button>
      </div>

      <!-- Task list -->
      <ul class="task-list">
        <li *ngFor="let task of tasks; trackBy: trackById" class="task-item">
          <!-- Editing mode -->
          <div *ngIf="editingId === task.id; else viewMode" class="edit-mode">
            <input type="text" [(ngModel)]="editName" />
            <select [(ngModel)]="editPriority">
              <option *ngFor="let p of priorities" [value]="p">{{ p }}</option>
            </select>
            <button (click)="saveEdit(task.id)">Save</button>
            <button (click)="cancelEdit()">Cancel</button>
          </div>

          <!-- View mode -->
          <ng-template #viewMode>
            <div class="view-mode">
              <span class="task-name">{{ task.name }}</span>
              <span
                class="priority"
                [ngClass]="'priority-' + task.priority.toLowerCase()"
              >
                {{ task.priority }}
              </span>
              <button (click)="startEditing(task)">Edit</button>
              <button (click)="removeTask(task.id)">Delete</button>
            </div>
          </ng-template>
        </li>
      </ul>
    </div>
  `,
    styles: [`
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
  `]
})
export class AppComponent {
    priorities = ['Low', 'Medium', 'High'] as const;

    tasks: Task[] = [];
    newTaskName = '';
    newTaskPriority: Task['priority'] = 'Medium';

    editingId: number | null = null;
    editName = '';
    editPriority: Task['priority'] = 'Medium';

    // --- Add a task ---
    addTask() {
        const name = this.newTaskName.trim();
        if (!name) return;
        this.tasks = [
            ...this.tasks,
            { id: Date.now(), name, priority: this.newTaskPriority }
        ];
        this.newTaskName = '';
        this.newTaskPriority = 'Medium';
    }

    // --- Remove a task ---
    removeTask(id: number) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        if (this.editingId === id) {
            this.editingId = null;
        }
    }

    // --- Start editing ---
    startEditing(task: Task) {
        this.editingId = task.id;
        this.editName = task.name;
        this.editPriority = task.priority;
    }

    // --- Save edit ---
    saveEdit(id: number) {
        this.tasks = this.tasks.map(task =>
            task.id === id
                ? { ...task, name: this.editName.trim() || task.name, priority: this.editPriority }
                : task
        );
        this.editingId = null;
    }

    // --- Cancel edit ---
    cancelEdit() {
        this.editingId = null;
    }

    // --- Track by for NgFor performance ---
    trackById(index: number, task: Task) {
        return task.id;
    }
}