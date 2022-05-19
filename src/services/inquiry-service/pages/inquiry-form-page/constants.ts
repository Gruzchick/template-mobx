import type { IBreadcrumbsProps } from 'common/components/breadcrumbs/breadcrumbs';
import { URL_PATHS } from 'common/constants/url-paths';

export const BREADCRUMBS_CONFIG: IBreadcrumbsProps['breadcrumbsConfig'] = [
  {
    label: 'Справки',
    url: URL_PATHS.INQUIRIES,
  },
  {
    label: 'Запрос справки',
  },
];
