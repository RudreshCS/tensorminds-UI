'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

interface BlogPost {
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
}

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const BLOGS_PER_PAGE = 6;

  const blogs: BlogPost[] = [
    {
      title: 'Best Practices for PCB Design in 2026',
      category: 'Hardware',
      excerpt:
        'Essential guidelines for modern PCB design including signal integrity considerations and advanced layout techniques.',
      date: 'Jan 15, 2026',
      readTime: '5 min read',
      author: 'John Smith',
    },
    {
      title: 'Firmware Optimization Techniques',
      category: 'Software',
      excerpt:
        'Learn how to optimize embedded firmware for performance and power efficiency in resource-constrained environments.',
      date: 'Jan 10, 2026',
      readTime: '7 min read',
      author: 'Sarah Johnson',
    },
    {
      title: 'Automotive Industry Trends 2026',
      category: 'Industry News',
      excerpt:
        'Exploring the latest trends in automotive electronics and the shift towards software-defined vehicles.',
      date: 'Jan 5, 2026',
      readTime: '6 min read',
      author: 'Michael Chen',
    },
    {
      title: 'Getting Started with RTOS',
      category: 'Tutorials',
      excerpt:
        'A comprehensive guide to implementing Real-Time Operating Systems in embedded applications.',
      date: 'Dec 28, 2025',
      readTime: '10 min read',
      author: 'Emily Davis',
    },
    {
      title: 'Signal Integrity Analysis Guide',
      category: 'Hardware',
      excerpt:
        'Understanding SI-PI simulation and its importance in high-speed digital design.',
      date: 'Dec 20, 2025',
      readTime: '8 min read',
      author: 'Robert Wilson',
    },
    {
      title: 'Medical Device Compliance',
      category: 'Industry News',
      excerpt:
        'Navigating regulatory requirements for medical device development and certification.',
      date: 'Dec 15, 2025',
      readTime: '6 min read',
      author: 'Lisa Anderson',
    },
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const q = searchQuery.toLowerCase();
    return (
      blog.title.toLowerCase().includes(q) ||
      blog.excerpt.toLowerCase().includes(q) ||
      blog.category.toLowerCase().includes(q) ||
      blog.author.toLowerCase().includes(q)
    );
  });

  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);
  const start = (currentPage - 1) * BLOGS_PER_PAGE;
  const paginatedBlogs = filteredBlogs.slice(start, start + BLOGS_PER_PAGE);

  return (
    <>
      {/* ================= HEADER + SEARCH (SAME STYLE AS OTHER PAGES) ================= */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-md" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            Blog & Insights
          </h1>

          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Expert insights, tutorials, and industry trends in embedded systems
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-12 pr-4 py-3 border-2 border-primary rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">

          {paginatedBlogs.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedBlogs.map((blog, index) => (
                  <article
                    key={index}
                    className="bg-white rounded-2xl border-2 border-gray-200
                               hover:border-primary hover:shadow-lg
                               transition-all duration-300"
                  >
                    <div className="bg-gradient-to-br from-primary to-accent-blue h-40 rounded-t-2xl" />

                    <div className="p-5">
                      <div className="flex justify-between mb-3">
                        <span className="px-3 py-1 bg-secondary-gray text-primary text-xs font-bold rounded-full border border-primary">
                          {blog.category}
                        </span>
                        <span className="text-sm text-gray-500">
                          {blog.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {blog.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4">
                        {blog.excerpt}
                      </p>

                      <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                        <span className="text-sm font-medium text-gray-700">
                          {blog.author}
                        </span>
                        <span className="text-sm text-gray-500">
                          {blog.date}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* ================= PAGINATION ================= */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-3 mt-12">
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-4 py-2 rounded-lg border-2 font-semibold
                        ${
                          currentPage === i + 1
                            ? 'bg-primary text-white border-primary'
                            : 'border-gray-300 hover:border-primary'
                        }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-bold mb-3">No blogs found</h3>
              <button
                onClick={() => setSearchQuery('')}
                className="bg-primary text-white px-6 py-2 rounded-lg"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
