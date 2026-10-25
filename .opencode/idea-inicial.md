# Propuesta de aplicación web para el Centro de Fisioterapia

## 1. Requerimientos y características principales

1. **Página landing page**
   - El cliente podrá visualizar información del centro.
   - Se registrará la cantidad de vistas de la página.
   - Tendrá una sección con enlaces a las redes sociales del centro.

2. **Toma de reservas**
   - Las reservas se realizarán mediante un chatbot a través de WhatsApp.

3. **Plataforma administrativa**
   - Permitirá llevar el control de la aplicación.

4. **Tipos de usuarios**
   - El sistema contará con tres roles:
     - Administrador
     - Empleado
     - Cliente

5. **Funcionalidades para el cliente**
   - Podrá realizar reservas.
   - Podrá modificar la fecha de sus consultas.
   - Podrá recibir información del centro.
   - Podrá recibir información sobre los ejercicios que debe realizar.

6. **Cobro de consultas**
   - Al realizar una reserva, el sistema enviará un código QR para efectuar el pago de la consulta.

7. **Autenticación**
   - El acceso a la plataforma administrativa y a la vista del cliente se realizará mediante inicio de sesión con **cuenta de Google** (Google OAuth).
   - Al autenticarse, el sistema identificará el rol del usuario (Administrador, Empleado o Cliente) y mostrará únicamente las vistas y funcionalidades permitidas para ese rol.

---

# 2. Diseño preliminar de las vistas

## 1ra vista — Dashboard

La primera vista corresponde al **dashboard principal** de la plataforma administrativa.

### Elementos observados

- Menú lateral.
- Opción **Inicio**.
- Área principal para mostrar el dashboard.

---

## 2da vista — Clientes

Vista destinada a la gestión de clientes.

### Elementos observados

- Menú lateral con la opción **Clientes**.
- Botón **Añadir**.
- Botón **Buscar**.
- Listado de clientes.
- Paginación o indicador de registros, mostrado como:
  - `1 - 10`

---

## 3ra vista — Perfil del cliente

Vista destinada a mostrar la información de un cliente.

### Elementos observados

- Menú lateral con la opción **Clientes**.
- Título **Perfil**.
- Panel con la información del cliente.

---

## 4ta vista — Empleados

Vista destinada a la gestión de empleados.

### Elementos observados

- Menú lateral con la opción **Empleados**.
- Botón de acción en la parte superior.
- Panel principal con información de los empleados.

---

## 5ta vista — Calendario de citas

Vista destinada a la administración y visualización de las citas.

### Elementos observados

- Menú lateral con la opción **Citas**.
- Título **Calendario**.
- Botón **Añadir**.
- Calendario semanal.
- Días de la semana:
  - Lunes
  - Martes
  - Miércoles
  - Jueves
  - Viernes
  - Domingo

### Ejemplo de citas mostradas

- Juan — 8 a. m.
- Lisa — 9 a. m.
- María — 3 p. m.
- Carlos — 7 p. m.

---

## 6ta vista — Biblioteca

Vista destinada al registro de información relacionada con la biblioteca o material de ejercicios.

### Elementos observados

- Menú lateral con la opción **Biblioteca**.
- Campo superior.
- Campo adicional.
- Área de contenido de mayor tamaño.

---

## 7ma vista — Información de la biblioteca

Vista destinada a mostrar la información de los datos ingresados en la vista 6.

### Elementos observados

- Menú lateral con la opción **Biblioteca**.
- Área principal con el texto:
  > Información de los datos ingresados en la vista 6

---

## 8va vista — Chatbot

Vista destinada al funcionamiento o administración del chatbot.

### Elementos observados

- Menú lateral con la opción **Chatbot**.
- Área principal destinada al chatbot.

---

# 3. Situación del centro antes de la aplicación

## ¿Cómo trabajaba el centro antes de la aplicación?

Antes de implementar la aplicación, el centro realizaba varios procesos de manera manual.

### 1. Gestión de reservas

- La información de las reservas se guardaba en un chat de WhatsApp.
- El personal debía revisar diariamente qué citas estaban programadas para ese día.

### 2. Historial de consultas

- No se contaba con un historial médico de cada paciente.
- En algunas ocasiones, la información era redactada directamente en un chat de WhatsApp.

### 3. Gestión de cobros

- El centro no contaba con un registro de los cobros realizados a los pacientes.
- Los cobros se realizaban semanalmente.
- No se llevaba un registro formal de cuándo se realizaba cada cobro.

### 4. Biblioteca de ejercicios

- El centro contaba con una biblioteca de ejercicios.
- Sin embargo, la información debía enviarse manualmente a los pacientes mediante WhatsApp.
- El material se enviaba en formato PDF.

### 5. Fichas de evolución

- El centro no contaba con fichas para registrar la evolución del tratamiento de cada paciente.

---

# 4. Relación general entre la situación actual y la propuesta

La aplicación busca centralizar y automatizar los procesos que actualmente se realizan de forma manual, especialmente:

- Gestión de reservas.
- Administración de clientes.
- Gestión de empleados.
- Control de citas.
- Registro de pagos.
- Gestión de información y ejercicios.
- Seguimiento de la evolución de los pacientes.
- Comunicación mediante chatbot.
- Información pública del centro mediante una landing page.

---

# 5. Flujo general propuesto

```text
Cliente
   │
   ├── Consulta información del centro
   │
   ├── Interactúa con el chatbot de WhatsApp
   │
   ├── Realiza una reserva
   │
   ├── Recibe información de la cita
   │
   ├── Recibe código QR para realizar el pago
   │
   └── Recibe información y ejercicios indicados
             │
             ▼
      Plataforma administrativa
             │
             ├── Clientes
             ├── Empleados
             ├── Citas
             ├── Pagos
             ├── Biblioteca
             └── Seguimiento del paciente
```

---

# 6. Roles del sistema

| Rol | Función general |
|---|---|
| **Administrador** | Gestionar y controlar la información general de la aplicación. |
| **Empleado** | Gestionar las actividades relacionadas con la atención de los pacientes. |
| **Cliente** | Consultar información, realizar reservas y recibir información relacionada con sus consultas y ejercicios. |

---

# 7. Resumen de las vistas

| Vista | Módulo | Función |
|---|---|---|
| 1 | Dashboard | Panel principal de administración |
| 2 | Clientes | Listado y gestión de clientes |
| 3 | Perfil | Visualización de información del cliente |
| 4 | Empleados | Gestión de empleados |
| 5 | Citas | Calendario y gestión de citas |
| 6 | Biblioteca | Registro de información/material |
| 7 | Biblioteca | Visualización de la información registrada |
| 8 | Chatbot | Interacción o administración del chatbot |

> **Nota:** El contenido anterior fue organizado a partir del boceto proporcionado. Se mantuvieron las ideas y elementos visibles, pero se corrigieron la redacción, ortografía y estructura para que el documento pueda utilizarse como especificación preliminar del proyecto.
