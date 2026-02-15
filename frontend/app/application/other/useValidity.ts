import { useState } from "react";

/**
 * This hook is used to track validity states of elements (like HTMLInputElement)
 * @param initial Initial state (default: null)
 * @returns a tuple of two items: the validity state and its setter.
 */
export function useValidity(
    initial: ValidityState | null = null
): [ValidityState | null, (v: ValidityState | null) => void] {

    const [validity, setValidity] = useState<ValidityState | null>(initial);

    function handleSetValidity(newValidityState: ValidityState | null) {
        setValidity(newValidityState);
    }

    return [validity, handleSetValidity] as const;
}