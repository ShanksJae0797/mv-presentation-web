import Image from "next/image"
export default function WebLogo() {
    return (
        <div className="relative h-[40px] w-[173px] sm:h-[50px] sm:w-[216px] md:h-[60px] md:w-[260px] lg:h-[66px] lg:w-[285px]">
            <Image
                src="https://res.cloudinary.com/mineralview/image/upload/Images/mmmmm.webp"
                alt="Logo"
                fill
                className="object-contain drop-shadow-[0_0_2px_rgba(0,205,149,0.3)]"
                priority
                sizes="(max-width: 640px) 173px, (max-width: 768px) 216px, (max-width: 1024px) 260px, 285px"
            />
        </div>
    )
}