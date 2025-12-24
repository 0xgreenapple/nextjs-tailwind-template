import Container from "@/components/Layout/Container";
import { Button } from "@/components/ui/Button";
import Github from "@/components/Icons/Github";


export default function Header() {


  return (
    <section>
      <Container>
        <header className={"flex flex-row justify-between py-[30px]"}>
          <div className={"flex justify-center items-center"}>
            <img src={"/next.svg"} className={'h-[20px] w-auto'}/>
          </div>
          <div>
            <Button size={"icon"} variant={"link"} >
              <Github width={20} height={20}/>
            </Button>
          </div>
        </header>
      </Container>
    </section>
  )
}