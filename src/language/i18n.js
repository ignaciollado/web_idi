import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          description: {
            loading: 'Loading, one moment please ...',
            loadingNews: 'Loading, one moment please ...',
            exploringIDI: 'Exploring IDI ...',
            idi1: 'Instituto de Innovación Empresarial',
            idi2: 'de las Islas Baleares',
            work: 'Open proposals',
            about: 'About',
            hostoriaIDI: "The IDI history",
            contactUs: 'Contact',
            grantSubsidies: 'Grants & subsidies',
            news: 'News',
            explore: 'Explore',
            search: 'Search for...',
            accesibilidad: 'Accesibility',
            searchingTheWeb: "Searching the web ...",
            entrepreneur: 'Entrepreneur',
            company: 'Company',
            institute: 'Institute',
            townHall: 'Town Hall',
            legalAdvice: 'Legal advice',
            privacyPolicy: 'Privacy policy',
            cookiesPolicy: 'Cookies policy',
            openness: 'Openness',
            electronicOffice: 'Electronic office',
            language: 'Language',
            archivedAs: 'Archived as:',
            categoryzedContents: '',
            taggedContents: '',
            name: 'Name',
            mailAddress: 'Email address:',
            subject: 'Subject:',
            enviar: 'Send',
            hace: '',
            dias: ' days',
            proyectosIDI: 'IDI projects',
            exploraProyectos: 'Explora nuestros proyectos',
            eresEmprendedor: '¿Eres un emprendedor?',
            eresEmpresa: '¿Eres una empresa?',
            eresAyuntamiento: '¿Eres un ayuntamiento?',
            eresCentroEducativo: '¿Eres un centro educativo?',
            noEstasEnElMenu: '¿No estás en este menú?',
            haznosUnPropuesta: 'Haznos una propuesta',
            sendingMessage: 'Sending the messaga, one moment please ...',
            sendingMessageFrom: 'Message from: ',
            sendingMessageSubject: '',
            sendingMessageContent: '',
            messageSuscessfullySend: 'El mensaje ha sido enviado correctamente.',
            messageCouldNotBeSent: 'Disculpe pero, no se pudo enviar el mensaje.',
            exploreTheIDIServices: 'Explore the IDI services'
          }
        }
      },

      es: {
        translation: {
          description: {
            loading: 'Cargando, un momento por favor ...',
            loadingNews: 'Cargando, un momento por favor ...',
            exploringIDI: 'Explorando el IDI ...',
            idi1: 'Instituto de Innovación Empresarial',
            idi2: 'de las Islas Baleares',
            work: 'Novedades',
            about: 'Quienes somos',
            hostoriaIDI: "La historia del IDI",
            contactUs: 'Contactar',
            grantSubsidies: 'Ayudas y subvenciones',
            news: 'Noticias',
            explore: 'Explorar servicios',
            search: 'Buscar',
            accesibilidad: 'Accesibilidad',
            searchingTheWeb: "Buscando en la web ...",
            entrepreneur: 'Emprendedor',
            company: 'Empresa',
            institute: 'Instituto',
            townHall: 'Ayuntamiento',
            legalAdvice: 'Aviso legal',
            privacyPolicy: 'Política de privacidad',
            cookiesPolicy: 'Política de cookies',
            openness: 'Transparencia',
            electronicOffice: 'Sede electrónica',
            language: 'Idioma',
            archivedAs: 'Archivado en:',
            categoryzedContents: '',
            taggedContents: '',
            name: 'Su nombre:',
            mailAddress: 'Su dirección de correo electrónico:',
            subject: '¿Cómo le podemos ayudar?',
            enviar: 'Enviar',
            hace: 'hace ',
            dias: ' días',
            proyectosIDI: 'Proyectos IDI',
            exploraProyectos: 'Explora nuestros proyectos',
            eresEmprendedor: '¿Eres un emprendedor?',
            eresEmpresa: '¿Eres una empresa?',
            eresAyuntamiento: '¿Eres un ayuntamiento?',
            eresCentroEducativo: '¿Eres un centro educativo?',
            noEstasEnElMenu: '¿No estás en este menú?',
            haznosUnPropuesta: 'Contáctanos',
            sendingMessage: 'Enviando el mensaje, un momento por favor ...',
            sendingMessageFrom: 'Mensaje de: ',
            sendingMessageSubject: 'Asunto: ',
            sendingMessageFromTheWeb: 'Mensaje desde idi.es',
            sendingMessageContent: 'Mensaje:',
            messageSuscessfullySend: 'El mensaje ha sido enviado correctamente.',
            messageCouldNotBeSent: 'Disculpe pero, no se pudo enviar el mensaje.',
            exploreTheIDIServices: 'Explora los servicios del IDI'

          }
        }
      },  
      
      ca: {
        translation: {
          description: {
            loading: 'Carregant, un moment per favor ...',
            loadingNews: 'Carregant, un moment per favor ...',
            exploringIDI: 'Explorant l\'IDI ...',
            idi1: "Institut d'Innovació Empresarial",
            idi2: "de les Illes Balears",
            work: 'Novetats',
            about: 'Qui som',
            hostoriaIDI: "La història de l'IDI",
            contactUs: 'Contactar',
            grantSubsidies: 'Ajuts i subvencions',
            news: 'Notícies',
            explore: 'Explorar serveis',
            search: 'Cercar',
            accesibilidad: 'Accesibilitat',
            searchingTheWeb: "Cercant a la web ...",
            entrepreneur: 'Emprenedor',
            company: 'Empresa',
            institute: 'Institut',
            townHall: 'Ajuntament',
            legalAdvice: 'Avís legal',
            privacyPolicy: 'Politica de privacitat',
            cookiesPolicy: 'Politica de galetes',
            openness: 'Transparència',
            electronicOffice: 'Seu electrònica',
            language: 'Idioma',
            archivedAs: 'Arxivat en:',
            categoryzedContents: '',
            taggedContents: ' ',

            name: 'El vostre nom:',
            mailAddress: 'La vostra adreça electrònica:',
            subject: 'Com us podem ajudar?',

            enviar: 'Enviar',
            hace: 'fa ',
            dias: ' dies',
            proyectosIDI: 'Projectes IDI',
            exploraProyectos: 'Explora els nostres projectes',
            eresEmprendedor: 'Ets un emprenedor?',
            eresEmpresa: 'Ets una empresa?',
            eresAyuntamiento: 'Ets un ajuntament?',
            eresCentroEducativo: 'Ets un centre educatiu?',
            noEstasEnElMenu: 'No et trobes en aquest menú?',
            haznosUnPropuesta: "Contacta'ns",
            sendingMessage: 'Enviant el missatge, un moment per favor ...',
            sendingMessageFrom: 'Missatge de: ',
            sendingMessageSubject: 'Assumpte: ',
            sendingMessageFromTheWeb: 'Missatge des-de idi.es',
            sendingMessageContent: 'Missatge:',
            messageSuscessfullySend: "El missatge s'ha enviat correctament.",
            messageCouldNotBeSent: "Disulpi però, el missatge no s'ha pogut enviar.",
            exploreTheIDIServices: "Explora els serveis de l'IDI"

          }
        }
      }      
    }
  });

export default i18n;