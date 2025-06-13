export function isValidDate(dateString: string) {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateString)) return false;

  const [year, month, day] = dateString.split("-").map(Number);
  if (year < 1900 || year > 9999) return "Ano não existe";
  if (month < 1 || month > 12) return "Mês não existe";

  const date = new Date(year, month - 1, day);
  const isValid =
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day;

  if (!isValid) {
    return "Dia não existe";
  }

  return "no error";
}

export function convertAmericanDateToBrazilDate(americanDate: string) {
  const [year, month, day] = americanDate.split("-");
  return `${day}/${month}/${year}`;
}

export function isValidDateAndNotFuture(dateString: string) {
  const date = new Date(dateString);
  const today = new Date();

  if (dateString.length < 10) {
    return {
      success: false,
      title: "Formato inválido",
      text: "Formato de data inválido. (DD/MM/YYYY) 👋",
    };
  }

  const checkingError = isValidDate(dateString);
  if (checkingError != "no error") {
    const msgError = isValidDate(dateString);
    return {
      success: false,
      title: "Data inválida",
      text:
        `${msgError}: ${convertAmericanDateToBrazilDate(dateString)} ` + " 👋",
    };
  }

  return {
    success: date.getTime() <= today.getTime(),
    title: "A data não pode ser futura",
    text:
      !(date.getTime() <= today.getTime()) &&
      "Data informada maior que a data atual. 👋",
  };
}

export function getCurrentDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}

export const translationOfDate = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abril",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  dayNames: [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ],
  dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
  today: "Hoje",
};
