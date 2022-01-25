class GovernmentOfficialHeader extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement("template");
    template.innerHTML = /*html*/ `

    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">    
  
      <style>


    .official-header {
      font-family: 'Poppins', sans-serif;
      font-size: 14px;
      padding: 0 20px;
      background-color: white;
    }

      .row, .row > div {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .flag {
        width: 28px;
      }

      .action {
        color: #003670;
        text-decoration: underline;
        cursor: pointer;
        display: flex;
        align-items: center;
        font-weight: 600;
      }
      
      .action .chevron {
        width: 20px;
      }
      
      .proves {
        display: none;
      }

      .proves .icon {
        background: #003670;
        padding: 10px;
        width: 18px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
      }

      .proves .icon img{
        width: 18px;
        height: 18px;
      }
      
      .proves > div {
        display: flex;
        align-items: center;
        padding: 8px;
        gap: 16px;
        width: 40%;
      }
      
      .proves .subtitle {
        color: #003670;
        font-weight: 600;
      }

      #toggle {
        display: none;
      }

      #toggle:checked + .proves {
        display: flex;
      }

      #toggle:checked + .chevron{
        display: none;
      }
      
      @media (max-width: 800px) {
        .proves{
          flex-direction: column;
          align-items: center;
        }
        
        .proves > div{
          width: 100%;
        }
      }
      @media (max-width: 700px) {
        .row {
          flex-direction: column;
          gap: 2px;
          
        }
        .row p{
          display: inline;
          margin: 0;
          margin-top: 2px;
        }
        .row .action{
          display: block;
        }

      }


    </style>
    
    <div class="official-header">
     <div class="row">
       <div>
         <img class="flag" src="https://raw.githubusercontent.com/opticrd/official-header/master/assets/icons/dominican-flag.svg" alt="Dominican flag">
         <p>Esta es una web oficial del Gobierno de la República Dominicana</p>
        </div>
         
        <label for="toggle" class="action">Así es como puedes saberlo
          <svg xmlns="http://www.w3.org/2000/svg" class="chevron" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 9l-7 7-7-7" />
          </svg>
        </label>
    
     </div>

     <input type="checkbox" name="toggle" id="toggle">

        <label for="toggle" class="proves">

      <div>
          <span class="icon">
            <img src="https://raw.githubusercontent.com/opticrd/official-header/master/assets/icons/cupula.svg" alt="cupula">
          </span>
          <div>
            <p class="subtitle">Los sitios web oficiales utilizan .gob.do o .gov.do</p>
            <p>Un sitio .gob.do o .gov.do significa que pertenece una organización oficial del Gobierno de la República Dominicana</p>
          </div>
      </div>
      
      <div>
          <span class="icon">
            <img src="https://raw.githubusercontent.com/opticrd/official-header/master/assets/icons/lock.svg" alt="cupula">
          </span>
          <div>
            <p class="subtitle">Los sitios web oficiales .gob.do o .gov.do seguros utilizan HTTPS</p>
            <p>Un candado (🔒) o https:// significa que estás conectado a un sitio seguro dentro de .gob.do o .gov.do. Comparte información confidencial sólo en los sitios seguros de .gob.do o .gov.do </p>
          </div>
      </div>

    </label>
     
    </div> `;
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content);
  }
}

window.customElements.define("official-header", GovernmentOfficialHeader);
