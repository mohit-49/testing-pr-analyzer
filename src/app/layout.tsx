// import "./globals.css";
// import Providers from "./providers";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export const metadata = {
//   title: "Infinity Domains",
//   description: "Infinity Domains — Own your Web3 identity. Secure your digital future.",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <Providers>
//           {children}
//           <ToastContainer/>
//         </Providers>
//       </body>
//     </html>
//   );
// }
import "./globals.css";
import Providers from "./providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Infinity Domains",
  description: "Infinity Domains — Own your Web3 identity. Secure your digital future.",

  icons: {
    icon: "/group1-removebg-preview.png",
  },

  openGraph: {
    title: "Infinity Domains",
    description: "Infinity Domains — Own your Web3 identity.",
    url: "http://localhost:3001",
    siteName: "Infinity Domains",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Infinity Domains",
    description: "Infinity Domains — Own your Web3 identity.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
