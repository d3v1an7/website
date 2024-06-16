import { format } from '@formkit/tempo';

export const configFilters = {
  dateShort(dateString) {
    return format(dateString, 'YYYY-MM-DD');
  },
  dateLong(dateString) {
    return format(dateString, 'D MMMM YYYY');
  },
  makeBreadcrumbs(pathString) {
    const pathArray = pathString
      .split('/')
      .filter((segment) => segment && segment !== 'index');
    return pathArray.map((segment, index, array) => ({
      title: segment,
      path: `/${array.slice(0, index + 1).join('/')}`,
    }));
  },
};
