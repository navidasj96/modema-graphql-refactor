export const checkUserHasPermission = (
  totalPermissions: string[],
  requestedPermissions: string[]
) => {
  const hasPermission = requestedPermissions.every((requestedPermission) =>
    totalPermissions.includes(requestedPermission)
  );

  return hasPermission;
};

export const checkUserHasRole = (
  userRoles: string[],
  requestedRoles: string[]
) => {
  const hasRole = requestedRoles.every((requestedRole) =>
    userRoles.includes(requestedRole)
  );

  return hasRole;
};

export const nowGreaterThanOrEqualTo = (date: Date | string): boolean => {
  const now = new Date();
  const compareDate = typeof date === 'string' ? new Date(date) : date;

  if (isNaN(compareDate.getTime())) {
    throw new Error('Invalid date input');
  }

  return now.getTime() >= compareDate.getTime();
};

import dayjs from 'dayjs';

export function getDatePlusSeconds(seconds = 0): Date {
  return dayjs().add(seconds, 'second').toDate();
}

export function pluck<
  T extends Record<string, any>,
  K extends keyof T,
  V extends keyof T,
>(items: T[], valueKey: V, keyKey: K): Record<T[K], T[V]> {
  return items.reduce(
    (acc, item) => {
      acc[item[keyKey]] = item[valueKey];
      return acc;
    },
    {} as Record<T[K], T[V]>
  );
}
export function faToEn(str: string): string {
  return str.replace(/[۰-۹]/g, (digit) =>
    String.fromCharCode(digit.charCodeAt(0) - 1728)
  );
}

export function addCountryCodeToPhoneNumber(phoneNo: string): string {
  // ✅ Convert Persian/Arabic digits to English digits (faToEn equivalent)
  phoneNo = faToEn(phoneNo).replace(/^\+/, ''); // remove leading '+'
  phoneNo = phoneNo.replace(/^0+/, ''); // remove leading zeros

  if (!phoneNo.startsWith('98') && !phoneNo.startsWith('+')) {
    phoneNo = '98' + phoneNo;
  }

  if (!phoneNo.startsWith('+')) {
    phoneNo = '+' + phoneNo;
  }

  return phoneNo;
}
