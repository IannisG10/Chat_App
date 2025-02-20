import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import { Provider } from 'react-redux'

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
