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
