
import { CheckCircle, ArrowRight, Mail } from 'lucide-react';
import { useState } from 'react';
import { TextInput } from './form-steps/TextInput';

interface ConfirmationPageProps {
  surveyData: any;
  onBackToStart: () => void;
}

const ConfirmationPage = ({ surveyData, onBackToStart }: ConfirmationPageProps) => {
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const shouldShowEmailPrompt = surveyData?.pilot_opt_in && !surveyData?.email;

  const handleEmailSubmit = async () => {
    if (!email) return;
    
    // Here you would normally submit the email to your backend
    console.log('Submitting email for pilot:', email);
    setEmailSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-2xl mx-auto">
        
        {/* Success message */}
        <div className="text-center mb-12 slide-up">
          <div className="w-16 h-16 bg-trust-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-trust-green" />
          </div>
          
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Bedankt voor uw tijd!
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Uw antwoorden zijn veilig verzonden. We gebruiken deze input alleen om onze AI-oplossingen te verbeteren.
          </p>
        </div>

        {/* Email prompt if pilot opted in but no email provided */}
        {shouldShowEmailPrompt && !emailSubmitted && (
          <div className="form-card mb-8 slide-up">
            <div className="flex items-start gap-3 mb-4">
              <Mail className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Pilot deelname
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  U heeft aangegeven interesse te hebben in pilot-deelname. Vul hieronder uw e-mailadres in om contact te ontvangen.
                </p>
                
                <div className="flex gap-3">
                  <div className="flex-1">
                    <TextInput
                      type="email"
                      placeholder="uw.email@bedrijf.nl"
                      value={email}
                      onChange={setEmail}
                    />
                  </div>
                  <button
                    onClick={handleEmailSubmit}
                    disabled={!email}
                    className="btn-primary"
                  >
                    Versturen
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {emailSubmitted && (
          <div className="form-card mb-8 slide-up">
            <div className="security-indicator">
              <CheckCircle className="w-4 h-4" />
              E-mail ontvangen! We nemen binnenkort contact op.
            </div>
          </div>
        )}

        {/* Next steps */}
        <div className="form-card mb-8 slide-up">
          <h2 className="text-xl font-semibold mb-6">Wat nu?</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">1</div>
              <div>
                <div className="font-medium text-foreground">Analyse van uw input</div>
                <div className="text-sm text-muted-foreground">We analyseren alle antwoorden om patronen en behoeften te identificeren</div>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">2</div>
              <div>
                <div className="font-medium text-foreground">Productverbetering</div>
                <div className="text-sm text-muted-foreground">Uw feedback helpt ons functies te prioriteren en te ontwikkelen</div>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">3</div>
              <div>
                <div className="font-medium text-foreground">Updates & mogelijkheden</div>
                <div className="text-sm text-muted-foreground">Bij interesse houden we u op de hoogte van ontwikkelingen</div>
              </div>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="text-center space-y-4 slide-up">
          <button 
            onClick={() => window.open('https://example.com/ai-tools', '_blank')}
            className="btn-primary inline-flex items-center gap-2 text-lg"
          >
            Ontdek wat we al kunnen
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <button 
              onClick={onBackToStart}
              className="btn-ghost"
            >
              Terug naar start
            </button>
            <a 
              href="#privacy" 
              className="btn-ghost"
            >
              Privacyverklaring
            </a>
          </div>
        </div>

        {/* Trust footer */}
        <div className="mt-12 pt-8 border-t text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="security-indicator">
              <CheckCircle className="w-4 h-4" />
              Gegevens veilig opgeslagen
            </div>
            <div className="security-indicator">
              <CheckCircle className="w-4 h-4" />
              Geen verkoop aan derden
            </div>
            <div className="security-indicator">
              <CheckCircle className="w-4 h-4" />
              Beperkte bewaartermijn
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
