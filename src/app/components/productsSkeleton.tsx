
const ProductSkeleton = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 mt-10">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 animate-pulse"
          >
            {/* Image Skeleton */}
            <div className="bg-gray-300 h-48 w-full rounded-md"></div>
  
            {/* Content Skeleton */}
            <div className="mt-4 space-y-2">
              <div className="bg-gray-300 h-6 w-3/4 rounded"></div>
              <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
              <div className="bg-gray-300 h-4 w-1/4 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductSkeleton;
  