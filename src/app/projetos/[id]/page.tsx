import Publicacao from "@/components/ui/Publicacao"
import Projetos from "@/repository/Projetos"
const projectRepository = new Projetos
import { cache } from 'react';

const getPost = cache(async (id:string) => {
  if(parseInt(id)){
   const  x = await projectRepository.getProjectById(id);
   if(x.rowCount){
    return x.rows[0]
   }
  }
  return false;
});

export async function  generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}){
  const x = await getPost((await params).id)
  if(x){
    return{
      title:x.titulo,
      description:x.descricao
    }
  }
  return {}
}

export default async function Page({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {

    const x = await getPost((await params).id)

    if(x){
      //metadata.title = project.rows[0].titulo
      //  metadata.description = project.rows[0].descricao
      return(<Publicacao args={{
        titulo:x.titulo,
        descricao:x.descricao,
        texto:x.texto,
        videoId:x.videoId,
        links:x.links
      }}/>)
    }
  
    return (<h1> Problema na requisição :(</h1> )
}
