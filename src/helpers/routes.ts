export const routeNames = {
    home: '/',
    notFound: '/404',
};

export const linkTo = (routeKey: keyof typeof routeNames, params?: any): string => {
    const routePath = routeNames[routeKey] as any;

    return params ? routePath(params) : routePath;
};
