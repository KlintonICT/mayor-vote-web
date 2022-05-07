import moment from 'moment';
import numbro from 'numbro';

const baseSize = 16;

export const rem = (pxValue: number): string => `${pxValue / baseSize}rem`;

export const age = (dob: string) =>
  `${moment().diff(moment(dob, 'DD-MM-YYYY'), 'years')} yrs`;

export const voteAvg = (amount = 0) =>
  amount > 10
    ? numbro(amount).format({
        average: true,
        mantissa: 1,
        optionalMantissa: true,
      })
    : amount;
