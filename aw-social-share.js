import { PolymerElement, html } from "../aw_polymer_3/polymer/polymer-element.js";
import "../aw_polymer_3/paper-ripple/paper-ripple.js";
import "../aw_icons_svg/social-nets-svg.js";
class AwSocialShare extends PolymerElement {
    static get template() {
        return html`
            <style>
                :host {
                    position: relative;
                    display: block;
                }
                a {
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    width: 100%;
                    height: 100%;
                    text-indent: -9000px;
                }
                #container {
                    position: relative;
                }
                .button {
                    position: relative;
                    margin: 5px 5px 5px 0px;
                    display: inline-block;
                    font-size: 11px;
                    padding: 10px 10px 5px 10px;
                    color: #fafafa;
                    text-transform: uppercase;
                    transition: background 0.3s, border 0.3s;
                    cursor: pointer;
                }
                .button > span {
                    display: none;
                }

                iron-icon {
                    --iron-icon-width: 26px;
                    --iron-icon-height: 26px;
                    fill: #fafafa;
                    margin-bottom: 3px;
                }

                @media (min-width: 900px) {
                    .button {
                        padding: 7px 12px 3px 7px;
                    }
                    .button > span {
                        display: inline-block;
                    }
                    iron-icon {
                        --iron-icon-width: 18px;
                        --iron-icon-height: 18px;
                    }
                }

                .facebook {
                    background-color: #3b579d;
                    border-bottom: solid 4px #2c4480;
                }
                .facebook:hover {
                    background-color: #4c6ab7;
                    border-bottom-color: #435ea0;
                }
                .twitter {
                    background-color: #55acee;
                    border-bottom: solid 4px #2685cc;
                }
                .twitter:hover {
                    background-color: #72c2ff;
                    border-bottom-color: #37a0ef;
                }
                .google {
                    background-color: #fe4f42;
                    border-bottom: solid 4px #cb372c;
                }
                .google:hover {
                    background-color: #ff6d63;
                    border-bottom-color: #e04e43;
                }
                .linkedin {
                    background-color: #0077b8;
                    border-bottom: solid 4px #0e5983;
                }
                .linkedin:hover {
                    background-color: #2894d0;
                    border-bottom-color: #307eaa;
                }
                .whatsapp {
                    background-color: #0bb50b;
                    border-bottom: solid 4px #098609;
                }
                .whatsapp:hover {
                    background-color: #5ddd5d;
                    border-bottom-color: #0bb50b;
                }
                .pinterest {
                    background-color: #e90d0e;
                    border-bottom: solid 4px #ac1516;
                }
                .pinterest:hover {
                    background-color: #ef4545;
                    border-bottom-color: #e90d0e;
                }
                .tumblr {
                    background-color: #1d5878;
                    border-bottom: solid 4px #11405a;
                }
                .tumblr:hover {
                    background-color: #2d6d90;
                    border-bottom-color: #1d5878;
                }
                .meneame {
                    background-color: #ff6e18;
                    border-bottom: solid 4px #cb5e1d;
                }
                .meneame:hover {
                    background-color: #f58746;
                    border-bottom-color: #ff6e18;
                }

                /* Si ajustamos en vertical */

                #container[vertical] {
                    max-width: 90px;
                }
                #container[vertical] .button {
                    width: 100%;
                    margin: 0px 0px 5px 0px;
                }
                #container[vertical] .button > span {
                    display: inline-block;
                }

                /* Si es noname */

                #container[noname] .button {
                    padding: 10px 10px 5px 10px;
                }
                #container[noname] .button > span {
                    display: none;
                }
                #container[noname] iron-icon {
                    --iron-icon-width: 26px;
                    --iron-icon-height: 26px;
                }
                #container[noname][vertical] {
                    max-width: 26px;
                }
            </style>

            <div id="container">
                <template is="dom-if" if="{{facebook}}">
                    <div class="button facebook" data-net="facebook" title="Compartir en Facebook" on-click="_onclick">
                        <iron-icon icon="social-nets:facebook-ico" data-net="facebook"></iron-icon> <span data-net="facebook">Facebook</span>
                        <paper-ripple></paper-ripple>
                    </div>
                </template>
                <template is="dom-if" if="{{twitter}}">
                    <div class="button twitter" data-net="twitter" title="Compartir en Twitter" on-click="_onclick">
                        <iron-icon icon="social-nets:twitter-ico" data-net="twitter"></iron-icon> <span data-net="twitter">Twitter</span>
                        <paper-ripple></paper-ripple>
                    </div>
                </template>
                <template is="dom-if" if="{{google}}">
                    <div class="button google" data-net="google" title="Compartir en Google +" on-click="_onclick">
                        <iron-icon icon="social-nets:google-ico" data-net="google"></iron-icon> <span data-net="google">Google+</span>
                        <paper-ripple></paper-ripple>
                    </div>
                </template>
                <template is="dom-if" if="{{linkedin}}">
                    <div class="button linkedin" data-net="linkedin" title="Compartir en Linkedin" on-click="_onclick">
                        <iron-icon icon="social-nets:linkedin-ico" data-net="linkedin"></iron-icon> <span data-net="linkedin">Linkedin</span>
                        <paper-ripple></paper-ripple>
                    </div>
                </template>
                <template is="dom-if" if="{{whatsapp}}">
                    <div class="button whatsapp" title="Compartir en WhatsApp">
                        <iron-icon icon="social-nets:whatsapp-ico"></iron-icon> <span>WhatsApp</span>
                        <a href="whatsapp://send?text={{description}}: {{url}}" data-action="share/whatsapp/share">Compartir en whatsapp</a>
                        <paper-ripple></paper-ripple>
                    </div>
                </template>
                <template is="dom-if" if="{{pinterest}}">
                    <div class="button pinterest" data-net="pinterest" title="Compartir en Pinterest" on-click="_onclick">
                        <iron-icon icon="social-nets:pinterest-ico" data-net="pinterest"></iron-icon> <span data-net="pinterest">Pinterest</span>
                        <paper-ripple></paper-ripple>
                    </div>
                </template>
                <template is="dom-if" if="{{tumblr}}">
                    <div class="button tumblr" data-net="tumblr" title="Compartir en Tumblr" on-click="_onclick">
                        <iron-icon icon="social-nets:tumblr-ico" data-net="tumblr"></iron-icon> <span data-net="tumblr">Tumblr</span>
                        <paper-ripple></paper-ripple>
                    </div>
                </template>
                <template is="dom-if" if="{{meneame}}">
                    <div class="button meneame" data-net="meneame" title="Compartir en WhatsApp" on-click="_onclick">
                        <iron-icon icon="social-nets:meneame-ico" data-net="meneame"></iron-icon> <span data-net="meneame">Menéame</span>
                        <paper-ripple></paper-ripple>
                    </div>
                </template>
            </div>
        `;
    }
    static get properties() {
        return {
            facebook: { type: Boolean, value: !1 },
            twitter: { type: Boolean, value: !1 },
            google: { type: Boolean, value: !1 },
            linkedin: { type: Boolean, value: !1 },
            whatsapp: { type: Boolean, value: !1 },
            tumblr: { type: Boolean, value: !1 },
            meneame: { type: Boolean, value: !1 },
            pinterest: { type: Boolean, value: !1 },
            instagram: { type: Boolean, value: !1 },
            vertical: { type: Boolean, value: !1 },
            noname: { type: Boolean, value: !1 },
            url: { type: String, value: !1 },
            title: { type: String, value: !1 },
            description: { type: String, value: !1 },
            media: { type: String, value: !1 },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this._styling();
        if (!this.url) {
            this.url = "" + window.location + "";
        }
        if (!this.title && document.querySelector("title")) {
            if (document.querySelector("title").innerHTML) {
                this.title = document.querySelector("title").innerHTML;
            }
        }
        if (!this.description && document.querySelector("meta[name=description]")) {
            if (document.querySelector("meta[name=description]").content) {
                this.description = document.querySelector("meta[name=description]").content;
            }
        }
        if (!this.media) {
            let metas = document.querySelectorAll("meta");
            for (let i = 0; i < metas.length; i++) {
                let meta = metas[i],
                    property = meta.getAttribute("property"),
                    content = meta.content;
                if ("og:image" === property && content) {
                    this.media = content;
                }
            }
        }
        this._detectDeviceMovil();
    }
    _styling() {
        if (this.vertical) {
            this.$.container.setAttribute("vertical", "");
        }
        if (this.noname) {
            this.$.container.setAttribute("noname", "");
        }
    }
    _onclick(ev) {
        const net = ev.target.dataset.net;
        if ("facebook" === net) {
            window.open(
                "http://www.facebook.com/sharer.php?u=" + this.url + "&amp;t=" + this.title + "",
                "Compartir en Facebook",
                "width=550, height=500"
            );
        }
        if ("twitter" === net) {
            window.open("http://twitter.com/?status=" + this.description + "%20" + this.url + "", "Compartir en Twiter", "width=550, height=500");
        }
        if ("google" === net) {
            window.open("https://plus.google.com/share?url=" + this.url + "", "Compartir en Google+", "width=550, height=500");
        }
        if ("linkedin" === net) {
            let linkedinParam = "";
            if (this.title) {
                linkedinParam += "&title=" + this.title + "";
            }
            if (this.description) {
                linkedinParam += "&summary=" + this.description + "";
            }
            window.open(
                "http://www.linkedin.com/shareArticle?url=" + this.url + "" + linkedinParam + "",
                "Compartir en Linkedin",
                "width=550, height=500"
            );
        }
        if ("pinterest" === net) {
            let pinterestParam = "";
            if (this.title) {
                pinterestParam += "&media=" + this.media + "";
            }
            if (this.description) {
                pinterestParam += "&description=" + this.description + "";
            }
            window.open(
                "http://pinterest.com/pin/create/link/?url=" + this.url + "" + pinterestParam + "",
                "Compartir en Men\xE9ame",
                "width=550, height=500"
            );
        }
        if ("tumblr" === net) {
            window.open("http://www.tumblr.com/share/link?url=" + this.url + "", "Compartir en Men\xE9ame", "width=550, height=500");
        }
        if ("meneame" === net) {
            window.open("https://www.meneame.net/submit.php?url=" + this.url + "", "Compartir en Men\xE9ame", "width=550, height=500");
        }
    }
    _detectDeviceMovil() {
        var ua = navigator.userAgent.toLowerCase(),
            isMovil = !1;
        if (-1 < ua.indexOf("android") || -1 < ua.indexOf("mobile")) {
            isMovil = !0;
        }
        if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) {
            isMovil = !0;
        }
        if (navigator.userAgent.match(/iPad/i)) {
            isMovil = !0;
        }
        if (!isMovil) {
            this.whatsapp = !1;
        }
    }
}
window.customElements.define("aw-social-share", AwSocialShare);
