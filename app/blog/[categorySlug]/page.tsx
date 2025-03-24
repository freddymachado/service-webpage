'use client';


import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { Button } from "@/components/ui/button"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Image from "next/image";
import Flag from 'react-world-flags'
import { useState, useEffect } from 'react';
import { Calendar, User, Clock } from 'lucide-react';
import { articles } from '@/lib/data';
import Link from "next/link";
// Define TypeScript interfaces for our data structure
interface Article {
  id: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  paragraphs: string[];
  alt: string;
  category: string[];
}

export default function Page({ params }: { params: { categorySlug: string } }) {
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const foundArticle = articles.find((a) => a.id === params.categorySlug);
    setArticle(foundArticle || null);
  }, [params.categorySlug]);

  if (!article) {
    {
      /*TODO: Add 404 page */
    }
    return <div>Artículo no encontrado</div>;
  }

  return (
    <>
    <div className="z-50 px-4 py-2 fixed bg-gray-950 text-white text-center text text-sm font-medium w-full z-50">
      <LocalPhoneOutlinedIcon/> +58 (0414) 3367196 | <WatchLaterOutlinedIcon/> LUNE - SAB: 24H  | <EmailOutlinedIcon/> multiserviciosvnzla@gmail.com
    </div>
    <div className="flex min-h-screen flex-col">
      
      <header className="z-50 px-4 lg:px-6 h-16 my-9 flex items-center  bg-white border-b fixed border-b-slate-200 w-full">
          <Link className="flex items-center justify-center" href="#">
            <Image src="/logo2.png" alt="logo2" width={120} height={120} />
            <span className="sr-only">Multiservicios C.A.</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6 mr-4">
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#features">
              Servicios
            </a>
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
              Opiniones
            </a>
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
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
        <article className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold text-green-800">
            {article.title}
          </h2>
          <div className="mb-4 flex items-center space-x-4 text-sm text-gray-500">
            <span className="flex items-center">
              <User className="mr-1 h-4 w-4" />
              {article.author}
            </span>
            <span className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              {new Date(article.date).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              {article.readTime} de lectura
            </span>
          </div>
          <div className="prose prose-green max-w-none">

            {article.paragraphs.map((paragraph, index) => (
              <>
                {article.image && (
                  <img
                    src={article.image}
                    alt={article.title}
                    className="m-auto mb-6 h-64 w-auto rounded-lg object-cover"
                  />
                )}
                <p key={index} className="mb-4">
                {paragraph} 
                </p>
              </>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="mb-2 text-xl font-semibold">Etiquetas:</h3>
            <div className="flex flex-wrap gap-2">
              {article.category.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-green-100 px-2 py-1 text-sm text-green-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/*TODO: Add related pages */}
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
