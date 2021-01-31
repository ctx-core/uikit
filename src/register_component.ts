import boot from 'uikit/src/js/api/boot'
import UIkit from 'uikit/src/js/uikit-core'
let boot_called
export function register_component(name, component, opts:uikit_register_component_opts_type = {}) {
	boot_uikit()
  if (!UIkit[name] || opts.force) {
  	UIkit.component(name, component)
	}
}
export function boot_uikit() {
	if (boot_called) return
	boot_called = true
	boot(UIkit)
}
export {
	register_component as register__component
}
export interface uikit_register_component_opts_type {
	force?:boolean
}
