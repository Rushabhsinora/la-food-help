export function Card({ title, description, children, href }) {
  return (
    <div className="bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 mb-4">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {children}
      {href && (
        <a href={href} className="text-blue-600 hover:underline font-medium">
          View details →
        </a>
      )}
    </div>
  );
}
