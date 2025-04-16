import Link from "next/link"
import { Linkedin, Email, Github } from "@deemlol/next-icons"
// import { FileText } from "@deemlol/next-icons"
import Config from "@/data/config.json"

export default function Links(){
    
    return(
    <div className={"flex gap-4  w-12/12"}>
        <Link href={Config.links.gitHub} >
            <Github size={24}  color={"var(--foreground)"}/>
        </Link>

        <Link href={Config.links.email}>
            <Email size={24} color={"var(--foreground)"}/>
        </Link>

        <Link href={Config.links.linkedin}>
            <Linkedin size={24} color={"var(--foreground)"} />
        </Link>
        {/* <Link href={"curriculo.txt"}>
                <FileText size={24} color={"var(--foreground)"}/>
        </Link> */}
    </div>)
}