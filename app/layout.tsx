import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavLinks from '../components/NavLinks';

export const metadata = {
  title: 'Sacrament Meeting Planner',
  description: 'Plan and view sacrament meetings',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <NavLinks />
        <main className="flex-1 container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
