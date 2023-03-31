const basePath = '/';

const join = (base: string, newPath: string): string => `${base}${newPath}`;

export const PATH = {
   home: basePath,
   templeName: (tripId: string): string => join(basePath, `temple/${tripId}`),
   temple: join(basePath, 'temple/:templeName'),
   test: join(basePath, 'test'),
   sourceCode: join(basePath, 'source-code'),
};
