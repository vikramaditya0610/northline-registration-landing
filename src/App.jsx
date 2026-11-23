import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Capabilities from './components/Capabilities.jsx';
import EnquiryForm from './components/EnquiryForm.jsx';
import Footer from './components/Footer.jsx';
import shared from './styles/shared.module.css';

export default function App() {
  return (
    <>
      <a className={shared.skipLink} href="#main">Skip to main content</a>
      <Header />
      <main id="main" tabIndex="-1">
        <Hero />
        <Capabilities />
        <EnquiryForm />
      </main>
      <Footer />
    </>
  );
}
