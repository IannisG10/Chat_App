import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import { ReduxProvider } from "@/lib/provider";

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <html lang="en">
        <body
        >
          <ReduxProvider>
          <TopBar/>
            {children}
          </ReduxProvider>
        </body>
      </html>
    
  );
}
