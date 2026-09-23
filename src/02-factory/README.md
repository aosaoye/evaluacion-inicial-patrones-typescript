# Factory

1. ¿Qué problema resuelve Factory?

	Centraliza la creación de objetos y permite obtener distintas implementaciones mediante un mismo método.

2. ¿Qué ventaja tiene respecto a utilizar `new` directamente por toda la aplicación?

	Evita duplicar la lógica de creación y oculta las clases concretas al resto de la aplicación.

3. ¿Qué tendría que ocurrir si mañana añadimos `WhatsAppNotification`?

	Se tendría que crear la clase `WhatsAppNotification` y añadir un nuevo caso en `NotificationFactory.create()`.

4. ¿Quién tiene la responsabilidad de crear los objetos?

	`NotificationFactory`.

5. ¿Qué ventaja proporciona Factory respecto al acoplamiento?

	Reduce el acoplamiento entre el código cliente y las clases concretas que se instancian.