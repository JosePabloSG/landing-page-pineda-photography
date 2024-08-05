import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export function Nav() {
  return (
    <header className="flex h-16 items-center justify-between px-4 md:px-6">
      <Link href={'/'} className="flex items-center gap-2" prefetch={false}>
        <MountainIcon className="h-6 w-6" />
        <span className="text-lg font-semibold">Pineda Photograpy</span>
      </Link>
      <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
        <Link href={'/'} className="hover:underline hover:text-blue-500" prefetch={false}>
          Inicio
        </Link>
        <Link href={'/services'} className="hover:underline" prefetch={false}>
          Servicios
        </Link>
        <Link href={'/productions'} className="hover:underline" prefetch={false}>
          Producciones
        </Link>
        <Link href={'/contacts'} className="hover:underline" prefetch={false}>
          Contactos
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="grid gap-6 p-6">
            <Link href={'/'} className="hover:underline" prefetch={false}>
              Inicio
            </Link>
            <Link href={'/services'} className="hover:underline" prefetch={false}>
              Servicios
            </Link>
            <Link href={'/productions'} className="hover:underline" prefetch={false}>
              Producciones
            </Link>
            <Link href={'/contacts'} className="hover:underline" prefetch={false}>
              Contactos
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
