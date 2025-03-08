import Carroseul from "../carrosel"
export type PublicacaoProp = {
    titulo:string,
    descricao:string,
    texto:string[],
    videoId?:string ,
    imgs?:string[]

}

export default function Publicacao({args}:{args:PublicacaoProp}){  
    return(<div className="p-4 flex flex-col ">

           
            {args.imgs ?
            
            <div className="p-4">
                <Carroseul imgsSrc={args.imgs}  />
                </div>
                : null 
            }
     
            <section className="m-auto w-10/12 max-w-[1200px]">

            <h1 className="pt-4 text-[var(--title-color)]">{args.titulo}</h1>
            <h2 className="  pb-4  text-[var(--fgColor-neutral)]">{args.descricao}</h2>
          
                {
                    args.texto?.map((paragrafo)=><p className="indent-8">{paragrafo}</p>)
                } 

           
            </section>
                { args.videoId ?
                //  h-[300px] md:h-[300px] lg:h-[400px] 
                    <iframe className='pt-4 m-auto flex-[1_1_400] w-10/12'  src={"https://www.youtube.com/embed/"} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                :null
                }
            <div
            className="h-[30vh]"></div>
            
           



    
    </div>)
}