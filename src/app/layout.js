import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'GrabOn: Coupons, Offers, Promo Codes, Deals & Discounts',
  description: 'Find Latest Coupons & Offers For Online Shopping Sites in India. Get the right Coupon Codes, Promo Codes & Deals for 2026. Save on everything!',
  keywords: 'coupons, offers, promo codes, deals, discounts, online shopping, India',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
