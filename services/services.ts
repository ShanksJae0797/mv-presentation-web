"use server";

import { HomePageBlogsInterface } from "@/types/types";
import axios from "axios";

export const fetchHomePageBlogs = async (): Promise<
  HomePageBlogsInterface[]
> => {
  const payload = { Category: "Mineral Owners" };
  try {
    const response = await axios.post(
      `${process.env.BASE_URL}/NewsFramework/Blog_data`,
      payload
    );
    if (response.status === 200 && response.statusText === "OK") {
      return response.data.data;
    } else {
      throw new Error("Blogs could not be fetched");
    }
  } catch (error) {
    throw new Error("Failed to fetch home page blogs");
  }
};
