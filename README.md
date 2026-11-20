# Joyería & Orfebrería — Web Application

Aplicación web desarrollada con **React**, **TypeScript** y **Tailwind CSS** para presentar servicios de joyería artesanal, piezas en oro de 18k, plata ley 925, esmeraldas, diseño a medida y restauración.

## Stack Tecnológico
- **React** (componentes funcionales y manejo de estado con hooks como `useState`)
- **TypeScript** (tipado estricto de datos, props y claves de sección con `keyof typeof`)
- **Tailwind CSS** (diseño responsive, estados interactivos y utilidades de layout)
- **Barrel Exports (`index.ts`)** (importaciones limpias y modularización por carpetas)

## Estructura del Proyecto
```text
src/
├── assets/          # Recursos gráficos y fotografías de piezas/servicios
├── components/      # Secciones y módulos de negocio (ej. SpecialServices)
│   └── index.ts     # Exportaciones centralizadas del módulo
├── ui/              # Componentes visuales reutilizables (ej. ButtonCta)
│   └── index.ts
├── App.tsx          # Composición principal de la aplicación
└── main.tsx         # Punto de entrada
