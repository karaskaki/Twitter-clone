import "@/styles/globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <GoogleOAuthProvider clientId="525421553097-q438knnno4nunodmnb83sfc3el9ivcj2.apps.googleusercontent.com">
        <Component {...pageProps} />
      </GoogleOAuthProvider>
    </div>
  );
}
