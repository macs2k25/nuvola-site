import React, { useState } from 'react';
import { Menu, X, CheckCircle, Users, FileText, Clock, Shield, Zap, ArrowRight, MessageSquare, Calendar, BarChart3, ChevronDown } from 'lucide-react';

const NuvolaCantiereWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Rapportini Digitali",
      description: "Crea rapportini di cantiere professionali direttamente da Telegram in pochi secondi"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Gestione Team",
      description: "Coordina il tuo team e monitora le attività in tempo reale ovunque ti trovi"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Pianificazione Lavori",
      description: "Organizza i cantieri, pianifica le attività e rispetta le scadenze"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Report e Analytics",
      description: "Genera report dettagliati e analizza le performance dei tuoi cantieri"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Risparmio Tempo",
      description: "Riduci il tempo amministrativo del 70% e concentrati sul lavoro sul campo"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sicurezza Dati",
      description: "I tuoi dati sono protetti e sempre disponibili nel cloud"
    }
  ];

  const plans = [
    {
      id: 'free',
      name: 'FREE',
      duration: '7 giorni',
      price: '0',
      description: 'Prova tutte le funzionalità',
      features: [
        'Rapportini illimitati',
        'Tutte le funzionalità PRO',
        'Supporto via email',
        'Nessuna carta richiesta'
      ],
      cta: 'Inizia Gratis',
      highlighted: false
    },
    {
      id: 'basic',
      name: 'BASIC',
      duration: '30 giorni',
      price: '34',
      description: 'Perfetto per piccoli team',
      features: [
        'Fino a 3 utenti',
        'Rapportini illimitati',
        'Gestione cantieri',
        'Report base',
        'Supporto via email'
      ],
      cta: 'Scegli Basic',
      highlighted: false
    },
    {
      id: 'pro',
      name: 'PRO',
      duration: '30 giorni',
      price: '89',
      description: 'Per aziende in crescita',
      features: [
        'Utenti illimitati',
        'Rapportini illimitati',
        'Analytics avanzati',
        'Report personalizzati',
        'Supporto prioritario',
        'API integrazione'
      ],
      cta: 'Scegli Pro',
      highlighted: true
    }
  ];

  const faqs = [
    {
      question: "Come funziona la prova gratuita?",
      answer: "La versione FREE dura 7 giorni e include tutte le funzionalità della versione PRO. Non è richiesta carta di credito e non ci sono vincoli. Puoi iniziare immediatamente dopo la registrazione."
    },
    {
      question: "Posso cambiare piano in qualsiasi momento?",
      answer: "Sì, puoi effettuare upgrade o downgrade del tuo piano in qualsiasi momento. Le modifiche saranno applicate immediatamente e il costo verrà ripartito proporzionalmente."
    },
    {
      question: "Come funziona l'integrazione con Telegram?",
      answer: "NuvolaCantiere funziona attraverso un bot Telegram dedicato. Dopo la registrazione, riceverai le istruzioni per collegare il bot. Potrai creare rapportini semplicemente chattando con il bot, che è sempre disponibile sul tuo smartphone."
    },
    {
      question: "I dati sono al sicuro?",
      answer: "Assolutamente sì. Tutti i dati sono criptati e salvati su server sicuri in Europa. Effettuiamo backup giornalieri e rispettiamo completamente il GDPR. I tuoi dati appartengono sempre e solo a te."
    },
    {
      question: "Posso esportare i miei rapportini?",
      answer: "Sì, puoi esportare i rapportini in formato PDF, Excel o CSV in qualsiasi momento. I tuoi dati sono sempre accessibili e portabili."
    },
    {
      question: "Cosa succede se supero il limite di 3 utenti nel piano Basic?",
      answer: "Quando raggiungi il limite, ti verrà suggerito di passare al piano PRO che include utenti illimitati. Puoi effettuare l'upgrade con un click e continuare senza interruzioni."
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                NuvolaCantiere
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Funzionalità
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Prezzi
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-blue-600 transition-colors font-medium">
                Contatti
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg hover:shadow-lg hover:scale-105 transition-all font-medium">
                Prova Gratis
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <button onClick={() => scrollToSection('features')} className="block w-full text-left text-slate-700 hover:text-blue-600 font-medium py-2">
                Funzionalità
              </button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left text-slate-700 hover:text-blue-600 font-medium py-2">
                Prezzi
              </button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left text-slate-700 hover:text-blue-600 font-medium py-2">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-slate-700 hover:text-blue-600 font-medium py-2">
                Contatti
              </button>
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-medium">
                Prova Gratis
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold inline-flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>Gestione cantieri semplificata</span>
                </div>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Rapportini di cantiere{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  direttamente da Telegram
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                Dimentica carta e penna. Crea rapportini professionali in 60 secondi direttamente dal tuo smartphone. 
                Organizza cantieri, coordina team e genera report automatici.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:shadow-xl hover:scale-105 transition-all font-semibold text-lg flex items-center justify-center space-x-2 group">
                  <span>Inizia Gratis - 7 Giorni</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button onClick={() => scrollToSection('features')} className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all font-semibold text-lg">
                  Scopri di più
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Nessuna carta richiesta</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Setup in 2 minuti</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Bot NuvolaCantiere</div>
                        <div className="text-sm text-slate-500">Online</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-slate-50 rounded-lg p-4 max-w-xs">
                      <p className="text-sm text-slate-700">Ciao! Vuoi creare un nuovo rapportino?</p>
                    </div>
                    <div className="bg-blue-600 text-white rounded-lg p-4 max-w-xs ml-auto">
                      <p className="text-sm">Sì, per il cantiere Via Roma</p>
                    </div>
                    <div className="bg-slate-50 rounded-lg p-4 max-w-xs">
                      <p className="text-sm text-slate-700">Perfetto! Quante ore hai lavorato oggi?</p>
                    </div>
                    <div className="bg-blue-600 text-white rounded-lg p-4 max-w-xs ml-auto">
                      <p className="text-sm">8 ore</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-green-900">Rapportino creato!</p>
                          <p className="text-xs text-green-700 mt-1">PDF disponibile per il download</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Tutto quello che ti serve per gestire i tuoi cantieri
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Una soluzione completa pensata per chi lavora sul campo e ha bisogno di strumenti semplici ed efficaci
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Scegli il piano perfetto per te
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Inizia gratis per 7 giorni, nessuna carta richiesta. Poi scegli il piano più adatto alle tue esigenze.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div 
                key={plan.id}
                className={`rounded-2xl p-8 transition-all duration-300 ${
                  plan.highlighted 
                    ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl scale-105 border-4 border-blue-400' 
                    : 'bg-white border-2 border-slate-200 hover:border-blue-300 hover:shadow-xl'
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-white text-blue-600 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    PIÙ POPOLARE
                  </div>
                )}
                
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? 'text-blue-100' : 'text-slate-600'}`}>
                  {plan.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-end">
                    <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                      €{plan.price}
                    </span>
                    <span className={`ml-2 mb-2 ${plan.highlighted ? 'text-blue-100' : 'text-slate-600'}`}>
                      /{plan.duration}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? 'text-blue-200' : 'text-green-600'
                      }`} />
                      <span className={plan.highlighted ? 'text-blue-50' : 'text-slate-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-lg font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg'
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg hover:scale-105'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-600 mt-12">
            Tutti i piani includono aggiornamenti gratuiti e assistenza via email
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Domande Frequenti
            </h2>
            <p className="text-xl text-slate-600">
              Tutto quello che devi sapere su NuvolaCantiere
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border-2 border-slate-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeFaq === index && (
                  <div className="px-6 py-5 bg-white">
                    <p className="text-slate-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto a semplificare la gestione dei tuoi cantieri?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Inizia oggi stesso con la prova gratuita di 7 giorni. Nessuna carta di credito richiesta.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all font-semibold text-lg shadow-xl hover:scale-105 flex items-center space-x-2 group">
              <span>Inizia la Prova Gratuita</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="border-t border-blue-500 pt-12">
            <h3 className="text-2xl font-bold text-white mb-6">
              Hai domande? Contattaci
            </h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-blue-100">
              <a href="mailto:info@nuvolacantiere.com" className="hover:text-white transition-colors flex items-center space-x-2">
                <span>📧</span>
                <span>info@nuvolacantiere.com</span>
              </a>
              <a href="https://t.me/nuvolacantiere" className="hover:text-white transition-colors flex items-center space-x-2">
                <MessageSquare className="w-5 h-5" />
                <span>@nuvolacantiere su Telegram</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">NuvolaCantiere</span>
              </div>
              <p className="text-slate-400 max-w-md">
                La soluzione moderna per la gestione digitale dei rapportini di cantiere. 
                Semplice, veloce, professionale.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Prodotto</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('features')} className="text-slate-400 hover:text-white transition-colors">Funzionalità</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="text-slate-400 hover:text-white transition-colors">Prezzi</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="text-slate-400 hover:text-white transition-colors">FAQ</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Legale</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Termini di Servizio</a></li>
                <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
            <p>&copy; 2024 NuvolaCantiere. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NuvolaCantiereWebsite;
