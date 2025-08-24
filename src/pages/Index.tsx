
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
      {/* Hero Section */}
      <section className="hero-section min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Centered Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/bbb9bfc3-ef35-43e0-9260-ef520107baae.png" 
              alt="Company Logo" 
              className="h-16 w-16"
            />
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 fade-in">
            <div className="trust-badge">
              <Shield className="w-4 h-4 text-green-600" />
              Privacy eerst
            </div>
            <div className="trust-badge">
              <Lock className="w-4 h-4 text-green-600" />
              Veilig & versleuteld
            </div>
            <div className="trust-badge">
              <CheckCircle className="w-4 h-4 text-green-600" />
              Snel & makkelijk
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 slide-up">
            Help ons betere AI-tools maken voor jouw werk
          </h1>

          {/* Subheading */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto slide-up">
            Deel jouw ervaringen met ons! Deze korte vragenlijst van 2 minuten helpt ons begrijpen hoe we AI beter kunnen laten werken voor mensen zoals jij. Jouw privacy is belangrijk - alles blijft veilig en vertrouwelijk.
          </p>

          {/* CTA Button */}
          <button 
            onClick={handleStartSurvey}
            className="btn-primary inline-flex items-center gap-2 text-lg slide-up"
          >
            Start Vragenlijst
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Quick info */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Duurt ongeveer 2 minuten
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Je kunt altijd stoppen
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
              <h2 className="text-2xl font-semibold mb-6">Waarom privacy voor ons belangrijk is</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Vertrouwd door 10.000+ gebruikers</div>
                    <div className="text-sm text-muted-foreground">Mensen zoals jij helpen ons verbeteren</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Jouw gegevens blijven veilig</div>
                    <div className="text-sm text-muted-foreground">We bewaren ze maar 6 maanden, daarna zijn ze weg</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">We verkopen nooit jouw informatie</div>
                    <div className="text-sm text-muted-foreground">Jouw antwoorden helpen ons, niet adverteerders</div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-card border rounded-lg">
                <div className="text-sm text-muted-foreground mb-2">
                  <strong>Simpel gezegd:</strong> We verzamelen alleen wat we nodig hebben om onze AI-tools beter te maken voor mensen zoals jij. 
                  Alles wordt versleuteld en volgt ons{' '}
                  <a href="#privacy" className="text-primary hover:underline">privacybeleid</a>.
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="form-card">
              <h3 className="text-lg font-semibold mb-4">Wie zit hierachter?</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                    AI
                  </div>
                  <div>
                    <div className="font-medium">AI Onderzoeksteam</div>
                    <div className="text-sm text-muted-foreground">contact@airesearch.example</div>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Veilige verbinding</span>
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex justify-between">
                  <span>AVG-compliant</span>
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex justify-between">
                  <span>Beperkte gegevensbewaring</span>
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
          <a href="#privacy" className="hover:text-primary">Privacybeleid</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
          <a href="#terms" className="hover:text-primary">Voorwaarden</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
