import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Contact from './components/Contact';
import BackToTopButton from './components/BackToTopButton';

import DiscordTest from './src/DiscordTest';

// Skeletons for lazy loading
import AboutSkeleton from './components/skeletons/AboutSkeleton';
import ServicesSkeleton from './components/skeletons/ServicesSkeleton';
import ShowcaseSkeleton from './components/skeletons/ShowcaseSkeleton';
import BlogSkeleton from './components/skeletons/BlogSkeleton';
import GametusyDetailsSkeleton from './components/skeletons/GametusyDetailsSkeleton';
import RoadmapTimelineSkeleton from './components/skeletons/RoadmapTimelineSkeleton';
import InvestorOnePagerSkeleton from './components/skeletons/InvestorOnePagerSkeleton';
import ProjectDeepDiveSkeleton from './components/skeletons/ProjectDeepDiveSkeleton';
import ProjectsSkeleton from './components/skeletons/ProjectsSkeleton'; // New unified projects skeleton

// Lazy load components
const About = React.lazy(() => import('./components/About'));
const Services = React.lazy(() => import('./components/Services'));
const Showcase = React.lazy(() => import('./components/Showcase'));
const Blog = React.lazy(() => import('./components/Blog'));
const GametusyDetails = React.lazy(() => import('./components/GametusyDetails'));
const RoadmapTimeline = React.lazy(() => import('./components/RoadmapTimeline'));
const InvestorOnePager = React.lazy(() => import('./components/InvestorOnePager'));
const ProjectDeepDive = React.lazy(() => import('./components/ProjectDeepDive'));
const Projects = React.lazy(() => import('./components/Projects'));
const ProjectsArchive = React.lazy(() => import('./components/ProjectsArchive'));


const App: React.FC = () => {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  }, []);

  const showDiscordTest = import.meta.env.VITE_SHOW_DISCORD_TEST === 'true';
  return (
    <Router>
      {showDiscordTest && <DiscordTest />}
      <Header />
      <Routes>
        <Route
          path="/projekty"
          element={
            <Suspense fallback={<ProjectsSkeleton />}>
              <ProjectsArchive />
            </Suspense>
          }
        />
        <Route
          path="/"
          element={
            <main className="container mx-auto px-4 sm:px-6 lg:px-8">
              <Hero />
              <Suspense fallback={<AboutSkeleton />}>
                <About />
              </Suspense>
              <Suspense fallback={<ServicesSkeleton />}>
                <Services />
              </Suspense>
              <Suspense fallback={<ShowcaseSkeleton />}>
                <Showcase />
              </Suspense>
              <Suspense fallback={<ProjectsSkeleton />}> {/* New unified Projects */}
                <Projects />
              </Suspense>
              <Suspense fallback={<BlogSkeleton />}>
                <Blog />
              </Suspense>
              <Suspense fallback={<RoadmapTimelineSkeleton />}>
                <RoadmapTimeline />
              </Suspense>
              <Suspense fallback={<GametusyDetailsSkeleton/>}>
                <GametusyDetails />
              </Suspense>
              <Suspense fallback={<ProjectDeepDiveSkeleton />}>
                <ProjectDeepDive />
              </Suspense>
              <Suspense fallback={<InvestorOnePagerSkeleton />}>
                <InvestorOnePager />
              </Suspense>
              <Contact />
            </main>
          }
        />
      </Routes>
      <Footer />
      <BackToTopButton />
    </Router>
  );
};

export default App;