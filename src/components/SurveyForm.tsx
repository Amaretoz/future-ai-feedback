
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Shield } from 'lucide-react';
import Step1Organization from './form-steps/Step1Organization';
import Step2AIUsage from './form-steps/Step2AIUsage';
import Step3Applications from './form-steps/Step3Applications';
import Step4Willingness from './form-steps/Step4Willingness';

interface SurveyFormProps {
  onComplete: (data: any) => void;
  onBack: () => void;
}

interface FormData {
  // Step 1
  org_size: string;
  sector: { value: string; other: string };
  role: { value: string; other: string };
  revenue: { value: string; other: string };
  
  // Step 2
  ai_tools: { values: string[]; other: string };
  ai_usage_frequency: string;
  ai_satisfaction: string;
  ai_barriers: { values: string[]; other: string };
  
  // Step 3
  ai_tasks: { values: string[]; other: string };
  ai_fit: string;
  value_doc_qa: string;
  value_cocreation: string;
  usefulness_autosummary: string;
  
  // Step 4
  willing_to_pay: string;
  openness: string;
  extra_features: { values: string[]; other: string };
  pilot_opt_in: boolean;
  email: string;
  marketing_opt_in: boolean;
}

const STEPS = [
  { id: 1, title: 'Organisatie & rol', description: 'Vertel ons over uw organisatie' },
  { id: 2, title: 'Huidig AI-gebruik', description: 'Uw ervaring met AI-tools' },
  { id: 3, title: 'Toepassingen & waarde', description: 'Waar zou AI u helpen?' },
  { id: 4, title: 'Bereidheid & vervolgstappen', description: 'Interesse en vervolgacties' },
];

