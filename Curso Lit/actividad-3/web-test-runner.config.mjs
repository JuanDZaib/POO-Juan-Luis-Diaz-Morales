import { esbuildPlugin } from "@web/dev-server-esbuild";
import { playwrightLauncher } from "@web/test-runner-playwright";

export default {
  // Archivos de prueba que se ejecutarán
  files: ["src/**/*.test.ts"],

  // Navegadores para ejecutar las pruebas
  browsers: [
    playwrightLauncher({ product: "chromium" }), // Usa Chromium (Chrome)
    playwrightLauncher({ product: "firefox" }),  // Usa Firefox
    playwrightLauncher({ product: "webkit" }),   // Usa Safari (WebKit)
  ],

  // Plugins para procesar archivos (TypeScript, etc.)
  plugins: [
    esbuildPlugin({ ts: true }), // Soporte para TypeScript
  ],

  // Configuración del servidor de desarrollo
  devServer: {
    port: 8000, // Puerto para el servidor de |
    open: true, // Abre el navegador automáticamente
  },

  // Configuración de cobertura de código (opcional)
  coverage: {
    enabled: true, // Habilita la cobertura de código
    exclude: ["**/node_modules/**"], // Excluye node_modules
  },
};