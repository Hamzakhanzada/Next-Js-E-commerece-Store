import React from "react";
import Link from "next/link";
import { FaFilter } from "react-icons/fa6";
import Image, { StaticImageData } from "next/image";
import { useQuery, gql } from "@apollo/client";
import { useSearchParams } from "next/navigation";

import Shorts from "../../public/images/joggers.png";
import Bag from "../../public/images/bag.png";
import Scarf from "../../public/images/print-scarf.png";
import Hoodie from "../../public/images/yellow-hoodie.png";
import Dress from "../../public/images/green-dress.png";
import Shoe from "../../public/images/nike-sneakers.png";
import Jacket from "../../public/images/jacket.png";
import Glasses from "../../public/images/glasses.png";

const GET_TAGS = gql`
  query {
    tags(shopId: "cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ==") {
      nodes {
        _id
        name
        displayTitle
        slug
      }
    }
  }
`;

const Product = () => {
  const { loading: tagsLoading, error: tagsError, data: tagsData } = useQuery(GET_TAGS);

  const searchParams = useSearchParams();
  const search = searchParams.get("tag");

  if (tagsLoading) return <p>Loading...</p>;
  if (tagsError) return <p>Error loading data...</p>;

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div>
          <h1 className="text-[50px] text-center">Or subscribe to the newsletter</h1>
        </div>
        <div className="flex justify-between mt-10 flex-wrap">
          <div>
            <ul className="flex gap-5 flex-wrap justify-between lg:text-base open-sans">
              <li className=" transition-colors font-semibold duration-300 ease-in-out">
                <Link scroll={false} href="/" className={` transition-colors duration-300 mr-4 ease-in-out ${!search ? "font-extrabold text-black"  : ""}  transition-colors duration-300 ease-in-out`}>
                  All Products
                </Link>
              </li>
              {tagsData.tags.nodes.map((items: any) =>  {
                const isActive = search === items.slug;
                return (
                  <li key={items._id} className="mr-5">
                    <Link scroll={false} href={{ query: { tag: items.slug } }} className={`${isActive ? 'font-extrabold text-black' : ""} text-black  transition-colors duration-300 ease-in-out`}>
                      {items.displayTitle}
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
          <ProductCard image={Shorts} title="Adicolor Classics Joggers" category="Short" price="$63.85" />
          <ProductCard image={Bag} title="Nike Sportswear Futura Luxe" category="Bag" price="$130.00" />
          <ProductCard image={Scarf} title="Geometric print Scarf" category="Scarf" price="$53.00" />
          <ProductCard image={Hoodie} title="Yellow Reserved Hoodie" category="Dress" price="$155.00" discountedPrice="$364.00" />
          <ProductCard image={Dress} title="Basic Dress Green" category="Dress" price="$236.00" />
          <ProductCard image={Shoe} title="Nike Air Zoom Pegasus" category="Shoe" price="$198.00" discountedPrice="$220.00" />
          <ProductCard image={Jacket} title="Nike Repel Miler" category="Dress" price="$120.50" />
          <ProductCard image={Glasses} title="Nike Sportswear Futura Luxe" category="Glasses" price="$160.00" />
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ image, title, category, price, discountedPrice }: { image: StaticImageData, title: string, category: string, price: string, discountedPrice?: string }) => {
  return (
    <div className="hover:shadow-xl">
      <Image src={image} alt={title} className="w-full" />
      <div className="px-[10px] py-[18px] text-base roboto">
        {title}
        <div className="flex justify-between">
          <span className="text-[#00000080]">{category}</span>
          <span>{discountedPrice ? <><span className="line-through text-[#00000080]">{discountedPrice}</span> {price}</> : price}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
