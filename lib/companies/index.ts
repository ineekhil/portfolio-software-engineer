import { qurosTechDetail } from "@/lib/companies/quros-tech";
import type { WorkedCompanyDetail } from "@/lib/companies/types";
import { viralFissionDetail } from "@/lib/companies/viral-fission";

export type { WorkArrangement, WorkedCompanyDetail } from "@/lib/companies/types";

/** Keyed detail for each company on the Experience page — one file per company under `lib/companies/`. */
export const WORKED_COMPANY_DETAILS: Record<
  "viralFission" | "qurosTech",
  WorkedCompanyDetail
> = {
  viralFission: viralFissionDetail,
  qurosTech: qurosTechDetail,
};
