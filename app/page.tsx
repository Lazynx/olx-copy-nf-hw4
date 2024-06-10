import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 pt-14">
      <section className="bg-[#F2F4F5] py-12 md:py-20 lg:py-28">
          <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-black">
                Discover and Sell Products with OLX
              </h1>
              <p className="text-gray-500 text-lg">Browse a wide range of products or post your own items for sale.</p>
              <div>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-sm border-white bg-white px-4 py-2 text-black font-medium hover:bg-gray-200 focus:outline-none"
                  prefetch={false}
                >
                  Start Browsing
                </Link>
              </div>
            </div>
            <div>
              <img
                src="/images/bg.jpg"
                width={600}
                height={400}
                alt="Hero Image"
                className="mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
    </main>
  );
}
