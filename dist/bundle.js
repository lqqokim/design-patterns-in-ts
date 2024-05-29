/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/iterator/Array.ts":
/*!*******************************!*\
  !*** ./src/iterator/Array.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ArrayIterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArrayIterator */ "./src/iterator/ArrayIterator.ts");

var Array = /** @class */ (function () {
    function Array(items) {
        this.items = items;
    }
    Array.prototype.getItem = function (index) {
        return this.items[index];
    };
    Object.defineProperty(Array.prototype, "count", {
        get: function () {
            return this.items.length;
        },
        enumerable: false,
        configurable: true
    });
    Array.prototype.iterator = function () {
        return new _ArrayIterator__WEBPACK_IMPORTED_MODULE_0__["default"](this); // Array class의 객체 전달
    };
    return Array;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Array);


/***/ }),

/***/ "./src/iterator/ArrayIterator.ts":
/*!***************************************!*\
  !*** ./src/iterator/ArrayIterator.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ArrayIterator = /** @class */ (function () {
    function ArrayIterator(array) {
        this.array = array;
        this._index = -1;
    }
    ArrayIterator.prototype.next = function () {
        this._index++;
        return this._index < this.array.count;
    };
    ArrayIterator.prototype.current = function () {
        return this.array.getItem(this._index);
    };
    return ArrayIterator;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrayIterator);


/***/ }),

/***/ "./src/iterator/Item.ts":
/*!******************************!*\
  !*** ./src/iterator/Item.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Aggregator 구성 항목에 대한 데이터 객체
 */
var Item = /** @class */ (function () {
    // private _name: string;
    // private _cost: number;
    // constructor(name: string, cost: number) {
    //   this._name = name;
    //   this._cost = cost;
    // }
    function Item(_name, _cost) {
        this._name = _name;
        this._cost = _cost;
    }
    Object.defineProperty(Item.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "cost", {
        get: function () {
            return this._cost;
        },
        enumerable: false,
        configurable: true
    });
    return Item;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/iterator/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Array */ "./src/iterator/Array.ts");
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item */ "./src/iterator/Item.ts");


