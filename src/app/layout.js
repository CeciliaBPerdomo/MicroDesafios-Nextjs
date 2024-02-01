import "./globals.css";
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'

export const metadata = {
  title: "Electrodomésticos Capellari",
  description: "Generado por Cecilia Perdomo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
