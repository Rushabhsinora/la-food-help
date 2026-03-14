export function Card({ title, description, children, href, tags }) {
  return (
    <div className="bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 mb-4">
      <h3 className="font-semibold text-lg mb-2 text-black">{title}</h3>
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {children}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag) => (
            <span key={tag} className="bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      )}
      {href && (
        <a href={href} className="text-blue-600 hover:underline font-medium mt-4 block">
          View details →
        </a>
      )}
    </div>
  );
}