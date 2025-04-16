'use client'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {useState} from 'react' 
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import './carrosel.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Carroseul({imgsSrc}:{imgsSrc:string[]}){
    const [modal,setModal] = useState(false)//teasfasd
    
  
    return (
    <>
    <div className={modal ? 'modal' : '' } 
    onClick={()=>setModal(false)}
    > 
    </div>

    <div className='m-auto '>
      <Swiper 
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      
      slidesPerView={1}
      navigation
      pagination={{ clickable: false }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}

    >
        <div  className={modal? 'h-[500px]':'' + 'w-full'}>
        

        {
          imgsSrc.map((x)=>{
            return <SwiperSlide tag='li' onClick={()=>setModal(true)}>
              <img className={'m-auto w-10/12'}   src={x}/>

          </SwiperSlide>
            
          })
        }
        </div>
      </Swiper>
    </div> 
    </>
  );
};