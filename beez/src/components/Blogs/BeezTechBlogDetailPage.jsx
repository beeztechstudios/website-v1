// BeezTechBlogDetailPage.jsx
import React from 'react';
import { ArrowLeft, Clock,  Zap } from 'lucide-react';
import ContentRenderer from './BeezTechContentRenderer'; // Component for rich content
import { beezTechBlogPosts } from './BeezTechBlogData'; 
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom'; // Use useParams for actual routing

// This is a simple function to get 3 related posts (excluding the current one)
const getRelatedPosts = (currentPostId, currentCategory) => {
    return beezTechBlogPosts
        .filter(p => p.id !== currentPostId && p.category === currentCategory)
        .slice(0, 3);
};

const BeezTechBlogDetailPage = ({ slug = 'mvp-product-market-fit' }) => {
    // In a real app: const { slug } = useParams();
    const post = beezTechBlogPosts.find(p => p.slug === slug);

    if (!post) {
        return <div className="p-12 text-center text-xl bg-white min-h-screen">404 - Article not found.</div>;
    }

    const relatedPosts = getRelatedPosts(post.id, post.category);

    return (
        <div className="bg-white min-h-screen font-inter">

            {/* Header & Meta */}
            <div className="pt-24 pb-8 bg-gray-50 border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Back Link */}
                    <a href="/blog" className="inline-flex items-center text-gray-600 hover:text-yellow-600 transition-colors mb-6">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Insights
                    </a>
                    
                    {/* Title */}
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
                        {post.title}
                    </h1>
                    
                    {/* Meta Info */}
                    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
                        <span className="font-semibold text-yellow-600">{post.category}</span>
                        <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {post.readingTime}</span>
                        <span>Published: {post.date}</span>
                    </div>
                </div>
            </div>

            {/* Main Content & Sidebar Layout (Single Column) */}
            <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                
                {/* Cover Image */}
                <div className="mb-10 rounded-xl overflow-hidden shadow-xl">
                    {/* Replace this with your actual image component */}
                    <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-xl">Cover Image Placeholder</span>
                    </div>
                </div>

                {/* Author Section */}
                <div className="flex items-center space-x-4 mb-12 pb-4 border-b border-gray-100">
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-bold text-xl">
                        {post.author.charAt(0)}
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Written by</p>
                        <p className="text-lg font-semibold text-gray-900">{post.author}</p>
                    </div>
                </div>


                {/* Rich Article Content */}
                <article className="prose max-w-none">
                    <ContentRenderer content={post.content} />
                </article>
                
                {/* Keywords/Tags */}
                <div className="mt-16 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Keywords:</h3>
                    <div className="flex flex-wrap gap-2">
                        {post.keywords.map((tag, index) => (
                            <span key={index} className="px-3 py-1 text-sm font-medium text-gray-800 bg-gray-100 rounded-full hover:bg-yellow-100 transition-colors">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
            
            {/* Related Posts Section */}
            {relatedPosts.length > 0 && (
                <div className="bg-gray-50 py-16 border-t border-gray-100 mt-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">More {post.category} Insights</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {relatedPosts.map((rPost) => (
                                <a 
                                    key={rPost.id}
                                    href={`/blog/${rPost.slug}`}
                                    className="block p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                                >
                                    <p className="text-sm font-medium text-yellow-600 mb-1">{rPost.category}</p>
                                    <h3 className="text-lg font-semibold text-gray-900 hover:text-yellow-700 transition-colors">
                                        {rPost.title}
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-2">{rPost.readingTime}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}


            {/* Footer CTA */}
            <div className="bg-gray-900 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-extrabold text-white mb-4">
                        Want to build something scalable?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Talk to our experts about **SaaS Development** and **Recurring Tech Support** for a long-term partnership.
                    </p>
                    <Link
                        to="/book-call" 
                        className="inline-block px-8 py-3 bg-yellow-500 text-gray-900 font-bold text-lg rounded-full shadow-lg hover:bg-yellow-400 transition-colors"
                    >
                        Book a Free Strategy Session
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BeezTechBlogDetailPage;