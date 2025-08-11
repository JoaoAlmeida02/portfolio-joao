import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traduções
const translations = {
  pt: {
    'hero.subtitle': 'Desenvolvedor Backend atualmente trabalhando na área',
    'hero.description': 'Trabalho com Python e Node.js, confiável, persistente e aprendendo mais a cada dia',
    'hero.github': 'GitHub',
    'hero.linkedin': 'LinkedIn',
    'hero.instagram': 'Instagram',
    'hero.contact': 'Entre em Contato',
    'hero.copyEmail': 'Copiar Email',
    'hero.email': 'joaogabrielsantosaa@gmail.com',
    'contact.title': 'Entre em Contato',
    'contact.description': 'Estou sempre aberto para discutir novas oportunidades, projetos interessantes ou simplesmente trocar ideias sobre tecnologia.',
    'contact.copyEmail': 'Copiar Email',
    'projects.title': 'Meus Projetos',
    'projects.subtitle': 'Projetos desenvolvidos com foco em qualidade, performance e boas práticas de desenvolvimento.',
    'projects.viewAll': 'Ver todos os projetos no GitHub',
    'projects.repository': 'Repositório',
    'projects.barberbook.description': 'Sistema de agendamento para barbearias com reconhecimento facial e integração de processos BPMN.',
    'projects.truckservice.description': 'Sistema para gestão de serviços de caminhões, incluindo controle de manutenção e histórico de serviços.',
    'projects.logintest.description': 'Projeto simples com foco em testes automatizados de login, autenticação e cobertura de testes com ferramentas modernas.',
    'projects.estacionamento.description': 'Aplicação para controle de estacionamento com diferentes tipos de vagas e regras de cobrança específicas.',
    'contact.github.description': 'Veja meus projetos e contribuições',
    'contact.linkedin.description': 'Conecte-se comigo profissionalmente',
    'contact.instagram.description': 'Acompanhe minha jornada',
    'toast.emailCopied.title': 'Email copiado!',
    'toast.emailCopied.description': 'O email {email} foi copiado para a área de transferência.',
    'toast.emailCopyError.title': 'Email: joaogabrielsantosaa@gmail.com',
    'toast.emailCopyError.description': 'Copie o email acima manualmente.',
  },
  en: {
    'hero.subtitle': 'Backend Developer currently working in the field',
    'hero.description': 'I work with python and node.js, reliable, persistent and learning more every day',
    'hero.github': 'GitHub',
    'hero.linkedin': 'LinkedIn',
    'hero.instagram': 'Instagram',
    'hero.contact': 'Get in Touch',
    'hero.copyEmail': 'Copy Email',
    'hero.email': 'joaogabrielsantosaa@gmail.com',
    'contact.title': 'Get in Touch',
    'contact.description': 'I am always open to discussing new opportunities, interesting projects or simply exchanging ideas about technology.',
    'contact.copyEmail': 'Copy Email',
    'projects.title': 'My Projects',
    'projects.subtitle': 'Projects developed with focus on quality, performance and good development practices.',
    'projects.viewAll': 'View all projects on GitHub',
    'projects.repository': 'Repository',
    'projects.barberbook.description': 'Barbershop scheduling system with facial recognition and BPMN process integration.',
    'projects.truckservice.description': 'Truck service management system, including maintenance control and service history.',
    'projects.logintest.description': 'Simple project focused on automated login tests, authentication and test coverage with modern tools.',
    'projects.estacionamento.description': 'Parking control application with different types of spaces and specific charging rules.',
    'contact.github.description': 'See my projects and contributions',
    'contact.linkedin.description': 'Connect with me professionally',
    'contact.instagram.description': 'Follow my journey',
    'toast.emailCopied.title': 'Email copied!',
    'toast.emailCopied.description': 'The email {email} was copied to the clipboard.',
    'toast.emailCopyError.title': 'Email: joaogabrielsantosaa@gmail.com',
    'toast.emailCopyError.description': 'Copy the email above manually.',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const value = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
