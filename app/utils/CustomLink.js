import Link from "next/link";
import { usePathname } from "next/navigation";
export default function CustomLink({path,children}){
    const pathName = usePathname()
  const setPathName =  pathName.split('/')[2]

    console.log(pathName)
    const active = setPathName === path
    return(

        <Link className={active ? "text-green-500 text-xl " : ""} href={path}>{children}</Link>
        )

}