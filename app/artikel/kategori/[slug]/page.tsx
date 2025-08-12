import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getCategoryBySlug, getArticlesByCategory, articleCategories } from "@/lib/articles-data";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return articleCategories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    return {
      title: "Kategori Tidak Ditemukan",
    };
  }

  return {
    title: `Artikel ${category.name}`,
    description: `${category.description} - Kumpulan artikel kesehatan dari Klinik Pratama Griya Medika Candimulyo`,
    keywords: [category.name.toLowerCase(), "artikel kesehatan", "klinik griya medika"],
  };
}

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

function getCategoryGradient(color: string) {
  const gradients = {
    emerald: "from-emerald-600 to-green-600",
    blue: "from-blue-600 to-indigo-600",
    pink: "from-pink-600 to-rose-600",
    cyan: "from-cyan-600 to-teal-600",
    orange: "from-orange-600 to-red-600",
  };
  return gradients[color as keyof typeof gradients] || gradients.emerald;
}

export default function KategoriPage({ params }: Props) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  const articles = getArticlesByCategory(params.slug);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className={`bg-gradient-to-br ${getCategoryGradient(category.color)} text-white py-20`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/artikel"
              className="inline-flex items-center text-white/80 hover:text-white font-medium mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Artikel
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Artikel {category.name}
            </h1>
            <p className="text-xl text-white/90 mb-8">
              {category.description}
            </p>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <p className="text-white/90 text-center">
                <strong>{articles.length}</strong> artikel tersedia dalam kategori ini
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {articles.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Belum Ada Artikel
            </h2>
            <p className="text-gray-600 mb-8">
              Artikel untuk kategori {category.name} akan segera hadir.
            </p>
            <Link
              href="/artikel"
              className="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors"
            >
              Lihat Artikel Lainnya
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
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
        )}
      </div>
    </div>
  );
}