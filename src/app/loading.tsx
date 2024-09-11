export default function ShimmerUI() {
  return (
    <div className="mt-32 px-5 md:mt-32 lg:m-20 lg:mt-32">
      <div className="w-full max-w-3xl mx-auto p-4 space-y-4">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex space-x-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-20 h-6 bg-gray-200 rounded animate-pulse"
            />
          ))}
        </div>

        {/* Content Area */}
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
              <div className="h-4 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
            </div>
          ))}
        </div>

        {/* Image placeholder */}
        <div className="w-full h-48 bg-gray-200 rounded animate-pulse" />

        {/* Footer */}
        <div className="flex justify-between">
          <div className="w-20 h-6 bg-gray-200 rounded animate-pulse" />
          <div className="w-20 h-6 bg-gray-200 rounded animate-pulse" />
          <div className="w-20 h-6 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}
