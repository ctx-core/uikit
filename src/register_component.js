// @ts-ignore
import UIkit from 'uikit/src/js/api/index';
// @ts-ignore
import boot from 'uikit/src/js/api/boot';
let boot_called = false;
export function register_component(name, component, params = {}) {
    boot_uikit();
    if (!UIkit[name] || params.force) {
        UIkit.component(name, component);
    }
}
export function boot_uikit() {
    if (boot_called)
        return;
    boot_called = true;
    boot(UIkit);
}
export { register_component as register__component };
