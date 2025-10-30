/*                                            api (json)
                                                 |
index.htm -> app.js -> url -> controller.js -> model.js + view.js  
   |            |                       |____> view.js
style.css   router.js (kigger paa URL) 
*/


/* The following was in version 4 of the app, plus my personal exercise. */
// import { HomePage } from './controllers/homeController.js';
// import { CartPageByMariePierreLessard } from './controllers/cartController.js';
import { ProductPage } from './controllers/productController.js';
import { router } from './router/index.js';
/* Demonstration by Heinz for my exercise after version 5 of codealong */
import { CartPageByMariePierreLessard } from './controllers/cartController.js';
/* My additions to v6 of codealong in view of meeting assignment requirements */
import { TermsPageByMariePierreLessard } from './controllers/termsController.js';
import { PrivacyPolicyPageByMariePierreLessard } from './controllers/gdprController.js';
import { PaymentMethodPageByMariePierreLessard } from './controllers/paymentController.js';
import { DeliveryPageByMariePierreLessard } from './controllers/deliveryController.js';
import { ReturnsAndComplaintsPageByMariePierreLessard } from './controllers/returnsController.js';
import { SupportAndWarrantyPageByMariePierreLessard } from './controllers/supportController.js';
/* Later addition in codealongs */
import { LoginPage } from './controllers/loginController.js';

const ROOT = document.getElementById("container");

/* This named function has 2 parameters.
The first is an object. In that object, '/' is a property. The following arrow function is a a value.
The second is a string. */
router({
  /* '/': means if user lands on the root, then user goes to home page */
  /* In version 5, HomePage becomes ProductPage because the API requires products to be shown in the index page
  with GET parameters. */
  '/': () => ProductPage(), // Forside
  /* I can't change the name /produkter without breaking the app.
  See layoutController.js */
  /* The following was in version 4 of the app, plus my personal exercise. */
  // '/produkter': () => ProductPage(), // Produkter
  // '/cart': () => CartPageByMariePierreLessard() // Cart
  /* Demonstration by Heinz for my exercise after version 5 of codealong */
  '/cart': () => CartPageByMariePierreLessard(), // Cart
  /* My additions to v6 of codealong in view of meeting assignment requirements */
  '/terms': () => TermsPageByMariePierreLessard(), // Handelsbetingelser
  '/privacy': () => PrivacyPolicyPageByMariePierreLessard(), // Cookie-politik/privatlivspolitik
  '/payment': () => PaymentMethodPageByMariePierreLessard(), // Betalingsmetoder
  '/delivery': () => DeliveryPageByMariePierreLessard(), // Levering
  '/returns': () => ReturnsAndComplaintsPageByMariePierreLessard(), // Returer og klager
  '/support': () => SupportAndWarrantyPageByMariePierreLessard(), // Support og garantiservice
  /* Later addition in codealongs */
  '/login': () => LoginPage() // Login
}, '#app');