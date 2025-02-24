export function validarEmail(email: string): boolean {
  const rg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return rg.test(email);
}