import type { GRecaptchaResponse } from "../types";

export default interface GRecaptchaRepository {
    getAssessment(data: FormData, token: string): Promise<GRecaptchaResponse>;
}