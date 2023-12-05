"use client";

import PostsService from "@/service/posts.service";
import { IPost } from "@/types";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import DeletePost from "./DeletePost";
import PostSearchBar from "../common/SearchBar";

const PostListComponent = () => {
  const router = useRouter();

  const [posts, setPosts] = useState<IPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    try {
      const response = await PostsService.GetPosts();
      const postData: IPost[] = response.data;
      setPosts(postData);
      setFilteredPosts(postData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (id: IPost.id) => {
    console.log(id);
    router.push(`/posts/${id}`);
  };

  const handleCreate = () => {
    router.push("/posts/create");
  };
  const handleSearch = (searchTerm: string) => {
    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <div>
      <h1>Liste des Posts</h1>
      <Button variant="contained" onClick={handleCreate}>
        Creer un Post
      </Button>
      <PostSearchBar onSearch={handleSearch} />

      {filteredPosts.map((post: IPost) => (
        <div key={post.id}>
          {
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <p>{post.categories?.name || "Aucune catégorie"}</p>
              <p>{post.body}</p>
              <Button onClick={() => handleClick(post.id)} variant="contained">
                Update
              </Button>
              <DeletePost id={post.id} getAllPosts={getAllPosts} />
            </div>
          }
        </div>
      ))}
    </div>
  );
};

export default PostListComponent;
