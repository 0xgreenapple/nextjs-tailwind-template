'use client';
import Layout from "@/components/MainLayout/Layout";
import Container from "@/components/Layout/Container";
import { Button } from "@/components/ui/Button";
import copyText from "@/lib/copy";


export default function LandingPage() {

  return (
    <Layout>
      <section>
        <Container>
          <div>
            <h1 className={"text-2xl"}>
              Nextjs, tailwind starter template.
            </h1>
            <p>
              minimal starter template with tailwind using SchdnUi components.
            </p>
          </div>
        </Container>
      </section>
      <section className={"installation-container mt-[20px]"}>
        <Container>
          <div className={"gap-[10px] flex-col flex"}>
            <h2>Installation</h2>
            <div className={"flex bg-gray-100 rounded-lg max-w-[400px] p-[10px] text-sm"}>
              <code>
                npx create-next-app@latest -e https://github.com/0xgreenapple/nextjs-tailwind-template
              </code>
            </div>
            <Button onClick={()=>{copyText("npx create-next-app@latest -e https://github.com/0xgreenapple/nextjs-tailwind-template")}} className={"w-[50px] cursor-pointer"} variant={"secondary"}>copy</Button>
          </div>
        </Container>
      </section>
    </Layout>
  )
}