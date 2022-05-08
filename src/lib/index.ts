import moment from 'moment';
import numbro from 'numbro';

const baseSize = 16;

export const rem = (pxValue: number): string => `${pxValue / baseSize}rem`;

export const age = (dob: string) =>
  `${moment().diff(moment(dob, 'LL'), 'years')} yrs`;

export const voteAvg = (amount = 0) =>
  amount > 10
    ? numbro(amount).format({
        average: true,
        mantissa: 1,
        optionalMantissa: true,
      })
    : amount;

export const isNationalID = (id: string): boolean => {
  const nationalId = id.includes('-') ? id.replace(/-/g, '') : id;
  let [i, sum] = [0, 0];

  for (i = 0; i < 12; i++) {
    sum += parseInt(nationalId.charAt(i)) * (13 - i);
  }
  const check = (11 - (sum % 11)) % 10;

  return check === parseInt(nationalId.charAt(12));
};
