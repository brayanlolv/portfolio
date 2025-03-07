import WorkingAt from "@/components/WorkingAt"
import Publicacao from "@/components/ui/Publicacao"
import Projetos from "@/repository/Projetos"
import ListItem from "@/components/ListItem"
const projetosRepository = new Projetos
export default async  function Page(){
    const projetos = await projetosRepository.getDemoProjetos()
    return (<>
        <h1>Projetos</h1>
        {/* flex flex-wrap   gap-4 p-4 */}
        <div className="flex flex-col gap-4 m-1 pr-1 lg:grid lg:grid-cols-2 gap-4    ">
                  {projetos.rows.map((row:any)=>{
                      return<ListItem props={{
                        titulo:row.titulo,
                        descricao:row.descricao,
                        link:row.id,
                        keywords:row.keywords,
                      }} />
                    })}
                    
                </div>

        {/* fazer um map com os projetos */}

    </>
    // <div className="flex justify-center md:h-fit items-center mx-auto">
    //     <WorkingAt/>
    // </div>
    )
}