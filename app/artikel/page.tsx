import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { articlesData, articleCategories, ArticleCategory } from "@/lib/articles-data";
import { Calendar, Clock, User, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Artikel Kesehatan",
  description: "Kumpulan artikel kesehatan terpercaya dari Klinik Pratama Griya Medika Candimulyo. Tips kesehatan, pencegahan penyakit, dan informasi medis terkini.",
  keywords: ["artikel kesehatan", "tips kesehatan", "informasi medis", "klinik griya medika"],
};

function getCategoryColor(color: string) {
  const colors = {
    emerald: "bg-emerald-100 text-emerald-800 border-emerald-200",
    blue: "bg-blue-100 text-blue-800 border-blue-200",
    pink: "bg-pink-100 text-pink-800 border-pink-200",
    cyan: "bg-cyan-100 text-cyan-800 border-cyan-200",
    orange: "bg-orange-100 text-orange-800 border-orange-200",
  };
  return colors[color as keyof typeof colors] || colors.emerald;
}

export default function ArtikelPage() {
  const featuredArticles = articlesData.filter(article => article.featured);
  const recentArticles = articlesData
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 9);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Artikel Kesehatan
            </h1>
            <p className="text-xl text-emerald-100 mb-8">
              Informasi kesehatan terpercaya dari tim medis profesional Klinik Pratama Griya Medika Candimulyo
            </p>
            
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-3">
              {articleCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`/artikel/kategori/${category.slug}`}
                  className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm font-medium transition-colors duration-200"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Artikel Pilihan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={article.images.find(img => img.isFeatured)?.url || article.images[0]?.url}
                      alt={article.images.find(img => img.isFeatured)?.alt || article.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(article.category.color)}`}>
                        {article.category.name}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      <Link 
                        href={`/artikel/${article.slug}`}
                        className="hover:text-emerald-600 transition-colors"
                      >
                        {article.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {article.author}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {article.readTime} min
                        </span>
                      </div>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(article.publishedAt).toLocaleDateString('id-ID')}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* All Articles */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Semua Artikel
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={article.images.find(img => img.isFeatured)?.url || article.images[0]?.url}
                    alt={article.images.find(img => img.isFeatured)?.alt || article.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(article.category.color)}`}>
                      {article.category.name}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    <Link 
                      href={`/artikel/${article.slug}`}
                      className="hover:text-emerald-600 transition-colors"
                    >
                      {article.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {article.author}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime} min
                      </span>
                    </div>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(article.publishedAt).toLocaleDateString('id-ID')}
                    </span>
                  </div>
                  
                  {article.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}