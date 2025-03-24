"use client"

import Image from "next/image";
import { Card as Card2, CardContent as CardContent2, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import Link from "next/link"
import { Star, Coins, UserCheck, Database, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import Flag from 'react-world-flags'
import { Search} from 'lucide-react'
import { Input } from "@/components/ui/input"
import { ButtonGroup, Button as Button2 } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { articles } from '@/lib/data';
const products = [
  {
    id: 1,
    name: 'Contáctanos',
    category: ['Garantía incluída','Rápido','Confiable',],
    date: 'Mayo 15, 2023',
    author: 'María García',
    image: '/placeholder.svg?height=200&width=300',
    description:
      'Puedes hacerlo mediante llamada telefónica, WhatsApp o correo electrónico en cualquier momento',
  },
];  
export default function Home() {
  //const products = 'await getStripeProducts()';
  //const [searchTerm, setSearchTerm] = useState('');
  const searchTerm = '';

  /* const handleSearch = () => {
    //setSearchTerm(event.target.value);
  }; */

  return (
    <>
      <div className="px-4 py-2 fixed bg-gray-950 text-white text-center text text-sm font-medium w-full z-50">
        <LocalPhoneOutlinedIcon/> +58 (0414) 3367196 | <WatchLaterOutlinedIcon/> LUNE - SAB: 24H  | <EmailOutlinedIcon/> multiserviciosvnzla@gmail.com
      </div>
      <div className="flex flex-col min-h-[100dvh]">
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
              
              {/* Search */}
              <form className="hidden md:flex max-w-sm p-2 text-gray-400 hover:text-gray-500 lg:ml-4">
                <div className="relative w-60">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Buscar productos..."
                    value={searchTerm}
                    className="pl-8"
                    /* onChange={handleSearch} */
                  />
                </div>
              </form>
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
        <main className="flex-1 my-9 ">
          <section className="w-full py-20 ">
            <div className="container px-4 md:px-6 flex flex-col md:flex-row ">
              <div className="flex flex-col space-y-4 md:w-1/2 w-full ">
                <div className="space-y-2">
                  <h1 className="text-2xl  tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none">
                    Servicio Técnico Especializado para su casa o empresa
                  </h1>
                  <p className=" text-muted-foreground md:text-xl">
                    Garantía asegurada en todos nuestros servicios
                  </p>
                </div>
                <div className="space-x-4">
                  <Button>Cotizaciones</Button>
                  <Button variant={"outline"}>Asesorías</Button>
                </div>
              </div>
              <div className="w-full md:w-1/2  flex justify-center">
                <Image src="/refri-hero.png" alt="Hero" width={500} height={500} priority />
              </div>
            </div>
          </section>
          <section className="w-full py-10  bg-muted" id="features">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">Nuestros Servicios</h2>
              <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 border-muted-foreground/10 p-4 rounded-lg">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Coins className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Mantenimiento</h3>
                  <p className="text-muted-foreground text-center">Descripción corta del servicio de mantenimiento de equipos previamente instalados</p>
                </div>
                <div className="flex flex-col items-center space-y-2 border-muted-foreground/10 p-4 rounded-lg">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <UserCheck className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Instalación</h3>
                  <p className="text-muted-foreground text-center"> Descripción breve del servicio de instalación de equipos</p>
                </div>
                <div className="flex flex-col items-center space-y-2 border-muted-foreground/10 p-4 rounded-lg">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Otro servicio</h3>
                  <p className="text-muted-foreground text-center"> Descripción breve del otro servicio </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-10 " id="testimonials">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">Lo que nuestros clientes opinan</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-2">&quot;Buen trabajo y buen precio. Recomendado.&quot;</p>
                    <p className="font-semibold">- María P.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-2">&quot;El Aire acondicionado había pasado por varios técnicos hasta que contraté este servicio, mil gracias.&quot;</p>
                    <p className="font-semibold">- Eugenia M.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-2">&quot;El muchacho que vino fue muy educado y dejó todo muy limpio, 100% recomendado.&quot;</p>
                    <p className="font-semibold">- Elisa C.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section className="w-full py-5  bg-muted" id="pricing">
            <div className="container px-4 md:px-6 ">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">¿Buscas un técnico en refrigeración?</h2>
              <p className="text-muted-foreground text-center mb-8 md:text-xl">Agenda una visita:</p>
              <div className="text-center w-1/3 m-auto">                
                 {products.map((product) => (
                  <Card2 key={product.id}>
                    <CardHeader>
                      <CardTitle>{product.name}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent2>

                      <ButtonGroup variant="outlined" aria-label="Basic button group">
                        <Button2 variant="outlined"><LocalPhoneOutlinedIcon/></Button2>
                        <Button2 variant="outlined"><WhatsAppIcon/></Button2>
                        <Button2 variant="outlined"><EmailOutlinedIcon/></Button2>
                      </ButtonGroup>

                            {product.category.map((category, index) => (
                      <ul className="mt-4 space-y-2" key={index}>
                          
                              <li key={index} className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-primary" />
                            <span key={category} className="text-muted-foreground">{category}</span>  
                          </li>
                      </ul>))}
                    </CardContent2>
                    <CardFooter>
                      <Link
                        className="text-sm font-medium hover:underline underline-offset-4 w-full"
                        href={`/`}
                      >
                        <Button className="w-full">Agendar</Button>
                      </Link>
                    </CardFooter>
                  </Card2>
                ))} 
              </div>
            </div>
          </section>
          <section className="w-full py-5  ">
            <div className="flex container px-4 md:px-6 w-full ">                
                 {articles.map((article) => (
                  <Card key={article.id} sx={{ maxWidth: 345, margin: 3 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="150"
                        image={article.image}
                        alt={article.alt}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {article.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {article.paragraphs}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button color="primary">
                        <Link href={'/blog/' + article.id} className="w-full">
                          Leer más
                        </Link>
                      </Button>
                    </CardActions>
                  </Card>
                ))}
            </div>
          </section>
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
  )
}
