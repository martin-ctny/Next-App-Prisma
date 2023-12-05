import { IPostCreateForm, IPostForm } from "@/types/index";
import axios from "axios";

const API_URL = "/api/posts";

const GetPosts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const GetPost = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

const UpdatePost = async (id: string, data: any) => {
  const response = await axios.put(`${API_URL}/${id}`, data);
  return response.data;
};

const DeletePost = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

const CreatePost = async (data: IPostCreateForm) => {
  const categoryIdAsInt = parseInt(data.categoryId, 10);
  const response = await axios.post(API_URL, {
    ...data,
    categoryId: categoryIdAsInt,
  });
  return response.data;
};

const PostsService = {
  GetPosts,
  GetPost,
  UpdatePost,
  DeletePost,
  CreatePost,
};

export default PostsService;
