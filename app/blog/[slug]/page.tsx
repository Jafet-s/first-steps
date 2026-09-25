import BlogPostContent from "@/app/components/utils/BlogPostContent";
import { blogPosts } from "@/app/data/blog-post";
import { BlogPostPageProps } from "@/app/types/blog";

async function BlogPostPage({ params }: BlogPostPageProps) {

  const { slug } = await params;

  const post = blogPosts[slug] ?? {
    title: slug.replace(/-/g, " "),
    paragraph: [
      "Este espacio reúne ideas, experiencias y recursos relacionados con la tecnología y la innovación digital.",
      "Te invitamos a seguir explorando los contenidos de nuestro blog para descubrir nuevas perspectivas.",
    ],
  };

  return <BlogPostContent post={post} />;
}

export default BlogPostPage;