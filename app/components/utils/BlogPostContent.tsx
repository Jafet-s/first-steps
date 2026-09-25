import { BlogPost } from "@/app/types/blog";

type BlogPosts = {
    post: BlogPost;
};


function BlogPostContent({ post }: BlogPosts) {

    return (
        <div className="mx-auto max-w-3xl px-6 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                {post.title}
            </h1>

                {post.paragraph.map((paragraph, index) => (
                    <p key={index} className="text-lg text-zinc-600">
                        {paragraph}
                    </p>
                ))}
            
        </div>
    );
}

export default BlogPostContent;