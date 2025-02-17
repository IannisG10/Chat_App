import "./globals.css";
import TopBar from "@/components/layout/TopBar";


export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <TopBar/>
        {children}
      </body>
    </html>
  );
}
