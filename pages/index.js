import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import FeatureCards from '../components/FeatureCards';
import ValueProposition from '../components/ValueProposition';
import TrustSection from '../components/TrustSection';
import IntegrationSection from '../components/IntegrationSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>KidsEdu - Learn, Play, Grow | Safe Educational Platform for Children</title>
        <meta name="description" content="Engaging educational experiences that make learning fun and effective. Safe, interactive content designed by educators for children of all ages." />
        <meta name="keywords" content="kids education, online learning, children, safe learning platform, interactive education" />
        <meta property="og:title" content="KidsEdu - Learn, Play, Grow" />
        <meta property="og:description" content="Engaging educational experiences that make learning fun and effective." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <HeroSection />
      <FeatureCards />
      <ValueProposition />
      <TrustSection />
      <IntegrationSection />
    </>
  );
}
