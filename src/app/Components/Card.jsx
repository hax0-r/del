import Image from 'next/image'

const Card = ({className,img,heading,para }) => {
    return (
        <>

            <div className={`flex text-center group  ${className ? "flex-col items-center": "items-start gap-3"} justify-center gap-1 cursor-default`}>
                <Image src={img} alt="icon" className='w-full group-hover:scale-105 transition-all duration-500 max-w-[4rem]' />
                <div className="">
                    <h2 className=' font-semibold pt-3 text-xl'>{heading}</h2>
                    <p className='text-zinc-700'>{para}</p>
                </div>
            </div>
        </>
    )
}

export default Card