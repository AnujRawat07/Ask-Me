import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from 'react-i18next'

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug:true,
    lng:"en",
    fallbackLng:"en",
    resources:{

        en:{
            translation:{
                    one:"Hey Buddy",
                    two:"How can I help you Today?",
                    first:"Suggest Beautiful places to see on an upcoming road trip",
                    second:"Briefly summarize this concept : Urban Planning",
                    third:"Brainstorm team bonding activities for our work retreat",
                    fourth:"improve the readability of the following",
                    fifth:"may display inaccurate info,including about people so double-check its responses.Your Privacy and Gemini Apps",
                    sixth:"Enter Prompt Here",
            },
            
        },
        hi:{
            translation:{
                one:"नमस्ते दोस्त",
                two:"आज मैं आपकी मदद करने में कैसे सक्षम हूं?",
                first:"आगामी सड़क यात्रा पर देखने के लिए सुंदर स्थानों का सुझाव दें",
                second:"इस अवधारणा को संक्षेप में प्रस्तुत करें: शहरी नियोजन",
                third:"हमारे कार्य रिट्रीट के लिए टीम बॉन्डिंग गतिविधियों पर विचार-मंथन करें",
                fourth:"निम्नलिखित की पठनीयता में सुधार करें",
                fifth:"लोगों के बारे में गलत जानकारी प्रदर्शित कर सकता है, इसलिए इसकी प्रतिक्रियाओं की दोबारा जांच करें। आपकी गोपनीयता और जेमिनी ऐप्स",
                sixth:"यहाँ लिखें",
        },
    },
        fr:{
            translation:{
                one:"Salut mon pote",
                two:"Comment puis-je vous aider aujourd'hui?",
                first:"Suggérer de beaux endroits à voir lors d'un prochain road trip",
                second:"Résumons brièvement ce concept : Urbanisme",
                third:"Réfléchissez à des activités de cohésion d'équipe pour notre retraite de travail",
                fourth:"améliorer la lisibilité de ce qui suit",
                fifth:"peut afficher des informations inexactes, y compris sur des personnes, alors vérifiez ses réponses. Votre confidentialité et vos applications Gemini",
                sixth:"Écrivez ici",
        },
        },
        pr:{
            translation:{
                one:"Ei amigo",
                two:"Como posso te ajudar hoje?",
                first:"Sugira lugares bonitos para ver em uma próxima viagem",
                second:"Resumir brevemente este conceito: Planejamento Urbano",
                third:"Brainstorming de atividades de união de equipe para nosso retiro de trabalho",
                fourth:"melhorar a legibilidade do seguinte",
                fifth:"pode exibir informações imprecisas, incluindo sobre pessoas, por isso verifique as suas respostas.",
                sixth:"Introduza o prompt aqui",
        },
        },
      

    },
});
