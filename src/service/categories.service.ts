import axios from "axios";

const API_URL = "/api/category";

const GetCategories = async () => {
  const response = await axios.get(API_URL);
  console.log(response.data);
  return response.data;
};

const GetCategory = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

const UpdateCategory = async (id: string, data: any) => {
  const response = await axios.put(`${API_URL}/${id}`, data);
  return response.data;
};

const DeleteCategory = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

const CreateCategory = async (data: any) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};

const CategoriesService = {
  GetCategories,
  GetCategory,
  UpdateCategory,
  DeleteCategory,
  CreateCategory,
};

export default CategoriesService;