const SurveyForm = ({ onComplete, onBack }: SurveyFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    org_size: '',
    sector: { value: '', other: '' },
    role: { value: '', other: '' },
    revenue: { value: '', other: '' },
    ai_tools: { values: [], other: '' },
    ai_usage_frequency: '',
    ai_satisfaction: '',
    ai_barriers: { values: [], other: '' },
    ai_tasks: { values: [], other: '' },
    ai_fit: '',
    value_doc_qa: '',
    value_cocreation: '',
    usefulness_autosummary: '',
    willing_to_pay: '',
    openness: '',
    extra_features: { values: [], other: '' },
    pilot_opt_in: false,
    email: '',
    marketing_opt_in: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateFormData = (stepData: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...stepData }));
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (!formData.org_size) newErrors.org_size = 'Organisatiegrootte is verplicht';
        if (!formData.sector.value) newErrors.sector = 'Sector is verplicht';
        if (formData.sector.value === 'Anders' && !formData.sector.other) {
          newErrors['sector.other'] = 'Specificeer andere sector';
        }
        if (!formData.role.value) newErrors.role = 'Functie/rol is verplicht';
        if (formData.role.value === 'Anders' && !formData.role.other) {
          newErrors['role.other'] = 'Specificeer andere rol';
        }
        if (formData.revenue.value === 'Anders' && !formData.revenue.other) {
          newErrors['revenue.other'] = 'Specificeer andere omzetcategorie';
        }
        break;
      
      case 2:
        if (formData.ai_tools.values.length === 0) newErrors.ai_tools = 'Selecteer minimaal één AI-tool';
        if (formData.ai_tools.values.includes('Anders') && !formData.ai_tools.other) {
          newErrors['ai_tools.other'] = 'Specificeer andere AI-tool';
        }
        if (!formData.ai_usage_frequency) newErrors.ai_usage_frequency = 'Gebruiksfrequentie is verplicht';
        if (!formData.ai_satisfaction) newErrors.ai_satisfaction = 'Tevredenheid is verplicht';
        if (formData.ai_barriers.values.length === 0) newErrors.ai_barriers = 'Selecteer minimaal één barrière';
        if (formData.ai_barriers.values.includes('Anders') && !formData.ai_barriers.other) {
          newErrors['ai_barriers.other'] = 'Specificeer andere barrière';
        }
        break;
      
      case 3:
        if (formData.ai_tasks.values.length === 0) newErrors.ai_tasks = 'Selecteer minimaal één taak';
        if (formData.ai_tasks.values.includes('Anders') && !formData.ai_tasks.other) {
          newErrors['ai_tasks.other'] = 'Specificeer andere taak';
        }
        if (!formData.ai_fit) newErrors.ai_fit = 'AI-geschiktheid is verplicht';
        if (!formData.value_doc_qa) newErrors.value_doc_qa = 'Waardering document Q&A is verplicht';
        if (!formData.value_cocreation) newErrors.value_cocreation = 'Waardering co-creëren is verplicht';
        if (!formData.usefulness_autosummary) newErrors.usefulness_autosummary = 'Nuttigheid automatische samenvatting is verplicht';
        break;
      
      case 4:
        if (!formData.willing_to_pay) newErrors.willing_to_pay = 'Betalingsbereidheid is verplicht';
        if (!formData.openness) newErrors.openness = 'Openheid voor gebruik is verplicht';
        if (formData.extra_features.values.includes('Anders') && !formData.extra_features.other) {
          newErrors['extra_features.other'] = 'Specificeer andere functie';
        }
        if (formData.pilot_opt_in && !formData.email) {
          newErrors.email = 'E-mail is verplicht voor pilot deelname';
        }
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'Voer een geldig e-mailadres in';
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < STEPS.length) {
        setCurrentStep(currentStep + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      onBack();
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    
    try {
      const payload = {
        ...formData,
        meta: {
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString(),
        }
      };

      const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || '/api/submit';
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        onComplete(formData);
      } else {
        setErrors({ submit: 'Er is een fout opgetreden bij het verzenden. Probeer het opnieuw.' });
      }
    } catch (error) {
      setErrors({ submit: 'Verbindingsfout. Controleer uw internetverbinding en probeer opnieuw.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = (currentStep / STEPS.length) * 100;
  const currentStepInfo = STEPS[currentStep - 1];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Organization data={formData} updateData={updateFormData} errors={errors} />;
      case 2:
        return <Step2AIUsage data={formData} updateData={updateFormData} errors={errors} />;
      case 3:
        return <Step3Applications data={formData} updateData={updateFormData} errors={errors} />;
      case 4:
        return <Step4Willingness data={formData} updateData={updateFormData} errors={errors} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header with progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">AI Interessepeiling</h1>
            <div className="text-sm text-muted-foreground">
              Stap {currentStep} van {STEPS.length}
            </div>
          </div>
          
          <div className="progress-bar mb-4">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="text-center">
            <h2 className="text-lg font-semibold text-form-step">{currentStepInfo.title}</h2>
            <p className="text-muted-foreground">{currentStepInfo.description}</p>
          </div>
        </div>

        {/* Form content */}
        <div className="form-card slide-up">
          <div className="mb-6 text-sm text-muted-foreground">
            Beantwoord enkele korte vragen. Velden met * zijn verplicht.
          </div>
          
          {renderStep()}
          
          {errors.submit && (
            <div className="mt-4 p-3 bg-destructive/10 text-destructive text-sm rounded-lg">
              {errors.submit}
            </div>
          )}
          
          {/* Navigation buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <button
              type="button"
              onClick={handlePrevious}
              className="btn-ghost inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              {currentStep === 1 ? 'Terug naar start' : 'Vorige'}
            </button>
            
            <button
              type="button"
              onClick={handleNext}
              disabled={isSubmitting}
              className="btn-primary inline-flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Bezig met verzenden...
                </>
              ) : currentStep === STEPS.length ? (
                <>
                  <Shield className="w-4 h-4" />
                  Opslaan & verzenden
                </>
              ) : (
                <>
                  Volgende
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
          
          {currentStep === STEPS.length && (
            <div className="security-indicator justify-center mt-4">
              <Shield className="w-4 h-4" />
              Uw antwoorden worden veilig verzonden
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SurveyForm;
