"use client";

import { ICategory } from "@/types";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import CategoriesService from "@/service/categories.service";
import DeleteCategory from "./DeleteCategory";

const CategoriesList = () => {
  const router = useRouter();

  const [categories, setCategories] = useState<ICategory[]>([]);

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

  const handleClick = (categoryId: number) => {
    console.log(categoryId);
    router.push(`/categories/${categoryId}`);
  };

  return (
    <div>
      <h1>Liste des Catégories</h1>

      <Button
        onClick={() => router.push("/categories/create")}
        variant="contained"
      >
        Creer une Catégorie
      </Button>

      {categories.map((category: ICategory) => {
        return (
          <div key={category.id}>
            <h3>{category.name}</h3>
            <Button
              onClick={() => handleClick(category.id)}
              variant="contained"
            >
              Update Category
            </Button>
            <DeleteCategory
              id={category.id}
              getAllCategories={getAllCategories}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesList;
