(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('seat-core')) :
  typeof define === 'function' && define.amd ? define(['react', 'seat-core'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.SeatReact = factory(global.React, global.seatCore));
})(this, (function (React, seatCore) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  var SeatReact = function (props) {
      var domRef = React.useRef(null);
      var seatRef = React.useRef();
      React.useEffect(function () {
          if (domRef.current && !seatRef.current) {
              seatRef.current = new seatCore.Seat(props.component, domRef.current, props.compProps);
              seatRef.current.onEmit(function (ev) {
                  var _a;
                  (_a = props.onEmit) === null || _a === void 0 ? void 0 : _a.call(props, ev);
              });
          }
      }, [domRef]);
      React.useEffect(function () {
          if (seatRef.current) {
              seatRef.current.updateProps(props.compProps || {});
          }
      }, [props.compProps]);
      return (React__default["default"].createElement("div", { ref: domRef }));
  };

  return SeatReact;

}));
