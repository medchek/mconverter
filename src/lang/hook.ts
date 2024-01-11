// eslint-disable-next-line import/named
import { FlatNamespace, KeyPrefix } from "i18next";
import { useTranslation } from "react-i18next";

/**
 * useTranslation hook with type safe declarations.
 * Fixes the IDE autocomplete issues the original hook has.
 * @returns useTranslation hook.
 */
export const useTranslate = () => {
  return useTranslation<FlatNamespace, KeyPrefix<FlatNamespace>>();
};
