# box-sizing

::: details Темы
- Изменение алгоритма расчёта ширины и высоты элемента
:::

- `content-box` - свойства width и height <u>не включают</u> в себя значения margin, padding и border
- `border-box` - свойства width и height <u>включают</u> в себя значения padding и border, но не margin

```css
*, :after, :before {
	box-sizing: content-box;
	box-sizing: border-box;
}
```