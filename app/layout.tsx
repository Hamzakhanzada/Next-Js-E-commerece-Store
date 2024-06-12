import { ApolloWrapper } from "@/lib/apollo-wrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import "./globals.css"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>
          <Navbar/>
          {children}
          <Footer/>
        </ApolloWrapper>
      </body>
    </html>
  );
}