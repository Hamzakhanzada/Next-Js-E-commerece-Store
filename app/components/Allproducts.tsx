import React from "react";
import { useQuery, gql } from "@apollo/client";
import food from "../../public/images/fast-food.jpg";
import Image from "next/image";
import Link from "next/link";

const GET_ALL_PRODUCTS = gql`
  query {
    catalogItems(shopIds: ["cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ=="]) {
      edges {
        node {
          ... on CatalogItemProduct {
            product {
              title
              pricing {
                displayPrice
              }
              _id
            }
          }
        }
      }
    }
  }
`;

const AllProducts = () => {
  const { data } = useQuery(GET_ALL_PRODUCTS);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {data?.catalogItems?.edges.map(({ node }:any) => {
        const { product } = node;
        return (
          <div key={product._id} className="product-card">
            <Link href="#">
              <Image src={food} alt="product image" />
            </Link>
            <div className="mt-4 px-3 pb-5">
              <Link href="#">
                <h5 className="text-sm tracking-tight">{product.title}</h5>
              </Link>
              <div className="mt-2">
                <h5 className="text-sm tracking-tight">
                  {product.pricing.displayPrice}
                </h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllProducts;
