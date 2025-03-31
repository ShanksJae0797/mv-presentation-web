import ImageCarousel from "./_components/homepageCarousel";
import MineralUpdates from "./_components/mineralUpdates";
import MineralFeatures from "./_components/mineralFeatures";
import MineralDataStorage from "./_components/mineralDataStorage";
import { fetchHomePageBlogs } from "@/services/services";
import { HomePageBlogsInterface } from "@/types/types";
import BlogPreviewCarousel from "./_components/blogPreviewCarousel";

export default async function Home() {
  const blogs: HomePageBlogsInterface[] = await fetchHomePageBlogs();
  return (
    <main>
      <ImageCarousel />
      <MineralUpdates />
      <MineralFeatures />
      <MineralDataStorage />
      <BlogPreviewCarousel blogs={blogs} />
    </main>
  );
}
