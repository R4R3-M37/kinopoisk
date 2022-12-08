import { createEvent, restore } from 'effector'

const updated = createEvent<boolean>()
const $active = restore<boolean>(updated, false)

export const sidebar = {
	updated,
	$active
}
