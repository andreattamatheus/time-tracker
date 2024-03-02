import ProjectInterface from "./ProjectInterface";

export default interface TaskInterface {
  id: string;
  description: string;
  project: ProjectInterface;
  durationInSeconds: number;
}
