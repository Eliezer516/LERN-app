<script>
	import Navbar from './Navbar.svelte'
	import Cards from './Cards.svelte'
	import Modalform from './Modalform.svelte'
	import Modalinfo from './Modalinfo.svelte'
	import { toasts, ToastContainer, BootstrapToast }  from "svelte-toasts";


	let tarea = {title: "", description: "", quantily: ""}
	let tareas = []
	let idActivo = ""

	const obtenerTareas = async () => {
		try {
			const solicitud = await fetch('http://localhost:3000/task')
			const respuesta = await solicitud.json()
			const datos = await respuesta
			tareas = datos
		} catch(err) {
			console.log(err)
		}
	}

	obtenerTareas()

	const agregarTarea = async () => {
		if(!idActivo) {
			try {
			  const solicitud = await fetch('http://localhost:3000/task', {
			    method: "POST",
			    body: JSON.stringify(tarea),
			    headers: {
			      "Accept": "application/json",
			      "Content-Type": "application/json"
			    }
			  })
			  const respuesta = await solicitud.json()
			  const datos = await respuesta
			  tareas = datos
			  tarea = {title: "", description: "", quantily: ""};
			  const toast = toasts.add({
			    description: 'Tarea Agregada',
			    component: BootstrapToast,
			    theme: 'light',
			    placement: 'top-center',
			    type: 'success'
			  });
			} catch (err) {
				console.log(err)
			}
		} else {
			try {
			  const solicitud = await fetch(`http://localhost:3000/task/${idActivo}`, {
			    method: "PUT",
			    body: JSON.stringify(tarea),
			    headers: {
			      "Accept": "application/json",
			      "Content-Type": "application/json"
			    }
			  })
			  const respuesta = await solicitud.json()
			  const datos = await respuesta
			  tareas = datos
			  tarea = {title: "", description: "", quantily: ""};
			} catch (err) {
				console.log(err)
			}
		}
	}

	const eliminarTarea = async (id) => {
	    try {
	      const solicitud = await fetch(`http://localhost:3000/task/${id}`, {
	        method: "DELETE",
	        headers: {
	          "Accept": "application/json",
	          "Content-Type": "application/json"
	        }
	      })
	      const respuesta = await solicitud.json()
	      const datos = await respuesta
	      tareas = datos
			  const toast = toasts.add({
			    description: 'Tarea eliminada',
			    component: BootstrapToast,
			    theme: 'light',
			    placement: 'top-center',
			    type: 'success'
			  });
	    } catch (err) {
	    	console.log(err)
	    }
	}

	const editarTarea = (id) => {
		const tareaPorId = tareas.find(tarea => tarea.id === id)
		idActivo = tareaPorId.id
		tarea = {title: tareaPorId.title, description: tareaPorId.description, quantily: tareaPorId.quantily}
	}
</script>


<div>
	<Navbar />

	<Modalform {tarea} {idActivo} {agregarTarea} />

	<Modalinfo />

	<ToastContainer {toasts} let:data={data}>
	  <BootstrapToast {data} />
	</ToastContainer>

	<div class="container">
		<div class="row">
			{#each tareas as datos}
				<Cards {datos} {eliminarTarea} {editarTarea}/>
			{/each}
		</div>
	</div>
</div>

