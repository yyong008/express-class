import { resolve, dirname } from "path";

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const toAbsolutePath = (p) => resolve(__dirname, p);
