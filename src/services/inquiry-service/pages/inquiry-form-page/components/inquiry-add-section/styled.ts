import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled(Stack)`
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.palette.grey[100]};
  }
`;

export const IconWrapper = styled('div')`
  position: relative;
  display: flex;
  align-items: center;
`;

export const AddIcon = styled(AddCircleIcon)`
  font-size: 50px;
`;

export const FilledMark = styled(CheckCircleIcon)`
  position: absolute;
  top: -2px;
  right: -1px;
  color: ${({ theme }) => theme.palette.warning.main};
  font-size: 18px;
`;
