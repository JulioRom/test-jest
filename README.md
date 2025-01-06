# Currency Conversion Project

## Descripción
Este proyecto implementa funciones para realizar conversiones entre diferentes monedas:
- Dólares (USD) a Yenes (JPY)
- Euros (EUR) a Dólares (USD)
- Yenes (JPY) a Libras (GBP)

El proyecto incluye pruebas unitarias con Jest para garantizar la precisión de los cálculos, utilizando tasas de conversión configurables.

## Características
- Funciones sencillas y reutilizables para conversiones monetarias.
- Tasas de conversión configurables para adaptarse a diferentes escenarios.
- Pruebas automatizadas con Jest para validar el correcto funcionamiento de las funciones.

## Instalación
1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso
### Conversión de monedas
Importa las funciones desde el archivo principal:
```javascript
const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./currency_conversion');

console.log(fromDollarToYen(100)); // Convierte 100 dólares a yenes
console.log(fromEuroToDollar(50)); // Convierte 50 euros a dólares
console.log(fromYenToPound(10000)); // Convierte 10,000 yenes a libras
```

### Ejecutar pruebas
Ejecuta las pruebas unitarias para verificar las funciones:
```bash
npm test
```

## Estructura del Proyecto
- **app.js**: Contiene las funciones de conversión monetaria.
- **tests.js**: Contiene las pruebas unitarias escritas con Jest.

## Contribuciones
Las contribuciones son bienvenidas. Por favor, crea un pull request o abre un issue para discutir cualquier mejora o corrección.

## Licencia
Este proyecto se encuentra bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

---

¡Gracias por usar este proyecto! 🚀

