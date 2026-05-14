/**
 * SectionSkeleton - Loading placeholder for lazy sections
 * Provides visual feedback while content is loading
 */
const SectionSkeleton = ({ height = '400px', className = '' }) => {
  return (
    <div 
      className={`w-full animate-pulse ${className}`}
      style={{ minHeight: height }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Header skeleton */}
        <div className="text-center mb-12">
          <div className="h-4 w-32 bg-gray-200 rounded mx-auto mb-4" />
          <div className="h-8 w-64 bg-gray-300 rounded mx-auto mb-4" />
          <div className="h-4 w-96 max-w-full bg-gray-200 rounded mx-auto" />
        </div>
        
        {/* Content skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-100 rounded-lg p-6">
              <div className="h-40 bg-gray-200 rounded mb-4" />
              <div className="h-4 bg-gray-200 rounded mb-2" />
              <div className="h-4 bg-gray-200 rounded w-3/4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionSkeleton;
