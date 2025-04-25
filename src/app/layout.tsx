
import "./globals.css";
import Providers from "./provider";

export const metadata = {
  title: "Tchaton",
  icons: {
    icon: "/favico.png"
  }
}



export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body
        > 
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
  );
}
