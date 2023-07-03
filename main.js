(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function n(t,e,n){return(e=r(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(n)?n:String(n)}var o=function(){function t(e,r,o,i,u){var a=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),n(this,"_handleOpenImage",(function(){a._openImage(a._cardData)})),n(this,"_handleLikeBtn",(function(){a._changeLike(a._cardId,a._likeBtnElement)})),n(this,"_handleTrashBtn",(function(){a._openDeletePopup({card:a,cardId:a._cardId})})),this._cardData=e,this._myId=e.myId,this._likes=e.likes,this._likesLength=e.likes.length,this._ownerId=e.owner._id,this._cardId=e._id,this._templateSelector=r,this._openImage=o,this._openDeletePopup=i,this._changeLike=u,this._cloneElement=this._getTemplateClone(),this._imageElement=this._cloneElement.querySelector(".element__image"),this._likeBtnElement=this._cloneElement.querySelector(".element__like-button"),this._trashBtnElement=this._cloneElement.querySelector(".element__trash"),this._descriptionElement=this._cloneElement.querySelector(".element__description"),this._likesCounter=this._cloneElement.querySelector(".element__likes_number")}var r,o;return r=t,(o=[{key:"_getTemplateClone",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){this._likeBtnElement.addEventListener("click",this._handleLikeBtn),this._trashBtnElement.addEventListener("click",this._handleTrashBtn),this._imageElement.addEventListener("click",this._handleOpenImage)}},{key:"_changeVisibleForTrashBtn",value:function(){this._myId===this._ownerId?this._trashBtnElement.style.display="block":this._trashBtnElement.style.display="none"}},{key:"_checkLikeStatus",value:function(){var t=this;this._likes.forEach((function(e){e._id===t._myId&&t._likeBtnElement.classList.add("element__like-button_active")})),this._likesCounter.textContent=this._likesLength}},{key:"isLiked",value:function(t){this._likeBtnElement.classList.toggle("element__like-button_active"),this._likesCounter.textContent=t.length}},{key:"isMyLike",value:function(){return this._likeBtnElement.classList.contains("element__like-button_active")}},{key:"removeCard",value:function(){this._cloneElement.remove(),this._cloneElement=null}},{key:"createCard",value:function(){return this._imageElement.src=this._cardData.link,this._imageElement.alt=this._cardData.name,this._descriptionElement.textContent=this._cardData.name,this._changeVisibleForTrashBtn(),this._checkLikeStatus(),this._setEventListeners(),this._cloneElement}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),t}();function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===i(o)?o:String(o)),r)}var o}var a=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._errorClass=e.errorClass,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._form=n,this._button=n.querySelector(this._submitButtonSelector),this._inputList=n.querySelectorAll(this._inputSelector)}var e,n;return e=t,(n=[{key:"_hideInputError",value:function(t,e){e.classList.remove(this._errorClass),t.textContent=""}},{key:"_showInputError",value:function(t,e){e.classList.add(this._errorClass),t.classList.add(this._inputErrorClass),t.textContent=e.validationMessage}},{key:"_handleFormInput",value:function(t){var e=this._form.querySelector("#".concat(t.id,"-error"));t.validity.valid?this._hideInputError(e,t):this._showInputError(e,t)}},{key:"_handleValidInput",value:function(){return Array.from(this._inputList).every((function(t){return t.validity.valid}))}},{key:"_enableSubmitButton",value:function(){this._button.classList.remove(this._inactiveButtonClass),this._button.disabled=!1}},{key:"_disableSubmitButton",value:function(){this._button.classList.add(this._inactiveButtonClass),this._button.disabled=!0}},{key:"_toggleButton",value:function(){this._handleValidInput()?this._enableSubmitButton():this._disableSubmitButton(this._button)}},{key:"_addInputListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._handleFormInput(e),t._toggleButton()}))}))}},{key:"enableValidation",value:function(){this._addInputListeners()}},{key:"resetValidationState",value:function(){var t=this;this._inputList.forEach((function(e){var n=t._form.querySelector("#".concat(e.id,"-error"));e.validity.valid||t._hideInputError(n,e)})),this._disableSubmitButton()}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,f(r.key),r)}}function s(t,e,n){return(e=f(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){var e=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===c(e)?e:String(e)}var p=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,"_closeByButton",(function(){n.close()})),s(this,"_closeByEsc",(function(t){"Escape"===t.code&&n.close()})),s(this,"_closeByOverlay",(function(t){(t.target.classList.contains("popup__close")||t.target.classList.contains("popup_opened"))&&n.close()})),this._popup=document.querySelector(e),this._popupCloseButton=this._popup.querySelector(".popup__close")}var e,n;return e=t,(n=[{key:"setEventListeners",value:function(){this._popupCloseButton.addEventListener("click",this._closeByButton),this._popup.addEventListener("click",this._closeByOverlay)}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._closeByEsc)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._closeByEsc)}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function h(t,e){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},h(t,e)}function m(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=b(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},d.apply(this,arguments)}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}function v(t){var e=function(t,e){if("object"!==y(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===y(e)?e:String(e)}var _=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=b(n);if(r){var o=b(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===y(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return m(t)}(this,t)});function i(t){var e,n,r,u,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),r=m(n=o.call(this,t)),a=function(t){n._popupImage.src=t.link,n._popupImage.alt=t.name,n._popupImageCaption.textContent=t.name,d((e=m(n),b(i.prototype)),"open",e).call(e)},(u=v(u="openPopup"))in r?Object.defineProperty(r,u,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[u]=a,n._popupImage=n._popup.querySelector(".popupImage__image-opened"),n._popupImageCaption=n._popup.querySelector(".popupImage__caption"),n}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(p);function S(t){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(t)}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==S(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===S(o)?o:String(o)),r)}var o}var k=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._container=document.querySelector(n),this.renderer=e}var e,n;return e=t,(n=[{key:"addCardsFromArray",value:function(t){var e=this;t.forEach((function(t){e.renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"addItemAppend",value:function(t){this._container.append(t)}}])&&g(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function w(t){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(t)}function E(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==w(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==w(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===w(o)?o:String(o)),r)}var o}var j=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._profileName=document.querySelector(e.nameProfileSelector),this._profileJob=document.querySelector(e.jobProfileSelector),this._profileAvatar=document.querySelector(e.avatarProfileSelector)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{username:this._profileName.textContent,job:this._profileJob.textContent}}},{key:"setUserInfo",value:function(t){var e=t.username,n=t.avatar,r=t.job;this._profileAvatar.src=n,this._profileName.textContent=e,this._profileJob.textContent=r}}])&&E(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=I(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},L.apply(this,arguments)}function C(t,e){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},C(t,e)}function I(t){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},I(t)}var B=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=I(r);if(o){var n=I(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t))._form=e,r._submitFunction=n,r._inputList=r._form.querySelectorAll(".popup__input"),r._submitBtn=r._form.querySelector(".popup__button"),r._defaultSubmitText=r._submitBtn.textContent,r}return e=u,(n=[{key:"close",value:function(){L(I(u.prototype),"close",this).call(this),this._form.reset()}},{key:"_getInputValue",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"setInputValue",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;L(I(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitBtn.textContent="Сохранение...",t._submitFunction(t._getInputValue())}))}},{key:"setDefaultText",value:function(){this._submitBtn.textContent=this._defaultSubmitText}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function R(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,V(r.key),r)}}function x(t,e){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},x(t,e)}function q(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function A(){return A="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=D(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},A.apply(this,arguments)}function D(t){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},D(t)}function V(t){var e=function(t,e){if("object"!==T(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==T(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===T(e)?e:String(e)}var z=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=D(r);if(o){var n=D(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===T(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return q(t)}(this,t)});function u(t,e){var n,r,o,a,c;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),o=q(r=i.call(this,t)),c=function(t){var e=t.card,o=t.cardId;A((n=q(r),D(u.prototype)),"open",n).call(n),r._element=e,r._cardId=o},(a=V(a="open"))in o?Object.defineProperty(o,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[a]=c,r._submitFunction=e,r._form=r._popup.querySelector(".popup__form"),r._submitBtn=r._form.querySelector(".popup__button"),r._defaultSubmitText=r._submitBtn.textContent,r}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;A(D(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._submitBtn.textContent="Удаление...",t._submitFunction({card:t._element,cardId:t._cardId})}))}},{key:"setDefaultText",value:function(){this._submitBtn.textContent=this._defaultSubmitText}}])&&R(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(p);function U(t){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(t)}function F(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==U(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==U(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===U(o)?o:String(o)),r)}var o}var N=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.baseUrl,this._headers=e.headers,this._authorization=e.headers.authorization}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject}},{key:"getInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"getCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"setUserInfo",value:function(t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.username,about:t.job})}).then(this._checkResponse)}},{key:"setNewAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.avatar})}).then(this._checkResponse)}},{key:"addCard",value:function(t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.name,link:t.link})}).then(this._checkResponse)}},{key:"addLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"deleteLike",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._checkResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._authorization}}).then(this._checkResponse)}}])&&F(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),J=document.querySelector(".profile__edit-button"),M=document.querySelector(".profile__add-button"),H=(document.querySelector(".popupEdit"),document.querySelector(".popupAdd"),document.querySelector(".popupAvatar"),document.querySelector(".profile__avatar-overlay")),$=document.querySelector(".popupAdd__form"),G=document.querySelector(".popupEdit__form"),K=document.querySelector(".popupAvatar__form"),Q={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input-error",errorClass:"popup__error_visible"};function W(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var X=new j({nameProfileSelector:".profile__name",jobProfileSelector:".profile__description",avatarProfileSelector:".profile__avatar"}),Y=new N({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-69",headers:{authorization:"2c454993-8553-4871-88bd-2106e0a9a7fa","Content-Type":"application/json"}});J.addEventListener("click",(function(){rt.setInputValue(X.getUserInfo()),ut.resetValidationState(),rt.open()})),M.addEventListener("click",(function(){ot.open(),at.resetValidationState()}));var Z=new _(".popupImage");Z.setEventListeners();var tt=new z(".popupDelete",(function(t){var e=t.card,n=t.cardId;Y.deleteCard(n).then((function(){e.removeCard(),tt.close()})).catch((function(t){return console.log("Ошибка удаления карточки ".concat(t))})).finally((function(){return tt.setDefaultText()}))}));function et(t){var e=new o(t,"#card",Z.openPopup,tt.open,(function(t){e.isMyLike()?Y.deleteLike(t).then((function(t){e.isLiked(t.likes)})).catch((function(t){return console.log("Ошибка снятия лайка ".concat(t))})):Y.addLike(t).then((function(t){e.isLiked(t.likes)})).catch((function(t){return console.log("Ошибка добавления лайка ".concat(t))}))}));return e.createCard()}tt.setEventListeners();var nt=new k((function(t){nt.addItemAppend(et(t))}),".elements"),rt=new B(".popupEdit",G,(function(t){Y.setUserInfo(t).then((function(t){X.setUserInfo({username:t.name,job:t.about,avatar:t.avatar}),rt.close()})).catch((function(t){return console.log("Ошибка редактирования личного профиля ".concat(t))})).finally((function(){return rt.setDefaultText()}))}));rt.setEventListeners();var ot=new B(".popupAdd",$,(function(t){Y.addCard(t).then((function(t){t.myId=t.owner._id,nt.addItem(et(t)),ot.close()})).catch((function(t){return console.error("Ошибка при создании карточки ".concat(t))})).finally((function(){return ot.setDefaultText()}))}));ot.setEventListeners();var it=new B(".popupAvatar",K,(function(t){Y.setNewAvatar(t).then((function(t){X.setUserInfo({username:t.name,job:t.about,avatar:t.avatar}),it.close()})).catch((function(t){return console.log("Ошибка изменения аватара ".concat(t))})).finally((function(){return it.setDefaultText()}))}));it.setEventListeners(),H.addEventListener("click",(function(){ct.resetValidationState(),it.open()}));var ut=new a(Q,G);ut.enableValidation();var at=new a(Q,$);at.enableValidation();var ct=new a(Q,K);ct.enableValidation(),Promise.all([Y.getInfo(),Y.getCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,u,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(e,n)||function(t,e){if(t){if("string"==typeof t)return W(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?W(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];i.forEach((function(t){return t.myId=o._id})),X.setUserInfo({username:o.name,job:o.about,avatar:o.avatar}),nt.addCardsFromArray(i)})).catch((function(t){return console.log("Ошибка при создании начального массива карт ".concat(t))}))})();