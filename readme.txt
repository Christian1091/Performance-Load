Instrucciones paso a paso de ejecución

Tecnologías usadas 

- Sistema operativo: Windows 11
- IDE: Visual Studio Code
- k6: Versión v1.7.0.

Verificar la version instalada ejecutando este comando:
- k6 -version

Si no tiene instalado ejecutar:
- winget install k6 --source winget

Instrucciones para ejecutar los test

Para ejecutar las pruebas de perfomance, seguir los pasos a continuación:

Ejecutar k6 mediante comando
- Dirigirse al directorio donde se encuentra el archivo de prueba tests/load.js
- k6 run --out web-dashboard tests/load.js