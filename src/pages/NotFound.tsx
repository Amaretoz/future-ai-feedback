
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Logo */}
      <header className="flex items-center justify-between p-4 border-b bg-background">
        <img 
          src="/lovable-uploads/bbb9bfc3-ef35-43e0-9260-ef520107baae.png" 
          alt="Company Logo" 
          className="h-10 w-10"
        />
      </header>
      
      <div className="flex items-center justify-center flex-1 min-h-[calc(100vh-80px)]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-4">Oops! Page not found</p>
          <a href="/" className="text-primary hover:text-primary/80 underline">
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
