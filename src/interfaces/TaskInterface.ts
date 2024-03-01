import ProjectInterface from "./ProjectInterface";

export default interface TaskInterface {
  durationInSeconds: number;
  description: string;
  project: ProjectInterface;
}
