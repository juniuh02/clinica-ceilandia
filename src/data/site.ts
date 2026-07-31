export const whatsappUrl =
  'https://api.whatsapp.com/send?phone=5561991117464&text=Estou%20no%20site%20da%20Cl%C3%ADnica%20Ceil%C3%A2ndia%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20consultas%20e%20exames...';

export const specialties = [
  ['Cardiologia', '/especialidades/cardiologia/', 'heart'],
  ['Clínica Médica', '/especialidades/clinica-medica/', 'medical'],
  ['Ginecologia', '/especialidades/ginecologia/', 'female'],
  ['Ortopedia', '/especialidades/ortopedia/', 'bone'],
  ['Pediatria', '/especialidades/pediatria/', 'child'],
  ['Dermatologia', '/especialidades/dermatologia/', 'sparkle'],
  ['Nutrição', '/especialidades/nutricao/', 'apple'],
  ['Cirurgia Plástica', '/especialidades/cirurgia-plastica/', 'shield']
] as const;

export const exams = [
  ['Ecografia', '/exames/ecografia/'],
  ['Laboratório', '/exames/laboratorio/'],
  ['Raio-X', '/exames/raio-x/'],
  ['Admissional/Demissional', '/exames/admissional-demissional/']
] as const;

export const routes = [
  { code: '01.1', path: '/quem-somos/', title: 'Quem Somos' },
  { code: '01.3', path: '/estrutura/', title: 'Estrutura e Diferenciais' },
  { code: '02.', path: '/especialidades/', title: 'Especialidades Médicas' },
  { code: '02.1', path: '/especialidades/cardiologia/', title: 'Cardiologia na Ceilândia' },
  { code: '02.2', path: '/especialidades/clinica-medica/', title: 'Clínica Médica na Ceilândia' },
  { code: '02.3', path: '/especialidades/ginecologia/', title: 'Ginecologia na Ceilândia' },
  { code: '02.4', path: '/especialidades/ortopedia/', title: 'Ortopedia na Ceilândia' },
  { code: '02.5', path: '/especialidades/pediatria/', title: 'Pediatria na Ceilândia' },
  { code: '02.6', path: '/especialidades/dermatologia/', title: 'Dermatologia na Ceilândia' },
  { code: '02.7', path: '/especialidades/nutricao/', title: 'Nutrição na Ceilândia' },
  { code: '02.8', path: '/especialidades/cirurgia-plastica/', title: 'Cirurgia Plástica na Ceilândia' },
  { code: '03.', path: '/exames/', title: 'Exames e Diagnóstico' },
  { code: '03.1', path: '/exames/ecografia/', title: 'Ecografia na Ceilândia' },
  { code: '03.2', path: '/exames/laboratorio/', title: 'Laboratório de Análises Clínicas' },
  { code: '03.3', path: '/exames/raio-x/', title: 'Raio-X na Ceilândia' },
  { code: '03.4', path: '/exames/admissional-demissional/', title: 'Exame Admissional e Demissional na Ceilândia' },
  { code: '04.', path: '/convenios/', title: 'Convênios e Atendimento via Reembolso' },
  { code: '05.', path: '/perguntas-frequentes/', title: 'Perguntas Frequentes' },
  { code: '06.', path: '/contato/', title: 'Fale com a Clínica Ceilândia' },
  { code: '07.', path: '/politica-de-privacidade/', title: 'Política de Privacidade' },
  { code: '08.', path: '/termos-de-uso/', title: 'Termos de Uso' }
] as const;
