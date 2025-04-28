
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
<<<<<<< HEAD
        >
            {children}
=======
        > 
          <Providers>
            {children}
          </Providers>
>>>>>>> 68a7afbf0aa2595308954ad3b51193b092e4d3e1
        </body>
      </html>
  );
}
