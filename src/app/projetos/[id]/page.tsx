import Publicacao from "@/components/ui/Publicacao"
import Projetos from "@/repository/Projetos"
const projectRepository = new Projetos

export default async function Page({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const urlId = (await params).id
    let project 
    if(parseInt(urlId)){
       project = await projectRepository.getProjectById(urlId) 
      }
  
    return (<>
    {project?.rowCount ?<Publicacao args={{
                                            titulo:project.rows[0].titulo,
                                            descricao:project.rows[0].descricao,
                                            texto:project.rows[0].texto,
                                            videoId:project.rows[0].videoId
    }}/>:
    <>
      <h1> Problema na requisição :(</h1> 
    </> }
        
    
    </>
    // <div className="flex justify-center md:h-fit items-center mx-auto">
    //     <WorkingAt/>
    // </div>
    )
}