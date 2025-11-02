import "./globals.css";
import Header from "../components/Header.jsx";
import Footer from "@/components/Footer";
import MenuOverlay from "@/components/overlays/menuOverlay";
import "bootstrap-icons/font/bootstrap-icons.css";
import PageProviderClient from "../hooks/PageProviderClient";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Noto+Sans+Georgian:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta property="og:title" content="SHISHI – Official Site"></meta>
        <meta property="og:image" content="https://shishi.ge/logo.jpg"></meta>
        <meta property="og:url" content="https://shishi.ge"></meta>
        <meta property="og:type" content="website"></meta>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
          integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="preload"
          href="/fonts/Nippo-Light.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <main>
          <PageProviderClient>
            <div id="overlay-portal-root"></div>
            <div className="min-h-[100dvh] grid grid-rows-[auto_1fr_auto]">
              <Header />

              <MenuOverlay />
              {children}

              <Footer />
            </div>
          </PageProviderClient>
        </main>
      </body>
    </html>
  );
}
