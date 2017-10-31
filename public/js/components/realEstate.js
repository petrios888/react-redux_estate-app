webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var listingsData = [{
  addres: '20-34 grand ave',
  city: 'Boston',
  state: 'MA',
  rooms: '2',
  price: 1000,
  floorSpace: 2000,
  extras: ['elevator', 'swimming_pool'],
  homeType: 'Apartment',
  image: 'http://electrohome.info/wp-content/uploads/2015/10/and-kitchens-designed-for-entertaining-complement-nice-apartment-with-nice-apartment-building-interior-beautiful.jpg'
}, {
  addres: '20-34 grand ave',
  city: 'Somerville',
  state: 'MA',
  rooms: '3',
  price: 900,
  floorSpace: 2000,
  extras: ['elevator', 'gym', 'swimming_pool'],
  homeType: 'Apartment',
  image: 'http://escobares.com/wp-content/uploads/2017/03/Nice-Decorated-Apartments-For-nifty-Best-Interior-Decorating-Software-Home-Interior-Design-Style.jpg'
}, {
  addres: '20-34 grand ave',
  city: 'Medford',
  state: 'ML',
  rooms: '3',
  price: 800,
  floorSpace: 2000,
  extras: ['elevator', 'gym'],
  homeType: 'Apartment',
  image: 'http://www.loftbelleepoque.se/wp-content/uploads/2012/10/4-slider.jpg'
}, {
  addres: '20-34 grand ave',
  city: 'Boston',
  state: 'FL',
  rooms: '3',
  price: 700,
  floorSpace: 2000,
  extras: ['elevator', 'gym'],
  homeType: 'Apartment',
  image: 'http://www.nmsapartments.com/wp-content/uploads/2013/06/NMS_Beloit_n1.jpg'
}, {
  addres: '20-34 grand ave',
  city: 'California',
  state: 'CA',
  rooms: '3',
  price: 600,
  floorSpace: 2000,
  extras: ['elevator', 'gym'],
  homeType: 'Apartment',
  image: 'http://electrohome.info/wp-content/uploads/2015/10/and-kitchens-designed-for-entertaining-complement-nice-apartment-with-nice-apartment-building-interior-beautiful.jpg'
}, {
  addres: '20-34 grand ave',
  city: 'Seattle',
  state: 'WA',
  rooms: '3',
  price: 500,
  floorSpace: 5000,
  extras: ['elevator', 'gym', 'swimming_pool'],
  homeType: 'Apartment',
  image: 'http://cdn.home-designing.com/wp-content/uploads/2012/12/luxury-modern-apartment.jpg'
}];

