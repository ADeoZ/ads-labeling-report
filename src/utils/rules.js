export const rules = {
  login: [(v) => !!v || "Логин обязателен для указания"],
  name: [(v) => !!v || "Наименование обязательно для указания"],
  inn: [
    (v) => !!v || "ИНН обязателен для указания",
    (v) => /[0-9]/.test(v) || "ИНН может состоять только из цифр",
    (v) => checkInnSum(v) || "Контрольное число не проходит валидацию",
  ],
  entityInn: [(v) => v.length === 10 || "Длина ИНН юрлица — 10 символов"],
  individualInn: [
    (v) => v.length === 12 || "Длина ИНН ИП или физлица — 12 символов",
  ],
  type: [(v) => !!v || "Тип обязателен для указания"],
  contract_number: [(v) => !!v || "Номер договора обязателен для указания"],
  contract_date: [
    (v) => !!v || "Дата договора обязательна для указания",
    (v) => checkDate(v) || "Дата введена некорректно",
  ],
  authLogin: [(v) => !!v || "Логин обязателен для указания"],
  authPassword: [(v) => !!v || "Пароль обязателен для указания"],
};

const checkInnSum = (inn) => {
  const checkDigit = (inn, coefficients) => {
    let n = 0;
    for (const i in coefficients) {
      n += coefficients[i] * inn[i];
    }
    return parseInt((n % 11) % 10);
  };
  switch (inn.length) {
    case 10:
      if (checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]) === parseInt(inn[9])) {
        return true;
      }
      break;
    case 12:
      if (
        checkDigit(inn, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]) ===
          parseInt(inn[10]) &&
        checkDigit(inn, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]) ===
          parseInt(inn[11])
      ) {
        return true;
      }
      break;
    default:
      return false;
  }
  return false;
};

const checkDate = (date) => {
  const dateInstance = new Date(date);
  return dateInstance instanceof Date && !isNaN(dateInstance);
};
