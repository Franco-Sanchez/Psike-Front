import styled from '@emotion/styled';
import { theme } from '../../theme';
import { colors} from '../../ui';

const flex = `
  display: flex;
  align-items: center;
`

const gridGap = `
  display: grid;
  gap: 10px;
`

const gridColumns = `
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`

export const StyledCard = styled.div`
  width: 100%;

  & .calendar {
    width: 280px;
    ${gridGap};

    & > * {
      font-family: 'Inter'
    }

    & button {
      border: none;
      background-color: transparent;
      outline: none;
      cursor: pointer;
      font-family: 'Inter'
    }
  }

  & .calendar-month_header {
    ${flex}
    justify-content: space-between;

    & .is-prev, .is-next {
      padding: 2px;
      ${flex};
      justify-content: center;
      border-radius: 10px;
      box-shadow: 1px 1px 13px -6px #000000; 
    }

    & div {
      font-weight: bold;
    }
  }

  & .calendar-month {
    ${gridGap};

    & .is-prev_month, .is-next_month {
      color: ${colors.gray_ligth};
    }

    & .is-current_month {
      color: black;
      font-weight: bold;
    }

    & .is-today {
      padding: 4px;
      border: 1px solid ${colors.gray_ligth};
      border-radius: 5px;
      color: ${colors.blue_ligth};
    }
  }

  & .calendar-days_of_week {
    ${gridColumns};

    & div {
      justify-self: center;
      font-size: ${theme.fontSizes.sm}px;
      color: ${colors.gray_ligth};
    }
  }

  & .calendar-week {
    ${gridColumns};

    & button {
      justify-self: center;
    }
  }
`;