export interface Student {
  age: number;
  city: string;
  gender: "male" | "female";
  id?: string;
  mark: number;
  name: string;

  createdAt: number;
  updatedAt: number;
}
