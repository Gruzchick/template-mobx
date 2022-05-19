import AssessmentIcon from '@mui/icons-material/Assessment';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

import { URL_PATHS } from 'common/constants/url-paths';

export const MENU_CONFIG = [
  {
    label: 'Главная',
    Icon: HomeIcon,
    to: `${URL_PATHS.MAIN}`,
  },
  {
    label: 'Справки',
    Icon: ReceiptLongIcon,
    to: `${URL_PATHS.INQUIRIES}`,
  },
  {
    label: 'Новая справка',
    Icon: ReceiptLongIcon,
    to: `${URL_PATHS.INQUIRIES}/${URL_PATHS.NEW}`,
  },
  {
    label: 'Статистика',
    Icon: AssessmentIcon,
    to: `${URL_PATHS.STATISTIC}`,
  },
];
