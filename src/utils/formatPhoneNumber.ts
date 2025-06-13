export function formatPhoneNumber(raw?: string | null): string {
  if (!raw || typeof raw !== "string" || raw.trim() === "") {
    throw new Error(`Número de telefone ausente ou inválido. Coletado: ${raw}`);
  }

  const digits = raw.replace(/\D/g, "");
  const normalized = digits.slice(-11);

  if (normalized.length !== 11) {
    throw new Error(
      `Número de telefone inválido. Esperado: 11 dígitos no formato DDD + número. Coletado: ${raw}`
    );
  }

  const ddd = normalized.slice(0, 2);
  const firstDigit = normalized[2];
  const prefix = normalized.slice(2, 7);
  const suffix = normalized.slice(7);

  if (firstDigit !== "9") {
    throw new Error(
      `Número inválido: esperado dígito "9" após o DDD. Coletado: ${raw}`
    );
  }

  return `${ddd} ${prefix}-${suffix}`;
}
