import React from 'react';
import HeaderMenu from '@/components/HeaderMenu';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const HeaderMenuDemo = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderMenu />
      
      <main className="container mx-auto px-4 py-8 mt-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Header Menu Demo</CardTitle>
            <CardDescription>
              This page demonstrates the new HeaderMenu component with:
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Features</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Top header with business hours and social links</li>
                  <li>Main navigation with dropdown menus</li>
                  <li>Responsive mobile menu</li>
                  <li>Sticky header on scroll</li>
                  <li>Search functionality</li>
                  <li>Language picker</li>
                  <li>Account access button</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Navigation Items</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Home (with dashboard sub-items)</li>
                  <li>Research (projects and details)</li>
                  <li>Services (various agricultural services)</li>
                  <li>Pages (events, team, about, etc.)</li>
                  <li>Blog (posts and categories)</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
            
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">Try these features:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Scroll down to see the sticky header appear</li>
                <li>• Hover over navigation items to see dropdown menus</li>
                <li>• Resize your browser to test mobile responsiveness</li>
                <li>• Click the language selector to change languages</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        {/* Add some content to test scrolling */}
        <div className="mt-8 space-y-8">
          {Array.from({ length: 10 }, (_, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>Demo Content Section {i + 1}</CardTitle>
                <CardDescription>
                  This is placeholder content to demonstrate scrolling behavior
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HeaderMenuDemo;