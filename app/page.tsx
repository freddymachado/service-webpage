"use client"

import Image from "next/image";
import { Card, CardContent} from "@/components/ui/card"
import Link from "next/link"
import { Star, Coins, UserCheck, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import Flag from 'react-world-flags'
import { Search} from 'lucide-react'
import { Input } from "@/components/ui/input"

export default function Home() {
  //const products = 'await getStripeProducts()';
  //const [searchTerm, setSearchTerm] = useState('');
  const searchTerm = '';

  const handleSearch = () => {
    //setSearchTerm(event.target.value);
  };

  return (
    <>
      <div className="px-4 py-2 fixed bg-gray-950 text-white text-center text text-sm font-medium w-full">
        <LocalPhoneOutlinedIcon/> +58 (0414) 3367196 | <WatchLaterOutlinedIcon/> LUNE - SAB: 24H  | <EmailOutlinedIcon/> multiserviciosvnzla@gmail.com
      </div>
      <div className="flex flex-col min-h-[100dvh]">
        <header className="px-4 lg:px-6 h-16 my-9 flex items-center  bg-white border-b fixed border-b-slate-200 w-full">
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
                    onChange={handleSearch}
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
          <section className="w-full py-20 lg:py-32 xl:py-40">
            <div className="container px-4 md:px-6 flex flex-col md:flex-row ">
              <div className="flex flex-col space-y-4 md:w-1/2 w-full ">
                <div className="space-y-2">
                  <h1 className="text-2xl  tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none">
                    Servicio Técnico Especializado para su casa o empresa
                  </h1>
                  <p className=" text-muted-foreground md:text-xl">
                    Nuestro trabajo incluye garantía
                  </p>
                </div>
                <div className="space-x-4">
                  <Button>Cotizaciones</Button>
                  <Button>Asesorías</Button>
                </div>
              </div>
              <div className="w-full md:w-1/2  flex justify-center">
                <Image src="/refri-hero.png" alt="Hero" width={500} height={500} priority />
              </div>
            </div>
          </section>
          <section className="w-full py-10 md:py-20 lg:py-32 bg-muted" id="features">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">Nuestros Servicios</h2>
              <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 border-muted-foreground/10 p-4 rounded-lg">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Coins className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Mantenimiento</h3>
                  <p className="text-muted-foreground text-center">Seamlesly integrate Stripe Billing to capture subscription payments - Webhooks and all</p>
                </div>
                <div className="flex flex-col items-center space-y-2 border-muted-foreground/10 p-4 rounded-lg">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <UserCheck className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Instalación</h3>
                  <p className="text-muted-foreground text-center"> </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border-muted-foreground/10 p-4 rounded-lg">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Database</h3>
                  <p className="text-muted-foreground text-center">Hook into any PostgresDB instance</p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-10 md:py-20 lg:py-32" id="testimonials">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">What Our Customers Say</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-2">&quot;This product has revolutionized our workflow. Highly recommended!&quot;</p>
                    <p className="font-semibold">- Sarah J., CEO</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-2">&quot;Wow everything is already integrated! Less time configuring, more time building!.&quot;</p>
                    <p className="font-semibold">- Mark T., CTO</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-2">&quot;We&aposve seen a 200% increase in productivity since implementing this solution.&quot;</p>
                    <p className="font-semibold">- Emily R., Operations Manager</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section className="w-full py-10 md:py-20 lg:py-32 bg-muted" id="pricing">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">Pricing Plans</h2>
              <p className="text-muted-foreground text-center mb-8 md:text-xl">Choose the perfect plan for your needs</p>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {/* {products.map((product) => (
                  <Card key={product.id}>
                    <CardHeader>
                      <CardTitle>{product.name}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold">
                        {product.price.unit_amount
                          ? `$${(product.price.unit_amount / 100).toFixed(2)}/${product.price.recurring?.interval}`
                          : 'Custom'}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {product.features?.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <Check className="mr-2 h-4 w-4 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link
                        className="text-sm font-medium hover:underline underline-offset-4 w-full"
                        href={`/signup?plan=${product.id}`}
                      >
                        <Button className="w-full">Get Started</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))} */}
              </div>
            </div>
          </section>
          <section className="w-full py-10 md:py-20 lg:py-32 ">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Start Your Journey Today</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Join thousands of satisfied customers and take your business to the next level.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <Link className="btn" href="#">
                    <Button className=" p-7">Get Started</Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-muted-foreground">© 2024 Acme Inc. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
    </>
  )
}
