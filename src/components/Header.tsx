import React from "react";
import Head from "next/head"; // Import Head for managing the document head

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <>
      <Head>
        {/* Meta Tags */}
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="description"
          content="Egsihama Automation: n8n solutions and consulting for SMEs. Automate leads, build websites, optimize processes from $200."
        />
        <meta name="keywords" content="Automation, n8n, Zapier, SMEs, Consulting, Websites" />
        <meta name="author" content="EGSiHAMA" />
        <link rel="icon" href="/favicon.svg" />

        {/* Title */}
        <title>{title}</title>

        {/* Font Smoothing */}
        <style>{`
          html {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        `}</style>
      </Head>

      <header className="w-full p-4 bg-gray-800 text-gray-900 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
          {title}
        </h1>
      </header>
    </>
  );
}