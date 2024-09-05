import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";

interface Props {
  className?: string;
}

export default function Footer({ className }: Props) {
  return (
    <footer
      className={`${className} bg-muted text-muted-foreground bg-yellow-500 text-white`}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-xl font-bold">¡Somos Pineda Photography!</h2>
          <p className="text-sm">Fotografiando momentos</p>
          <div className="space-y-2 text-sm">
            <p>Email: emmanuelplay2233@gmail.com</p>
            <p>Tel: (+506) 8504-2171</p>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-primary">
              <span className="sr-only">Facebook</span>
              <FaFacebookF className="h-6 w-6" />
            </Link>
            <Link href="#" className="hover:text-primary">
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
