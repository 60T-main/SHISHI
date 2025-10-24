import "./globals.css";
import Header from "../components/Header.jsx";
import MenuOverlay from "@/components/overlays/menuOverlay";
import "bootstrap-icons/font/bootstrap-icons.css";
import PageProviderClient from "../hooks/PageProviderClient";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Noto+Sans+Georgian:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <PageProviderClient>
          <div id="overlay-portal-root"></div>
          <Header />
          <MenuOverlay />
          {children}
        </PageProviderClient>
      </body>
    </html>
  );
}
