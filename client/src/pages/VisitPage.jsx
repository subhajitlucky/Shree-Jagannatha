import React, { useEffect } from 'react';
import { Container, Box } from '@chakra-ui/react';

// Import modular components
import ErrorBoundary from '../components/visit/ErrorBoundary';
import HeroSection from '../components/visit/HeroSection';
import TempleTimings from '../components/visit/TempleTimings';
import HowToReach from '../components/visit/HowToReach';
import TempleRules from '../components/visit/TempleRules';
import Facilities from '../components/visit/Facilities';
import Accommodation from '../components/visit/Accommodation';
import BestTimeToVisit from '../components/visit/BestTimeToVisit';

export default function VisitPage() {
  useEffect(() => {
    console.log('🚀 VisitPage: Main component mounted');
    console.log('📋 VisitPage: Loading all sub-components...');
    
    return () => {
      console.log('🔄 VisitPage: Main component unmounting');
    };
  }, []);

  try {
    console.log('🔍 VisitPage: Starting main render process');
    
    return (
      <Box as="main" bg="brand.50" minH="100vh">
        {console.log('🔍 VisitPage: Rendering Hero Section...')}
        <ErrorBoundary componentName="HeroSection">
          <HeroSection />
        </ErrorBoundary>

        <Container maxW="container.lg" py="12">
          {console.log('🔍 VisitPage: Rendering Temple Timings...')}
          <ErrorBoundary componentName="TempleTimings">
            <TempleTimings />
          </ErrorBoundary>

          {console.log('🔍 VisitPage: Rendering How To Reach...')}
          <ErrorBoundary componentName="HowToReach">
            <HowToReach />
          </ErrorBoundary>

          {console.log('🔍 VisitPage: Rendering Temple Rules...')}
          <ErrorBoundary componentName="TempleRules">
            <TempleRules />
          </ErrorBoundary>

          {console.log('🔍 VisitPage: Rendering Facilities...')}
          <ErrorBoundary componentName="Facilities">
            <Facilities />
          </ErrorBoundary>

          {console.log('🔍 VisitPage: Rendering Accommodation...')}
          <ErrorBoundary componentName="Accommodation">
            <Accommodation />
          </ErrorBoundary>

          {console.log('🔍 VisitPage: Rendering Best Time To Visit...')}
          <ErrorBoundary componentName="BestTimeToVisit">
            <BestTimeToVisit />
          </ErrorBoundary>
        </Container>

        {console.log('✅ VisitPage: All components rendered successfully!')}
      </Box>
    );
  } catch (error) {
    console.error('❌ VisitPage: Critical error in main component', error);
    return (
      <Box p="8" bg="red.50" borderRadius="lg" m="4">
        <h1>Critical Error</h1>
        <p>The Visit Page encountered a critical error: {error.message}</p>
        <p>Please check the browser console for more details.</p>
      </Box>
    );
  }
}