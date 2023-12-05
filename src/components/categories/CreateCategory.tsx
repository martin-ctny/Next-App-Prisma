"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Button, TextField, Typography, Container } from "@mui/material";
import CategoriesService from "@/service/categories.service";
import { ICategoryCreateForm } from "@/types/index";
import { useRouter } from "next/navigation";

const CreateCategory = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<ICategoryCreateForm>({
    name: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await CategoriesService.CreateCategory({
        ...formData,
      });
      router.push("/categories");
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Create a New Category
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <Button variant="contained" color="primary" type="submit">
          Create Category
        </Button>
      </form>
    </Container>
  );
};

export default CreateCategory;
