import { PolymerElement, html } from "../aw_polymer_3/polymer/polymer-element.js";
import "../aw_icons_svg/social-nets-svg.js";
class AwSocialFollow extends PolymerElement {
    static get template() {
        return html`
            <style>
                :host {
                    position: relative;
                    display: block;
                }
                .boton {
                    position: relative;
                    margin-left: 0px;
                    margin-right: 3px;
                    margin-left: var(--aw-social-follow-margin-left);
                    margin-right: var(--aw-social-follow-margin-right);
                    margin-left: var(--aw-social-follow-margin-left, 0px);
                    margin-right: var(--aw-social-follow-margin-right, 3px);
                    display: inline-block;
                    border-radius: var(--aw-social-follow-border-radius, 0);
                    overflow: hidden;
                }
                a {
                    text-decoration: none;
                }
                iron-icon {
                    fill: var(--aw-social-follow-fill, #222222);
                    width: var(--aw-social-follow-size, 40px);
                    height: var(--aw-social-follow-size, 40px);
                    transition: fill 0.3s, opacity 0.3s;
                }
                iron-icon:hover {
                    fill: var(--aw-social-follow-fill_hv, var(--aw-primary-color, #555)) !important;
                }
            </style>
            <template is="dom-repeat" items="{{redes}}">
                <div class="boton">
                    <a href="{{item.url}}" target="_blank" rel="noreferrer" title="{{item.title}}">
                        <iron-icon icon="social-nets:{{item.red}}-{{type}}"></iron-icon>
                    </a>
                </div>
            </template>
        `;
    }
    static get properties() {
        return {
            facebook: { type: String, value: "" },
            github: { type: String, value: "" },
            google: { type: String, value: "" },
            instagram: { type: String, value: "" },
            linkedin: { type: String, value: "" },
            meneame: { type: String, value: "" },
            npm: { type: String, value: "" },
            pinterest: { type: String, value: "" },
            spotify: { type: String, value: "" },
            stackoverflow: { type: String, value: "" },
            tumblr: { type: String, value: "" },
            twitter: { type: String, value: "" },
            whatsapp: { type: String, value: "" },
            youtube: { type: String, value: "" },
            redes: {
                type: Array,
                value() {
                    return [];
                },
            },
            color: { type: String, value: "" },
            colorhover: { type: String, value: "" },
            size: { type: String, value: "" },
            type: { type: String, value: "filled" },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this._setRedes();
    }
    _setRedes() {
        let color = null;
        if (this.facebook) {
            color = "#3B579D";
            if (this.color) {
                color = this.color;
            }
            this.redes.push({ color: color, red: "facebook", title: "Siguenos en Facebook", url: this.facebook });
        }
        if (this.twitter) {
            color = "#55ACEE";
            if (this.color) {
                color = this.color;
            }
            this.redes.push({ color: color, red: "twitter", title: "Siguenos en Twitter", url: this.twitter });
        }
        if (this.google) {
            color = "#FE4F42";
            if (this.color) {
                color = this.color;
            }
            this.redes.push({ color: color, red: "google", title: "Siguenos en Google+", url: this.google });
        }
        if (this.linkedin) {
            color = "#0077B8";
            if (this.color) {
                color = this.color;
            }
            this.redes.push({ color: color, red: "linkedin", title: "Siguenos en Linkedin", url: this.linkedin });
        }
        if (this.youtube) {
            color = "#FF2621";
            if (this.color) {
                color = this.color;
            }
            this.redes.push({ color: color, red: "youtube", title: "Siguenos en Youtube", url: this.youtube });
        }
        if (this.instagram) {
            color = "#B8DB49";
            if (this.color) {
                color = this.color;
            }
            this.redes.push({ color: color, red: "instagram", title: "Siguenos en Instagram", url: this.instagram });
        }
        if (this.whatsapp) {
            color = "#0BB50B";
            if (this.color) {
                color = this.color;
            }
            this.redes.push({ color: color, red: "whatsapp", title: "Siguenos en WhatsApp", url: this.whatsapp });
        }
        if (this.spotify) {
            color = "#7A9B4C";
            if (this.color) {
                color = this.color;
            }
            this.redes.push({ color: color, red: "spotify", title: "Siguenos en Spotify", url: this.spotify });
        }
        if (this.pinterest) {
            color = "#E90D0E";
            if (this.color) {
                color = this.color;
            }
            this.redes.push({ color: color, red: "pinterest", title: "Siguenos en Pinterest", url: this.pinterest });
        }
        if (this.tumblr) {
            color = "#1D5878";
            if (this.color) {
                color = this.color;
            }
            this.redes.push({ color: color, red: "tumblr", title: "Siguenos en Tumblr", url: this.tumblr });
        }
        if (this.meneame) {
            color = "#FF6E18";
            if (this.color) {
                color = this.color;
            }
            this.redes.push({ color: color, red: "meneame", title: "Siguenos en Men\xE9ame", url: this.meneame });
        }
        if (this.github) {
            color = "#1D1D28";
            if (this.color) {
                color = this.color;
            }
            this.redes.push({ color: color, red: "github", title: "Siguenos en Github", url: this.github });
        }
        if (this.stackoverflow) {
            color = "#EA9C1F";
            if (this.color) {
                color = this.color;
            }
            this.redes.push({ color: color, red: "stackoverflow", title: "Siguenos en Stackoverflow", url: this.stackoverflow });
        }
        if (this.npm) {
            color = "#F80000";
            if (this.color) {
                color = this.color;
            }
            this.redes.push({ color: color, red: "npm", title: "Siguenos en Npm", url: this.npm });
        }
    }
}
window.customElements.define("aw-social-follow", AwSocialFollow);
