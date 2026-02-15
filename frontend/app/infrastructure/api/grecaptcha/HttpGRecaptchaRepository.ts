import type GRecaptchaRepository from "~/domain/grecaptcha/repositories/GRecaptchaRepository";
import type { GRecaptchaResponse } from "~/domain/grecaptcha/types";

export default class HttpGRecaptchaRepository implements GRecaptchaRepository {
    async getAssessment(data: FormData, token: string): Promise<GRecaptchaResponse> {
        const API = import.meta.env.VITE_API_URL;

        data.append('token', token);

        const response = await fetch(`${API}/ParseForm.php`, {
            body: data,
            method: 'POST',
        });

        const json: GRecaptchaResponse = await response.json();

        if (json?.success) return json;

        return { success: false };

    }
}