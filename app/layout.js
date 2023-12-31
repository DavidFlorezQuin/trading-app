import "./globals.css";
import MenuNav from "./Componentes/MenuNav";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { Inter, Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Winners funds",
  description: "Desarrollador Web | Full-Stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
        <body className={poppins.className}>
          <MenuNav />
          {children}
        </body>
    </html>
  );
}
