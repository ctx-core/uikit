import UIkit from 'uikit/src/js/api/index'
import boot from 'uikit/src/js/api/boot'
let boot_called = false
/**
 * @param name{string}
 * @param component{object}
 * @param params{import('./index.d.ts').uikit_register_component_params_type}
 */
export function component__register(
	name,
	component,
	params = {}
) {
	boot_uikit()
	if (!UIkit[name] || params.force) {
		// TODO: Why does @types/uikit have a different signature from it's implementation?
		/** @type {any} */
		const UIkit__component = UIkit.component
		UIkit__component(name, component)
		const UK = UIkit
	}
}
export {
	component__register as register_component,
	component__register as register__component,
}
export function boot_uikit() {
	if (boot_called) return
	boot_called = true
	boot(UIkit)
}
