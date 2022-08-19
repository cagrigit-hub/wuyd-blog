import Link from "next/link"


interface transparent{
    transparent : boolean;
}


function Header( {transparent = false } : transparent ) {
    return (
        <header className={ !transparent ? "bg-teal-100  text-black" : "bg-white text-black animated-header " }>
            <div className="max-w-7xl mx-auto flex justify-between p-7 md:p-8 md:px-12 r">
                <Link href="/">
                    <div className="text-4xl  text-black cursor-pointer ">
                        W-Blog
                    </div>
                </Link>

                <div className="flex text-lg space-x-5 items-center r">
                    <Link href="/about">
                        <h4 className="hidden md:inline-flex cursor-pointer ">About</h4>
                    </Link>
                    <Link href="#blogs">
                        <h4 className="py-1 px-4 rounded cursor-pointer inline-flex bg-green-600 text-white ">Start Reading</h4>
                    </Link>

                </div>
            </div>





        </header>
    )
}

export default Header