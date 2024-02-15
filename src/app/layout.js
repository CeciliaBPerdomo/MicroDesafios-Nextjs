import "./globals.css";
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import { CartProvider } from "@/Components/Context/CartContext";
import { AuthProvider } from "@/Components/Context/AuthContext";

export const metadata = {
  title: "Electrodomésticos Capellari",
  description: "Realizado por Cecilia Perdomo ❤️",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Para que se pueda acceder desde cualquier lugar */}
        <AuthProvider>
          <CartProvider>
            <Navbar />
            {children}
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
