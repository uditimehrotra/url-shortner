# npm-shortidx

`npm-shortidx` es una librería para generar identificadores aleatorios cortos. Incluye funciones para generar IDs con diferentes conjuntos de caracteres y para reordenar arrays de manera aleatoria.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Métodos](#métodos)
  - [ShortIdx](#shortidx)
  - [RandomIdx](#randomidx)
  - [ShuffleX](#shufflex)
- [Ejemplos](#ejemplos)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Instalación 

```
npm i npm-shortidx
```
```
yarn add npm-shortidx
```

## Métodos / methods
```
ShortIdx() , RandomIdx(), ShuffleX()
```

## Métodos

### ShortIdx()

Genera IDs aleatorios en JavaScript. Por defecto, su longitud es de 7 caracteres.

**Caracteres usados**:


```
0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_
```


**Uso**:

```javascript
import { ShortIdx } from "npm-shortidx";

console.log(ShortIdx()); // Ejemplo de salida: "wkezyUxsW"
```
**Parámetros**:

`limit` (opcional): Longitud del ID generado. Por defecto es 7.

### RandomIdx()

Genera IDs con símbolos más complejos de manera aleatoria. Por defecto, su longitud es de 7 caracteres.

```
0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_!#$%&'()*+,./:;<=>?@[]^`{|}~\"
```
**Uso**:

```javascript
import { RandomIdx } from "npm-shortidx";

console.log(RandomIdx()); // Ejemplo de salida: "<tU!xQNK|Y8;"
```

**Parámetros**:

`limit` (opcional): Longitud del ID generado. Por defecto es 7.

### ShuffleX()

Reordena arrays de manera aleatoria.

**Uso**:

```javascript
import { ShuffleX } from "npm-shortidx";

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
console.log(ShuffleX(numbers)); // Ejemplo de salida: ['2', '4', '8', '5', '1', '9', '7', '6', '3', '0']
```

**Parámetros**:

`array`: El array a reordenar.
`limit`: (opcional): Longitud del array reordenado a mostrar. Por defecto muestra todos los elementos.

## Ejemplos
**ShortIdx en React**

```javascript
import { ShortIdx } from "npm-shortidx";

function App() {
  const letters = ["a", "b", "c", "d"];

  return (
    <>
      <p>{ShortIdx()}</p>
      {letters.map((letter) => (
        <p key={ShortIdx()}>{letter}</p>
      ))}
    </>
  );
}

export default App;
```

**Cambiando la longitud del ID**

```javascript
import { ShortIdx } from "npm-shortidx";

function App() {
  return (
    <>
      <p>{ShortIdx(15)}</p>
    </>
  );
}

export default App;

```

**Uso de RandomIdx**

```javascript
import { RandomIdx } from "npm-shortidx";

function App() {
  return (
    <>
      <p>{RandomIdx()}</p>
    </>
  );
}

export default App;

```

**Uso de ShuffleX**

```javascript
import { ShuffleX } from "npm-shortidx";

const App = () => {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  return (
    <>
      {console.log(ShuffleX(numbers))}
    </>
  );
}
export default App;

```

## Contribuciones
¡Las contribuciones son bienvenidas! Siéntete libre de abrir un issue o enviar un pull request.


## Licencia

### ISC