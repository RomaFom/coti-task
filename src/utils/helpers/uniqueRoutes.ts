interface IUniqueRoutes {
  [key: string]: string;
}

export const uniqueRoutes: IUniqueRoutes = {
  "%C3%85": "Å",
};

export const checkUniqueRoutes = (path: string) => {
  const specialRoute = uniqueRoutes[path];
  if (specialRoute) {
    return specialRoute;
  }
  return "";
};
