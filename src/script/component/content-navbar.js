//import img from '../../img/pokeball.png';

class navbar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = 
        `<nav class="navbar-wrap">
            <div class="navbar-logo">
                <div class="navbar-logo-pict">
                </div>
                <p>Pokédex</p>
            </div>
            <div class="navbar-container">
               <div class="navbar">
                  <li class="list"><a class="navlist" href="#Home">Home</a></li>
                  <li class="list"><a class="navlist" href="#About">Pokédex</a></li>
                  <li class="list"><a class="navlist" href="#Project">News</a></li>
                  <li class="list"><a class="navlist" href="#Contact">Contact</a></li>
               </div>
            </div>
        </nav>
        `
    }
}

customElements.define('nav-bar', navbar);