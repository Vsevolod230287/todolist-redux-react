//historyRouter: stile di navigare location.hash (senza ricaricare la pagina)
// HashRouter  in react
http://localhost:3001/#users/2

se facciamo : 
window.location.hash sara uguale a:
#users/2 che non arriva al backend posso inserire un altro parametro cosi con il canceletto #categories/1e poi  facendo click sulle frecce del browser avvanti e indietro l'url della chiamata non cambia sara sempre http://localhost:3001/ perche tutto quello che viene dopo # non viene preso.

ma se faccio il replace del simbolo'#' con il sibolo '':
window.location.hash.replace('#','')
sara uguale a: users/2 e quindi sara possibile inserirlo nella chiamata http

dopo il canceletto il browser non lo prende nella richiesta http, quindi possiamo usarla per gestire la navigazione lato client, se il server non e configurato a restituire semre e comunque index.html qualunque cosa ci sia dopo l'url base si utiliza la tecnica del cancelletto



npm install react-roter-dom



Stile di navigazione Brawser History  
MDN=  https://developer.mozilla.org/en-US/docs/Web/API/History_API
// browserRouter di react utilizza questo metodo: bisogna che il server sia configurato per tornare l'index.Html  qualsiasi cosa scriviamo dopo l'url base
//allora possiamo utilizzare la tecnica browser history

url_base = http://localhost:3001

window.location.pathname =  /users/2    -quindi prendiamo cosi il paramentro pathName e renderizare un qualsiasi componente utilizzando il pathName senza ricaricare la pagina.
Manipolando la history, clickando su un link della nostra app possiamo con il metodo history.pushState(), history.replaceState(),  window.onpopstate() per mostrare un componente o un'altro





il componente <Link /> si mette al posto dei linl <a href="#">vai</a> perche link_a_href normali ti indirizzano al server che poi ti da la risposta la pagina html di tuo interesse, invece il componente react <Link /> fa la navigazione ripetto all'history del browser:

<Link to="/register" >Register</Link> e quindi non si ricarichera la pagina

<NavLink activeClassName="active" to="/register" >Register</NavLink> la stessa cosa del<Link /> con la sola differenza che ci fornisce l'atributo: activeClassName="active" che ci permete di personalizzare il link quando sara active, lo fa in automatico basta nel css definire la classe active , e quanto premeremo il link scaterano le impostazioni rispettive, quando clickeremo su un altro link si toglieranno le impostazioni della classe active

<NavLink activeStyle={{backroundColor: red, fontSize: 24}} to="/register" >Register</NavLink>
activeStyle - e come il tag inline style dove possimo personalizzare l'elemento. riceve un oggetto con le rispettive proprietà css.