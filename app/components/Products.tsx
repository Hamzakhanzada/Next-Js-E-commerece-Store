import React, { useState } from "react";
import Link from "next/link";
import { FaFilter } from "react-icons/fa6";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { useSearchParams } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'; // Import CSS for skeleton
import bag from "../../public/images/fast-food.jpg";
import { gql } from "@/__generated__";

const GET_PRODUCTS = gql(`
  query GetProducts ($tagIds: [ID!]) {
    tags(shopId: "cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ==") {
      nodes { 
        _id
        name
        displayTitle
        slug
      }
    }
  
    catalogItems(
      shopIds: ["cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ=="]
      tagIds: $tagIds
    ) {
      edges {
        node {
          ... on CatalogItemProduct {
            product {
              title
              slug
              pricing {
                displayPrice
              }
              description
              _id
              variants {
                _id
                title
                media {
                  URLs {
                    small
                  }
                }
              }
            }
          }
        } 
      }
    }
  }
`);

const Product = () => {
  const [tagId, setTagId] = useState("");
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: { tagIds: tagId ? [tagId] : null },
  });

  const handleAllProductsClick = () => {
    setTagId("");
  };
  const searchParams = useSearchParams();
  const search = searchParams.get("tag");

  if (error) return <p>Error loading data...</p>;

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div>
          <h1 className="text-[50px] text-center">
            Or subscribe to the newsletter
          </h1>
        </div>
        <div className="flex justify-between mt-10 flex-wrap">
          <div>
            <ul className="flex gap-5 flex-wrap justify-between lg:text-base open-sans">
              <li className="transition-colors font-semibold duration-300 ease-in-out">
                <Link
                  onClick={handleAllProductsClick}
                  scroll={false}
                  href="/"
                  className={`transition-colors duration-300 mr-4 ease-in-out ${
                    !search ? "font-extrabold text-black" : ""
                  }`}
                >
                  All Products
                </Link>
              </li>
              {data?.tags?.nodes?.map((tag: any) => {
                const isActive = search === tag.slug;
                return (
                  <li key={tag._id} className="mr-5">
                    <Link
                      scroll={false}
                      href={{ query: { tag: tag.slug } }}
                      className={`${
                        isActive ? "font-extrabold text-black" : ""
                      } text-black transition-colors duration-300 ease-in-out`}
                      onClick={() => {
                        setTagId(tag._id);
                      }}
                    >
                      {tag.displayTitle}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <button className="bg-black open-sans text-white flex py-[5px] px-[15px]">
              <FaFilter className="mt-1 me-2" />
              Filter
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-9 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {loading
            ? Array.from({ length: 8 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
            : data?.catalogItems?.edges?.map((edge: any) => {
                const { node } = edge;
                const { product } = node;
                return <ProductCard key={product._id} product={product} />;
              })}
        </div>
      </div>
    </section>
  );
};

const SkeletonCard = () => (
  <div className="hover:shadow-xl p-2">
    <Skeleton height={300}/>
    <div className="px-[10px] py-[18px] text-base roboto">
      <Skeleton width="60%" />
      <div className="flex justify-between mt-2">
        <Skeleton width="40%" />
        <Skeleton width="20%" />
      </div>
    </div>
  </div>
);

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="hover:shadow-xl">
      <Link href={`/products/${product.slug}`} passHref>
        <Image src={bag} alt={product.title} width={300} height={300} />
      </Link>
      <div className="px-[10px] py-[18px] text-base roboto">
        {product.title}
        <div className="flex justify-between">
          <span className="text-[#00000080]">{product.category}</span>
          {product.pricing && (
            <span>
              {product.pricing.map((price: any) => (
                <span key={price._id}>{price.displayPrice}</span>
              ))}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};


export default Product;
