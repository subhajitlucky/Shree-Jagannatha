import React from 'react';
import { Box, Heading, Text, VStack, Code } from '@chakra-ui/react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    console.error('🚨 ErrorBoundary caught an error:', error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('🚨 ErrorBoundary - Full error details:', {
      error: error,
      errorInfo: errorInfo,
      componentStack: errorInfo.componentStack,
      errorBoundary: this.props.componentName || 'Unknown Component'
    });
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box p="8" bg="red.50" borderRadius="lg" border="2px solid" borderColor="red.200">
          <Box bg="red.100" p="4" borderRadius="md" mb="4" border="1px solid" borderColor="red.300">
            <Heading size="md" color="red.700" mb="2">⚠️ Component Crashed!</Heading>
            <Text color="red.600">
              {this.props.componentName || 'Visit Page Component'} encountered an error.
            </Text>
          </Box>
          
          <VStack align="start" spacing="4">
            <Box>
              <Heading size="md" color="red.600" mb="2">Error Message:</Heading>
              <Code p="2" bg="red.100" borderRadius="md" display="block">
                {this.state.error && this.state.error.toString()}
              </Code>
            </Box>
            
            <Box>
              <Heading size="md" color="red.600" mb="2">Component Stack:</Heading>
              <Code p="2" bg="red.100" borderRadius="md" display="block" whiteSpace="pre-wrap" fontSize="xs">
                {this.state.errorInfo && this.state.errorInfo.componentStack}
              </Code>
            </Box>
            
            <Box>
              <Heading size="md" color="red.600" mb="2">Debug Info:</Heading>
              <Text fontSize="sm" color="red.700">
                • Component: {this.props.componentName || 'Unknown'}
                <br />
                • Error Type: {this.state.error?.name || 'Unknown'}
                <br />
                • Timestamp: {new Date().toISOString()}
              </Text>
            </Box>
            
            <Box borderLeft="4px solid" borderColor="blue.400" bg="blue.50" p="4" borderRadius="md">
              <Text fontSize="sm" color="blue.700">
                ℹ️ Check the browser console for more detailed error information.
              </Text>
            </Box>
          </VStack>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 