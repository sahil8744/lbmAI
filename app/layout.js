import "./globals.css";
import "./scss/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import CommonHeader from "./components/CommonHeader";
import TabHeader from "./components/TabHeader";
import MobileHeader from "./components/MobileHeader";
import TopToBottom from "./components/TopToBottomButton";
import FormComponent from "./components/FormComponent";
import FooterBottom from "./components/FooterBottom";
import Whatsapp from "./components/whatsapp";
import Telegram from "./components/Telegram";
import { Canonical } from "./canonical";
// import Loader from "./components/Loader";

// import Script from "next/script";

export const metadata = {
  title: " LBM Solutions – Drive Digital Growth and Business Success",
  description:
    "For over 10 years, LBM Solutions has been driving business success with custom software and expert digital strategies. Let’s start your journey today!",
  keywords: [
    "crypto wallet development",
    "wallet development",
    "crypto wallet app development",
    "crypto wallet app development company",
    "crypto wallet create",
    "crypto wallet developer",
    "crypto wallet development company",
    " create crypto wallet app",
    "cryptocurrency wallet development services",
    " create a crypto wallet app",
    "crypto defi wallet development company",
    " cryptocurrency wallet",
    "crypto wallet",
    "best crypto wallet",
    "blockchain wallet",
    " crypto wallet app",
    " cryptocurrency wallet app",
    "create crypto wallet",
    "best crypto wallet app",
    "free crypto wallet",
    "online crypto wallet",
    "wallet address",
    "cold wallet",
    "create a crypto wallet",
    "blockchain app",
    "trust wallet app",
    "best cold wallet",
    "cold wallet crypto",
    "crypto cold wallet",
    "best wallet for crypto",
    "nft wallet",
    " edge wallet",
    "crypto hardware wallet",
    " best crypto cold wallet",
    "crypto wallet uk",
    "hardware wallet",
  ],
  openGraph: {
    title: "LBM Solutions",

    description:
      "LBM Solutions is the best Crypto Wallet Development Company. In our company, we develop secure cryptocurrency wallets for our customers.",
    url: "https://www.lbmsolution.com/",
    type: "website",

    images: [
      {
        url: "https://www.lbmsolution.com/headerImg/sinlge-logo.png",
      },
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <head>
        
        <Canonical />
        <script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5KJBRR83');
`,
          }}
        />
     
      </head>
      <body>
      

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5KJBRR83"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <CommonHeader />
        <TabHeader />
        <MobileHeader />
        <TopToBottom />
        {/* <Loader /> */}
        {children}
        <FormComponent />
        <FooterBottom />
        <Whatsapp />
        <Telegram />

        
      </body>
    </html>
  );
}
