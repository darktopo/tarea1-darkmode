import React from 'react'

export default function Cards() {
    const data = [
        {
            name: "Bill Mahoney",
            role: "Product Owner",
            image: "/public/img/photo1.png"
        },
        {
            name: "Saba Cabrera",
            role: "ART DIRECTOR",
            image: "/public/img/photo2.png"
        },
        {
            name: "Shae Le",
            role: "TECH LEAD",
            image: "/public/img/photo3.png"
        },
        {
            name: "Skylah Lu",
            role: "UX DESIGNER",
            image: "/public/img/photo4.png"
        },
        {
            name: "Griff Richards",
            role: "DEVELOPER",
            image: "/public/img/photo5.png"
        },
        {
            name: "Stan Jhon",
            role: "DEVELOPER",
            image: "/public/img/photo6.png"
        }
    ];
    const targetas = data.map(({ name, role, image }) => {
        return (
            <>
                <div className='w-1/2 h-65 bg-amsber-500 even:pt-8 md:w-55 md:h-70 md:even:pt-0 md:nth-[3n+2]:pt-12'>
                    <div className='flex flex-row relative '>
                        <img className='w-36 md:w-44' src={image} />
                        <p className='w-30 h-5 pl-13 [writing-mode:vertical-rl] absolute right-1 text-nowrap text-[11px] font-serif md:right-5'>{role}</p>
                    </div>
                    <p className='font-bold'>{name}</p>
                </div>
            </>
        )
    })

    return (
        <div className=' w-83 h-160 mx-auto flex flex-wrap md:grid md:grid-cols-3 md:w-180 md: justify-center md:gap-4'>
            {targetas}
        </div>
    )
}
