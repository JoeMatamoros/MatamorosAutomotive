  var validators = {
    "correo": /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
    "isEmpty": /^\s*$/,
    "doublespace":/\s{2,}/
  };

  var formInputs = {
    txtOpinion: null,
    txtNombre: null,
    txtApellido: null,
    txtEmail: null
  };
  
  var formInputsErrors = {
    txtOpinion: null,
    txtNombre: null,
    txtApellido: null,
    txtEmail: null
  };
  
  document.addEventListener("DOMContentLoaded", function(e){
    formInputs.txtNombre = document.getElementById("txtNombre");
    formInputsErrors.txtNombre = document.getElementById("txtNombreError");

    formInputs.txtApellido = document.getElementById("txtApellido");
    formInputsErrors.txtApellido = document.getElementById("txtApellidoError");

    formInputs.txtEmail = document.getElementById("txtEmail");
    formInputs.txtOpinion = document.getElementById("txtOpinion");

    //formInputs.txtNombre.addEventListener("keyup", inputOnChange);
    document.getElementById("formDatos").addEventListener("submit", validateForm);
  });
  
  /*function inputOnChange(e){
    console.log("Cambio en " + e.target.name);
    var className = "";
    formInputsErrors.txtNombre.className = "hide"
    formInputsErrors.txtNombre.innerHTML = "";
    switch (e.target.name){
      case "txtNombre":
        className = (validators.isEmpty.test(e.target.value))?"error":"";
        e.target.className = className;
        formInputsErrors.txtNombre.innerHTML = "El Nombre no puede estar vacío.";
        formInputsErrors.txtNombre.className = "show";
        break;
    }
  }*/
  
  function validateForm(e){
    e.preventDefault();
    e.stopPropagation();
    var errors = [];
    /*if (validators.isEmpty.test(formInputs.txtNombre.value)){
      errors.push("El Nombre no puede estar vacío.");
    }*/
    if (validators.doublespace.test(formInputs.txtNombre.value)) {
      errors.push("Los nombres no deben tener mas de un espacio entre ellos.");
    }

    if (validators.isEmpty.test(formInputs.txtApellido.value)){
      errors.push("El apellidos no puede estar vacío.");
    }
    if (validators.doublespace.test(formInputs.txtApellido.value)) {
      errors.push("Los apellidos no deben tener mas de un espacio entre ellos.");
    }

    if (!validators.correo.test(formInputs.txtEmail.value)) {
      errors.push("El correo no tiene el formato adecuado.");
    }

    if (validators.doublespace.test(formInputs.txtOpinion.value)) {
      errors.push("No debe contener doble espacios entre valores");
    }
 
    if(errors.length > 0){
      alert(errors.join(" | "));
    } else {
      alert("Envío exitoso");
    }
  }
