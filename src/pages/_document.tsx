import { Head, Html, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <body>
        <header className="m-10">
          <h1 className="text-5xl font-extrabold">API Request Samples</h1>
          <div className="my-5">
            <Link
              href="/csr"
              className="text-blue-500 hover:text-blue-600 hover:underline"
            >
              CSR (Client-side Rendering)
            </Link>
            {" / "}
            <Link
              href="/ssr"
              className="text-blue-500 hover:text-blue-600 hover:underline"
            >
              SSR (Server-side Rendering)
            </Link>
            {" / "}
            <Link
              href="/ssg"
              className="text-blue-500 hover:text-blue-600 hover:underline"
            >
              SSG (Static-site Generation)
            </Link>
          </div>
        </header>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
