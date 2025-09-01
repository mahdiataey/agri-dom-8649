import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Search,
  Menu,
  X,
  ChevronDown,
  Globe,
  User,
  Home,
  FlaskConical,
  Settings,
  FileText,
  Users,
  Calendar,
  MessageSquare,
  Phone
} from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const location = useLocation();

  // Handle sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const languages = [
    { code: 'deutsch', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'english', label: 'English', flag: '🇺🇸' },
    { code: 'francais', label: 'Français', flag: '🇫🇷' },
    { code: 'italiano', label: 'Italiano', flag: '🇮🇹' },
  ];

  const navigationItems = [
    {
      title: 'Home',
      href: '/',
      icon: Home,
      children: [
        { title: 'Dashboard', href: '/' },
        { title: 'Overview', href: '/overview' },
        { title: 'Analytics', href: '/analytics' },
      ]
    },
    {
      title: 'Research',
      href: '/research',
      icon: FlaskConical,
      children: [
        { title: 'Research Projects', href: '/research' },
        { title: 'Research Details', href: '/research/details' },
      ]
    },
    {
      title: 'Services',
      href: '/services',
      icon: Settings,
      children: [
        { title: 'Our Services', href: '/services' },
        { title: 'Crop Analysis', href: '/services/crop-analysis' },
        { title: 'Soil Testing', href: '/services/soil-testing' },
        { title: 'Weather Monitoring', href: '/services/weather' },
        { title: 'Pest Control', href: '/services/pest-control' },
        { title: 'Yield Optimization', href: '/services/yield' },
      ]
    },
    {
      title: 'Pages',
      href: '#',
      icon: FileText,
      children: [
        {
          title: 'Events',
          children: [
            { title: 'All Events', href: '/events' },
            { title: 'Event Details', href: '/events/details' },
          ]
        },
        {
          title: 'Team',
          children: [
            { title: 'Our Team', href: '/team' },
            { title: 'Team Details', href: '/team/details' },
          ]
        },
        { title: 'About Us', href: '/about' },
        { title: 'Our History', href: '/history' },
        { title: 'FAQ', href: '/faq' },
        { title: 'Testimonials', href: '/testimonials' },
        { title: 'Gallery', href: '/gallery' },
      ]
    },
    {
      title: 'Blog',
      href: '/blog',
      icon: MessageSquare,
      children: [
        { title: 'Latest Posts', href: '/blog' },
        { title: 'Blog Categories', href: '/blog/categories' },
        { title: 'Blog Details', href: '/blog/details' },
      ]
    },
    {
      title: 'Contact',
      href: '/contact',
      icon: Phone,
    }
  ];

  const renderSubMenu = (items: any[]) => (
    <div className="grid w-[600px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
      {items.map((item, index) => (
        <div key={index}>
          {item.children ? (
            <div className="space-y-2">
              <h4 className="font-medium text-primary">{item.title}</h4>
              <div className="space-y-1">
                {item.children.map((child: any, childIndex: number) => (
                  <NavigationMenuLink key={childIndex} asChild>
                    <Link
                      to={child.href}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">{child.title}</div>
                    </Link>
                  </NavigationMenuLink>
                ))}
              </div>
            </div>
          ) : (
            <NavigationMenuLink asChild>
              <Link
                to={item.href}
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <div className="text-sm font-medium leading-none">{item.title}</div>
              </Link>
            </NavigationMenuLink>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <>
      <header className="main-header relative">
        {/* Header Top */}
        <div className="header-top bg-primary text-primary-foreground py-2 text-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Open Hours: Mon - Fri 8.00 am - 6.00 pm</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="hidden md:inline">On Social:</span>
                <div className="flex space-x-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="hover:text-primary-foreground/80 transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header Lower */}
        <div className="header-lower bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <div className="logo-box">
                <Link to="/" className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">A</span>
                  </div>
                  <span className="text-xl font-bold text-foreground">Agri Dom</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <NavigationMenu>
                  <NavigationMenuList>
                    {navigationItems.map((item, index) => (
                      <NavigationMenuItem key={index}>
                        {item.children ? (
                          <>
                            <NavigationMenuTrigger className="bg-transparent">
                              <item.icon className="h-4 w-4 mr-2" />
                              {item.title}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                              {renderSubMenu(item.children)}
                            </NavigationMenuContent>
                          </>
                        ) : (
                          <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                            <Link to={item.href} className="flex items-center">
                              <item.icon className="h-4 w-4 mr-2" />
                              {item.title}
                            </Link>
                          </NavigationMenuLink>
                        )}
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              {/* Right Content */}
              <div className="flex items-center space-x-2">
                {/* Search */}
                <Button variant="ghost" size="icon" className="hidden md:flex">
                  <Search className="h-4 w-4" />
                </Button>

                {/* Language Picker */}
                <div className="hidden md:block">
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="bg-transparent border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.flag} {lang.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Account Button */}
                <Button variant="default" className="hidden md:flex">
                  <User className="h-4 w-4 mr-2" />
                  Account
                </Button>

                {/* Mobile Menu Toggle */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-background border-b border-border">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navigationItems.map((item, index) => (
                <div key={index} className="space-y-2">
                  <Link
                    to={item.href}
                    className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </Link>
                  {item.children && (
                    <div className="ml-6 space-y-1">
                      {item.children.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          to={child.href || '#'}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border">
                <Button className="w-full mb-2">
                  <User className="h-4 w-4 mr-2" />
                  Account
                </Button>
                <Button variant="outline" className="w-full">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Sticky Header */}
      <header
        className={cn(
          "sticky-header fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-transform duration-300",
          isSticky ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">A</span>
              </div>
              <span className="text-lg font-bold text-foreground">Agri Dom</span>
            </Link>

            {/* Desktop Navigation - Simplified for sticky */}
            <div className="hidden md:flex items-center space-x-6">
              {navigationItems.slice(0, 4).map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="text-sm text-foreground hover:text-primary transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Right Content */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="default" size="sm" className="hidden md:flex">
                <User className="h-4 w-4 mr-2" />
                Account
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default HeaderMenu;