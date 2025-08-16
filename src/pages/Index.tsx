
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
      <SurveyForm 
        onComplete={handleSurveyComplete}
        onBack={handleBackToLanding}
      />
    );
  }

  if (currentPage === 'confirmation') {
    return (
      <ConfirmationPage 
        surveyData={surveyData}
        onBackToStart={handleBackToLanding}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-section min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 fade-in">
            <div className="trust-badge">
              <Shield className="w-4 h-4 text-trust-green" />
              Privacy-vriendelijk
            </div>
            <div className="trust-badge">
              <Lock className="w-4 h-4 text-trust-green" />
              Versleutelde verzending
            </div>
            <div className="trust-badge">
              <CheckCircle className="w-4 h-4 text-trust-green" />
              Alleen noodzakelijke vragen
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 slide-up">
            Help ons AI-tools te verbeteren voor uw werk
          </h1>

          {/* Subheading */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto slide-up">
            Uw input kost ~2 minuten en blijft privé. We gebruiken deze informatie om veilige, nuttige AI-functies te bouwen.
          </p>

          {/* CTA Button */}
          <button 
            onClick={handleStartSurvey}
            className="btn-primary inline-flex items-center gap-2 text-lg slide-up"
          >
            Vragenlijst starten
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Quick info */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-trust-green rounded-full"></span>
              Invultijd: ±2 minuten
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-trust-green rounded-full"></span>
              U kunt op elk moment stoppen
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
              <h2 className="text-2xl font-semibold mb-6">Betrouwbaar en transparant</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Meer dan 10.000 gebruikers</div>
                    <div className="text-sm text-muted-foreground">Vertrouwen ons met hun data</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Veilige opslag</div>
                    <div className="text-sm text-muted-foreground">Bewaartermijn beperkt tot 6 maanden</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">Geen verkoop van data</div>
                    <div className="text-sm text-muted-foreground">Uw gegevens blijven bij ons</div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-card border rounded-lg">
                <div className="text-sm text-muted-foreground mb-2">
                  <strong>Privacy samenvatting:</strong> We verzamelen alleen noodzakelijke gegevens om deze tool te verbeteren. 
                  Uw antwoorden worden versleuteld verzonden en volgens onze{' '}
                  <a href="#privacy" className="text-primary hover:underline">privacyverklaring</a> bewaard.
                </div>
              </div>
            </div>

            {/* Contact info */}
            <div className="form-card">
              <h3 className="text-lg font-semibold mb-4">Contact & eigenaarschap</h3>
              
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
                  <span>TLS/HTTPS</span>
                  <CheckCircle className="w-4 h-4 text-trust-green" />
                </div>
                <div className="flex justify-between">
                  <span>GDPR compliant</span>
                  <CheckCircle className="w-4 h-4 text-trust-green" />
                </div>
                <div className="flex justify-between">
                  <span>Beperkte bewaartermijn</span>
                  <CheckCircle className="w-4 h-4 text-trust-green" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <a href="#privacy" className="hover:text-primary">Privacyverklaring</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
          <a href="#terms" className="hover:text-primary">Voorwaarden</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
