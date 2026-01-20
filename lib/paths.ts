export const GM_ENV = (process.env.NEXT_PUBLIC_GM_ENV || "dev").trim();

export const clientsDoc = (id: string) => `env/${GM_ENV}/clients/${id}`;
export const chartsSystemCol = (id: string, sys: string) => `env/${GM_ENV}/charts/${id}/${sys}`;
export const chartsChartDoc = (id: string, sys: string) => `${chartsSystemCol(id, sys)}/chart`;
export const contentEngineRoot = (id: string) => `env/${GM_ENV}/content_engine/${id}`;

// canonical roots
export const lookupsRoot = (domain: string) => `lookups/${domain}`;
export const waitlistDoc = (hash: string) => `waitlist/${hash}`;

