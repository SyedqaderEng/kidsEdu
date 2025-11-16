import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Body>
        <main className="flex-grow">{children}</main>
      </Body>
      <Footer />
    </div>
  );
}
