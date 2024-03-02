import { StateProject, project } from "@/store/modules/projects";
import { StateTask, task } from "@/store/modules/tasks";

import { createStore, Store, useStore as VuexUseStore } from "vuex";
import { InjectionKey } from "vue";
export interface State {
  project: StateProject;
  task: StateTask;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    project: {
      projects: [],
    },
    task: {
      tasks: [],
    },
  },
  modules: {
    project,
    task,
  },
});

export function useStore(): Store<State> {
  return VuexUseStore(key);
}
