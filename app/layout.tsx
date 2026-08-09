import { Manrope, Cormorant_Garamond } from "next/font/google";

// Manrope é uma variable font: carregando assim, todos os pesos (200–800)
// ficam disponíveis e o font-weight funciona sem precisar declarar cada peso.
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

// Cormorant Garamond NÃO é variable font: é preciso declarar os pesos que serão usados.
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-Br"
      className={`${manrope.variable} ${cormorantGaramond.variable}`}
    >
      <body className="min-h-full flex flex-col" style={{margin: "unset"}}>{children}</body>
    </html>
  );
}
