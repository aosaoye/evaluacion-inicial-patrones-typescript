# DAO (Data Access Object)

## 1. ¿Qué significa DAO?

DAO significa **Data Access Object**, es decir, **Objeto de Acceso a Datos**. Es un patrón que encapsula el código necesario para consultar y modificar los datos de una entidad.

## 2. ¿Cuál es su responsabilidad principal?

Su responsabilidad principal es gestionar el acceso a los datos y ocultar los detalles de esa operación al resto de la aplicación. Así, el código que utiliza el DAO no necesita saber cómo se almacenan, buscan o actualizan los datos.

## 3. ¿Qué relación tiene DAO con una base de datos?

Un DAO suele actuar como intermediario entre la aplicación y una base de datos. Contiene las consultas o instrucciones necesarias para leer y escribir información, y puede convertir los resultados de la base de datos en objetos que la aplicación pueda utilizar.

En este ejercicio no se utiliza una base de datos real: `UserDAO` trabaja con un arreglo en memoria. Aun así, cumple la misma idea porque concentra en una clase las operaciones de acceso a los usuarios.

## 4. ¿Qué operaciones aparecen habitualmente en un DAO?

Las operaciones más habituales son las de **CRUD**:

- **Create**: crear o insertar datos.
- **Read**: consultar datos, por ejemplo, obtener todos los registros o buscar uno por su identificador.
- **Update**: actualizar datos existentes.
- **Delete**: eliminar datos.

En `UserDAO` estas operaciones aparecen como `insert`, `selectAll`, `selectedById`, `update` y `delete`.

## 5. ¿Qué diferencia existe entre DAO y Repository?

El **DAO se preocupa de cómo acceder a los datos**. Por ejemplo, sabe qué consulta ejecutar, cómo usar el driver de la base de datos o cómo recorrer una colección para encontrar un usuario.

El **Repository se preocupa de qué datos necesita la aplicación**. Expone operaciones más cercanas al dominio o a los casos de uso, como buscar usuarios activos o encontrar los pedidos de un cliente, sin obligar a la aplicación a conocer la forma concreta en que se almacenan.

Un Repository puede utilizar uno o varios DAO internamente, pero su interfaz expresa qué información necesita la aplicación, no los detalles de cómo se obtiene.
