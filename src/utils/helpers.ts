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
