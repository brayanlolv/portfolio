import Publicacao from "@/components/ui/Publicacao"
import Projetos from "@/repository/Projetos"
const projectRepository = new Projetos
import { Metadata } from "next"










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
    

    if(project?.rowCount){
      metadata.title = project.rows[0].titulo
      metadata.description = project.rows[0].descricao
      return(<Publicacao args={{
        titulo:project.rows[0].titulo,
        descricao:project.rows[0].descricao,
        texto:project.rows[0].texto,
        videoId:project.rows[0].videoId
      }}/>)
    }
  
    return (<h1> Problema na requisição :(</h1> )
}
export const metadata:Metadata = {}