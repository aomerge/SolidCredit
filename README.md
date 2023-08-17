# Solid Credit
Solid credit es una libreria de generacion de tablas de amortizaion de creditos, la cual permite generar tablas de amortizacion de creditos de tipo frances, aleman y americano.

## Instalacion
Para instalar la libreria se debe ejecutar el siguiente comando:
```bash
npm i solid-credit
```

## Uso
Para usar la libreria se debe importar la clase SolidCrt y crear una instancia de la misma, la cual recibe como parametros el monto del credito, la tasa de interes, el plazo del credito y el tipo de cuota.
```python
from solid_crt import SolidCrt

solid_crt = SolidCrt(1000000, 0.1, 12, 'frances')
```
Una vez creada la instancia se debe llamar al metodo get_table, el cual retorna una lista de diccionarios con la informacion de la tabla de amortizacion.
```python
table = solid_crt.get_table()
```

## Ejemplo
```python
from solid_crt import SolidCrt

solid_crt = SolidCrt(1000000, 0.1, 12, 'frances')
table = solid_crt.get_table()

```
## Contribuciones
Las contribuciones son bienvenidas, para ello se debe crear un pull request con la nueva funcionalidad o arreglo de bug.

## Licencia
Licencia 
[MIT](https://choosealicense.com/licenses/mit/)
