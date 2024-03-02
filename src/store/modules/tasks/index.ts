import TaskInterface from "@/interfaces/TaskInterface";
import { Module } from "vuex";
import { State } from "@/store";
import axios from "@/plugins/axios";

export interface StateTask {
  tasks: TaskInterface[];
}

export const task: Module<StateTask, State> = {
  state: {
    tasks: [],
  },
  mutations: {
    addTask(state, task: TaskInterface) {
      state.tasks.push(task);
    },
    updateTask(state, task: TaskInterface) {
      const index = state.tasks.findIndex((t) => t.id === task.id);
      state.tasks[index].description = task.description;
    },
    deleteTask(state, taskId: string) {
      const index = state.tasks.findIndex((task) => task.id === taskId);
      state.tasks.splice(index, 1);
    },
    setTasks(state, tasks: TaskInterface[]) {
      state.tasks = tasks;
    },
  },
  actions: {
    async fetchTasks({ commit }) {
      const response = await axios.get("/tasks");
      commit("setTasks", response.data);
    },
    async deleteTask({ commit }, taskId: string) {
      await axios.delete(`/tasks/${taskId}`);
      commit("deleteTask", taskId);
    },
    async addTask({ commit }, task: TaskInterface) {
      const response = await axios.post("/tasks", task);
      commit("addTask", response.data);
    },
    async updateTask({ commit }, task: TaskInterface) {
      const response = await axios.put(`/tasks/${task.id}`, task);
      commit("updateTask", response.data);
    },
  },
};
