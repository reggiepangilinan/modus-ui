import React__default, { createElement, Component } from 'react';

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
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "/* add css styles here (optional) */\n.styles_test__3MEaA {\n  display: inline-block;\n  margin: 2em auto;\n  border: 2px solid #000;\n  font-size: 2em; }\n";
var styles = {"test":"styles_test__3MEaA"};
styleInject(css);

var css$1 = "@font-face {\n  font-display: swap;\n  font-family: 'Inter';\n  font-style: normal;\n  src: url(\"https://s3-ap-southeast-2.amazonaws.com/public-zenith.infotrack.com.au/fonts/inter/Inter-Regular.woff2\") format(\"woff2\"), url(\"https://s3-ap-southeast-2.amazonaws.com/public-zenith.infotrack.com.au/fonts/inter/Inter-Regular.woff\") format(\"woff\"); }\n\n/*\n==========================\nBREAKPOINTS\nIf you adjust this, make sure you sync these values \nto react breakpoint components\n==========================\n*/\n/*\n==========================\nMedia Queries\n==========================\n*/\n.styles_cardContainer__1Th2I, .styles_cardContainerWithShadow__1bcjk {\n  background-color: #fff;\n  border-radius: 4px;\n  border: 1px solid #e5e5e5;\n  padding: 10px;\n  transition: all 0.1s cubic-bezier(0.075, 0.82, 0.165, 1); }\n\n.styles_cardContainer__1Th2I:hover {\n  box-shadow: 0 0 8px 0 #e5e5e5; }\n\n.styles_cardContainerWithShadow__1bcjk {\n  box-shadow: 0 0 8px 0 #e5e5e5; }\n\n.styles_active__1C9mM {\n  background-color: #eaf1f9;\n  transition: all 0.4s ease-in-out; }\n  .styles_active__1C9mM:hover {\n    box-shadow: none; }\n";
var styles$1 = {"cardContainer":"styles_cardContainer__1Th2I","cardContainerWithShadow":"styles_cardContainerWithShadow__1bcjk","active":"styles_active__1C9mM"};
styleInject(css$1);

var Card = function (props) {
    var defaultCardStyle = props.active
        ? styles$1.cardContainer + " " + styles$1.active
        : styles$1.cardContainer;
    return (React__default.createElement("div", { className: props.withShadow ? styles$1.cardContainerWithShadow : defaultCardStyle, onClick: props.onClick }, props.children));
};

/**
 * @class ExampleComponent
 */
var ExampleComponent = /** @class */ (function (_super) {
    __extends(ExampleComponent, _super);
    function ExampleComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExampleComponent.prototype.render = function () {
        var text = this.props.text;
        return (createElement("div", { className: styles.test },
            "Example Componentss: ",
            text));
    };
    return ExampleComponent;
}(Component));

export { ExampleComponent, Card };
//# sourceMappingURL=index.es.js.map
