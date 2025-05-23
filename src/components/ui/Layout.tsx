'use client'
import { Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import Link from 'next/link'
import Config from '@/data/config.json'
import { usePathname } from 'next/navigation'
import MyLinks from "@/components/IconsLinks";



// const className = "bg-black w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";
//     // Append class based on state of sidebar visiblity
// const appendClass = " ml-[-250px] md:ml-0";

const navigation = [
  { name: 'Home', href: '/', current:false },
  { name: 'Projetos', href: '/projetos', current:false},
  { name: 'Blog', href: '/blog',current:false },
  { name: 'Sobre Mim', href: '/sobre-mim',  current:false   },
]

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const page = usePathname()
    console.log(page)

    return (
      <html >
        <body>
            {/* {window.location.href.split('/')[3]} */}
        <Disclosure as="nav" className="md:fixed  w-[100vw]">
    
      <div className="sm:px-6 lg:px-8 topbar">
        <div className="relative flex h-16 items-center justify-between">
  
          <div className="flex flex-1  items-center justify-center sm:items-stretch sm:justify-start">
            <div className="ml-6  m-auto sm:block">
              <div className="flex">
                {navigation.map((item)=>{

                    item.current = item.href == page
                  return<Link href={item.href}  className={item.current ?"topbarCurrentItem font-bold  ":"" +'text-lg px-4' }>
                          {item.name}
                        </Link>
              })}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* lado direito datop bar */}
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={
                item.current ? 'topbarCurrentItem font-bold  ' : ''
              }
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>{/*fim da top bar */}
    <div className='h-16'></div>
          {/* por um fixed aqui */}
      <div className='md:flex  '>
        <div className='flex-none  bg-background flex flex-col pl-6  md:w-[450px]  md:top-0  md:left-0'>
                <div className='md:fixed'>
                  <div>
                    <img src={Config.sidebar.AvatarImgUrl} alt="foto de perfil" className='rounded-full p-4 m-auto'/>
                  </div>
                  <h1 className='font-bold'>{Config.sidebar.nome}</h1>
                  <p>20 anos</p>
                  <p>5ºperiodo ciência da computação</p>
                  <p>desenvolvedor fullstack</p>
                  <p>Javascript, php, web</p>
                  <p>Guarulhos e Zona Norte São Paulo</p>
                  <MyLinks/>
                </div>
        </div>
          <div className='m-auto w-11/12 md:h-[90vh] '>
          <div className='pt-4'>
          {children}

          </div>
          </div>
     
          
     
      </div>
    
    


        </body>
      </html>
    );}