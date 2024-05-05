"use client"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Products from "./components/Products";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/client";
import Hero from "./components/Hero";

export default function Home() {
  return (
  <ApolloProvider client={client}>
    <div className="bg-gray-100">
    <Navbar/>
    <Hero/>
    </div>
   
    <Products/>
    <Footer/>
  </ApolloProvider>
  );
}
