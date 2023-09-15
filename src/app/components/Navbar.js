import Link from "next/link"

const Navbar = () => {
  return (

<nav className="bg-gray-50 dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 text-2xl  mr-6 space-x-8">
            <li className="text-blue-400 font-bold  no-underline	 dark:text-white " >
                        Crud
                </li>                
                <li>
                        <Link href="/" className="text-gray-900 no-underline  dark:text-white ">Add</Link>

                </li>
                <li>
                        <Link href="/show" className="text-gray-900 no-underline	 dark:text-white ">Show</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>

  )
}

export default Navbar
