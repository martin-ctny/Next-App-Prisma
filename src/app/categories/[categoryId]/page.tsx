"use client";

import UpdateCategory from "@/components/categories/UpdateCategory";
import UpdatePost from "@/components/posts/UpdatePost";
import CategoriesService from "@/service/categories.service";
import { ICategory, ICategoryForm } from "@/types/index";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";

const PostSinglePage = ({
  params,
  searchQuery,
}: {
  params: {
    categoryId: string;
  };
  searchQuery: {
    q: string;
  };
}) => {
  const [category, setCategory] = useState<ICategory | null>(null);
  const [formValues, setFormValues] = useState<ICategoryForm>({
    name: "",
  });

  useEffect(() => {
    console.log(params.categoryId);
    getOneCategory();
  }, [params]);

  const getOneCategory = async () => {
    try {
      const response = await CategoriesService.GetCategory(params.categoryId);
      setCategory(response.data);
      setFormValues({
        name: response.data.name,
      });

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted with values:", formValues);
  };

  return (
    <div>
      <h1>Post Single Page {params.categoryId}</h1>
      {category && (
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <UpdateCategory formValues={formValues} id={params.categoryId} />
          </div>
        </form>
      )}
    </div>
  );
};

export default PostSinglePage;
