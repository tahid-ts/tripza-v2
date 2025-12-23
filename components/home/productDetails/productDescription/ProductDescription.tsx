import React from "react";

interface ProductDescriptionProps {
  mainDescription: string;
  keyFeatures: string[];
  perfectFor: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  mainDescription,
  keyFeatures,
  perfectFor,
}) => {
  return (
    <div className=" bg-white">
      {/* Main Description */}
      <p className="text-gray-700 leading-relaxed mb-8">{mainDescription}</p>

      {/* Key Features Section */}
      <h2 className="text-2xl font-serif mb-4">Key Features:</h2>
      <ul className="space-y-2 mb-6">
        {keyFeatures.map((feature, index) => (
          <li key={index} className="text-gray-700">
            • {feature}
          </li>
        ))}
      </ul>

      {/* Perfect For Section */}
      <p className="text-gray-700">
        <span className="font-semibold">Perfect For:</span> {perfectFor}
      </p>
    </div>
  );
};

export default ProductDescription;
