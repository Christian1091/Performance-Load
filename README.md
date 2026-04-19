# Pruebas de Performance con k6

Este repositorio contiene un proyecto para ejecutar pruebas de rendimiento utilizando **k6**. A continuación se detallan los pasos para configurar el entorno local y ejecutar las pruebas.

## 1. Prerrequisitos

Antes de comenzar, asegúrate de tener configurado lo siguiente en la máquina local:

- **Sistema operativo**: Windows 11
- **IDE**: [Visual Studio Code](https://code.visualstudio.com/)
- **k6**: Versión v1.7.0 (asegúrate de tenerlo configurado correctamente)

### Verificación de la versión de k6 instalada

Para verificar que tienes la versión correcta de **k6** instalada, ejecuta el siguiente comando en tu terminal:

```bash
k6 -version
```
## Instalación

Si k6 no está instalado, puedes instalarlo mediante el siguiente comando:

```bash
winget install k6 --source winget
```

## 2. Comandos de instalación

Para instalar las dependencias necesarias, seguir los pasos a continuación:

**2.1 Clonar el repositorio**
```bash
git clone https://github.com/Christian1091/Performance-Load.git
cd Performance-Load
```

**2.2 Instalar dependencias del proyecto**
Si no tienes k6 instalado, sigue el paso mencionado en la sección anterior para instalarlo.

## 3. Instrucciones para ejecutar los tests

**3.1 Ejecutar k6**

```bash
k6 run --out web-dashboard tests/load.js
```

## 4. Información adicional

**k6 Dashboard** 

Una vez que se haya ejecutado la prueba, puedes ver los resultados en la consola, pero si estás utilizando el Dashboard web de k6, también podrás consultar un reporte más detallado sobre la ejecución de las pruebas, como tiempos de respuesta, tasas de error y más.

**Configuraciones** 

Si se necesita personalizar el comportamiento de la prueba, cambiar el número de usuarios virtuales o los tiempos de espera, se puede hacer directamente dentro del archivo load.js de la prueba.

**Ejecución de pruebas en CI**

Para que las pruebas se ejecuten automáticamente en GitHub Actions cada vez que se realice un push en la rama master o un pull request hacia la misma, se disparará automáticamente el flujo de trabajo de CI.

**Estructura del proyecto**
```markdown
├───.github
│   └───workflows
├───config
├───data
├───tests
└───utils
