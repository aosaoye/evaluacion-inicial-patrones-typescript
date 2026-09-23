# Dependency Injection

## 1. ¿Qué es una dependencia?

Una dependencia es un objeto, clase o servicio que otro objeto necesita para realizar su trabajo. Por ejemplo, `UserService` depende de un repositorio para consultar, actualizar y eliminar usuarios.

## 2. ¿Qué significa inyectar una dependencia?

Inyectar una dependencia significa proporcionar ese objeto desde fuera de la clase que lo utiliza. La clase recibe lo que necesita, normalmente mediante su constructor, en lugar de encargarse de crearlo.

En este ejemplo, `UserService` recibe un `UserRepositoy` mediante el constructor:

```ts
constructor(private userRepository: UserRepositoy) {}
```

## 3. ¿Qué diferencia existe entre crear una dependencia con `new` y recibirla mediante el constructor?

Si una clase crea su dependencia con `new`, queda unida a una implementación concreta y también asume la responsabilidad de construirla. Por ejemplo, `UserService` no podría cambiar fácilmente de repositorio porque decidiría internamente cuál utilizar.

Si la recibe mediante el constructor, la clase solo depende del contrato o del tipo que necesita. Otra parte de la aplicación se encarga de crear la implementación adecuada y entregársela. Esto hace que el código sea más flexible y fácil de cambiar.

## 4. ¿Qué problema genera un alto acoplamiento?

Un alto acoplamiento hace que las clases dependan demasiado unas de otras y sean difíciles de modificar por separado. Un cambio en una implementación puede obligar a cambiar varias clases, además de dificultar la reutilización y el mantenimiento del código.

## 5. ¿Qué ventaja proporciona Dependency Injection para realizar pruebas?

Permite sustituir una dependencia real por un objeto simulado, un *mock* o una implementación de prueba. Así se puede probar `UserService` de forma aislada, sin necesitar una base de datos ni otros servicios externos, y verificar únicamente su propia lógica.

## 6. ¿Por qué este concepto es especialmente importante en frameworks como NestJS?

NestJS utiliza un contenedor de inyección de dependencias para crear y conectar automáticamente los servicios, repositorios y controladores de una aplicación. Esto facilita organizar el código por responsabilidades, reutilizar proveedores, cambiar implementaciones y configurar sus relaciones desde un único lugar.

Además, la inyección de dependencias es una parte fundamental del sistema de módulos de NestJS y hace que las aplicaciones sean más mantenibles y fáciles de probar.
