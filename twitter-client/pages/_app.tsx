import "@/styles/globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <GoogleOAuthProvider clientId="525421553097-q438knnno4nunodmnb83sfc3el9ivcj2.apps.googleusercontent.com">
        <Component {...pageProps} />
        <Toaster />
      </GoogleOAuthProvider>
    </div>
  );
}
