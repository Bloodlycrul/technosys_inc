export default function ShimmerUI() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="w-full max-w-3xl p-4 space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gray-300 rounded-full animate-pulse" />
          <div className="flex-1 space-y-3">
            <div className="h-5 bg-gray-300 rounded animate-pulse" />
            <div className="h-5 bg-gray-300 rounded animate-pulse w-4/6" />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex space-x-4 justify-center">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-24 h-8 bg-gray-300 rounded animate-pulse"
            />
          ))}
        </div>

        {/* Content Area */}
        <div className="space-y-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-3">
              <div className="h-5 bg-gray-300 rounded animate-pulse w-3/4" />
              <div className="h-5 bg-gray-300 rounded animate-pulse" />
              <div className="h-5 bg-gray-300 rounded animate-pulse w-5/6" />
            </div>
          ))}
        </div>

        {/* Image placeholder */}
        <div className="w-full h-64 bg-gray-300 rounded animate-pulse" />

        {/* Footer */}
        <div className="flex justify-between">
          <div className="w-24 h-8 bg-gray-300 rounded animate-pulse" />
          <div className="w-24 h-8 bg-gray-300 rounded animate-pulse" />
          <div className="w-24 h-8 bg-gray-300 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}
