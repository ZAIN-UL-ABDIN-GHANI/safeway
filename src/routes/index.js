import DesignComfortSection from '../views/MainView/Design/Design';
import FAQS from '../views/MainView/FaQs/Faqs';
import Feature from '../views/MainView/Feature/Feature';
import EmergencyResponse from '../views/MainView/HowItWorks/Work';
import MainView from '../views/MainView/MainView';
import DataPrivacySection from '../views/MainView/Security/Security';

let routes = [
  {
    path: '/',
    component: MainView,
  },
  {
    path: '/feature',
    component: Feature,
  },
   {
    path: '/security',
    component: DataPrivacySection,
  },
  {
    path: '/Design',
    component: DesignComfortSection,
  },
  {
    path: '/faq',
    component:FAQS,
  },
   {
    path: '/work',
    component:EmergencyResponse,
  },
];


export default routes;
