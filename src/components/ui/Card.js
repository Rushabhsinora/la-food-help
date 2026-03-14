export function Card({ title, description, children, href, tags, milesAway }) {
  return (
    <div className="group bg-white/80 backdrop-blur-sm border border-white/60 rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-3 transition-all duration-500 overflow-hidden">
      <div className="p-8 h-full">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-titillium text-2xl md:text-3xl text-gray-900 group-hover:text-orange-700 transition-all duration-300 leading-tight">
            {title}
          </h3>
          {milesAway != null && (
            <span className="font-inter text-sm text-gray-400 whitespace-nowrap ml-4 mt-1">
              {milesAway} mi away
            </span>
          )}
        </div>
        {description && (
          <p className="font-inter text-lg text-gray-600 mb-6 leading-relaxed">{description}</p>
        )}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag) => (
              <span key={tag} className="bg-orange-100 text-orange-700 text-xs font-medium px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}
        {children}
        {href && (
          <div className="pt-4 border-t border-gray-100">
            <a>
              href={href}
              
              View details <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}