import Header from "@/components/MainLayout/Header";
import Footer from "@/components/MainLayout/Footer";
import { ReactNode } from "react";


export default function Layout({children}: {children:ReactNode}) {
  return (
    <main className={"min-h-screen flex flex-col"}>
      <Header/>
        {children}
      <Footer/>
    </main>
  )
}