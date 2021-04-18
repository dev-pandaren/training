# ES-6 модули в JavaScript


- [import](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/import)
- [export](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/export)


<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### import
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js
import MyClass from './modules/lib';                   // значение экспортированное по умолчанию  
import { libFunction } from './modules/lib';           // одно значение
import { libFunction, libConst } from './modules/lib'; // несколько значений
import { libConst as name } from './modules/lib';      // изменение имени значения
import './modules/lib' as obj;                         // импорт модуля как объекта, значениями свойств которого будут экспортированные значения (obj.libConst)
import * as obj from './modules/lib';                  // импорт модуля как объекта
import './modules/lib'                                 // импорт всех данных (в "./modules/lib" нет "export"), запуск кода из модуля
import MyClass, { libFunction } from './modules/lib';  // совмещение различных видов
```

<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
### export
<!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
```js
export default MyClass;               // экспорт по умолчанию
export const a = 22;                  // одно значение
export { one, two };                  // несколько значений (const one, const two)
export { one as once, two as twice }; // изменение имени значения

export function libFunction() {
    console.log(libFunction);
}
```
