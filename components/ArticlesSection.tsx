"use client";

import Link from "next/link";
import Image from "next/image";
import { getFeaturedArticles } from "@/lib/articles-data";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

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

export default function ArticlesSection() {
  const featuredArticles = getFeaturedArticles().slice(0, 3);

  if (featuredArticles.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Artikel Kesehatan Terbaru
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dapatkan informasi kesehatan terpercaya dan tips praktis dari tim medis profesional kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
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
                  <div className="flex items-center space-x-3">
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
                
                <Link
                  href={`/artikel/${article.slug}`}
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                >
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/artikel"
            className="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Lihat Semua Artikel
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}