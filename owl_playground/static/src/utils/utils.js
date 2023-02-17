/** @odoo-module **/

import { onMounted, useRef } from "@odoo/owl";

export function useAutofocus(name) {
  const ref = useRef(name);
  onMounted(() => {
    if (ref.el) ref.el.focus();
  });
  console.log("Used the useAutoFocus function");
}
