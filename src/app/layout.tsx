import { Roboto } from "next/font/google";
import { Footer } from '@/app/components/shared/Footer';
import { Header } from "./components/shared/Header";
import "../sass/globals.sass"


const roboto= Roboto({
  weight: ["100","300","500","700"],
  subsets:["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={roboto.className }>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
