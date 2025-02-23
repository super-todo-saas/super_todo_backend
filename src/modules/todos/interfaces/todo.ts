export interface Todo {
  id: number;
  title: string | number;
  completed: boolean;
  createdAt: string;
  notes?: string | number;
}
