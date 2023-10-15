import RecoilContextProvider from "@/components/Recoil/RecoilContextProvider";
import type { Metadata } from "next";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar/Navbar";
import { RecoilRoot } from "recoil";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RecoilContextProvider>
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </RecoilContextProvider>
      </body>
    </html>
  );
}
