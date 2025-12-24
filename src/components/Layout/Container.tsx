import { ReactNode } from "react";


export default function Container({children}: {children: ReactNode}){
  return <div className={"mx-auto max-w-5xl px-[20px] 5xl:px-[0]"}>
    {children}
  </div>
}