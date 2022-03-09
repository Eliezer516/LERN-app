<script>
	export let agregarTarea
	export let tarea
	export let idActivo
</script>



<!-- MODAL -->
<div class="modal fade" id="Modalform" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form on:submit|preventDefault={agregarTarea}>
          <input bind:value={tarea.title} name="titulo" type="text" class="form-control mb-3" placeholder="Titulo">
          <textarea bind:value={tarea.description} class="form-control mb-3" placeholder="Descripcion"></textarea>
          <input bind:value={tarea.quantily} type="number" class="form-control mb-3" placeholder="Cantidad">
          {#if idActivo}
          	<button class="btn btn-secondary boton-enviar" data-bs-dismiss="modal">Actualizar</button>
          {:else}
          	<button class="btn btn-secondary boton-enviar" data-bs-dismiss="modal">Agregar</button>
          {/if}
        </form>
      </div>
    </div>
  </div>
</div>

<style>
  textarea {
    resize: none;
  }

  .boton-enviar {
    width: 100%;
  }
</style>