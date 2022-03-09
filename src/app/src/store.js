import { writable } from 'svelte/store'

export const tareas = writable([])
export const tareaUnica = writable({ title: "", description: "", quantily: "" })