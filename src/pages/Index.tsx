
import { useState } from 'react';
import { Shield, Lock, Users, ArrowRight, CheckCircle } from 'lucide-react';
import SurveyForm from '../components/SurveyForm';
import ConfirmationPage from '../components/ConfirmationPage';

type PageState = 'landing' | 'survey' | 'confirmation';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<PageState>('landing');
  const [surveyData, setSurveyData] = useState(null);

  const handleStartSurvey = () => {
    setCurrentPage('survey');
  };

  const handleSurveyComplete = (data: any) => {
    setSurveyData(data);
    setCurrentPage('confirmation');
  };

  const handleBackToLanding = () => {
    setCurrentPage('landing');
    setSurveyData(null);
  };

  if (currentPage === 'survey') {
    return (
      <div>
        <header className="flex items-center justify-between p-4 border-b bg-background">
          <img 
            src="/lovable-uploads/bbb9bfc3-ef35-43e0-9260-ef520107baae.png" 
            alt="Company Logo" 
            className="h-8 w-8"
          />
        </header>
        <SurveyForm 
          onComplete={handleSurveyComplete}
          onBack={handleBackToLanding}
        />
      </div>
    );
  }

  if (currentPage === 'confirmation') {
    return (
      <div>
        <header className="flex items-center justify-between p-4 border-b bg-background">
          <img 
            src="/lovable-uploads/bbb9bfc3-ef35-43e0-9260-ef520107baae.png" 
            alt="Company Logo" 
            className="h-8 w-8"
          />
        </header>
        <ConfirmationPage 
          surveyData={surveyData}
          onBackToStart={handleBackToLanding}
        />
      </div>
    );
  }

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

      {/* Hero Section */}
      <section className="hero-section min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 fade-in">
            <div className="trust-badge">
              <Shield className="w-4 h-4 text-green-600" />
              Privacy first
            </div>
            <div className="trust-badge">
              <Lock className="w-4 h-4 text-green-600" />
              Secure & encrypted
            </div>
            <div className="trust-badge">
              <CheckCircle className="w-4 h-4 text-green-600" />
              Quick & easy
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 slide-up">
            Help us build better AI tools for your work
          </h1>

          {/* Subheading */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto slide-up">
            Share your thoughts with us! This quick 2-minute survey helps us understand how we can make AI work better for you. Your privacy matters - we keep everything secure and confidential.
          </p>

          {/* CTA Button */}
          <button 
            onClick={handleStartSurvey}
            className="btn-primary inline-flex items-center gap-2 text-lg slide-up"
          >
            Start Survey
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Quick info */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Takes about 2 minutes
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              You can stop anytime
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Trust info */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Why we care about your privacy</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Trusted by 10,000+ users</div>
                    <div className="text-sm text-muted-foreground">People like you help us improve</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Your data stays safe</div>
                    <div className="text-sm text-muted-foreground">We only keep it for 6 months, then it's gone</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">We never sell your info</div>
                    <div className="text-sm text-muted-foreground">Your responses help us, not advertisers</div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-card border rounded-lg">
                <div className="text-sm text-muted-foreground mb-2">
                  <strong>The simple truth:</strong> We collect just what we need to make our AI tools work better for people like you. 
                  Everything is encrypted and follows our{' '}
                  <a href="#privacy" className="text-primary hover:underline">privacy policy</a>.
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="form-card">
              <h3 className="text-lg font-semibold mb-4">Who's behind this?</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                    AI
                  </div>
                  <div>
                    <div className="font-medium">AI Research Team</div>
                    <div className="text-sm text-muted-foreground">contact@airesearch.example</div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Secure connection</span>
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex justify-between">
                  <span>GDPR compliant</span>
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex justify-between">
                  <span>Limited data retention</span>
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <a href="#privacy" className="hover:text-primary">Privacy Policy</a>
          <a href="#contact" className="hover:text-primary">Contact Us</a>
          <a href="#terms" className="hover:text-primary">Terms</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
