"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var lodash_find_1 = __importDefault(require("lodash.find"));
var lodash_findindex_1 = __importDefault(require("lodash.findindex"));
var immer_1 = __importDefault(require("immer"));
var range_1 = __importDefault(require("./src/utils/range"));
var PickerFactory = function (_a) {
    var pickerProps = _a.pickerProps, selectedValue = _a.selectedValue, onChange = _a.onChange, pickerStyle = _a.pickerStyle, itemStyle = _a.itemStyle;
    var id = pickerProps.id, label = pickerProps.label, min = pickerProps.min, max = pickerProps.max;
    var numbers = range_1.default(min, max);
    return (react_1.default.createElement(react_native_1.Picker, { style: __assign({ height: "100%", width: 90 }, pickerStyle), selectedValue: selectedValue, onValueChange: function (value) { return onChange({ id: id, value: value }); }, itemStyle: itemStyle }, numbers.map(function (number, index) { return (react_1.default.createElement(react_native_1.Picker.Item, { key: id + "-" + number + "-" + index, value: number, label: number + " " + label })); })));
};
var NumberPlease = function (_a) {
    var digits = _a.digits, values = _a.values, onChange = _a.onChange, rest = __rest(_a, ["digits", "values", "onChange"]);
    var onChangeHandle = function (value) {
        var nextValues = immer_1.default(values, function (draft) {
            var index = lodash_findindex_1.default(draft, { id: value.id });
            draft[index] = value;
        });
        onChange(nextValues);
    };
    return (react_1.default.createElement(react_native_1.View, { style: styles.container }, digits.map(function (picker, index) {
        var value = lodash_find_1.default(values, { id: picker.id }).value;
        return (react_1.default.createElement(PickerFactory, __assign({ key: picker.id + "-picker-" + index, pickerProps: picker, selectedValue: value, onChange: onChangeHandle }, rest)));
    })));
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
});
exports.default = NumberPlease;
