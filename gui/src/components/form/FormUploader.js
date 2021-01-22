import * as React from "react";

const FormUploader = () => {
    /* On récupère les éléments form et message */
    const form = document.getElementById("form")
    const message = document.getElementById("msg")

    form.addEventListener("submit", async function (e) {
      e.preventDefault()

      /* Lorsque l'on instancie FormData on peut lui passer un élément form en paramètre. De cette façon, FormData peut detecter chaque
      input du formulaire et leur valeur. Ici, this fait référence à form */
      const formData = new FormData(this)

      try {
        /* fetch() prend en 1er paramètre l'url et en second paramètre les options.
        Ici, nous indiquons que notre requête sera en POST et que le corps de la requête sera constitué de nos formData. */
        await fetch("#", {
          method: "POST",
          body: formData,
        })
        // On affiche un message suivant le résultat de la requête
        message.innerText = "Fichier uploadé avec succès "
      } catch (error) {
        message.innerText =
          "Erreur lors de l'envoi du fichier excel"
      }
      // On réinitialise le formulaire
      this.reset()

      // On efface le message après deux secondes
      setTimeout(() => {
        message.innerText = ""
      }, 2000)
    })
}

export default FormUploader;