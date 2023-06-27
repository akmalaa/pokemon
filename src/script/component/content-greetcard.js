class greetCard extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = 
        `
        <article>
                <div class="greet-card-wrap">
                    <h4>Welcome to the Pokédex! </h4>
                    <p>Your gateway to the world of Pokémon! Get ready to explore a realm filled with extraordinary creatures and embark on an epic journey of discovery</p>
                </div>
        </article>
        `
    }
}

customElements.define('greet-card', greetCard);