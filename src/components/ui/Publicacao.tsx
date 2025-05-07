

import Carroseul from "../carrosel"
export type PublicacaoProp = {
    titulo:string,
    descricao:string,
    texto:string[],
    imgs?:string[],
    videoId?:string,
    links?:object
}


export default function Publicacao({args}:{args:PublicacaoProp}){  



    return(<div className="p-4 flex flex-col ">

           
            {args.imgs ?
            
            <div className="p-4">
                <Carroseul imgsSrc={args.imgs}  />
                </div>
                : null 
            }
     
            <section className="m-auto w-full sm:w-11/12  lg:max-w-[1200px] pt-4">

            <h1 className="pt-4 text-[var(--title-color)]">{args.titulo}</h1>
            <h2 className="  pb-4  text-[var(--fgColor-neutral)]">{args.descricao}</h2>
          
                {
                    args.texto?.map((paragrafo)=>{
                        if(paragrafo.startsWith("S:")){
                            return <h2 className="py-4  text-[var(--fgColor-neutral)]">{paragrafo.substring(2)}</h2>
                        }
                        return <p className="indent-8">{paragrafo}</p>
                    })
                } 

           
            </section>
                { args.videoId ?
                    <iframe className='pt-4 m-auto flex-[1_1_250] w-10/12'  src={"https://www.youtube.com/embed/"+args.videoId} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                :null
                }

            {
                args.links &&
                <div className="m-auto w-full sm:w-11/12  lg:max-w-[1200px] pt-4">
                    <h2>Links</h2>
                    <div className=" flex flex-col">
                        {
                            Object.entries(args.links).map(([nome,link])=>{
                                return <a className="text-blue-500 decoration-solid italic text-lg indent-8" href={link + ''}>{nome}</a>//erro idiota
                            })
                        }
                    </div> 
                </div>  
            }
           

                
            <div className="h-[30vh]"></div>
            
           



    
    </div>)
}