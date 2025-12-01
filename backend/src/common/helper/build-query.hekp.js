export const buildQuery = (query) => {
  let { page, pageSize, filters } = query;

  filters = JSON.parse(filters || "{}") || {};

  //lọc object
  for (const [key, value] of Object.entries(filters)) {
    if (typeof value === "string") {
      filters[key] = {
        contains: value,
      };
    }
  }
  // chức năng của hàm max là lấy số lớn nhất

  const pageDefalt = 1;
  const pageSizeDefalt = 3;
  page = Math.max(pageDefalt, Number(page) || pageDefalt);
  pageSize = Math.max(pageSizeDefalt, Number(pageSize) || pageSizeDefalt);

  console.log({ page, pageSize });

  // lấy danh sách article bằng prisma

  //công thức phân trang

  //      (page - 1) * pageSize

  const index = (page - 1) * pageSize;
  return { page, pageSize, index, filters };
};
