import "./globals.css";
import { HeroUiProvider } from "./providers";
import StaticNavbar from "@/components/staticNavbar";
import getContact from "@/services/dataService";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contactDetail = getContact();

  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="google-site-verification" content="zqNePkuhgspfDUzSloh8ygRu9VvPXvqc7WWNM4OvzNE" />
      </head>
      <body className="overflow-x-hidden">
        <HeroUiProvider>
          <div className="min-h-screen flex flex-col">
            <StaticNavbar contactDetail={contactDetail} />
            {children}
          </div>
        </HeroUiProvider>
      </body>
    </html>
  );
}
