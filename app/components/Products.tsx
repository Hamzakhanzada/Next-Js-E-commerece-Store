'use client';
import React from "react";

import jeans from "../../public/images/joggers.png";
import glasses from "../../public/images/glasses.png";
import bag from "../../public/images/bag.png";
import scarf from "../../public/images/print-scarf.png";
import hoodie from "../../public/images/yellow-hoodie.png";
import greenshirt from "../../public/images/green-dress.png";
import shoes from "../../public/images/nike-sneakers.png";
import jacket from "../../public/images/jacket.png";
import { FaFilter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { useQuery, gql } from "@apollo/client";
import { useSearchParams } from 'next/navigation'


const Products = () => {
  const tabItems = gql`
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

  const { loading, error, data } = useQuery(tabItems);
  console.log('string',data)
  const searchParams = useSearchParams();
  const search = searchParams.get('tag');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;



  return (
    <>
      <div className="container mx-auto">
        <div className="products-section font-sans p-6">
          <h2 className="text-center mt-[140px]">
            Or subscribe to the newsletter
          </h2>
          <div>
            <nav className="flex items-center flex-wrap justify-between  py-7">
              <div className="flex">
                <ul className="flex flex-wrap  text-lg-[16px]">
                  <Link
                  scroll = {false}
                    href="/"
                    className={`text-black transition-colors mr-5  duration-300 ease-in-out ${!search ? "font-extrabold "  : ""}` }
                    >
                    
                    All Products
                  </Link>
                  {data.tags.nodes.map((items: any) => {
                    // const isActive = search === items.name;
                    const isActive = search === items.slug;
                    return (
                      <li className="mr-5">
                        <Link
                          key={items.name}
                          scroll={false}
                          // href={{query:{tag:items.name}}}
                          href={{ query: { tag: items.slug } }}
                          className={`${isActive ? "font-extrabold text-black" : ""} text-black     transition-colors duration-300 ease-in-out`}
                        >
                          {items.displayTitle}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <button className="flex bg-black text-white  items-center py-[5px] px-[15px]">
                <FaFilter className="mt-1 me-4" /> Filter
              </ button>
            </nav>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="relative flex flex-col overflow-hidden bg-white hover:shadow-md transition">
                <Link className="relative flex overflow-hidden " href="">
                  <Image
                    className="object-cover m-auto w-[348px]"
                    src={jeans}
                    alt="product image"
                  />
                </Link>
                <div className="mt-4 px-3 pb-5">
                  <Link href="">
                    <h5 className="text-sm tracking-tight ">
                      Adicolor Classics Joggers
                    </h5>
                  </Link>
                  <div className="mt-2  flex items-center justify-between">
                    <h5 className="text-sm tracking-tight text-gray-400">
                      Dress
                    </h5>
                    <h5 className="text-sm tracking-tight ">$63.85</h5>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col overflow-hidden bg-white hover:shadow-md transition">
                <Link className="relative flex overflow-hidden " href="">
                  <Image
                    className="object-cover  m-auto w-[348px]"
                    src={bag}
                    alt="product image"
                  />
                </Link>
                <div className="mt-4 px-3 pb-5">
                  <Link href="">
                    <h5 className="text-sm tracking-tight ">
                      Nike Sportswear Futura Luxe
                    </h5>
                  </Link>
                  <div className="mt-2  flex items-center justify-between">
                    <h5 className="text-sm tracking-tight text-gray-400">
                      Bag
                    </h5>
                    <h5 className="text-sm tracking-tight ">$130.00</h5>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col overflow-hidden bg-white hover:shadow-md transition">
                <Link className="relative flex overflow-hidden " href="">
                  <Image
                    className="object-cover  m-auto w-[348px]"
                    src={scarf}
                    alt="product image"
                  />
                </Link>
                <div className="mt-4 px-3 pb-5">
                  <Link href="">
                    <h5 className="text-sm tracking-tight ">
                      Geometric print Scarf
                    </h5>
                  </Link>
                  <div className="mt-2  flex items-center justify-between">
                    <h5 className="text-sm tracking-tight text-gray-400">
                      Scarf
                    </h5>
                    <h5 className="text-sm tracking-tight ">$53.00</h5>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col overflow-hidden bg-white hover:shadow-md transition">
                <Link className="relative flex overflow-hidden " href="">
                  <Image
                    className="object-cover  m-auto w-[348px]"
                    src={hoodie}
                    alt="product image"
                  />
                </Link>
                <div className="mt-4 px-3 pb-5">
                  <Link href="">
                    <h5 className="text-sm tracking-tight ">
                      Yellow Reserved Hoodie
                    </h5>
                  </Link>
                  <div className="mt-2  flex items-center justify-between">
                    <h5 className="text-sm tracking-tight text-gray-400">
                      Dress
                    </h5>
                    <div className="flex items-center justify-between ">
                      <h5 className="text-sm tracking-tight line-through ">
                        $364.00
                      </h5>
                      <h5 className="text-sm tracking-tight  text-red-500 ml-5 ">
                        $155.00
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="cards flex"> */}
              <div className="relative flex flex-col overflow-hidden bg-white hover:shadow-md transition">
                <Link className="relative flex overflow-hidden " href="#">
                  <Image
                    className="object-cover  m-auto w-[348px]"
                    src={greenshirt}
                    alt="product image"
                  />
                </Link>
                <div className="mt-4 px-3 pb-5">
                  <Link href="#">
                    <h5 className="text-sm tracking-tight ">
                      Basic Dress Green
                    </h5>
                  </Link>
                  <div className="mt-2  flex items-center justify-between">
                    <h5 className="text-sm tracking-tight text-gray-400">
                      Dress
                    </h5>
                    <h5 className="text-sm tracking-tight ">$236.00</h5>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col overflow-hidden bg-white hover:shadow-md transition">
                <Link className="relative flex overflow-hidden " href="">
                  <Image
                    className="object-cover  m-auto w-[348px]"
                    src={shoes}
                    alt="product image"
                  />
                </Link>
                <div className="mt-4 px-3 pb-5">
                  <Link href="">
                    <h5 className="text-sm tracking-tight ">
                      Nike Air Zoom Pegasus
                    </h5>
                  </Link>
                  <div className="mt-2  flex items-center justify-between">
                    <h5 className="text-sm tracking-tight text-gray-400">
                      Shoes
                    </h5>
                    <div className="flex items-center justify-between ">
                      <h5 className="text-sm tracking-tight line-through ">
                        $220.00
                      </h5>
                      <h5 className="text-sm tracking-tight  text-red-500 ml-5 ">
                        $198.00
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col overflow-hidden bg-white hover:shadow-md transition">
                <Link className="relative flex overflow-hidden " href="">
                  <Image
                    className="object-cover  m-auto w-[348px]"
                    src={jacket}
                    alt="product image"
                  />
                </Link>
                <div className="mt-4 px-3 pb-5">
                  <Link href="">
                    <h5 className="text-sm tracking-tight ">
                      Nike Repel Miler
                    </h5>
                  </Link>
                  <div className="mt-2  flex items-center justify-between">
                    <h5 className="text-sm tracking-tight text-gray-400">
                      Dress
                    </h5>
                    <h5 className="text-sm tracking-tight ">$120.50</h5>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col overflow-hidden bg-white hover:shadow-md transition">
                <Link className="relative flex overflow-hidden " href="">
                  <Image
                    className="object-cover  m-auto w-[348px]"
                    src={glasses}
                    alt="product image"
                  />
                </Link>
                <div className="mt-4 px-3 pb-5">
                  <Link href="">
                    <h5 className="text-sm tracking-tight ">
                      Nike Sportswear Futura Luxe
                    </h5>
                  </Link>
                  <div className="mt-2  flex items-center justify-between">
                    <h5 className="text-sm tracking-tight text-gray-400">
                      Glasses
                    </h5>
                    <h5 className="text-sm tracking-tight ">$160.00</h5>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
