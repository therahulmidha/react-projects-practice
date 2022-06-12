export function getPaginatedResult(data, offset, limit) {
  const totalRecords = data.length;
  const total =
    Math.floor(totalRecords / limit) + (totalRecords % limit === 0 ? 0 : 1);
  const start = limit * offset - limit;
  const end = limit * offset;
  data = data.slice(start, end);
  const prev = offset - 1 === 0 ? null : offset - 1;
  const next = offset === total ? null : offset + 1;
  return { prev, data, next, total };
}
