type RequiredEnvs = {
  [key: string]: string | undefined;
};

const getMissingEnvs = (requiredEnvs: RequiredEnvs) => {
  const missingVars = Object.keys(requiredEnvs).filter(varName => !process.env[varName]);
  return missingVars;
};

export const validateEnvs = (requiredEnvs: RequiredEnvs) => {
  const missingEnvs = getMissingEnvs(requiredEnvs);
  if (missingEnvs.length > 0) {
    const missingEnvNames = missingEnvs.join(', ');
    throw new Error(`Missing required environment variables: ${missingEnvNames}`);
  }
};
