
import { Button } from "@/components/ui/button"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Calendar, User } from 'lucide-react';
import { articles } from '@/lib/data';
import Image from "next/image";
import Link from "next/link";
import Flag from 'react-world-flags'
import { CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

/* 
const articles = [
  {
    id: 1,
    title: '10 Beneficios de una Dieta Vegana',
    category: 'Nutrición',
    date: 'Mayo 15, 2023',
    author: 'María García',
    image: '/placeholder.svg?height=200&width=300',
    excerpt:
      'Descubre cómo una dieta basada en plantas puede mejorar tu salud y bienestar...',
  },
  {
    id: 2,
    title: 'Receta: Lasaña Vegana de Berenjena',
    category: 'Recetas',
    date: 'Mayo 10, 2023',
    author: 'Carlos Rodríguez',
    image: '/placeholder.svg?height=200&width=300',
    excerpt:
      'Una deliciosa versión vegana de la clásica lasaña italiana, perfecta para una cena familiar...',
  },
  {
    id: 3,
    title: 'Guía para un Armario Vegano',
    category: 'Estilo de Vida',
    date: 'Mayo 5, 2023',
    author: 'Ana Martínez',
    image: '/placeholder.svg?height=200&width=300',
    excerpt:
      'Aprende a crear un guardarropa ético y sostenible sin comprometer tu estilo...',
  },
  {
    id: 4,
    title: 'El Impacto Ambiental de la Agricultura Animal',
    category: 'Sostenibilidad',
    date: 'Abril 30, 2023',
    author: 'Pedro Sánchez',
    image: '/placeholder.svg?height=200&width=300',
    excerpt:
      'Un análisis detallado de cómo la producción de carne afecta nuestro planeta...',
  },
  {
    id: 5,
    title: 'Vegano y Atleta: Mitos y Realidades',
    category: 'Salud',
    date: 'Abril 25, 2023',
    author: 'Laura Fernández',
    image: '/placeholder.svg?height=200&width=300',
    excerpt:
      'Desmontamos los mitos sobre el rendimiento atlético en una dieta vegana...',
  },
  {
    id: 6,
    title: 'Cómo Hacer la Transición a una Dieta Vegana',
    category: 'Nutrición',
    date: 'Abril 20, 2023',
    author: 'Javier López',
    image: '/placeholder.svg?height=200&width=300',
    excerpt:
      'Consejos prácticos para hacer una transición suave y saludable hacia el veganismo...',
  },
]; */

export default function BlogPage() {
  return (
    <>
      <div className="z-50 px-4 py-2 fixed bg-gray-950 text-white text-center text text-sm font-medium w-full z-50">
        <LocalPhoneOutlinedIcon/> +58 (0414) 3367196 | <WatchLaterOutlinedIcon/> LUNE - SAB: 24H  | <EmailOutlinedIcon/> multiserviciosvnzla@gmail.com
      </div>
    <div className="flex min-h-screen flex-col">
    <header className="z-50 px-4 lg:px-6 h-16 my-9 flex items-center  bg-white border-b fixed border-b-slate-200 w-full">
      <Link className="flex items-center justify-center" href="/">
        <Image src="/logo2.png" alt="logo2" width={120} height={120} />
        <span className="sr-only">Multiservicios C.A.</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 mr-4">
        <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Servicios
        </a>
        <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Opiniones
        </a>
        <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Cotizaciones
        </a>
        <a className="text-sm font-medium hover:underline underline-offset-4" href="/blog">
          Blog
        </a>
      </nav>
          <a
            href="#"
            className="hidden text-gray-700 hover:text-gray-800 lg:flex lg:items-center"
          >
            <Flag className="block h-auto w-5 flex-shrink-0"  code='ve' />
            <span className="ml-3 block text-sm font-medium">VE</span>
            <span className="sr-only">, change currency</span>
          </a>
          
      <Button className="mx-2 md:mx-4 lg:mx-6 xl:mx-10">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/login">
          Inicio de Sesión
        </Link>
      </Button>
          {/* Cart */}
          <div className="ml-4 flow-root lg:ml-6">
          <Link href={`/checkout`} className="group -m-2 flex items-center p-2">
            <ShoppingCartOutlinedIcon
                className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
              />
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
              0
              </span>
          </Link>
          </div>
    </header>
     
      <main className="container mx-auto flex-grow px-4 py-8">
        <h1 className="mb-8 text-4xl font-bold">
          Blog 
        </h1>


        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles
            .map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="mb-4 h-48 w-full rounded-md object-cover"
                  />
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-gray-600">
                    {post.paragraphs[0]
                      .split(' ')
                      .slice(0, 15)
                      .join(' ')}
                    ...
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span className="flex items-center">
                      <Calendar className="mr-1" size={16} /> {post.date}
                    </span>
                    <span className="flex items-center">
                      <User className="mr-1" size={16} /> {post.author}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  {/* TODO:Center btn */}
                  <Button variant="outline" className="w-full">
                    <Link href={'/blog/' + post.id} className="w-full">
                      Leer más
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </div>
      </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-muted-foreground">© 2025 Multiservicios Inc. Todos los derechos reservados.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Términos del Servicio
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacidad
            </Link>
          </nav>
        </footer>

    </div>
    </>
  );
}
