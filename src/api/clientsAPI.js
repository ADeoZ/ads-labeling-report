const clients = [
  {
    id: 1,
    login: "narugka2007",
    contractor_name: "ООО «Мануфактура»",
    contractor_type: "ul",
    contractor_inn: "7708757560",
    contractor_is_end: 1,
  },
  {
    id: 2,
    login: "unikom00907",
    contractor_name: 'ООО "ЮНИКОМ"',
    contractor_type: "ul",
    contractor_inn: "7708587614",
    contractor_is_end: 1,
  },
  {
    id: 3,
    login: "mielnedvig",
    contractor_name: "ООО «Компания «ДиВэй»",
    contractor_type: "ul",
    contractor_inn: "7701647328",
    contractor_is_end: 1,
  },
  {
    id: 4,
    login: "river-golden",
    contractor_name: 'ООО "АЛТРЕЙД"',
    contractor_type: "ul",
    contractor_inn: "5001139967",
    contractor_is_end: 0,
  },
  {
    id: 5,
    login: "aromas-media",
    contractor_name: "ИП ПАНКОВ АНДРЕЙ АНДРЕЕВИЧ",
    contractor_type: "ip",
    contractor_inn: "7708757560",
    contractor_is_end: 1,
  },
];

export const clientsAPI = {
  async getAll() {
    return clients;
  },
};
