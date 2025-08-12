import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getArticleBySlug, articlesData, getRecentArticles } from "@/lib/articles-data";
import { Calendar, Clock, User, ArrowLeft, Share2, Tag } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "Artikel Tidak Ditemukan",
    };
  }

  const featuredImage = article.images.find(img => img.isFeatured) || article.images[0];

  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.tags,
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author],
      images: featuredImage ? [
        {
          url: featuredImage.url,
          width: 800,
          height: 600,
          alt: featuredImage.alt,
        }
      ] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: featuredImage ? [featuredImage.url] : [],
    },
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

export default function ArtikelDetailPage({ params }: Props) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const featuredImage = article.images.find(img => img.isFeatured) || article.images[0];
  const otherImages = article.images.filter(img => !img.isFeatured);
  const recentArticles = getRecentArticles(3).filter(a => a.slug !== article.slug);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <Link
            href="/artikel"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Artikel
          </Link>
        </div>
      </div>

      <article className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-8">
            <div className="mb-4">
              <Link
                href={`/artikel/kategori/${article.category.slug}`}
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(article.category.color)}`}
              >
                {article.category.name}
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span className="font-medium">{article.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{new Date(article.publishedAt).toLocaleDateString('id-ID', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>{article.readTime} menit baca</span>
              </div>
            </div>

            <p className="text-xl text-gray-700 leading-relaxed">
              {article.excerpt}
            </p>
          </header>

          {/* Featured Image */}
          {featuredImage && (
            <div className="mb-8">
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
                <Image
                  src={featuredImage.url}
                  alt={featuredImage.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {featuredImage.caption && (
                <p className="text-sm text-gray-600 mt-2 text-center italic">
                  {featuredImage.caption}
                </p>
              )}
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-8">
            <div 
              dangerouslySetInnerHTML={{ __html: article.content }}
              className="text-gray-800 leading-relaxed"
            />
          </div>

          {/* Other Images */}
          {otherImages.length > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Galeri</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {otherImages.map((image) => (
                  <div key={image.id} className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                    {image.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2">
                        <p className="text-sm">{image.caption}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {article.tags.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Tag className="w-5 h-5 mr-2" />
                Tag Artikel
              </h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Share */}
          <div className="border-t border-gray-200 pt-8 mb-8">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Share2 className="w-5 h-5 mr-2" />
                Bagikan Artikel
              </h3>
              <div className="flex space-x-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Facebook
                </button>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  WhatsApp
                </button>
                <button className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors">
                  Twitter
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {recentArticles.length > 0 && (
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Artikel Lainnya
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recentArticles.map((relatedArticle) => (
                  <article
                    key={relatedArticle.id}
                    className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative h-32">
                      <Image
                        src={relatedArticle.images.find(img => img.isFeatured)?.url || relatedArticle.images[0]?.url}
                        alt={relatedArticle.images.find(img => img.isFeatured)?.alt || relatedArticle.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                        <Link 
                          href={`/artikel/${relatedArticle.slug}`}
                          className="hover:text-emerald-600 transition-colors"
                        >
                          {relatedArticle.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {relatedArticle.excerpt}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}