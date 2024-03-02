import ProjectInterface from "@/interfaces/ProjectInterface";
import { Module } from "vuex";
import { State } from "@/store";
import axios from "@/plugins/axios";

export interface StateProject {
  projects: ProjectInterface[];
}

export const project: Module<StateProject, State> = {
  mutations: {
    addProject(state, project: ProjectInterface) {
      state.projects.push(project);
    },
    updateProject(state, project: ProjectInterface) {
      const index = state.projects.findIndex((p) => p.id === project.id);
      state.projects[index].name = project.name;
    },
    deleteProject(state, projectId: string) {
      const index = state.projects.findIndex(
        (project) => project.id === projectId
      );
      state.projects.splice(index, 1);
    },
    setProjects(state, projects: ProjectInterface[]) {
      state.projects = projects;
    },
  },
  actions: {
    async fetchProjects({ commit }) {
      const response = await axios.get("/projects");
      commit("setProjects", response.data);
    },
    async deleteProject({ commit }, projectId: string) {
      await axios.delete(`/projects/${projectId}`);
      commit("deleteProject", projectId);
    },
    async addProject({ commit }, projectName: string) {
      const response = await axios.post("/projects", { name: projectName });
      console.log(response.data);
      commit("addProject", response.data);
    },
    async updateProject({ commit }, project: ProjectInterface) {
      const response = await axios.put(`/projects/${project.id}`, {
        name: project.name,
      });
      commit("updateProject", response.data);
    },
  },
};
