import "../styles/globals.scss";
import Header from "../components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "AI Leone",
  description: "А Льва львом просто называю",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
