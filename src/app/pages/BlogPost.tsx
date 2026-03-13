import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import ReactMarkdown from "react-markdown";
import { Calendar, ArrowLeft, Tag } from "lucide-react";

interface BlogPostData {
  title: string;
  date: string;
  excerpt?: string;
  featuredImage?: string;
  tags?: string[];
  content: string;
}

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Fetch the markdown file from the public/blog directory
        const response = await fetch(`/blog/${slug}.md`);
        
        if (!response.ok) {
          throw new Error("Post not found");
        }

        const text = await response.text();
        
        // Parse frontmatter manually (simple implementation)
        const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
        const match = text.match(frontmatterRegex);
        
        if (match) {
          const frontmatter = match[1];
          const content = match[2];
          
          // Parse frontmatter fields
          const titleMatch = frontmatter.match(/title: ["'](.+)["']/);
          const dateMatch = frontmatter.match(/date: (.+)/);
          const excerptMatch = frontmatter.match(/excerpt: ["'](.+)["']/);
          const featuredImageMatch = frontmatter.match(/featuredImage: ["'](.+)["']/);
          const tagsMatch = frontmatter.match(/tags: \[(.*)\]/);
          
          const postData: BlogPostData = {
            title: titleMatch ? titleMatch[1] : "Untitled",
            date: dateMatch ? dateMatch[1] : "",
            excerpt: excerptMatch ? excerptMatch[1] : undefined,
            featuredImage: featuredImageMatch && featuredImageMatch[1] ? featuredImageMatch[1] : undefined,
            tags: tagsMatch ? tagsMatch[1].split(',').map(t => t.trim().replace(/["']/g, '')) : [],
            content: content.trim()
          };
          
          setPost(postData);
        }
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching post:", error);
        setError(true);
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-500">Loading post...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-semibold mb-4 text-gray-900">Post Not Found</h1>
            <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            {post.featuredImage && (
              <div className="aspect-video w-full overflow-hidden rounded-lg mb-8">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <header className="mb-8">
              <h1 className="text-4xl font-semibold mb-4 text-gray-900">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.date)}</span>
                </div>
              </div>

              {post.tags && post.tags.length > 0 && (
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="w-4 h-4 text-gray-400" />
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            <div className="prose prose-lg max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Posts
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
