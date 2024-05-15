import React from "react";
import Link from "next/link";
import { FaFilter } from "react-icons/fa6";
import Image from "next/image";
import { useQuery, gql } from "@apollo/client";
import { useSearchParams } from "next/navigation";
import bag from "../../public/images/bag.png"

const GET_PRODUCTS = gql`
  query {
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
      tagIds: ["cmVhY3Rpb24vdGFnOlF2cmozWG95U3NvS1BkM3hL"]
    ) {
      edges {
        node {
          ... on CatalogItemProduct {
            product {
              title
              pricing{
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
`;

const Product = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const searchParams = useSearchParams();
  const search = searchParams.get("tag");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data...</p>;

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div>
          <h1 className="text-[50px] text-center">Or subscribe to the newsletter</h1>
        </div>
        <div className="flex justify-between mt-10 flex-wrap">
          <div>
            <ul className="flex gap-5 flex-wrap justify-between lg:text-base open-sans">
              <li className="transition-colors font-semibold duration-300 ease-in-out">
                <Link scroll={false} href="/" className={`transition-colors duration-300 mr-4 ease-in-out ${!search ? "font-extrabold text-black" : ""} transition-colors duration-300 ease-in-out`}>
                  All Products
                </Link>
              </li>
              {data.tags.nodes.map((tag: any) => {
                const isActive = search === tag.slug;
                return (
                  <li key={tag._id} className="mr-5">
                    <Link scroll={false} href={{ query: { tag: tag.slug } }} className={`${isActive ? 'font-extrabold text-black' : ""} text-black transition-colors duration-300 ease-in-out`}>
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
          {data.catalogItems.edges.map((edge: any) => (
            <ProductCard key={edge.node.product._id} product={edge.node.product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="hover:shadow-xl">
      <Image src={bag} alt={product.title} width={300} height={300} />
      <div className="px-[10px] py-[18px] text-base roboto">
        {product.title}
        <div className="flex justify-between">
          <span className="text-[#00000080]">{product.category}</span>
          {/* Conditionally render the price */}
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
