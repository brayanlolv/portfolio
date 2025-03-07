'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";


export  default function carrosel({imgsSrc,videoId}:{imgsSrc:string[],videoId?:string}){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className:'max-h-[300px] w-8/12 '

      };
      return (
        <Slider {...settings}>
         { videoId?
            
                <iframe className='m-auto h-[300px]'  src={"https://www.youtube.com/embed/"+videoId} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
               
             : null
            }
           
           {
              imgsSrc.map((x)=>{return <img className={'m-auto  w-full md:w-10/12'} src={x}/>

        })
      }
        </Slider>
      );
    }

    //img
          {/* className={modal ? 'w-screen':""}  */}
          {/* <div className={'m-auto'+ modal? 'w-[90wh] h-[90vh]':'w-10/12'}> */}