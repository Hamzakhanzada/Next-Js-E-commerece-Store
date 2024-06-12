"use client"


import { ApolloProvider } from "@apollo/client";
import Products from "./components/Products";
import  client  from "@/lib/client";
import Hero from "./components/Hero";
// import ProductComponent from "@/app/[slug]/page";

export default function Home() {
  return (
  <ApolloProvider client={client}>
    <div className="bg-gray-100">
      
  
    <Hero/>
    </div>
    <Products/>
    {/* <ProductComponent /> */}

  </ApolloProvider>
  );
  
}
