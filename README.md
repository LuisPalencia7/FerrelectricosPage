# FerrelectricosPage

Proyecto web para **Ferrelectricos Rivera**.

## Estado actual
- `frontend/`: React + Vite (sitio visual informativo)
- `backend/`: Express (API base para datos de la empresa)

## Ejecutar en local (sin Docker)

### 1) Frontend
```bash
cd frontend
npm install
npm run dev
```

### 2) Backend
```bash
cd backend
npm install
npm run dev
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`
- Salud API: `http://localhost:3000/api/health`
- Datos empresa: `http://localhost:3000/api/company`

## Ejecutar con Docker
```bash
docker compose up
```

## Plan de implementación (paso a paso)

### Fase 1: Web informativa (MVP)
1. Home con propuesta de valor clara.
2. Sección Nosotros (historia, misión, visión).
3. Catálogo visual (sin compra), categorías y marcas.
4. Contacto (WhatsApp, teléfono, dirección, horario, mapa).
5. SEO básico (`title`, `meta description`, Open Graph).

### Fase 2: Catálogo real
1. Definir modelo de producto (nombre, precio, categoría, marca, imagen, stock).
2. Crear endpoints en backend para listar productos y categorías.
3. Consumir API desde frontend con estados de carga/error.
4. Crear panel simple para cargar productos (manual al inicio).

### Fase 3: E-commerce
1. Carrito persistente.
2. Login/registro de clientes.
3. Checkout (datos de envío + método de pago).
4. Integración de pagos.
5. Gestión de pedidos y estado de entrega.

## Siguiente paso recomendado
Cerrar Fase 1 completa antes de tocar pagos o autenticación.
