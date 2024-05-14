// import React from "react";
// import { useQuery, gql } from "@apollo/client";
// import Image from "next/image";
// import Link from "next/link";
// import { FaFilter } from "react-icons/fa6";


// // Define your GraphQL query
// const GET_PRODUCTS = gql`
//   query GetProducts {
//     catalogItems(
//       shopIds: ["cmVhY3Rpb24vc2hvcDpGN2ZrM3plR3o4anpXaWZzQQ=="]
//       tagIds: ["cmVhY3Rpb24vdGFnOlF2cmozWG95U3NvS1BkM3hL"]
//     ) {
//       edges {
//         node {
//           ... on CatalogItemProduct {
//             product {
//               title
//               description
//               _id
//               variants {
//                 _id
//                 title
//                 media {
//                   URLs {
//                     small
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// const Products = () => {
//   const { loading, error, data } = useQuery(GET_PRODUCTS);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div className="container mx-auto">
//       <div className="products-section font-sans p-6">
//         <h2 className="text-center mt-[140px]">
//           Or subscribe to the newsletter
//         </h2>
//         <div>
//           <nav className="flex items-center flex-wrap justify-between  py-7">
//             <div className="flex">
//               <ul className="flex flex-wrap  text-lg-[16px]">
//                 <Link href="/" className="text-black transition-colors duration-300 mr-4 ease-in-out ">
//                   All Products
//                 </Link>
//               </ul>
//             </div>
//             <button className="flex bg-black text-white  items-center py-[5px] px-[15px]">
//               <FaFilter className="mt-1 me-4" /> Filter
//             </ button>
//           </nav>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {data.catalogItems.edges.map(({ node  }) => (
//               <div key={node._id} className="relative flex flex-col overflow-hidden bg-white hover:shadow-md transition">
//                 <Link className="relative flex overflow-hidden " href="">
//                   <Image
//                     className="object-cover  m-auto w-[348px]"
//                     src={glasses} // Replace this with node.product.variants[0].media.URLs.small
//                     alt="product image"
//                   />
//                 </Link>
//                 <div className="mt-4 px-3 pb-5">
//                   <Link href="">
//                     <h5 className="text-sm tracking-tight ">
//                       {node.product.title} {/* Render product title */}
//                     </h5>
//                   </Link>
//                   <div className="mt-2  flex items-center justify-between">
//                     <h5 className="text-sm tracking-tight text-gray-400">
//                       Glasses
//                     </h5>
//                     <h5 className="text-sm tracking-tight ">$160.00</h5>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;
