import "./globals.css";

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
          
            {children}
        
        </body>
      </html>
    
  );
}
