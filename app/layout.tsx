import Category from "./components/Category";

import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { categories } = await import("../data/categories.json");

  return (
    <html lang="en">
      <head />
      <body className="flex flex-col">
        <header className="bg-purple-400 p-4">HEADER</header>

        <section className="flex-1 flex gap-4">
          <aside className="min-w-[200px] bg-purple-700 p-4">
            <nav className="flex flex-col gap-4">
              {categories.map((category) => (
                <Category key={category.id} category={category} />
              ))}
            </nav>
          </aside>

          <main className="p-4 flex-1">{children}</main>
        </section>
      </body>
    </html>
  );
}
