<script>
	export let datos
	export let eliminarTarea
	export let editarTarea

	
	import InfoIcon from './icons/tabler-icon-info-circle.svg'
	import CheckIcon from './icons/tabler-icon-checkbox.svg'
	import EditIcon from './icons/tabler-icon-edit.svg'

	// let { title, description, quantily, id } = datos
</script>


<div class="col-md-3">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{datos.title}</h5>
      <p class="card-text">{datos.description}</p>
      <h3><span class="badge bg-primary">{datos.quantily}</span></h3>
    </div>
    <div class="card-footer">
      <div class="float-end">
          <button class="btn btn-success" on:click={eliminarTarea(datos.id)}><CheckIcon /></button>
          <button class="btn btn-secondary" on:click={editarTarea(datos.id)} data-bs-toggle="modal" data-bs-target="#exampleModal"><EditIcon /></button>
          <button class="btn btn-info" data-bs-toggle="modal" data-bs-target="#Modalinfo"><InfoIcon /></button>
      </div>
    </div>
  </div>
</div>