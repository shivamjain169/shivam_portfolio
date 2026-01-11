import { Helmet } from 'react-helmet-async';
import { profile } from '../data/profile';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import Certifications from '../sections/Certifications';
import Achievements from '../sections/Achievements';
import Education from '../sections/Education';
import Contact from '../sections/Contact';

function App() {
  // JSON-LD structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.title,
    description: profile.headline,
    email: profile.email,
    telephone: profile.phone,
    url: window.location.origin,
    sameAs: [
      profile.github,
      profile.linkedin
    ]
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{profile.name} - {profile.title}</title>
        <meta name="title" content={`${profile.name} - ${profile.title}`} />
        <meta name="description" content={profile.headline} />
        <meta name="keywords" content="Full-Stack Developer, React, FastAPI, Flask, WebSockets, Microservices, PostgreSQL, Azure, Performance Optimization, Real-time Systems" />
        <meta name="author" content={profile.name} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:title" content={`${profile.name} - ${profile.title}`} />
        <meta property="og:description" content={profile.headline} />
        <meta property="og:site_name" content={`${profile.name} Portfolio`} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={window.location.href} />
        <meta property="twitter:title" content={`${profile.name} - ${profile.title}`} />
        <meta property="twitter:description" content={profile.headline} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-slate-950 text-slate-100 scrollbar-custom">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Achievements />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
