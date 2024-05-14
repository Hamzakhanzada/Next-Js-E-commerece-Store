"use client";
import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
// import SkeletonLoader from "./SkeletonLoader";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


import AllProducts from "./Allproducts";

import food from "../../public/images/fast-food.jpg";
import Image from "next/image";

import { MdFilterAlt } from "react-icons/md";

const GET_DATA = gql`
  query ($tagIds: [ID!]) {
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
              description
              pricing {
                displayPrice
              }
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
`;

const Products = () => {
  const [tagId, setTagId] = useState("");
  const { loading, error, data } = useQuery(GET_DATA, {
    variables: {
      tagIds: tagId ? [tagId] : null,
    },
  });
  const [showAllProducts, setShowAllProducts] = useState(false);
  const queryParameters = useSearchParams();
  const search = queryParameters.get("tag");

  const handleAllProductsClick = () => {
    setTagId("");
    setShowAllProducts(false);
  };

  if (loading)
    return (
      <div>
        <Skeleton className="h-[90px]" count={5} />

      </div>
    );
  if (error)
    return (
      <p className="container mx-auto text-red-600">Error : {error.message}</p>
    );

  console.log("catalog items", data.catalogItems);

  return (
    <div className="container mx-auto font-open-sans">
      <div className="product-section p-6">
        <h2 className="text-center">Or subscribe to the newsletter</h2>
        <div>
          <nav className="flex items-center justify-between bg-white py-7">
            <ul className="hidden lg:flex">
              <li className="mr-5">
                <Link
                  href="/"
                  className={`${
                    !search ? " text-black font-extrabold " : ""
                  } text-black hover:text-primary transition-colors duration-300 ease-in-out`}
                  onClick={handleAllProductsClick}
                  scroll={false}
                >
                  All Products
                </Link>
              </li>
              {data.tags.nodes.map((menuItems: any) => {
                const isActive = search === menuItems.slug;
                return (
                  <li key={menuItems.id} className="mr-5">
                    <Link
                      href={{
                        query: { tag: menuItems.slug },
                      }}
                      className={`${
                        isActive ? " text-black font-extrabold" : ""
                      } text-black  transition-colors duration-300 ease-in-out`}
                      onClick={() => {
                        setTagId(menuItems._id);
                      }}
                      scroll={false}
                    >
                      {menuItems.displayTitle}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <button className="bg-primary text-white py-2 px-4 rounded flex bg-gray-800">
              <MdFilterAlt className="text-xl mr-1" />
              Filter
            </button>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {showAllProducts ? (
              <AllProducts />
            ) : (
              data.catalogItems.edges.map((edge: { node: any }) => {
                const { node } = edge;
                const { product } = node;
                return (
                  <div
                    key={product._id}
                    className="product-card relative flex flex-col overflow-hidden bg-white hover:shadow-md transition"
                  >
                    <Link href="#">
                      <Image
                        className="object-cover sm:mx-auto"
                        src={food}
                        alt="product image"
                      />
                    </Link>
                    <div className="mt-4 px-3 pb-5">
                      <Link href="#">
                        <h5 className="text-sm tracking-tight">
                          {product.title}
                        </h5>
                      </Link>
                      <div className="mt-2 flex justify-between">
                        {product.pricing.map(
                          (
                            price: {
                              displayPrice: any;
                            },
                            index: React.Key | null | undefined
                          ) => (
                            <h5
                              key={index}
                              className="text-sm ms-auto tracking-tight"
                            >
                              {price.displayPrice}
                            </h5>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
