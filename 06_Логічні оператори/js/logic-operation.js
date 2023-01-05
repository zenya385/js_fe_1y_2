/*
 * Логічні оператори (&& || !)
 */

//? Запам'ятайте 6 хибних (falsy) значень, що приводяться до false
//? у логічному перетворенні: 0, NaN, null, undefined, порожній рядок і false.
//? Абсолютно все інше приводиться до true.

//* && - запинається на брехні
//* Якщо операнд був преведенний до false, то повертається значення цього операнду.
//* Якщо всі операнди були приведені до true, то повертається значення останнього операнду.

// const result = 0 && 20 && "Hello!";

// console.log(result);

// * || - запинається на правді
// * Якщо операнд був преведенний до true, то повертається значення цього операнду.
// * Якщо всі операнди були приведені до false, то повертається останній.

// const result = 0 || false || null;

// console.log(result);

//* ! - інвертує правду до брехні, а брехню до правди
// console.log(!'Hello!');

// ===============================================================

//* Яким буде результат виразів?

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && "kiwi");

// console.log(true && 0 && "kiwi");

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);

// ======================== && (І)===========================

// console.log(1 && 5); // true && true ->
// console.log(5 && 1); // true && true ->
// console.log(8 && 2 && null && ""); // false && true && false->
// console.log(2 && 0); // true && false ->
// console.log("" && "Mango"); // false && true ->
// console.log("Mango" && ""); // true && false ->
// console.log("Mango" && "Poly"); // true && true ->
// console.log("Poly" && "Mango"); // true && true -> "

// ========================== || (АБО)=================================

// console.log(true || false);
// console.log(false || true);
// console.log(true || true);
// console.log(0 || null);

// console.log(3 || false);
// console.log(false || 3);
// console.log(3 || true);
// console.log(true || 3);

// ====================== ! (НЕ)=================

// console.log(!true);
// console.log(!false);
// console.log(!3);
// console.log(!"Mango");
// console.log(!0);
// console.log(!"");
// console.log(!" ");

// const isOnline = true;
// const isNotOnline = !isOnline;
// console.log("isOnline :>> ", isOnline);
// console.log("isNotOnline :>> ", isNotOnline);
