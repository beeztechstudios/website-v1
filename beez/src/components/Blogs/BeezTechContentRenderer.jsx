// BeezTechContentRenderer.jsx
import React from 'react';
import { Lightbulb, Code } from 'lucide-react';

const ContentRenderer = ({ content }) => {
  return (
    <div className="space-y-8">
      {content.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return <p key={index} className="text-gray-700 leading-relaxed text-lg">{block.text}</p>;
          case 'heading':
            // Charcoal Gray text, strong border for separation
            return <h2 key={index} className="text-3xl font-bold text-gray-800 pt-6 mt-6 mb-4 border-b border-gray-200 pb-2">{block.text}</h2>;
          case 'list':
            return (
              <ul key={index} className="list-disc list-inside space-y-3 pl-6 text-gray-700 text-lg">
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          case 'quote':
            // Subtle Yellow accent on the left
            return (
              <blockquote key={index} className="border-l-4 border-yellow-500 pl-6 py-3 italic text-xl text-gray-600 my-8 bg-gray-50/70 rounded-r-lg">
                "{block.text}"
              </blockquote>
            );
          case 'tip':
            // "Tip" Box for highlighting main insight
            return (
                <div key={index} className="p-4 rounded-lg bg-yellow-50 border-l-4 border-yellow-600 my-6 flex items-start space-x-3">
                    <Lightbulb className="w-6 h-6 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-800 font-medium">{block.text}</p>
                </div>
            );
          case 'code':
            // Code block styling
            return (
                <pre key={index} className="bg-gray-800 text-white p-4 sm:p-6 rounded-lg overflow-x-auto my-8 font-mono text-sm shadow-xl">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-yellow-400 flex items-center"><Code className="w-4 h-4 mr-2" /> Code Example</span>
                    </div>
                    <code>{block.code}</code>
                </pre>
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default ContentRenderer;