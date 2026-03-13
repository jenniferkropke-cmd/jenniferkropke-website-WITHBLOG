import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Calendar, Clock, Tag } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  featuredImage?: string;
  tags?: string[];
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch blog posts from the public/blog directory
    const fetchPosts = async () => {
      try {
        // In a real implementation, you'd fetch this list dynamically
        // For now, we'll load the sample post
        const samplePosts: BlogPost[] = [
          {
            slug: "2026-03-13-welcome-to-my-blog",
            title: "Welcome to My Blog",
            date: "2026-03-13T12:00:00.000Z",
            excerpt: "Welcome to my creative journey! I'm excited to share insights, behind-the-scenes stories, and tips from my work in video production, web design, and digital storytelling.",
            tags: ["welcome", "introduction"]
          }
        ];
        
        setPosts(samplePosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-semibold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Blog
            </h1>
            <p className="text-lg text-gray-600">
              Insights, stories, and tips from my creative journey
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Loading posts...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    {post.featuredImage && (
                      <div className="aspect-video w-full overflow-hidden">
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    
                    <div className="p-6">
                      <h2 className="text-2xl font-semibold mb-3 text-gray-900 hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>5 min read</span>
                        </div>
                      </div>

                      {post.excerpt && (
                        <p className="text-gray-700 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                      )}

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

                      <div className="mt-4">
                        <span className="text-primary font-medium hover:underline">
                          Read more →
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
