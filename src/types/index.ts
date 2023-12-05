export interface IPost {
  id: number;
  title: string;
  content: string;
}

export interface ICategory {
  id: number;
  name: string;
}
export interface ICategoryForm {
  name: string;
}

export interface ICategoryCreateForm {
  name: string;
}

export interface IPostForm {
  title: string;
  content: string;
}

export interface IPostCreateForm {
  title: string;
  content: string;
  categoryId: string;
}
