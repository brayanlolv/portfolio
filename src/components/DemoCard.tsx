'use server'

import Link from "next/link"

export type demoType = {
    titulo:string,
    descricao:string,
    link:string,
    keywords:string[],

}

export default async function DemoCard({props}:{props:demoType}){

    return(
        //min-w-[440px]  
        <div className="min-w-[300px]  2xl:min-w-[400px]  flex-[1_1_300px]   cardItem ">
                      
            {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/> */}
            <div className="px-6 py-4">
            <Link href={'/projetos/'+ props.link}>  <div className="font-bold text-[var(--title-color)] text-xl mb-2">{props.titulo}</div></Link>
                <p className="text-base text-[var(--secondarColorCard)] ">
               {props.descricao}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {props.keywords.map((x)=>{
                    return  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{x}</span>
                    }
                )}
            </div>

            <div>
                

            </div>
</div>
    )

}