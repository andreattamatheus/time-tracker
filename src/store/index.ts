import ProjectInterface from "@/interfaces/ProjectInterface";
import { createStore, Store, useStore as VuexUseStore } from "vuex";
import { InjectionKey } from "vue";

interface State {
  projects: ProjectInterface[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    projects: [],
  },
  mutations: {
    addProject(state, projectName: string) {
      const project = {
        id: new Date().toISOString(),
        name: projectName,
      } as ProjectInterface;
      state.projects.push(project);
    },
  },
});

export function useStore(): Store<State> {
  return VuexUseStore(key);
}
