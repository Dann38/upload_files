$("#button_send").click(function(){
    const fileInput = document.getElementById('file-input'); 
    
    const file = fileInput.files[0]; 

    const xhr = new XMLHttpRequest(); 
    const formData = new FormData(); 

    formData.append('file', file); 

    xhr.open('POST', '/upload'); 
    xhr.send(formData);

    xhr.onload = function() {
        if (xhr.status != 200) { 
          alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); 
        } else {
            $(".upload-file").attr("src", "/upload");
        }
      };
});

