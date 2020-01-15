import { css, LitElement, html, property, customElement } from 'lit-element';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

const globalStyles = css `
html {
  --mdc-theme-primary: black;
}
`;

let AppContainer = class AppContainer extends LitElement {
    constructor() {
        super();
        this.name = 'my app';
        // @ts-ignore
        window.app = this;
    }
    render() {
        return html `<div>welcome on ${this.name}</div>`;
    }
};
AppContainer.styles = [
    globalStyles,
    css `
    :host {
      display: block;
    }
    `
];
__decorate([
    property()
], AppContainer.prototype, "name", void 0);
AppContainer = __decorate([
    customElement('app-container')
], AppContainer);

export { AppContainer };
