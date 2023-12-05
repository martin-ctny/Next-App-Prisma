"use client";
import { useEffect, useState } from "react";
import { Button, TextField, Typography, Container } from "@mui/material";
import PostsService from "@/service/posts.service";
import { ICategory, IPostCreateForm } from "@/types/index";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent } from "react";
import CategoriesService from "@/service/categories.service";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "../../../node_modules/@mui/material/index";

const CreatePost = () => {
  const router = useRouter();
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [formData, setFormData] = useState<IPostCreateForm>({
    title: "",
    content: "",
    categoryId: "",
  });

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    try {
      const response = await CategoriesService.GetCategories();
      setCategories(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(e.target);

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await PostsService.CreatePost({
        ...formData,
      });
      router.push("/posts");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Create a New Post
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          margin="normal"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <TextField
          label="Content"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          name="content"
          value={formData.content}
          onChange={handleChange}
        />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">categoryId</InputLabel>
          <Select
            value={formData.categoryId}
            label="test"
            name="categoryId"
            onChange={handleChange}
          >
            {categories.map((category) => (
              <MenuItem value={category.id}>{category.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button variant="contained" color="primary" type="submit">
          Create Post
        </Button>
      </form>
    </Container>
  );
};

export default CreatePost;
