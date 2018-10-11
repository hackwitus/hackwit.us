webpackJsonp([114276838955818,60335399758886],{

/***/ 103:
/***/ (function(module, exports) {

	module.exports = {"layoutContext":{}}

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(208);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _layoutIndex = __webpack_require__(103);
	
	var _layoutIndex2 = _interopRequireDefault(_layoutIndex);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	  return _react2.default.createElement(_index2.default, _extends({}, props, _layoutIndex2.default));
	};
	
	module.exports = exports["default"];

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	const CDN_URL = `https://cdn.jsdelivr.net/npm/@widgetbot/crate@3`;
	const loadFromCDN = () => new Promise((resolve, reject) => {
	    const script = document.createElement('script');
	    script.src = CDN_URL;
	    document.head.appendChild(script);
	    script.onload = () => resolve(window.Crate);
	    script.onerror = () => reject('Failed to load Crate!');
	});
	exports.default = loadFromCDN;


/***/ }),

/***/ 320:
/***/ (function(module, exports) {

	// empty (null-loader)

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var init = function () {
	    var _ref = _asyncToGenerator(function* () {
	        var Crate = yield (0, _cdn2.default)();
	
	        var myCrate = new Crate({
	            server: "497565774689468424", // Server id
	            channel: "497566160456253492", // Default join channel -- Set to announcements
	            shard: "https://cl2.widgetbot.io" // WidgetBot cluster -- Currently using Cluster 2 as it is most reliable
	        });
	    });
	
	    return function init() {
	        return _ref.apply(this, arguments);
	    };
	}();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _cdn = __webpack_require__(197);
	
	var _cdn2 = _interopRequireDefault(_cdn);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	init();
	
	var Widget = function Widget() {
	    return null;
	};
	
	exports.default = Widget;
	module.exports = exports["default"];

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Footer = function (_React$Component) {
	    _inherits(Footer, _React$Component);
	
	    function Footer() {
	        _classCallCheck(this, Footer);
	
	        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	    }
	
	    Footer.prototype.render = function render() {
	        return _react2.default.createElement(
	            "section",
	            { id: "footer" },
	            _react2.default.createElement(
	                "ul",
	                { className: "icons" },
	                _react2.default.createElement(
	                    "li",
	                    null,
	                    _react2.default.createElement(
	                        "a",
	                        { href: "https://twitter.com/hackwitus", target: "_blank", className: "icon alt fa-twitter" },
	                        _react2.default.createElement(
	                            "span",
	                            { className: "label" },
	                            "Twitter"
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    "li",
	                    null,
	                    _react2.default.createElement(
	                        "a",
	                        { href: "https://www.facebook.com/hackwitus/", className: "icon alt fa-facebook" },
	                        _react2.default.createElement(
	                            "span",
	                            { className: "label" },
	                            "Facebook"
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    "li",
	                    null,
	                    _react2.default.createElement(
	                        "a",
	                        { href: "https://github.com/hackwitus", className: "icon alt fa-github" },
	                        _react2.default.createElement(
	                            "span",
	                            { className: "label" },
	                            "GitHub"
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    "li",
	                    null,
	                    _react2.default.createElement(
	                        "a",
	                        { href: "mailto:contact@hackwit.us", target: "_blank", className: "icon alt fa-envelope" },
	                        _react2.default.createElement(
	                            "span",
	                            { className: "label" },
	                            "Email"
	                        )
	                    )
	                ),
	                _react2.default.createElement(
	                    "li",
	                    null,
	                    _react2.default.createElement(
	                        "a",
	                        { href: "https://www.eventbrite.com/e/hackwitus-2018-tickets-46911355126", target: "_blank", className: "icon alt fa-ticket" },
	                        _react2.default.createElement(
	                            "span",
	                            { className: "label" },
	                            "Eventbrite"
	                        )
	                    )
	                )
	            ),
	            _react2.default.createElement(
	                "ul",
	                { className: "copyright" },
	                _react2.default.createElement(
	                    "li",
	                    null,
	                    "\xA9 HackWITus"
	                ),
	                _react2.default.createElement(
	                    "li",
	                    null,
	                    "Design: ",
	                    _react2.default.createElement(
	                        "a",
	                        { href: "http://html5up.net" },
	                        "HTML5 UP"
	                    )
	                )
	            )
	        );
	    };
	
	    return Footer;
	}(_react2.default.Component);
	
	exports.default = Footer;
	module.exports = exports["default"];

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Header = function (_React$Component) {
	  _inherits(Header, _React$Component);
	
	  function Header() {
	    _classCallCheck(this, Header);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Header.prototype.render = function render() {
	    return _react2.default.createElement(
	      "section",
	      { id: "header" },
	      _react2.default.createElement(
	        "div",
	        { className: "inner" },
	        _react2.default.createElement("span", { className: "icon major fa-code" }),
	        _react2.default.createElement(
	          "h1",
	          null,
	          "HackWITus 2018"
	        ),
	        _react2.default.createElement(
	          "p",
	          null,
	          _react2.default.createElement(
	            "span",
	            { className: "tagline" },
	            " A hackathon for students by students,",
	            _react2.default.createElement("br", null),
	            " with a mission to promote diversity",
	            _react2.default.createElement("br", null),
	            " and accessibility in our tech community."
	          ),
	          _react2.default.createElement("br", null),
	          " ~",
	          _react2.default.createElement("br", null),
	          " Wentworth Institute of Technology",
	          _react2.default.createElement("br", null),
	          " Ira Allen Building, Parker St.",
	          _react2.default.createElement("br", null),
	          " Boston, Massachusetts 02120",
	          _react2.default.createElement("br", null),
	          " November 10th-11th"
	        ),
	        this.props.location.pathname === '/' ? null : _react2.default.createElement(
	          "a",
	          { href: "/" },
	          "Home"
	        )
	      )
	    );
	  };
	
	  return Header;
	}(_react2.default.Component);
	
	exports.default = Header;
	module.exports = exports["default"];

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(320);
	
	var _Header = __webpack_require__(207);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Footer = __webpack_require__(206);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _DiscordWidget = __webpack_require__(205);
	
	var _DiscordWidget2 = _interopRequireDefault(_DiscordWidget);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Template = function (_React$Component) {
	    _inherits(Template, _React$Component);
	
	    function Template() {
	        _classCallCheck(this, Template);
	
	        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	    }
	
	    Template.prototype.render = function render() {
	        var children = this.props.children;
	
	
	        return _react2.default.createElement(
	            "div",
	            { className: "body" },
	            _react2.default.createElement(_Header2.default, { location: this.props.location }),
	            children(),
	            _react2.default.createElement(_Footer2.default, null)
	        );
	    };
	
	    return Template;
	}(_react2.default.Component);
	
	Template.propTypes = {
	    children: _react2.default.PropTypes.func
	};
	
	exports.default = Template;
	module.exports = exports["default"];

/***/ })

});
//# sourceMappingURL=component---src-layouts-index-js-f39832c00cce6dbd5037.js.map