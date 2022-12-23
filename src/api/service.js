export const mapContractorIsEnd = (data) => {
  return data.clients.map((client) => ({
    ...client,
    contractor_is_end: !!parseInt(client.contractor_is_end, 10),
  }));
};
