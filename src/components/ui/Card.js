export function Card({ title, description, children, href }) {
  return (
    <div className="group bg-white/80 backdrop-blur-sm border border-white/60 rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-3 transition-all duration-500 overflow-hidden">
      <div className="p-8 h-full">
        <h3 className="font-titillium text-2xl md:text-3xl mb-4 text-gray-900 group-hover:text-orange-700 transition-all duration-300 leading-tight">
          {title}
        </h3>
        {description && (
          <p className="font-inter text-lg text-gray-600 mb-6 leading-relaxed">{description}</p>
        )}
        {children}
        {href && (
          <div className="pt-4 border-t border-gray-100">
            <a 
              href={href} 
              className="font-titillium inline-flex items-center gap-3 text-orange-600 hover:text-orange-800 font-semibold text-xl group-hover:translate-x-2 transition-all duration-300 pt-2"
            >
              View details <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
