import Image from "next/image";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto p-4">
        <section className="text-center">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Hero Image"
            width={1200}
            height={400}
            className="w-full h-auto"
          />
          <h1 className="text-4xl font-bold mt-4">Welcome</h1>
        </section>
        <section className="mt-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold">
              Welcome to the META Research Group!
            </h2>
            <p className="mt-4">
              Headquartered at the prestigious university of KU Leuven, which
              has been elected Europe's most innovative university and among the
              top seven best universities of the world, the META Research Group,
              led by Prof. Christophe Caloz, performs leading-edge research in
              the emerging field of electromagnetic metamaterials and, more
              broadly, in the fields microwave, terahertz and optical classical
              and quantum science and technology.
            </p>
            <p className="mt-4">
              Please, enjoy your visit of our website, and feel free to{" "}
              <a href="#" className="text-blue-600 underline">
                contact us
              </a>{" "}
              to exchange thoughts and share dreams.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Ladeuze Square and Jan Fabre Totem"
              width={400}
              height={300}
              className="w-full h-auto"
            />
            <p className="text-center mt-2">
              Ladeuze Square and Jan Fabre Totem
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
