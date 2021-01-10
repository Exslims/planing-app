
export type BaseTask = Readonly<{
  title: string;
  completed: boolean;
}>

export type Goal = Readonly<{
  id: string;
  title: string;
  tasks: BaseTask[];
}>;
