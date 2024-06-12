"use client";

import { useQuery } from "@apollo/client";
import { useParams } from "next/navigation";
import { gql } from "../../../__generated__/gql";
import Image from "next/image";
import food from "../../../public/images/foody-image.jpg";
import { useState } from "react"; 

const GET_PRODUCT_DETAILS = gql(`
  query GetProduct($shopId: ID!, $slugOrId: String!) {
    catalogItemProduct(shopId: $shopId, slugOrId: $slugOrId) {
      product {
        _id
        title
        description
        primaryImage {
          URLs {
            small
            medium
            large
            original
            thumbnail

          }
        }
        variants {
          _id
          title
          attributeLabel
          optionTitle
          pricing {
            displayPrice
            currency {
              code
            }
          }
        }
      }
    }
  }
`);

interface Variant {
  _id: string;
  title: string;
  attributeLabel?: string;
  optionTitle: string;
  pricing: {
    displayPrice: string;
    currency: {
      code: string;
    };
  }[];
}

interface Product {
  _id: string;
  title: string;
  description: string;
  primaryImage: {
    URLs: {
      medium: string;
      original: string
    };
  };
  variants: Variant[];
}

const ProductDetail = () => {
  const params = useParams<{ slug: string }>();
  const { slug } = params;

  const { loading, error, data } = useQuery<{
    catalogItemProduct: { product: Product };
  }>(GET_PRODUCT_DETAILS, {
    variables: {
      shopId: "",
      slugOrId: slug,
    },  
  });


  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("Error fetching product details:", error);
    return (
      <p className="container mx-auto text-red-600">Error: {error.message}</p>
    );
  }

  const product = data?.catalogItemProduct?.product;

  if (!product) {
    return <p className="container mx-auto text-red-600">Product not found</p>;
  }

  const handleVariantSelect = (variant: Variant) => {
    setSelectedVariant(variant);
  };

  const renderPrice = (variant: Variant) => {
    return <>{variant.pricing[0].displayPrice}</>;
  };

  return (
    <div className="container mx-auto p-4 blur-bg my-5">
      <div className="flex flex-col lg:flex-row +bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg p-6">
        <div className="lg:w-1/2">
          <div className="my-10 md:flex md:justify-center sm:flex sm:justify-center">
            <Image
              src={food}
              alt={product.title || "Product image"}
              className="object-cover"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="lg:w-1/2 p-5 flex flex-col space-y-7 self-center">
          <h1 className="text-3xl text-gray-400 mb-2 font-bold">{product.title}</h1>
          <p className="text-gray-800">{product.description}</p>
          <div>
            <p className="text-xl font-semibold">
              {selectedVariant
                ? renderPrice(selectedVariant)
                : renderPrice(product.variants[0])}
            </p>
            <div className="flex space-x-2 mt-3">
              <span className="bg-gray-500 text-white p-2 rounded">
                {selectedVariant
                  ? selectedVariant.title
                  : product.variants[0].title}
              </span>
            </div>
          </div>
          <div className="mt-4"> 
            <h2 className="text-lg text-gray-400 font-medium">Select :</h2>
            <div className="flex space-x-2 mt-3">
              {product.variants.map((variant) => (
                <button
                  key={variant._id}
                  className={`border p-2 rounded ${
                    selectedVariant?._id === variant._id
                      ? "bg-gray-500 text-white transition duration-300"
                      : ""
                  }`}
                  onClick={() => handleVariantSelect(variant)}
                >
                  {variant.optionTitle}
                </button>
              ))}
            </div>
          </div>
          <button className="bg-gray-700 text-white text-2xl px-4 py-2 w-full rounded">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;