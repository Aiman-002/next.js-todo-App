
// utils/prisma.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export { prisma };  // Ensure this export is present
export default prisma; // Optional: for default import if needed elsewhere