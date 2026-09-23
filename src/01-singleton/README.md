# Singleton

1. ¿Qué problema intenta resolver Singleton?

	Garantizar que una clase tenga una única instancia y proporcionar un punto global de acceso a ella.

2. ¿Por qué suele utilizarse un constructor `private`?

	Para impedir que se creen instancias directamente desde fuera de la clase.

3. ¿Cómo se obtiene una instancia de la clase?

	Mediante el método estático `AppConfig.getInstance()`.

4. ¿Qué ocurriría si pudiéramos utilizar `new` libremente?

	Se podrían crear varias instancias, perdiendo la garantía de que solo exista una.

5. Pon un ejemplo real donde utilizarías Singleton.

	Para gestionar una configuración global de la aplicación, como `AppConfig`, evitando duplicar sus datos.

6. ¿Qué inconveniente puede tener abusar de Singleton?

	Puede generar dependencias globales, dificultar las pruebas unitarias y acoplar demasiado el código.