var items = [
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]('Macbook', 2500),
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]('Gram', 1500),
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]('MSI', 1800),
    new _Item__WEBPACK_IMPORTED_MODULE_1__["default"]('Dell', 1300)
];
var array = new _Array__WEBPACK_IMPORTED_MODULE_0__["default"](items);
var iterator = array.iterator();
while (iterator.next()) {
    var item = iterator.current();
    var name_1 = item.name, cost = item.cost;
    var domItem = document.createElement('div');
    domItem.innerText = "".concat(name_1, ": ").concat(cost);
    document.body.appendChild(domItem);
    domItem.classList.add('iterator-item');
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBVyxJQUFJLEtBQWYsRUFBRSxJQUFJLEdBQUssSUFBSSxLQUFULENBQVU7SUFFNUIsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QyxPQUFPLENBQUMsU0FBUyxHQUFHLFVBQUcsTUFBSSxlQUFLLElBQUksQ0FBRSxDQUFDO0lBQ3ZDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRW5DLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3pDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ24tcGF0dGVybnMtaW4tdHMvLi9zcmMvaXRlcmF0b3IvQXJyYXkudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm5zLWluLXRzLy4vc3JjL2l0ZXJhdG9yL0FycmF5SXRlcmF0b3IudHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm5zLWluLXRzLy4vc3JjL2l0ZXJhdG9yL0l0ZW0udHMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm5zLWluLXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rlc2lnbi1wYXR0ZXJucy1pbi10cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm5zLWluLXRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm5zLWluLXRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGVzaWduLXBhdHRlcm5zLWluLXRzLy4vc3JjL2l0ZXJhdG9yL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBZ2dyZWdhdG9yIGZyb20gXCIuL2ludGVyZmFjZS9BZ2dyZWdhdG9yXCI7XG5pbXBvcnQgQXJyYXlJdGVyYXRvciBmcm9tIFwiLi9BcnJheUl0ZXJhdG9yXCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9JdGVtXCI7XG5pbXBvcnQgSXRlcmF0b3IgZnJvbSBcIi4vaW50ZXJmYWNlL0l0ZXJhdG9yXCI7XG5cbmNsYXNzIEFycmF5IGltcGxlbWVudHMgQWdncmVnYXRvcjxJdGVtPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbXM6IEl0ZW1bXSkge31cblxuICBwdWJsaWMgZ2V0SXRlbShpbmRleDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXNbaW5kZXhdO1xuICB9XG5cbiAgcHVibGljIGdldCBjb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5sZW5ndGg7XG4gIH1cblxuICBpdGVyYXRvcigpOiBJdGVyYXRvcjxJdGVtPiB7XG4gICAgcmV0dXJuIG5ldyBBcnJheUl0ZXJhdG9yKHRoaXMpOyAvLyBBcnJheSBjbGFzc+ydmCDqsJ3ssrQg7KCE64usXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXk7IiwiaW1wb3J0IEFycmF5IGZyb20gJy4vQXJyYXknXG5pbXBvcnQgSXRlcmF0b3IgZnJvbSBcIi4vaW50ZXJmYWNlL0l0ZXJhdG9yXCI7XG5pbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xuXG5jbGFzcyBBcnJheUl0ZXJhdG9yIGltcGxlbWVudHMgSXRlcmF0b3I8SXRlbT4ge1xuICBwcml2YXRlIF9pbmRleDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXJyYXk6IEFycmF5KSB7XG4gICAgdGhpcy5faW5kZXggPSAtMTtcbiAgfVxuXG4gIG5leHQoKTogYm9vbGVhbiB7XG4gICAgdGhpcy5faW5kZXgrKztcbiAgICByZXR1cm4gdGhpcy5faW5kZXggPCB0aGlzLmFycmF5LmNvdW50O1xuICB9XG4gIGN1cnJlbnQoKTogSXRlbSB7XG4gICAgcmV0dXJuIHRoaXMuYXJyYXkuZ2V0SXRlbSh0aGlzLl9pbmRleClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUl0ZXJhdG9yOyIsIi8qKlxuICogQWdncmVnYXRvciDqtazshLEg7ZWt66qp7JeQIOuMgO2VnCDrjbDsnbTthLAg6rCd7LK0XG4gKi9cbmNsYXNzIEl0ZW0ge1xuICAvLyBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XG4gIC8vIHByaXZhdGUgX2Nvc3Q6IG51bWJlcjtcblxuICAvLyBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGNvc3Q6IG51bWJlcikge1xuICAvLyAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAvLyAgIHRoaXMuX2Nvc3QgPSBjb3N0O1xuICAvLyB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmFtZTogc3RyaW5nLCBwcml2YXRlIF9jb3N0OiBudW1iZXIpIHtcblxuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVcbiAgfVxuXG4gIGdldCBjb3N0KCkge1xuICAgIHJldHVybiB0aGlzLl9jb3N0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQXJyYXkgZnJvbSAnLi9BcnJheSdcbmltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSdcblxuY29uc3QgaXRlbXM6IEl0ZW1bXSA9IFtcbiAgbmV3IEl0ZW0oJ01hY2Jvb2snLCAyNTAwKSxcbiAgbmV3IEl0ZW0oJ0dyYW0nLCAxNTAwKSxcbiAgbmV3IEl0ZW0oJ01TSScsIDE4MDApLFxuICBuZXcgSXRlbSgnRGVsbCcsIDEzMDApXG5dXG5cbmNvbnN0IGFycmF5ID0gbmV3IEFycmF5KGl0ZW1zKTtcbmNvbnN0IGl0ZXJhdG9yID0gYXJyYXkuaXRlcmF0b3IoKTtcblxud2hpbGUgKGl0ZXJhdG9yLm5leHQoKSkge1xuICBjb25zdCBpdGVtID0gaXRlcmF0b3IuY3VycmVudCgpO1xuICBjb25zdCB7IG5hbWUsIGNvc3QgfSA9IGl0ZW07XG5cbiAgY29uc3QgZG9tSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkb21JdGVtLmlubmVyVGV4dCA9IGAke25hbWV9OiAke2Nvc3R9YDtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb21JdGVtKTtcblxuICBkb21JdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZXJhdG9yLWl0ZW0nKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==