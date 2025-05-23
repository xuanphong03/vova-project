window.addEventListener("DOMContentLoaded", () => {
  // Common styles that are reused across components
  const COMMON_STYLES = `
  * {
    box-sizing: border-box;
    border: 0;
    outline: 0;
  }
`;

  // Base class for all custom elements
  class BaseElement extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }

    addStyleToShadowRoot(cssText) {
      const style = document.createElement("style");
      style.textContent = cssText;
      this.shadowRoot.append(style);
    }

    render() {
      this.shadowRoot.innerHTML = `<slot></slot>`;
    }
  }

  class CustomButtonV1 extends BaseElement {
    static get observedAttributes() {
      return ["color"];
    }

    connectedCallback() {
      this.render();
      this.loadStyle();
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === "color" && oldValue !== newValue) {
        this.render();
      }
    }

    loadStyle() {
      const css = `
        ${COMMON_STYLES}
        .compound-btn {
            height: 3rem;
            font-family: Lexend;
            position: relative;
            display: inline-flex;
            width: 100%;
            border-radius: 2rem;
            background: #23a26b;
            overflow: hidden;
        }
        .compound-btn-arrow {
            position: absolute;
            display: flex;
            justify-content: flex-end;
            width: 3rem;
            height: 100%;
            top: 0;
            left: 0;
            background: linear-gradient(90deg, #b5f8c9 0%, #4fe47c 75.79%);
            border-radius: 2rem;
            transition: width 500ms cubic-bezier(0.91, 0.02, 0.13, 0.99);
        }
        .compound-btn-arrow svg {
            width: 3rem;
            height: 100%;
            object-fit: cover;
        }
        .compound-btn-inner {
            position: relative;
            padding-left: 2.75rem;
            height: 100%;
            display: flex;
            align-items: center;
        }
        
        .compound-btn-inner__content {
            color: #fff;
            padding: 0.625rem 1.25rem 0.625rem 0.75rem;
            transition: all 500ms cubic-bezier(0.91, 0.02, 0.13, 0.99);
        }
        .compound-btn-inner__content {
            display: block; 
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 500;
            line-height: 1.5rem;
            letter-spacing: 0.00938rem;
            text-transform: uppercase;
        }
        @media (max-width: 639.98px) {
          .compound-btn {
            height: 2.625rem;
            justify-content: center;
          }
          .compound-btn-arrow {
            display: none;
          }
          .compound-btn-inner {
            padding-left: 0;
          }
          .compound-btn-inner__content {
            text-align: center;
            padding-inline: 0;
            font-size: 0.75rem;
          }
        }
        @media (min-width: 639.98px) {
          .compound-btn:hover .compound-btn-arrow {
            width: 100%;
          }
          .compound-btn:hover .compound-btn-inner__content {
            color: #213f28;
            transform: translateX(-2rem);
          }
        }
        `;
      this.addStyleToShadowRoot(css);
    }

    render() {
      this.shadowRoot.innerHTML = `
       <button class="compound-btn">
        <div class="compound-btn-arrow">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            >
            <circle cx="24" cy="24" r="24" fill="#4FE47C" />
            <path
                d="M28.4243 24.4243C28.6586 24.1899 28.6586 23.8101 28.4243 23.5757L24.6059 19.7574C24.3716 19.523 23.9917 19.523 23.7574 19.7574C23.523 19.9917 23.523 20.3716 23.7574 20.6059L27.1515 24L23.7574 27.3941C23.523 27.6284 23.523 28.0083 23.7574 28.2426C23.9917 28.477 24.3716 28.477 24.6059 28.2426L28.4243 24.4243ZM28 23.4L20 23.4L20 24.6L28 24.6L28 23.4Z"
                fill="#213F28"
            />
            </svg>
        </div>
        <div class="compound-btn-inner">
            <div class="compound-btn-inner__content">
                <slot></slot>
            </div>
        </div>
    </button>
    `;
    }
  }

  class CustomTitleV1 extends BaseElement {
    static get observedAttributes() {
      return ["color"];
    }

    connectedCallback() {
      this.render();
      this.loadStyle();
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === "color" && oldValue !== newValue) {
        this.render();
      }
    }

    loadStyle() {
      const css = `
        ${COMMON_STYLES}
        .title {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(0deg, #D8F8DC 0%, #98EFA5 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .title::before,
        .title::after {
          content: "";
          width: 5.375rem;
          height: 0.0625rem;
          background: linear-gradient(90deg, rgba(216, 236, 248, 0.00) 0%, #A6FFBE 100%);
        }
        .title::before {
          margin-right: 1.5rem;
        }
        .title::after {
          margin-left: 1.5rem;
          rotate: 180deg;
        }
        slot {
          text-shadow: 0px 2px 16px rgba(174, 207, 242, 0.24);
          font-size: 0.75rem;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
          letter-spacing: 0.025rem;
          
          text-transform: uppercase;
        }

        @media (max-width: 639.98px) {
          slot {
            font-size: 0.625rem;
          }
          .about-us__title::before {
            margin-right: 0.75rem;
          }
          .about-us__title::after {
            margin-left: 0.75rem
          }
        }
        `;
      this.addStyleToShadowRoot(css);
    }

    render() {
      this.shadowRoot.innerHTML = `
      <div class="title">
        <slot></slot>   
      </div>
    `;
    }
  }

  class CustomDescriptionV1 extends BaseElement {
    static get observedAttributes() {
      return ["color"];
    }

    connectedCallback() {
      this.render();
      this.loadStyle();
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (name === "color" && oldValue !== newValue) {
        this.render();
      }
    }

    loadStyle() {
      const css = `
        ${COMMON_STYLES}
        .description {
          text-align: center;
          font-family: "Plus Jakarta Sans";
          font-size: 3rem;
          font-style: normal;
          font-weight: 700;
          line-height: 120%; /* 3.6rem */
          text-transform: capitalize;
          background: linear-gradient(0deg, #D8F8E1 0%, #98EFAF 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      
        @media (max-width: 639.98px) {
          .description {
            font-size: 1.25rem;
          }
        }
        `;
      this.addStyleToShadowRoot(css);
    }

    render() {
      this.shadowRoot.innerHTML = `
      <div class="description">
        <slot></slot>   
      </div>
    `;
    }
  }

  customElements.define("custom-button-v1", CustomButtonV1);
  customElements.define("custom-title-v1", CustomTitleV1);
  customElements.define("custom-description-v1", CustomDescriptionV1);
});