exports.default = listingsData;

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(98);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(97);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(99);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(100);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      name: 'Cephas',
      listingsData: _listingsData2.default,
      min_price: 0,
      max_price: 1000,
      min_floor_space: 0,
      max_floor_space: 5000,
      elavator: false,
      finished_basement: false,
      swimming_pool: false,
      gym: false,
      filteredData: _listingsData2.default
    };
    _this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'change',
    value: function change(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

      this.setState(_defineProperty({}, name, value), function () {
        console.log(_this2.state);
        _this2.filteredData();
      });
    }
  }, {
    key: 'filteredData',
    value: function filteredData() {
      var _this3 = this;

      var newData = this.state.listingsData.filter(function (item) {
        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorSpace >= _this3.state.min_floor_space && item.floorSpace >= _this3.state.max_floor_space;
      });
      this.setState({
        filteredData: newData
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_Filter2.default, { change: this.change, globalState: this.state }),
          _react2.default.createElement(_Listings2.default, { listingsData: this.state.filteredData })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {
      name: 'Cephas'
    };
    return _this;
  }

  _createClass(Filter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'filter' },
        _react2.default.createElement(
          'div',
          { className: 'inside' },
          _react2.default.createElement(
            'h4',
            null,
            'Filter'
          ),
          _react2.default.createElement(
            'select',
            { name: 'neighbourhood', className: 'filters neighbourhood', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'Somerville' },
              ' Somerville '
            ),
            _react2.default.createElement(
              'option',
              { value: 'Boston' },
              ' Boston '
            ),
            _react2.default.createElement(
              'option',
              { value: 'Boston' },
              ' Boston '
            ),
            _react2.default.createElement(
              'option',
              { value: '\'Medford\'' },
              ' Medford '
            ),
            _react2.default.createElement(
              'option',
              { value: '\'California\'' },
              ' \'California\' '
            ),
            _react2.default.createElement(
              'option',
              { value: '\'Seattle\'' },
              ' Seattle '
            )
          ),
          _react2.default.createElement(
            'select',
            { name: 'housetype', className: 'filters housetype', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'Ranch' },
              ' Ranch '
            ),
            _react2.default.createElement(
              'option',
              { value: 'Apartment' },
              ' Apartment '
            ),
            _react2.default.createElement(
              'option',
              { value: 'Studios' },
              ' Studios '
            ),
            _react2.default.createElement(
              'option',
              { value: 'Rooms' },
              ' Rooms '
            )
          ),
          _react2.default.createElement(
            'select',
            { name: 'bedrooms', className: 'filters bedrooms', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: '1' },
              ' 1 BR '
            ),
            _react2.default.createElement(
              'option',
              { value: '2' },
              ' 2 BR '
            ),
            _react2.default.createElement(
              'option',
              { value: '3' },
              ' 3 BR '
            ),
            _react2.default.createElement(
              'option',
              { value: '4' },
              ' 5 BR '
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters price' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Price'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min_price', className: 'min_price', onChange: this.props.change, value: this.props.globalState.min_price }),
            _react2.default.createElement('input', { type: 'text', name: 'max_price', className: 'max_price', onChange: this.props.change, value: this.props.globalState.max_price })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters floor-space' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'floor-space'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min_floor_space', className: 'min_floor_space', onChange: this.props.change, value: this.props.globalState.min_floor_space }),
            _react2.default.createElement('input', { type: 'text', name: 'max_floor_space', className: 'max_floor_space', onChange: this.props.change, value: this.props.globalState.max_floor_space })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters extras' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'extras'
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Elevators '
              ),
              _react2.default.createElement('input', { name: 'elavator', value: 'elavator', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                ' Swimming Pool '
              ),
              _react2.default.createElement('input', { name: 'swimming_pool', value: 'swimming_pool', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                ' Finished Basement '
              ),
              _react2.default.createElement('input', { name: 'finished_basement', value: 'finished_basement', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                ' Gym'
              ),
              _react2.default.createElement('input', { name: 'gym', value: 'gym', type: 'checkbox', onChange: this.props.change })
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: 'Cephas'
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          ' Logo '
        ),
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Create ads '
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'About us '
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Log in  '
          ),
          _react2.default.createElement(
            'a',
            { href: '#', className: 'register-btn' },
            ' Register '
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.state = {
      name: 'Cephas'
    };
    _this.loopListings = _this.loopListings.bind(_this);
    return _this;
  }

  _createClass(Listings, [{
    key: 'loopListings',
    value: function loopListings() {
      var listingsData = this.props.listingsData;


      if (listingsData == undefined || listingsData.length == 0) {
        return "Does not match any listings";
      }

      return listingsData.map(function (listings, index) {
        return _react2.default.createElement(
          'div',
          { className: 'col-md-3', key: index },
          _react2.default.createElement(
            'div',
            { className: 'listings' },
            _react2.default.createElement(
              'div',
              { className: 'listings-img', style: { background: 'url("' + listings.image + '") no-repeat\n                center center' } },
              _react2.default.createElement(
                'span',
                { className: 'address' },
                listings.address
              ),
              _react2.default.createElement(
                'div',
                { className: 'details' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-3' },
                  _react2.default.createElement('div', { className: 'user-img' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-9' },
                  _react2.default.createElement(
                    'div',
                    { className: 'user-details' },
                    _react2.default.createElement(
                      'span',
                      { className: 'user-name' },
                      'Apostle Pau'
                    ),
                    _react2.default.createElement(
                      'span',
                      { className: 'post-date' },
                      ' "Now"'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'listings-details' },
                    _react2.default.createElement(
                      'div',
                      { className: 'floor-space' },
                      _react2.default.createElement('i', { className: 'fa fa-square-o', 'aria-hidden': 'true' }),
                      _react2.default.createElement(
                        'span',
                        null,
                        '1000 ft\xB2'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'bedrooms' },
                      _react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
                      _react2.default.createElement(
                        'span',
                        null,
                        ' ',
                        listings.bedrooms,
                        ' bedrooms '
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'view-btn' },
                    'View Listings'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'bottom-info' },
              _react2.default.createElement(
                'span',
                { className: 'price' },
                '$',
                listings.price
              ),
              _react2.default.createElement(
                'span',
                { classname: 'location' },
                _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' }),
                ' ',
                listings.city,
                ', ',
                listings.state,
                ' '
              )
            )
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'listings' },
        _react2.default.createElement(
          'section',
          { className: 'search-area' },
          _react2.default.createElement('input', { type: 'text', name: 'search' })
        ),
        _react2.default.createElement(
          'section',
          { className: 'sortby-area' },
          _react2.default.createElement(
            'div',
            { className: 'results' },
            '390 results found'
          ),
          _react2.default.createElement(
            'div',
            { className: 'sort-options' },
            _react2.default.createElement(
              'select',
              { name: 'sortby', className: 'sortby' },
              _react2.default.createElement(
                'option',
                { value: 'price-asc' },
                'Highest Price'
              ),
              _react2.default.createElement(
                'option',
                { value: 'price-dsc' },
                'Lowest Price'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'view' },
              _react2.default.createElement('i', { className: 'fa fa-th-list', 'aria-hidden': 'true' }),
              _react2.default.createElement('i', { className: 'fa fa-th', 'aria-hidden': 'true' })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'listings-results' },
          this.loopListings()
        ),
        _react2.default.createElement(
          'section',
          { id: 'pagination' },
          _react2.default.createElement(
            'ul',
            { className: 'numbers' },
            _react2.default.createElement(
              'li',
              null,
              'Prev'
            ),
            _react2.default.createElement(
              'li',
              { className: 'active' },
              '1'
            ),
            _react2.default.createElement(
              'li',
              null,
              '2'
            ),
            _react2.default.createElement(
              'li',
              null,
              '3'
            ),
            _react2.default.createElement(
              'li',
              null,
              '4'
            ),
            _react2.default.createElement(
              'li',
              null,
              '5'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Prev'
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ })

},[102]);