export interface Table {
  id: number | null;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export interface APIResponse<T> {
  message: string;
  result: T;
}
